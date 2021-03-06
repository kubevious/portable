#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR/..

source $MY_DIR/utils.sh

function cleanup {
  root_path=$1
  log_info "Cleanup Path: ${root_path}"
  cd "${root_path}"
  pwd

  target=${root_path}/node_modules
  log_info "+ Deleting: ${target}"
  rm -rf "${target}"
  status=$?
  if [[ ${status} -ne 0 ]]; then
    log_error "| error deleting ${target}"
  fi

  files=($(grep -RnslI "UNDER NO CIRCUMSTANCES DO NOT EDIT THIS FILE" .))
  for file in "${files[@]}"
  do
    echo "+ Deleting: ${file}"
    rm "${file}"
    status=$?
    if [[ ${status} -ne 0 ]]; then
      log_error "| error deleting ${file}"
    fi
  done
}

cleanup "${MY_DIR}/../src"

cleanup "${MY_DIR}/../client"
