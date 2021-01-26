import { RoleHelper } from './roles'
import { ResourceHelpers } from './resources'
import { CommonUtils } from './common';

export class Helpers {

    public roles : RoleHelper = new RoleHelper();
    public resources : ResourceHelpers = new ResourceHelpers();
    public common : CommonUtils = new CommonUtils();

    constructor() {

    }
}