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

#Copying routers
sync "routers/collector.ts" "src/lib/routers/collector.ts"
sync "routers/diagram.ts" "src/lib/routers/diagram.ts"
sync "routers/search.ts" "src/lib/routers/search.ts"
sync "routers/support.ts" "src/lib/routers/support.ts"
sync "routers/top.ts" "src/lib/routers/top.ts"
# Finish copying routers

#Copying registry
sync "registry/registry.ts" "src/lib/registry/registry.ts"
# Finish copying registry

#Copying facade
sync "facade/registry.ts" "src/lib/facade/registry.ts"
# Finish copying facade

#Copying collector
sync "collector/collector.ts" "src/lib/collector/collector.ts"
# Finish copying facade

#Copying apps
sync "apps/notifications.ts" "src/lib/apps/notifications.ts"
# Finish copying apps

if [[ global_status -ne 0 ]]; then
    log_error "[sync-from-kubevious] failed"
fi

exit $global_status
