#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

echo "Sync from kubevious..."

./copy-file-from-kubevious.sh "index.js" "index.js"
./copy-file-from-kubevious.sh "logger.js" "logger.js"
./copy-file-from-kubevious.sh "version.js" "version.js"

./copy-file-from-kubevious.sh "lib/server.js" "lib/server.js"

./copy-file-from-kubevious.sh "lib/cluster/leader-elector.js" "lib/cluster/leader-elector.js"

./copy-file-from-kubevious.sh "lib/collector/collector.js" "lib/collector/collector.js"

./copy-file-from-kubevious.sh "lib/processing/alert-count-processor.js" "lib/processing/alert-count-processor.js"
./copy-file-from-kubevious.sh "lib/processing/children-count-processor.js" "lib/processing/children-count-processor.js"
./copy-file-from-kubevious.sh "lib/processing/hierarchy-alert-count-processor.js" "lib/processing/hierarchy-alert-count-processor.js"
./copy-file-from-kubevious.sh "lib/processing/parser-alerts-preprocessor.js" "lib/processing/parser-alerts-preprocessor.js"

./copy-file-from-kubevious.sh "lib/registry/registry.js" "lib/registry/registry.js"
./copy-file-from-kubevious.sh "lib/search/engine.js" "lib/search/engine.js"
./copy-file-from-kubevious.sh "lib/utils/debug-object-logger.js" "lib/utils/debug-object-logger.js"
./copy-file-from-kubevious.sh "lib/utils/name-helpers.js" "lib/utils/name-helpers.js"
./copy-file-from-kubevious.sh "lib/websocket/server.js" "lib/websocket/server.js"

./copy-file-from-kubevious.sh "lib/routers/api.js" "lib/routers/api.js"
./copy-file-from-kubevious.sh "lib/routers/top.js" "lib/routers/top.js"
