#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

docker run --rm -it \
    -p 5001:5001 \
    -v ~/.kube/config:/root/.kube/config:ro \
    -v ~/.minikube/ca.crt:/data/$HOME/.minikube/ca.crt:ro \
    -v ~/.minikube/profiles/minikube/client.crt:/data/$HOME/.minikube/profiles/minikube/client.crt:ro \
    -v ~/.minikube/profiles/minikube/client.key:/data/$HOME/.minikube/profiles/minikube/client.key:ro \
    -v ~/.config/gcloud:/root/.config/gcloud:ro \
    -v ~/.config/doctl/config.yaml:/root/.config/doctl/config.yaml:ro \
    -v ~/.aws/credentials:/root/.aws/credentials:ro \
    -v ~/.azure/azureProfile.json:/root/.azure/azureProfile.json:ro \
    -e NODE_ENV=development \
    kubevious/portable:dev
