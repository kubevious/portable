#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

echo "Sync from kubevious..."

function sync {
    ./copy-file-from-source.sh "$1" "$2" "kubevious"
}

sync "index.js" "index.js"
sync "lib/snapshot-processor.js" "lib/snapshot-processor.js"

sync "lib/registry/registry.js" "lib/registry/registry.js"
sync "lib/search/engine.js" "lib/search/engine.js"
sync "lib/utils/debug-object-logger.js" "lib/utils/debug-object-logger.js"
sync "lib/utils/name-helpers.js" "lib/utils/name-helpers.js"

sync "lib/routers/api.js" "lib/routers/api.js"
sync "lib/routers/top.js" "lib/routers/top.js"

sync "lib/snapshot-processors/alert-count.js" "lib/snapshot-processors/alert-count.js"
sync "lib/snapshot-processors/children-count.js" "lib/snapshot-processors/children-count.js"
sync "lib/snapshot-processors/hierarchy-alert-count.js" "lib/snapshot-processors/hierarchy-alert-count.js"
sync "lib/snapshot-processors/parser-alerts.js" "lib/snapshot-processors/parser-alerts.js"
