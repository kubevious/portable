#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

cd $MY_DIR/src
rm -rf node_modules/
npm install
npm update @kubevious/helpers websocket-subscription-server the-promise the-lodash the-logger k8s-super-client

cd $MY_DIR/client
rm -rf node_modules/
npm install
npm install --save-dev
npm update the-lodash @kubevious/helpers
