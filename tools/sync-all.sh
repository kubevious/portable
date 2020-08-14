#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

source $MY_DIR/utils.sh

global_status=0

## Cleanup
./delete-synced-files.sh
status=$?
cleanup_status=0
if [[ ${status} -ne 0 ]]; then
    global_status=1
    cleanup_status=1
fi

## UI
./sync-from-ui.sh
status=$?
ui_status=0
if [[ ${status} -ne 0 ]]; then
    global_status=1
    ui_status=1
fi

## KUBEVIOUS
./sync-from-kubevious.sh
status=$?
kubevious_status=0
if [[ ${status} -ne 0 ]]; then
    global_status=1
    kubevious_status=1
fi

## PARSER
./sync-from-parser.sh
status=$?
parser_status=0
if [[ ${status} -ne 0 ]]; then
    global_status=1
    parser_status=1
fi

log_header "Sync Summary"

if [[ ${cleanup_status} -eq 0 ]]; then
    log_info " | Cleanup: Passed"
else 
    log_error " | Cleanup: Failed. Error=${cleanup_status}"
fi

if [[ ${ui_status} -eq 0 ]]; then
    log_info " | UI: Passed"
else 
    log_error " | UI: Failed. Error=${ui_status}"
fi

if [[ ${kubevious_status} -eq 0 ]]; then
    log_info " | Kubevious: Passed"
else 
    log_error " | Kubevious: Failed. Error=${kubevious_status}"
fi

if [[ ${parser_status} -eq 0 ]]; then
    log_info " | Parser: Passed"
else 
    log_error " | Parser: Failed. Error=${parser_status}"
fi


exit $global_status