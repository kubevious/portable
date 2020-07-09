#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR/..

SRC_FILE=$1
DEST_FILE=$2

if [[ -d ${SRC_FILE} ]]; then
  ./tools/copy-dir.sh "${SRC_FILE}" "${DEST_FILE}"
elif [[ -f ${SRC_FILE} ]]; then
  ./tools/copy-file.sh "${SRC_FILE}" "${DEST_FILE}"
else
  echo "    ${SRC_FILE} is not valid"
  exit 1
fi
