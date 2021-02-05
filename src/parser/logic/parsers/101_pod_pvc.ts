/*** UNDER NO CIRCUMSTANCES DO NOT EDIT THIS FILE. THIS FILE IS COPIED                                    ***/
/*** FROM OSS UI. ANY CHANGES TO BE MADE IN KUBEVIOUS OSS UI.                                             ***/
/*** SOURCE: ../parser.git/src/logic/parsers/101_pod_pvc.ts                                               ***/

import _ from 'the-lodash';
import { ScopeParser } from '../parser-builder';

export default ScopeParser()
    .order(101)
    .target({
        namespaced: true,
        scopeKind: 'Pod'
    })
    .handler(({ scope, itemScope }) => {

        var volumes = _.get(itemScope.config, 'spec.volumes');
        if (volumes)
        {
            for(var volume of volumes)
            {
                var pvcName = _.get(volume, 'persistentVolumeClaim.claimName');
                if (pvcName)
                {
                    var pvcScope = itemScope.parent.items.get('PersistentVolumeClaim', pvcName);
                    if (pvcScope)
                    {
                        for(var podItem of itemScope.items)
                        {
                            var pvc = podItem.fetchByNaming("pvc", pvcScope.name);
                            scope.setK8sConfig(pvc, pvcScope.config);
                            pvcScope.registerItem(pvc);
                            pvcScope.markUsedBy(pvc);
                        }
                    }     
                }
            }
        }

    })
    ;
