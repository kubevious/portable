#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

source $MY_DIR/utils.sh

log_header "Sync from Kubevious"

global_status=0
function sync {
    ./copy-file-from-source.sh "$1" "$2" "backend"
    local status=$?
    if [[ ${status} -ne 0 ]]; then
        global_status=1
    fi
}

sync "index.ts" "src/lib/index.ts"
sync "context.ts" "src/lib/context.ts"
sync "types.ts" "src/lib/types.ts"
sync "version.ts" "src/lib/version.ts"

#Copying utils
sync "utils/debug-object-logger.ts" "src/lib/utils/debug-object-logger.ts"
sync "utils/name-helpers.ts" "src/lib/utils/name-helpers.ts"
# Finish copying utils

#Copying snapshot-processor
sync "snapshot-processor/builder.ts" "src/lib/snapshot-processor/builder.ts"
sync "snapshot-processor/index.ts" "src/lib/snapshot-processor/index.ts"

#Copying snapshot-processor/processor
sync "snapshot-processor/processors/010_parser-alerts.ts" "src/lib/snapshot-processor/processors/010_parser-alerts.ts"
sync "snapshot-processor/processors/100_rules-engine.ts" "src/lib/snapshot-processor/processors/100_rules-engine.ts"
sync "snapshot-processor/processors/200_summary.ts" "src/lib/snapshot-processor/processors/200_summary.ts"
# Finish copying snapshot-processor/processor

# Finish copying snapshot-processor

#Copying server
sync "server/websocket.ts" "src/lib/server/websocket.ts"
# Finish copying server

#Copying search
sync "search/autocomplete-builder.ts" "src/lib/search/autocomplete-builder.ts"
sync "search/results.ts" "src/lib/search/results.ts"
sync "search/engine.ts" "src/lib/search/engine.ts"
# Finish copying search

#Copying rule
sync "rule/execution-context.ts" "src/lib/rule/execution-context.ts"
sync "rule/marker-accessor.ts" "src/lib/rule/marker-accessor.ts"
sync "rule/marker-cache.ts" "src/lib/rule/marker-cache.ts"
sync "rule/rule-accessor.ts" "src/lib/rule/rule-accessor.ts"
sync "rule/rule-cache.ts" "src/lib/rule/rule-cache.ts"
sync "rule/rule-processor.ts" "src/lib/rule/rule-processor.ts"
sync "rule/types.ts" "src/lib/rule/types.ts"
# Finish copying rule

#Copying routers
sync "routers/collector.ts" "src/lib/routers/collector.ts"
sync "routers/diagram.ts" "src/lib/routers/diagram.ts"
sync "routers/history.ts" "src/lib/routers/history.ts"
sync "routers/marker.ts" "src/lib/routers/marker.ts"
sync "routers/rule.ts" "src/lib/routers/rule.ts"
sync "routers/search.ts" "src/lib/routers/search.ts"
sync "routers/support.ts" "src/lib/routers/support.ts"
sync "routers/top.ts" "src/lib/routers/top.ts"
# Finish copying routers

#Copying registry
sync "registry/registry.ts" "src/lib/registry/registry.ts"
# Finish copying registry

#Copying history
sync "history/db-accessor.ts" "src/lib/history/db-accessor.ts"
sync "history/entities.ts" "src/lib/history/entities.ts"
sync "history/history-cleanup-processor.ts" "src/lib/history/history-cleanup-processor.ts"
sync "history/metadata.ts" "src/lib/history/metadata.ts"
sync "history/processor.ts" "src/lib/history/processor.ts"
# Finish copying history

#Copying facade
sync "facade/registry.ts" "src/lib/facade/registry.ts"
# Finish copying facade

#Copying collector
sync "collector/collector.ts" "src/lib/collector/collector.ts"
# Finish copying facade

#Copying apps
sync "apps/notifications.ts" "src/lib/apps/notifications.ts"
# Finish copying apps

#Copying db

#Copying db/meta
sync "db/meta/markers.ts" "src/lib/db/meta/markers.ts"
sync "db/meta/notifications.ts" "src/lib/db/meta/notifications.ts"
sync "db/meta/rules.ts" "src/lib/db/meta/rules.ts"
# Finish copying db/meta

#Copying db/migrators
sync "db/migrators/1.ts" "src/lib/db/migrators/1.ts"
sync "db/migrators/2.ts" "src/lib/db/migrators/2.ts"
sync "db/migrators/3.ts" "src/lib/db/migrators/3.ts"
sync "db/migrators/4.ts" "src/lib/db/migrators/4.ts"
sync "db/migrators/5.ts" "src/lib/db/migrators/5.ts"
sync "db/migrators/6.ts" "src/lib/db/migrators/6.ts"
sync "db/migrators/7.ts" "src/lib/db/migrators/7.ts"
sync "db/migrators/8.ts" "src/lib/db/migrators/8.ts"
# Finish copying db/migrators

sync "db/index.ts" "src/lib/db/index.ts"
sync "db/migration.ts" "src/lib/db/migration.ts"
# Finish copying db

if [[ global_status -ne 0 ]]; then
    log_error "[sync-from-kubevious] failed"
fi

exit $global_status
