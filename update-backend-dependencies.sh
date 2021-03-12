#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

cd src

npm update \
    the-promise \
    the-lodash \
    the-logger \
    k8s-super-client \
    @kubevious/helpers \
    @kubevious/helper-backend \
    @kubevious/worldvious-client \
    @kubevious/websocket-server \
    @kubevious/helper-logic-processor