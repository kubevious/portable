#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

export LOG_TO_FILE=false
export NODE_ENV=production
export KUBECONFIG=~/.kube/config
export KUBEVIOUS_ON_HOST=true

cd src
npm run build
npm run dev
