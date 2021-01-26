import _ from 'the-lodash';
import { LogicParser } from '../parser-builder';

export default LogicParser()
    .order(33)
    .target({
        path: ["ns", "app", "launcher"]
    })
    .handler(({ item }) => {

        var radioactiveProps : Record<string, any> = {};

        if (_.get(item.config, 'securityContext.privileged')) {
            radioactiveProps['privileged'] = true;
        }
        
        var podSpec = _.get(item.config, 'spec.template.spec');
        if (podSpec)
        {
            if (podSpec.hostIPC) {
                radioactiveProps['hostIPC'] = true;
            }
            if (podSpec.hostNetwork) {
                radioactiveProps['hostNetwork'] = true;
            }
            if (podSpec.hostPID) {
                radioactiveProps['hostPID'] = true;
            }
            if (_.get(podSpec, 'securityContext.privileged')) {
                radioactiveProps['privileged'] = true;
            }
        }

        if (_.keys(radioactiveProps).length > 0)
        {
            item.setPropagatableFlag("radioactive");

            item.addProperties({
                kind: "key-value",
                id: "radioactive",
                title: "Radioactivity",
                order: 7,
                config: radioactiveProps
            });
        }

    })
    ;