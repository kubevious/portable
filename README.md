# What is Kubevious Portable?
**Kubevious** (pronounced [kju:bvi:əs]) is open-source software that provides a usable and highly graphical interface for Kubernetes. Kubevious renders all configurations relevant to the application in one place. That saves a lot of time from operators, eliminating the need for looking up settings and digging within selectors and labels. 

While Kubevious operates inside the cluster and provides UI and configuration validation for the local cluster only, **Kubevious Portable** runs from the development workstation and connects to remote clusters. That allows rapid debugging for clusters that are configured in *~/.kube/config* file. 

Compared with Kubevious, Kubevious Portable is not equipped with [Time Machine](https://github.com/kubevious/kubevious/blob/master/docs/rules-engine.md#rules-engine) and [Rules Engine](https://youtu.be/Zb5ZIJEHONU). Those capabilities require significant processing and are not able to be executed within the Portable version. If required, consider installing full operation [here](https://kubevious.io).

# Running Kubevious Portable
```sh
docker run --rm -it \
  -p 5001:5001 \
  -v ~/.kube/config:/root/.kube/config \
  kubevious/portable
```

## Running Kubevious Portable for Minikube
```sh
docker run --rm -it \
  -p 5001:5001 \
  -v ~/.kube/config:/root/.kube/config \
  -v ~/.minikube/ca.crt:/data/$HOME/.minikube/ca.crt \
  -v ~/.minikube/profiles/minikube/client.crt:/data/$HOME/.minikube/profiles/minikube/client.crt \
  -v ~/.minikube/profiles/minikube/client.key:/data/$HOME/.minikube/profiles/minikube/client.key \
  kubevious/portable
```

-v ~/.minikube/ca.crt:/data/$HOME/.minikube/ca.crt \


## Running Kubevious Portable for GoogleCloudPlatform (GKE)
```sh
docker run --rm -it \
  -p 5001:5001 \
  -v ~/.kube/config:/root/.kube/config \
  -v ~/.config/gcloud:/root/.config/gcloud \
  kubevious/portable
```

## Running Kubevious Portable for DigitalOcean (DOKE)

### Running from on OS X
```sh
docker run --rm -it \
  -p 5001:5001 \
  -v ~/.kube/config:/root/.kube/config \
  -v ~/Library/Application\ Support/doctl/config.yaml:/root/.config/doctl/config.yaml \
  kubevious/portable
```

### Running on Linux
```sh
docker run --rm -it \
  -p 5001:5001 \
  -v ~/.kube/config:/root/.kube/config \
  -v ~/.config/doctl/config.yaml:/root/.config/doctl/config.yaml \
  kubevious/portable
```