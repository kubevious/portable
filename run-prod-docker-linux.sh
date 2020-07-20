#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

docker run --rm -it \
    -p 5001:5001 \
    -v $HOME/.kube/config:/root/.kube/config \
    -v $HOME/.config/gcloud:/root/.config/gcloud \
    -v $HOME/.config/doctl/config.yaml:/root/.config/doctl/config.yaml \
    kubevious/portable:dev