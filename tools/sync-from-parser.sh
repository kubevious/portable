#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

source $MY_DIR/utils.sh

log_header "Sync from Parser"

global_status=0
function sync {
    ./copy-file-from-source.sh "$1" "$2" "parser"
    local status=$?
    if [[ ${status} -ne 0 ]]; then
        global_status=1
    fi
}

#Copying loaders
sync "loaders/k8s.ts" "loaders/k8s.ts"
sync "loaders/local.ts" "loaders/local.ts"
# Finish copying loaders

#Copying utils
sync "utils/debug-object-logger.ts" "utils/debug-object-logger.ts"
sync "utils/name-helpers.ts" "utils/name-helpers.ts"
# Finish copying utils

if [[ global_status -ne 0 ]]; then
    log_error "[sync-from-parser] failed"
fi

exit $global_status
