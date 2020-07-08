#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

echo "Sync from kubevious..."

./copy-file-from-source.sh "index.js" "index.js" "kubevious"

./copy-file-from-source.sh "lib/cluster/leader-elector.js" "lib/cluster/leader-elector.js" "kubevious"

./copy-file-from-source.sh "lib/processing/alert-count-processor.js" "lib/processing/alert-count-processor.js" "kubevious"
./copy-file-from-source.sh "lib/processing/children-count-processor.js" "lib/processing/children-count-processor.js" "kubevious"
./copy-file-from-source.sh "lib/processing/hierarchy-alert-count-processor.js" "lib/processing/hierarchy-alert-count-processor.js" "kubevious"
./copy-file-from-source.sh "lib/processing/parser-alerts-preprocessor.js" "lib/processing/parser-alerts-preprocessor.js" "kubevious"

./copy-file-from-source.sh "lib/registry/registry.js" "lib/registry/registry.js" "kubevious"
./copy-file-from-source.sh "lib/search/engine.js" "lib/search/engine.js" "kubevious"
./copy-file-from-source.sh "lib/utils/debug-object-logger.js" "lib/utils/debug-object-logger.js" "kubevious"
./copy-file-from-source.sh "lib/utils/name-helpers.js" "lib/utils/name-helpers.js" "kubevious"

./copy-file-from-source.sh "lib/routers/api.js" "lib/routers/api.js" "kubevious"
./copy-file-from-source.sh "lib/routers/top.js" "lib/routers/top.js" "kubevious"
