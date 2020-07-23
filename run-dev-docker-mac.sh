#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

docker run --rm -it \
    -p 5001:5001 \
    -v ~/.kube/config:/root/.kube/config \
    -v ~/.minikube/ca.crt:/data/$HOME/.minikube/ca.crt \
    -v ~/.minikube/profiles/minikube/client.crt:/data/$HOME/.minikube/profiles/minikube/client.crt \
    -v ~/.minikube/profiles/minikube/client.key:/data/$HOME/.minikube/profiles/minikube/client.key \
    -v ~/.config/gcloud:/root/.config/gcloud \
    -v ~/Library/Application\ Support/doctl/config.yaml:/root/.config/doctl/config.yaml \
    -v ~/.aws/config:/root/.aws/config \
    -v ~/.aws/credentials:/root/.aws/credentials \
    -e NODE_ENV=development \
    kubevious/portable:dev

