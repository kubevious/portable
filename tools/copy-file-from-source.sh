#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"

source $MY_DIR/utils.sh

cd $MY_DIR/..

SRC_FILE=$1
DEST_FILE=$2
REPO=$3
log_info "+ Syncing ${SRC_FILE} to ${DEST_FILE}..."

SRC_FILE="../${REPO}.git/src/${SRC_FILE}"

case $REPO in
"ui")
  DEST_FILE="client/${DEST_FILE}"
  ;;
"kubevious")
  DEST_FILE="src/${DEST_FILE}"
  ;;
"parser")
  DEST_FILE="src/parser/${DEST_FILE}"
  ;;
esac

DEST_DIR=$(dirname "${DEST_FILE}")

./tools/copy.sh "${SRC_FILE}" "${DEST_FILE}"
status=$?
if [[ ${status} -ne 0 ]]; then
  log_error "| [copy-file-from-source] error with $1"
  log_error "| [copy-file-from-source] exit code: ${status}"
fi
exit $status
