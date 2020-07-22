import { CLUSTERS } from '../boot/clustersMockData';

class MockClustersService {
    constructor(sharedState) {
        this.sharedState = sharedState;

        this._index = 0;
        setInterval(() => {
            this.sharedState.set('selected_cluster', CLUSTERS[this._index]);
            this._index++;
            if (this._index >= CLUSTERS.length) {
                this._index = 0;
            }
        }, 2000)
    }

    fetchClusters(cb) {
        cb(CLUSTERS)
    }

    activateCluster(data, cb) {
        cb({
            "success": false,
            "messages": [
                "\"/data/Users/super/.minikube/ca.crt\" not found.",
                "\"/data/Users/super/.minikube/client.crt\" not found.",
                "\"/data/Users/super/.minikube/client.key\" not found."
            ],
            "runCommands": [{
                "os": "Linux",
                "command": "docker run --rm -it \\\n  -p 5001:5001 \\\n  -v ~/.kube/config:/root/.kube/config \\\n  -v ~/.minikube/ca.crt:/data/Users/super/.minikube/ca.crt \\\n  -v /Users/super/.minikube/client.crt:/data/Users/super/.minikube/client.crt \\\n  -v /Users/super/.minikube/client.key:/data/Users/super/.minikube/client.key \\\n  kubevious/portable"
            }, {
                "os": "Mac",
                "command": "docker run --rm -it \\\n  -p 5001:5001 \\\n  -v ~/.kube/config:/root/.kube/config \\\n  -v /Users/super/.minikube/ca.crt:/data/Users/super/.minikube/ca.crt \\\n  -v /Users/super/.minikube/client.crt:/data/Users/super/.minikube/client.crt \\\n  -v /Users/super/.minikube/client.key:/data/Users/super/.minikube/client.key \\\n  kubevious/portable"
            }]
        })
    }
}

export default MockClustersService
