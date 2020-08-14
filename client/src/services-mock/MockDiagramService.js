import _ from 'the-lodash'
import {
    ALERTS_DATA,
    GRAPH_DATA,
    PROPERTIES_DATA,
    DN_LIST
} from '../boot/diagramMockData'

class MockDiagramService {
    constructor(sharedState) {
        this.sharedState = sharedState;

        this.sharedState.subscribe(['selected_dn'],
            ({ selected_dn }) => {

                if (selected_dn) {
                    this.fetchAssets(selected_dn, (data) => {
                        this.sharedState.set('selected_object_assets', data);
                    })
                }
            });
    }

    fetchDiagram(cb) {
        cb(GRAPH_DATA)
    }

    fetchAssets(dn, cb) {
        setTimeout(() => {
            cb(_.cloneDeep({
                props: PROPERTIES_DATA,
                alerts: ALERTS_DATA,
            }))
        }, 200);
    }

    getRandomDnList()
    {
        const count = this._randomInt(10) + 3;
        var res = [];

        for(var i = 0; i < count; i++)
        {
            var dn = DN_LIST[this._randomInt(DN_LIST.length)];
            res.push(dn)
        }
        return res;
    }

    fetchSearchResults(criteria, cb) {
        var res = this.getRandomDnList();
        res = res.map(x => ({
            dn: x
        }));
        cb(res);
    }

    _randomInt(x)
    {
        return Math.floor(Math.random() * x); 
    }
}

export default MockDiagramService;
