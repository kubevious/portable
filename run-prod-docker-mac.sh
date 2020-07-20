#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

docker run --rm -it \
    -p 5001:5001 \
    -v $HOME/.kube/config:/root/.kube/config \
    -v $HOME/.minikube/ca.crt:/data/$HOME/.minikube/ca.crt \
    -v $HOME/.minikube/client.crt:/data/$HOME/.minikube/client.crt \
    -v $HOME/.minikube/client.key:/data/$HOME/.minikube/client.key \
    -v $HOME/.config/gcloud:/root/.config/gcloud \
    -v "$HOME/Library/Application Support/doctl/config.yaml:/root/.config/doctl/config.yaml" \
    kubevious/portable:dev

