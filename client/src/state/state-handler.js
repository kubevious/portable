import _ from 'the-lodash'
import { splitDn } from '../utils/naming-utils'
import FieldsSaver from '../utils/save-fields';

class StateHandler {
    constructor(state, diagramService) {
        this.sharedState = state;
        this._service = diagramService;
        this._fieldsSaver = new FieldsSaver('Diagram')
        this._setup();
    }

    close() {

    }

    _setup() {
        this.sharedState.set('is_loading', false)
        this.sharedState.set('is_error', false)
        this.sharedState.set('error', null)
        this.sharedState.set('diagram_expanded_dns', { 'root': true });
        this.sharedState.set('selected_cluster', null)

        this._handleDefaultParams()
        this._handleSelectedDnAutoExpandChange()
        this._handleSelectedObjectChange()
        this._handleSelectedObjectAssetsChange()
    }

    _handleDefaultParams() {
        const params = new URLSearchParams(window.location.search)

        const fields = this._fieldsSaver.decodeParams(params)

        const { sd } = fields

        if (sd) {
            this.sharedState.set('selected_dn', sd)
            this.sharedState.set('auto_pan_to_selected_dn', true);
        }
    }

    _handleSelectedDnAutoExpandChange()
    {
        this.sharedState.subscribe('selected_dn',
            ( selected_dn ) => {
                if (selected_dn) {
                    var dict = this.sharedState.get('diagram_expanded_dns');
                    var parts = splitDn(selected_dn);
                    var dn = parts[0];
                    for(var i = 1; i < parts.length - 1; i++)
                    {
                        dn = dn + '/' + parts[i];
                        dict[dn] = true;
                    }
                    this.sharedState.set('diagram_expanded_dns', dict, { skipCompare: true });
                }
            });
    }

    _handleSelectedObjectChange() {

        this.sharedState.subscribe(['selected_dn'],
            ({ selected_dn }) => {
                this.sharedState.set('selected_object_assets', null);
            });

    }

    _handleSelectedObjectAssetsChange() {
        this.sharedState.subscribe('selected_object_assets',
            (selected_object_assets) => {
                if (selected_object_assets) {
                    this.sharedState.set('selected_object_props', selected_object_assets.props);
                    this.sharedState.set('selected_object_alerts', selected_object_assets.alerts);
                } else {
                    this.sharedState.set('selected_object_props', []);
                    this.sharedState.set('selected_object_alerts', []);
                }
            })
    }

}

export default StateHandler;
