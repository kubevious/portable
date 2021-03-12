#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

cd $MY_DIR/src
rm -rf node_modules/
npm install
${MY_DIR}/update-backend-dependencies.sh

cd $MY_DIR/client
rm -rf node_modules/
npm install
${MY_DIR}/update-frontend-dependencies.sh