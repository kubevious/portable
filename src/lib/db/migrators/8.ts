import _ from 'the-lodash';
import { Promise } from 'the-promise';

import { Migrator } from '../migration';

export default Migrator()
    .handler(({ logger, driver, executeSql, context }) => {

        return Promise.resolve()
            .then(() => Promise.serial(MARKERS, x => {
                const sql = `INSERT IGNORE INTO \`markers\`(\`name\`, \`shape\`, \`color\`, \`propagate\`) VALUES (?, ?, ?, ?)`;
                const params = [
                    x.name, 
                    x.shape, 
                    x.color, 
                    false
                ]
                return executeSql(sql, params);
            }))
            .then(() => Promise.serial(RULES, (x : any) => {
                x.enabled = true;
                const row = context.ruleAccessor.makeDbRule(x);
                const sql = `INSERT IGNORE INTO \`rules\`(\`name\`, \`enabled\`, \`date\`, \`target\`, \`script\`, \`hash\`) VALUES (?, ?, ?, ?, ?, ?)`;
                const params = [
                    row.name, 
                    row.enabled, 
                    row.date, 
                    row.target, 
                    row.script, 
                    row.hash
                ]
                return executeSql(sql, params);
            }))
    })

const MARKERS = [
    {
        name: 'high-memory-user',
        shape: 'f4e3',
        color: '#FF3E3A'
    },
    {
        name: 'large-namespace',
        shape: 'f447',
        color: '#61E48B'
    },
    {
        name: 'medium-memory-user',
        shape: 'f5ce',
        color: '#FE9F30'
    },
    {
        name: 'public-application',
        shape: 'f57d',
        color: '#14CFFF'
    }
]

const RULES = [
    {
        name: 'container-memory-usage',
        target:
`select('Container')`,
        script:
`var value = item.getProperties('resources')['memory request'];
if (value) {
    if (unit.memory(value).in('gb') >= 4) {
        mark('high-memory-user');
    }
    else if (unit.memory(value).in('mb') >= 600) {
        mark('medium-memory-user');
    }
} else {
    warning('Memory request is not set. This is not a good practice. Please correct ASAP.')
}`
    },
    {
        name: 'image-latest-tag-check',
        target:
`select('Image')`,
        script:
`if (item.props.tag == 'latest') {
    error("You are using latest image tag. Please don't do that.");
}`
    },
    {
        name: 'large-namespace',
        target:
`select('Namespace')
    .filter(({item}) => {
        const cpu = item.getProperties('cluster-consumption').cpu;
        const memory = item.getProperties('cluster-consumption').memory;
        return (unit.percentage(cpu) >= 30) ||
               (unit.percentage(memory) >= 30);
    })`,
        script:
`mark('large-namespace')`
    },
    {
        name: 'no-resource-limits-pods',
        target:
`select('Namespace')
    .filter(({item}) => item.name != 'kube-system')
.descendant ('Pod')`,
        script:
`for(var container of item.config.spec.containers)
{
  if (!container.resources.limit)
  {
    warning('No resource limit set');
  }
}`
    },
    {
        name: 'public-application',
        target:
`select('Application')
    .filter(({item}) => {
        return item.hasDescendants('Ingress');
    })`,
        script:
`mark("public-application")`
    }
]