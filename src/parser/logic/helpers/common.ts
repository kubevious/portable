/*** UNDER NO CIRCUMSTANCES DO NOT EDIT THIS FILE. THIS FILE IS COPIED                                    ***/
/*** FROM OSS UI. ANY CHANGES TO BE MADE IN KUBEVIOUS OSS UI.                                             ***/
/*** SOURCE: ../parser.git/src/logic/helpers/common.ts                                                    ***/

import { ItemScope } from "../scope/item";

export class CommonUtils {

    determineSharedFlag(itemScope : ItemScope) 
    {
        if (itemScope.isUsedByMany)
        {
            for(let xItem of itemScope.usedBy)
            {
                xItem.setFlag("shared");
                for(let otherItem of itemScope.usedBy)
                {
                    if (otherItem.dn != xItem.dn) {
                        xItem.setUsedBy(otherItem.dn);
                    }
                }
            }
        } 
    }
    
}   
