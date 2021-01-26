import { Processor } from '../builder'

export default Processor()
    .order(10)
    .handler(({logger, state}) => {

        state.postProcessAlerts((dn, alerts) => {
            for(var alert of alerts)
            {
                alert.source = {
                    kind: 'parser'
                };
            }
        })

    })
