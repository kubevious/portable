#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

# --no-cache
docker build \
    -m 4000m \
    --build-arg INSTALL_AWS=false \
    --build-arg INSTALL_GCLOUD=false \
    --build-arg INSTALL_DO=false \
    --progress=plain \
    -t kubevious/portable \
    .
