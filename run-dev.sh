#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR
export MYSQL_HOST=localhost
export MYSQL_PORT=4033
export MYSQL_USER=root
export MYSQL_PASS=
export MYSQL_DB=kubevious

export LOG_TO_FILE=true
export NODE_ENV=development
export KUBECONFIG=~/.kube/config
export KUBEVIOUS_ON_HOST=true
export KUBEVIOUS_COLLECTOR=http://localhost:5001/api/v1/collect

cd src && npm run dev
