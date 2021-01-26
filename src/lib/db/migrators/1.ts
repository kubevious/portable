import _ from 'the-lodash';
import { Promise } from 'the-promise';

import { Migrator } from '../migration';

export default Migrator()
    .handler(({ logger, driver, executeSql, context }) => {
        
        var queries = [
            "CREATE TABLE IF NOT EXISTS `config` (" +
                "`key` varchar(64) NOT NULL DEFAULT ''," +
                "`value` json NOT NULL," +
                "PRIMARY KEY (`key`)" +
            ") ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;"
        ];
        
        return Promise.serial(queries, x => executeSql(x));

    });