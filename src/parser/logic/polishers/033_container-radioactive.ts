import _ from 'the-lodash';
import { LogicParser } from '../parser-builder';

export default LogicParser()
    .order(33)
    .target({
        path: ["ns", "app", "cont"]
    })
    .handler(({ item }) => {

        var radioactiveProps : Record<string, any> = {};

        if (_.get(item.config, 'securityContext.privileged')) {
            radioactiveProps['privileged'] = true;
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