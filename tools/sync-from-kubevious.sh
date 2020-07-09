#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

echo "Sync from kubevious..."

function sync {
    ./copy-file-from-source.sh "$1" "$2" "kubevious"
}

sync "index.js" "index.js"

sync "lib/cluster/leader-elector.js" "lib/cluster/leader-elector.js"

sync "lib/processing/alert-count-processor.js" "lib/processing/alert-count-processor.js"
sync "lib/processing/children-count-processor.js" "lib/processing/children-count-processor.js"
sync "lib/processing/hierarchy-alert-count-processor.js" "lib/processing/hierarchy-alert-count-processor.js"
sync "lib/processing/parser-alerts-preprocessor.js" "lib/processing/parser-alerts-preprocessor.js"

sync "lib/registry/registry.js" "lib/registry/registry.js"
sync "lib/search/engine.js" "lib/search/engine.js"
sync "lib/utils/debug-object-logger.js" "lib/utils/debug-object-logger.js"
sync "lib/utils/name-helpers.js" "lib/utils/name-helpers.js"

sync "lib/routers/api.js" "lib/routers/api.js"
sync "lib/routers/top.js" "lib/routers/top.js"
