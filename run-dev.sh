#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

export LOG_TO_FILE=true
export NODE_ENV=development
export KUBECONFIG=~/.kube/config
export KUBEVIOUS_ON_HOST=true
export KUBEVIOUS_COLLECTOR=http://localhost:5001/api/v1/collect

cd src
npm run build
npm run dev
