#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR/..

SRC_FILE=$1
DEST_FILE=$2
TYPE=$3
echo "Syncing ${SRC_FILE} to ${DEST_FILE}..."

case $TYPE in
"ui")
  SRC_FILE="../ui.git/src/${SRC_FILE}"
  DEST_FILE="src/client/${DEST_FILE}"
  ;;
"kubevious")
  SRC_FILE="../kubevious.git/src/${SRC_FILE}"
  DEST_FILE="src/${DEST_FILE}"
  ;;
"parser")
  SRC_FILE="../parser.git/src/${SRC_FILE}"
  DEST_FILE="src/parser/${DEST_FILE}"
  ;;
esac

DEST_DIR=$(dirname "${DEST_FILE}")

if [[ -d ${SRC_FILE} ]]; then
  mkdir -p "${DEST_FILE}"
  cp -rf ${SRC_FILE}/* ${DEST_FILE}/
elif [[ -f ${SRC_FILE} ]]; then
  ./tools/copy-file.sh "${SRC_FILE}" "${DEST_FILE}"
else
  echo "    ${SRC_FILE} is not valid"
  exit 1
fi
