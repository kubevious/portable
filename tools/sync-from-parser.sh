#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

function sync {
    ./copy-file-from-source.sh "$1" "$2" "parser"
}

sync "lib/concrete/item.js" "concrete/item.js"
sync "lib/concrete/registry.js" "concrete/registry.js"

sync "lib/loaders/k8s.js" "loaders/k8s.js"

sync "lib/logic/helpers" "logic/helpers"
sync "lib/logic/parsers" "logic/parsers"
sync "lib/logic/polishers" "logic/polishers"
sync "lib/logic/scope" "logic/scope"

sync "lib/logic/item.js" "logic/item.js"
sync "lib/logic/processor.js" "logic/processor.js"
sync "lib/logic/properties-builder.js" "logic/properties-builder.js"

sync "lib/parsers/api-groups.js" "parsers/api-groups.js"
sync "lib/parsers/k8s.js" "parsers/k8s.js"

sync "lib/utils/debug-object-logger.js" "utils/debug-object-logger.js"
sync "lib/utils/job-dampener.js" "utils/job-dampener.js"
sync "lib/utils/name-helpers.js" "utils/name-helpers.js"
