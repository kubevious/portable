# What is Kubevious Portable?
**[Kubevious](https://github.com/kubevious/kubevious)** (pronounced [kju:bvi:əs]) is open-source software that provides a usable and highly graphical interface for Kubernetes. Kubevious renders all configurations relevant to the application in one place. That saves a lot of time from operators, eliminating the need for looking up settings and digging within selectors and labels. 

While Kubevious operates inside the cluster and provides UI and configuration validation for the local cluster only, **[Kubevious Portable](https://github.com/kubevious/portable)** runs from the development workstation and connects to remote clusters. That allows rapid debugging for clusters that are configured in *~/.kube/config* file. 

Compared with Kubevious, Kubevious Portable is not equipped with [Time Machine](https://github.com/kubevious/kubevious/blob/master/docs/rules-engine.md#rules-engine) and [Rules Engine](https://youtu.be/Zb5ZIJEHONU). Those capabilities require significant processing and are not able to be executed within the Portable version. If required, consider installing full operation [here](https://kubevious.io).

![Kubevious Portable Preview](https://raw.githubusercontent.com/kubevious/media/master/portable/portable-view.png)

# Running Kubevious Portable

### Running on Mac OS X or Linux:
```sh
docker run --rm -it \
  -p 5001:5001 \
  -v ~/.kube/config:/root/.kube/config:ro \
  kubevious/portable
```

### Running on Windows
```sh
docker run --rm -it ^
  -p 5001:5001 ^
  -v "%USERPROFILE%/.kube/config:/root/.kube/config:ro" ^
  kubevious/portable
```

![Running Kubevious Portable](https://raw.githubusercontent.com/kubevious/media/master/portable/portable-run-script.png)

# Issue Reporting
In case you identify issues or have suggestions to improve Kubevious Portable, please take a minute and [report here](https://github.com/kubevious/portable/issues/new/choose).

## Running Kubevious Portable for Minikube
```sh
docker run --rm -it \
  -p 5001:5001 \
  -v ~/.kube/config:/root/.kube/config:ro \
  -v ~/.minikube/ca.crt:/data/$HOME/.minikube/ca.crt:ro \
  -v ~/.minikube/profiles/minikube/client.crt:/data/$HOME/.minikube/profiles/minikube/client.crt:ro \
  -v ~/.minikube/profiles/minikube/client.key:/data/$HOME/.minikube/profiles/minikube/client.key:ro \
  kubevious/portable
```

## Running Kubevious Portable for Google Cloud Platform (GKE)

### Running on Mac OS X or Linux:
```sh
docker run --rm -it \
  -p 5001:5001 \
  -v ~/.kube/config:/root/.kube/config:ro \
  -v ~/.config/gcloud:/root/.config/gcloud \
  kubevious/portable:gcp
```

### Running on Windows
```sh
docker run --rm -it ^
  -p 5001:5001 ^
  -v "%USERPROFILE%/.kube/config:/root/.kube/config:ro" ^
  -v "%USERPROFILE%/AppData/Roaming/gcloud:/root/.config/gcloud" ^
  kubevious/portable
```

## Running Kubevious Portable for Amazon Web Services (EKS)

### Running on Mac OS X or Linux:
```sh
docker run --rm -it \
  -p 5001:5001 \
  -v ~/.kube/config:/root/.kube/config:ro \
  -v ~/.aws/credentials:/root/.aws/credentials:ro \
  kubevious/portable:aws
```

### Running on Windows
```sh
docker run --rm -it ^
  -p 5001:5001 ^
  -v "%USERPROFILE%/.kube/config:/root/.kube/config:ro" ^
  -v "%USERPROFILE%/.aws/credentials:/root/.aws/credentials:ro" ^
  kubevious/portable
```

## Running Kubevious Portable for Digital Ocean (DOKE)

### Running on Mac OS X
```sh
docker run --rm -it \
  -p 5001:5001 \
  -v ~/.kube/config:/root/.kube/config:ro \
  -v ~/Library/Application\ Support/doctl/config.yaml:/root/.config/doctl/config.yaml:ro \
  kubevious/portable:do
```

### Running on Linux
```sh
docker run --rm -it \
  -p 5001:5001 \
  -v ~/.kube/config:/root/.kube/config:ro \
  -v ~/.config/doctl/config.yaml:/root/.config/doctl/config.yaml:ro \
  kubevious/portable:do
```

### Running on Windows
```sh
docker run --rm -it ^
  -p 5001:5001 ^
  -v "%USERPROFILE%/.kube/config:/root/.kube/config:ro" ^
  -v "%USERPROFILE%/AppData/Local/doctl/config/config.yaml:/root/.config/doctl/config.yaml:ro" ^
  kubevious/portable:do
```
## Operating Instructions

Upon startup Kubevious Portable lists contexts from **~/.kube/config** file. The only big difference from full version of Kubevious is the choice of cluster that has to be made upon launch. Users can change cluster selection afterwards.

![Selecting Cluster in Kubevious Portable](https://raw.githubusercontent.com/kubevious/media/master/portable/portable-cluster-select.png)

