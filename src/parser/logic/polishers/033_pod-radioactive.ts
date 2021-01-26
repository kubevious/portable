import _ from 'the-lodash';
import { LogicParser } from '../parser-builder';

export default LogicParser()
    .order(33)
    .target({
        path: [ "ns", "raw", "raw", "pod" ]
    })
    .handler(({ item }) => {

        var radioactiveProps : Record<string, any> = {};

        var podSpec = _.get(item.config, 'spec')
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

            if (podSpec.containers)
            {
                for(var container of podSpec.containers)
                {
                    if (_.get(container, 'securityContext.privileged')) {
                        radioactiveProps['privileged'] = true;
                    }
                }
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