#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR/..

SRC_FILE=$1
DEST_FILE=$2
REPO=$3
echo "+ Syncing ${SRC_FILE} to ${DEST_FILE}..."

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
