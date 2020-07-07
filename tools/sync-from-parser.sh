#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

./copy-file-from-source.sh "lib/concrete/item.js" "concrete/item.js" "parser"
./copy-file-from-source.sh "lib/concrete/registry.js" "concrete/registry.js" "parser"

./copy-file-from-source.sh "lib/loaders/gke.js" "loaders/gke.js" "parser"
./copy-file-from-source.sh "lib/loaders/k8s.js" "loaders/k8s.js" "parser"
./copy-file-from-source.sh "lib/loaders/local.js" "loaders/local.js" "parser"

./copy-folder.sh "lib/logic/helpers" "logic/helpers" "parser"
./copy-folder.sh "lib/logic/parsers" "logic/parsers" "parser"
./copy-folder.sh "lib/logic/polishers" "logic/polishers" "parser"
./copy-folder.sh "lib/logic/scope" "logic/scope" "parser"

./copy-file-from-source.sh "lib/logic/item.js" "logic/item.js" "parser"
./copy-file-from-source.sh "lib/logic/processor.js" "logic/processor.js" "parser"
./copy-file-from-source.sh "lib/logic/properties-builder.js" "logic/properties-builder.js" "parser"

./copy-file-from-source.sh "lib/parsers/api-groups.js" "parsers/api-groups.js" "parser"
./copy-file-from-source.sh "lib/parsers/k8s.js" "parsers/k8s.js" "parser"

./copy-file-from-source.sh "lib/utils/debug-object-logger.js" "utils/debug-object-logger.js" "parser"
./copy-file-from-source.sh "lib/utils/job-dampener.js" "utils/job-dampener.js" "parser"
./copy-file-from-source.sh "lib/utils/name-helpers.js" "utils/name-helpers.js" "parser"
