import _ from 'the-lodash';
import { Promise } from 'the-promise';

import { Migrator } from '../migration';

export default Migrator()
    .handler(({ logger, driver, executeSql, context }) => {
        
        var queryies = [

            "CREATE TABLE IF NOT EXISTS `summary_counters` ( " +
            "  `id` int unsigned NOT NULL AUTO_INCREMENT, " +
            "  `part` int unsigned NOT NULL, " +
            "  `date` datetime NOT NULL, " +
            "  `counter_kind` varchar(128) NOT NULL,  " +
            "  `counter` int NOT NULL, " +
            "  PRIMARY KEY (`id`, `part`), " +
            "  KEY `date` (`date`), " +
            "  KEY `counter_kind` (`counter_kind`) " +
            ") ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci " +
            "PARTITION BY RANGE (part) ( " +
            "  PARTITION p0 VALUES LESS THAN (0) " +
            "); " 

            ,

            "CREATE TABLE IF NOT EXISTS `summary_counters_by_kind` ( " +
            "  `id` int unsigned NOT NULL AUTO_INCREMENT, " +
            "  `part` int unsigned NOT NULL, " +
            "  `date` datetime NOT NULL, " +
            "  `counter_kind` varchar(128) NOT NULL,  " +
            "  `item_kind` varchar(128) NOT NULL,  " +
            "  `counter` int NOT NULL, " +
            "  PRIMARY KEY (`id`, `part`), " +
            "  KEY `date` (`date`), " +
            "  KEY `counter_kind` (`counter_kind`), " +
            "  KEY `item_kind` (`item_kind`) " +
            ") ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci " +
            "PARTITION BY RANGE (part) ( " +
            "  PARTITION p0 VALUES LESS THAN (0) " +
            "); "

            ,

            "CREATE TABLE IF NOT EXISTS `summary_delta_counters` ( " +
            "  `id` int unsigned NOT NULL AUTO_INCREMENT, " +
            "  `part` int unsigned NOT NULL, " +
            "  `date` datetime NOT NULL, " +
            "  `counter_kind` varchar(128) NOT NULL,  " +
            "  `counter` int NOT NULL, " +
            "  PRIMARY KEY (`id`, `part`), " +
            "  KEY `date` (`date`), " +
            "  KEY `counter_kind` (`counter_kind`) " +
            ") ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci " +
            "PARTITION BY RANGE (part) ( " +
            "  PARTITION p0 VALUES LESS THAN (0) " +
            "); "

        ,

        "CREATE TABLE IF NOT EXISTS `summary_delta_counters_by_kind` ( " +
            "  `id` int unsigned NOT NULL AUTO_INCREMENT, " +
            "  `part` int unsigned NOT NULL, " +
            "  `date` datetime NOT NULL, " +
            "  `counter_kind` varchar(128) NOT NULL,  " +
            "  `item_kind` varchar(128) NOT NULL,  " +
            "  `counter` int NOT NULL, " +
            "  PRIMARY KEY (`id`, `part`), " +
            "  KEY `date` (`date`), " +
            "  KEY `counter_kind` (`counter_kind`), " +
            "  KEY `item_kind` (`item_kind`) " +
            ") ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci " +
            "PARTITION BY RANGE (part) ( " +
            "  PARTITION p0 VALUES LESS THAN (0) " +
            "); " 

            ,

            "CREATE TABLE IF NOT EXISTS `timeline` ( " +
            "  `id` int unsigned NOT NULL AUTO_INCREMENT, " +
            "  `part` int unsigned NOT NULL, " +
            "  `date` datetime NOT NULL, " +
            "  `changes` int NOT NULL, " +
            "  `error` int NOT NULL, " +
            "  `warn` int NOT NULL, " +
            "  PRIMARY KEY (`id`, `part`), " +
            "  KEY `date` (`date`) " +
            ") ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci " +
            "PARTITION BY RANGE (part) ( " +
            "  PARTITION p0 VALUES LESS THAN (0) " +
            "); " 
        ];

        return Promise.serial(queryies, x => executeSql(x));
    });
