import { BaseService } from './BaseService'
import moment from 'moment'
import { HttpClient, ISharedState } from '@kubevious/ui-framework';
import { IDiagramService, IWebSocketService } from '@kubevious/ui-middleware';

export class DiagramService extends BaseService implements IDiagramService {
    private _intervals: any[] = [];
    constructor(client: HttpClient, sharedState: ISharedState, socket: IWebSocketService) {
        super(client, sharedState, socket)

        this._setupWebSocket()

        this._intervals = []
    }

    close()
    {
        for(let i of this._intervals) {
            clearInterval(i);
        }
        this._intervals = [];
    }

    fetchDiagram(cb) {
        return this.client.get('/diagram/tree')
            .then(result => {
                cb(result.data);
            })
    }

    fetchProperties(dn: string, cb) {
        return this.client.get('/diagram/props', { dn: dn })
            .then(result => {
                cb(result.data);
            })
    }

    fetchAlerts(dn: string, cb) {
        return this.client.get('/diagram/alerts', { dn: dn })
            .then(result => {
                cb(result.data);
            })
    }

    fetchSearchResults(criteria: Record<string, any>, cb) {
        if (Object.keys(criteria).length === 0) {
            cb([]);
            return;
        }

        return this.client.post('/diagram/search', criteria)
            .then(result => {
                cb(result.data);
            })
    }

    fetchHistoryRange(cb) {
        return this.client.get('/history/range')
            .then(result => {
                cb(result.data);
            });
    }

    fetchHistorySnapshot(date: string, cb) {
        const params = {
            date: date
        };
        return this.client.get('/history/snapshot', params)
            .then(result => {
                cb(result.data);
            });
    }

    fetchHistoryProps(dn: string, date: string, cb) {
        const params = {
            dn: dn,
            date: date
        };
        return this.client.get('/history/props', params)
            .then(result => {
                cb(result.data);
            });
    }

    fetchHistoryAlerts(dn: string, date: string, cb) {
        const params = {
            dn: dn,
            date: date
        };
        return this.client.get('/history/alerts', params)
            .then(result => {
                cb(result.data);
            });
    }

    fetchAutocompleteKeys(type: string, criteria: Record<string, any>, cb) {
        return this.client.post(`/search/${type}`, criteria )
            .then(result =>
                cb(result.data)
            )
    }

    fetchAutocompleteValues(type: string, criteria: Record<string, any>, cb) {
        return this.client.post(`/search/${type}/values`, criteria )
            .then(result =>
                cb(result.data))
    }

    private _setupWebSocket()
    {
        this._setupSummary();
        this._setupProperties();
        this._setupAlerts();
    }

    private _setupSummary()
    {
        const socketScope = this._socketScope((value) => {
            this.sharedState.set('summary', value);
        });

        this.sharedState.subscribe('time_machine_enabled',
            ( time_machine_enabled ) => {

                const wsSubscriptions : any[] = []

                if (!time_machine_enabled) {
                    wsSubscriptions.push({ kind: 'props', dn: 'summary' });
                }

                socketScope.replace(wsSubscriptions);
            });
    }

    private _setupProperties()
    {
        const socketScope = this._socketScope((value, target: { dn: string; }) => {
            if (!this.sharedState.get('time_machine_enabled'))
            {
                if (target.dn === this.sharedState.get('selected_dn'))
                {
                    this.sharedState.set('selected_object_props', value);
                }
            }
        });

        this.sharedState.subscribe(['selected_dn', 'time_machine_enabled'],
            ({ selected_dn, time_machine_enabled }) => {

                const wsSubscriptions : any[] = []

                if (selected_dn) {
                    if (!time_machine_enabled) {
                        wsSubscriptions.push({ kind: 'props', dn: selected_dn });
                    }
                }

                socketScope.replace(wsSubscriptions);
            })
    }


    private _setupAlerts()
    {
        const socketScope = this._socketScope((value, target: { dn: string; }) => {
            if (!this.sharedState.get('time_machine_enabled'))
            {
                if (target.dn === this.sharedState.get('selected_dn'))
                {
                    this.sharedState.set('selected_raw_alerts', value);
                }
            }
        });

        this.sharedState.subscribe(['selected_dn', 'time_machine_enabled'],
            ({ selected_dn, time_machine_enabled }) => {

                const wsSubscriptions : any[] = []

                if (selected_dn) {
                    if (!time_machine_enabled) {
                        wsSubscriptions.push({ kind: 'alerts', dn: selected_dn });
                    }
                }

                socketScope.replace(wsSubscriptions);
            })
    }
}
