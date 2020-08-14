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

sync "index.js" "index.js"

sync "lib/snapshot-processor.js" "lib/snapshot-processor.js"
sync "lib/snapshot-processors/010_parser-alerts.js" "lib/snapshot-processors/010_parser-alerts.js"
sync "lib/snapshot-processors/200_children-count.js" "lib/snapshot-processors/200_children-count.js"

sync "lib/registry/registry.js" "lib/registry/registry.js"

sync "lib/search/engine.js" "lib/search/engine.js"

sync "lib/utils/debug-object-logger.js" "lib/utils/debug-object-logger.js"
sync "lib/utils/name-helpers.js" "lib/utils/name-helpers.js"

sync "lib/routers/top.js" "lib/routers/top.js"
sync "lib/routers/diagram.js" "lib/routers/diagram.js"

sync "lib/websocket/server.js" "lib/websocket/server.js"


if [[ global_status -ne 0 ]]; then
    log_error "[sync-from-kubevious] failed"
fi

exit $global_status
