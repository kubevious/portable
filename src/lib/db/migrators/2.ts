import _ from 'the-lodash';
import { Promise } from 'the-promise';

import { Migrator } from '../migration';

export default Migrator()
    .handler(({ logger, driver, executeSql, context }) => {
        
        var queries = [

            "CREATE TABLE IF NOT EXISTS `snapshots` (" +
                "`id` int unsigned NOT NULL AUTO_INCREMENT," +
                "`date` datetime NOT NULL," +
                "PRIMARY KEY (`id`)," +
                "KEY `date` (`date`)" +
            ") ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;"

            ,

            "CREATE TABLE IF NOT EXISTS `snap_items` (" +
                "`id` int unsigned NOT NULL AUTO_INCREMENT," +
                "`snapshot_id` int unsigned NOT NULL," +
                "`dn` varchar(1024) NOT NULL DEFAULT ''," +
                "`kind` varchar(128) NOT NULL DEFAULT ''," +
                "`config-kind` varchar(128) NOT NULL DEFAULT ''," +
                "`name` varchar(128) NULL DEFAULT ''," +
                "`config` json NOT NULL," +
                "PRIMARY KEY (`id`)," +
                "KEY `snapshot_id` (`snapshot_id`)," +
                "KEY `dn` (`dn`)," +
                "KEY `kind` (`kind`)," +
                "KEY `config-kind` (`config-kind`)," +
                "CONSTRAINT `snap_item_snapshot_id` FOREIGN KEY (`snapshot_id`) REFERENCES `snapshots` (`id`)" +
            ") ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;"

            ,

            "CREATE TABLE IF NOT EXISTS `diffs` (" +
                "`id` int unsigned NOT NULL AUTO_INCREMENT," +
                "`snapshot_id` int unsigned NOT NULL," +
                "`date` datetime NOT NULL," +
                "`in_snapshot` tinyint(1) NOT NULL," +
                "`summary` json NOT NULL," +
                "PRIMARY KEY (`id`)," +
                "KEY `snapshot_id` (`snapshot_id`)," +
                "KEY `date` (`date`)," +
                "CONSTRAINT `diff_snapshot_id` FOREIGN KEY (`snapshot_id`) REFERENCES `snapshots` (`id`)" +
            ") ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;"

            ,

            "CREATE TABLE IF NOT EXISTS `diff_items` (" +
                "`id` int unsigned NOT NULL AUTO_INCREMENT," +
                "`diff_id` int unsigned NOT NULL," +
                "`dn` varchar(1024) NOT NULL DEFAULT ''," +
                "`kind` varchar(128) NOT NULL DEFAULT ''," +
                "`config-kind` varchar(128) NOT NULL DEFAULT ''," +
                "`name` varchar(128) NULL DEFAULT ''," +
                "`present` tinyint(1) NOT NULL," +
                "`config` json DEFAULT NULL," +
                "PRIMARY KEY (`id`)," +
                "KEY `diff_id` (`diff_id`)," +
                "KEY `dn` (`dn`)," +
                "KEY `kind` (`kind`)," +
                "KEY `config-kind` (`config-kind`)," +
                "CONSTRAINT `diff_items_diff_id` FOREIGN KEY (`diff_id`) REFERENCES `diffs` (`id`)" +
            ") ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;"

        ];
        
        return Promise.serial(queries, x => executeSql(x));

    });