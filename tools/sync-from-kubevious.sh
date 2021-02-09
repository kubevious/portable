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

#Copying utils
sync "utils/debug-object-logger.ts" "src/lib/utils/debug-object-logger.ts"
sync "utils/name-helpers.ts" "src/lib/utils/name-helpers.ts"
# Finish copying utils

#Copying snapshot-processor/processor
sync "snapshot-processor/index.ts" "src/lib/snapshot-processor/index.ts"
sync "snapshot-processor/builder.ts" "src/lib/snapshot-processor/builder.ts"
sync "snapshot-processor/processors/010_parser-alerts.ts" "src/lib/snapshot-processor/processors/010_parser-alerts.ts"
sync "snapshot-processor/processors/200_summary.ts" "src/lib/snapshot-processor/processors/200_summary.ts"
# Finish copying snapshot-processor/processor

#Copying server
sync "server/websocket.ts" "src/lib/server/websocket.ts"
# Finish copying server

#Copying search
sync "search/autocomplete-builder.ts" "src/lib/search/autocomplete-builder.ts"
sync "search/results.ts" "src/lib/search/results.ts"
# Finish copying search

#Copying registry
sync "registry/registry.ts" "src/lib/registry/registry.ts"
# Finish copying registry

if [[ global_status -ne 0 ]]; then
    log_error "[sync-from-kubevious] failed"
fi

exit $global_status
