#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR/..

SRC=$1
DEST=$2
echo "|    Dir copy ${SRC} to ${DEST}..."

mkdir -p ${DEST}
rm -rf ${DEST}/*

for src_file_path in $SRC/*; do
    file_name=$(basename $src_file_path)
    ./tools/copy.sh "${SRC}/${file_name}" "${DEST}/${file_name}"
done