#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

source $MY_DIR/utils.sh

log_header "Sync from Kubevious"

global_status=0
function sync {
    ./copy-file-from-source.sh "$1" "$2" "kubevious"
    local status=$?
    if [[ ${status} -ne 0 ]]; then
        global_status=1
    fi
}

sync "index.ts" "index.ts"
sync "context.ts" "context.ts"
sync "types.ts" "types.ts"
sync "version.ts" "version.ts"

#Copying utils
sync "src/utils/debug-object-logger.ts" "lib/utils/debug-object-logger.ts"
sync "src/utils/name-helpers.ts" "lib/utils/name-helpers.ts"
# Finish copying utils

#Copying snapshot-processor
sync "src/snapshot-processor/builder.ts" "lib/snapshot-processor/builder.ts"
sync "src/snapshot-processor/index.ts" "lib/snapshot-processor/index.ts"

#Copying snapshot-processor/processor
sync "src/snapshot-processor/processor/010_parser-alerts.ts" "lib/snapshot-processor/processor/010_parser-alerts.ts"
sync "src/snapshot-processor/processor/100_rules-engine.ts" "lib/snapshot-processor/processor/100_rules-engine.ts"
sync "src/snapshot-processor/processor/200_summary.ts" "lib/snapshot-processor/processor/200_summary.ts"
# Finish copying snapshot-processor/processor

# Finish copying snapshot-processor

#Copying server
sync "src/server/websocket.ts" "lib/server/websocket.ts"
sync "src/server/index.ts" "lib/server/index.ts"
# Finish copying server

#Copying search
sync "src/search/autocomplete-builder.ts" "lib/search/autocomplete-builder.ts"
sync "src/search/results.ts" "lib/search/results.ts"
sync "src/search/engine.ts" "lib/search/engine.ts"
# Finish copying search

#Copying rule
sync "src/rule/execution-context.ts" "lib/rule/execution-context.ts"
sync "src/rule/marker-accessor.ts" "lib/rule/marker-accessor.ts"
sync "src/rule/marker-cache.ts" "lib/rule/marker-cache.ts"
sync "src/rule/rule-accessor.ts" "lib/rule/rule-accessor.ts"
sync "src/rule/rule-cache.ts" "lib/rule/rule-cache.ts"
sync "src/rule/rule-processor.ts" "lib/rule/rule-processor.ts"
sync "src/rule/types.ts" "lib/rule/types.ts"
# Finish copying rule

#Copying routers
sync "src/routers/collector.ts" "lib/routers/collector.ts"
sync "src/routers/diagram.ts" "lib/routers/diagram.ts"
sync "src/routers/history.ts" "lib/routers/history.ts"
sync "src/routers/marker.ts" "lib/routers/marker.ts"
sync "src/routers/rule.ts" "lib/routers/rule.ts"
sync "src/routers/search.ts" "lib/routers/search.ts"
sync "src/routers/support.ts" "lib/routers/support.ts"
sync "src/routers/top.ts" "lib/routers/top.ts"
# Finish copying routers

#Copying registry
sync "src/registry/registry.ts" "lib/registry/registry.ts"
# Finish copying registry

#Copying history
sync "src/history/db-accessor.ts" "lib/history/db-accessor.ts"
sync "src/history/entities.ts" "lib/history/entities.ts"
sync "src/history/history-cleanup-processor.ts" "lib/history/history-cleanup-processor.ts"
sync "src/history/metadata.ts" "lib/history/metadata.ts"
sync "src/history/processor.ts" "lib/history/processor.ts"
# Finish copying history

#Copying facade
sync "src/facade/registry.ts" "lib/facade/registry.ts"
# Finish copying facade

#Copying collector
sync "src/collector/collector.ts" "lib/collector/collector.ts"
# Finish copying facade

#Copying apps
sync "src/apps/notifications.ts" "lib/apps/notifications.ts"
# Finish copying apps

#Copying db

#Copying db/meta
sync "src/db/meta/markers.ts" "lib/db/meta/markers.ts"
sync "src/db/meta/notifications.ts" "lib/db/meta/notifications.ts"
sync "src/db/meta/rules.ts" "lib/db/meta/rules.ts"
# Finish copying db/meta

#Copying db/migrators
sync "src/db/migrators/1.ts" "lib/db/migrators/1.ts"
sync "src/db/migrators/2.ts" "lib/db/migrators/2.ts"
sync "src/db/migrators/3.ts" "lib/db/migrators/3.ts"
sync "src/db/migrators/4.ts" "lib/db/migrators/4.ts"
sync "src/db/migrators/5.ts" "lib/db/migrators/5.ts"
sync "src/db/migrators/6.ts" "lib/db/migrators/6.ts"
sync "src/db/migrators/7.ts" "lib/db/migrators/7.ts"
sync "src/db/migrators/8.ts" "lib/db/migrators/8.ts"
# Finish copying db/migrators

sync "src/db/index.ts" "lib/db/index.ts"
sync "src/db/migration.ts" "lib/db/migration.ts"

# Finish copying db

if [[ global_status -ne 0 ]]; then
    log_error "[sync-from-kubevious] failed"
fi

exit $global_status
