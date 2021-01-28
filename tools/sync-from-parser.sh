#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

source $MY_DIR/utils.sh

log_header "Sync from Parser"

global_status=0
function sync {
    ./copy-file-from-source.sh "$1" "$2" "parser"
    local status=$?
    if [[ ${status} -ne 0 ]]; then
        global_status=1
    fi
}

#Copying mock-data
sync "../mock-data/README.md" "../mock-data/README.md"

#Copying mock-data/data

# .yaml
sync "../mock-data/data/_.berlioz.yaml" "../mock-data/data/_.berlioz.yaml"
sync "../mock-data/data/_.default.yaml" "../mock-data/data/_.default.yaml"
sync "../mock-data/data/_.istio-system.yaml" "../mock-data/data/_.istio-system.yaml"
sync "../mock-data/data/_.kube-public.yaml" "../mock-data/data/_.kube-public.yaml"
sync "../mock-data/data/_.kube-system.yaml" "../mock-data/data/_.kube-system.yaml"
sync "../mock-data/data/berlioz.sql-schema.yaml" "../mock-data/data/berlioz.sql-schema.yaml"
sync "../mock-data/data/data-deployment-net-policy-sample.yaml" "../mock-data/data/data-deployment-net-policy-sample.yaml"
sync "../mock-data/data/data-network-policy.yaml" "../mock-data/data/data-network-policy.yaml"
sync "../mock-data/data/data-node.yaml" "../mock-data/data/data-node.yaml"
sync "../mock-data/data/data-pod-security-policy.yaml" "../mock-data/data/data-pod-security-policy.yaml"
sync "../mock-data/data/data-role-pv.yaml" "../mock-data/data/data-role-pv.yaml"
sync "../mock-data/data/data-role-pvc.yaml" "../mock-data/data/data-role-pvc.yaml"
sync "../mock-data/data/data-service-accounts.yaml" "../mock-data/data/data-service-accounts.yaml"
sync "../mock-data/data/istio-system.istio-crd-10.yaml" "../mock-data/data/istio-system.istio-crd-10.yaml"
sync "../mock-data/data/istio-system.istio-crd-11.yaml" "../mock-data/data/istio-system.istio-crd-11.yaml"
sync "../mock-data/data/istio-system.istio-crd-12.yaml" "../mock-data/data/istio-system.istio-crd-12.yaml"
sync "../mock-data/data/istio-system.istio-galley-configuration.yaml" "../mock-data/data/istio-system.istio-galley-configuration.yaml"
sync "../mock-data/data/istio-system.istio-security-custom-resources.yaml" "../mock-data/data/istio-system.istio-security-custom-resources.yaml"
sync "../mock-data/data/istio-system.istio-security.yaml" "../mock-data/data/istio-system.istio-security.yaml"
sync "../mock-data/data/istio-system.istio-sidecar-injector.yaml" "../mock-data/data/istio-system.istio-sidecar-injector.yaml"
sync "../mock-data/data/istio-system.istio.yaml" "../mock-data/data/istio-system.istio.yaml"
sync "../mock-data/data/istio-system.prometheus.yaml" "../mock-data/data/istio-system.prometheus.yaml"
sync "../mock-data/data/kube-system.berlioz.v1.yaml" "../mock-data/data/kube-system.berlioz.v1.yaml"
sync "../mock-data/data/kube-system.cluster-autoscaler-status.yaml" "../mock-data/data/kube-system.cluster-autoscaler-status.yaml"
sync "../mock-data/data/kube-system.extension-apiserver-authentication.yaml" "../mock-data/data/kube-system.extension-apiserver-authentication.yaml"
sync "../mock-data/data/kube-system.fluentd-gcp-config-old-v1.2.5.yaml" "../mock-data/data/kube-system.fluentd-gcp-config-old-v1.2.5.yaml"
sync "../mock-data/data/kube-system.fluentd-gcp-config-v1.2.5.yaml" "../mock-data/data/kube-system.fluentd-gcp-config-v1.2.5.yaml"
sync "../mock-data/data/kube-system.gke-common-webhook-lock.yaml" "../mock-data/data/kube-system.gke-common-webhook-lock.yaml"
sync "../mock-data/data/kube-system.heapster-config.yaml" "../mock-data/data/kube-system.heapster-config.yaml"
sync "../mock-data/data/kube-system.ingress-gce-lock.yaml" "../mock-data/data/kube-system.ingress-gce-lock.yaml"
sync "../mock-data/data/kube-system.ingress-uid.yaml" "../mock-data/data/kube-system.ingress-uid.yaml"
sync "../mock-data/data/kube-system.istio-init.v1.yaml" "../mock-data/data/kube-system.istio-init.v1.yaml"
sync "../mock-data/data/kube-system.istio.v1.yaml" "../mock-data/data/kube-system.istio.v1.yaml"
sync "../mock-data/data/kube-system.kube-dns-autoscaler.yaml" "../mock-data/data/kube-system.kube-dns-autoscaler.yaml"
sync "../mock-data/data/kube-system.kube-dns.yaml" "../mock-data/data/kube-system.kube-dns.yaml"
sync "../mock-data/data/kube-system.metrics-server-config.yaml" "../mock-data/data/kube-system.metrics-server-config.yaml"

# .json
sync "../mock-data/data/apps-v1-DaemonSet-fluentd-gcp-v3-2-0.json" "../mock-data/data/apps-v1-DaemonSet-fluentd-gcp-v3-2-0.json"
sync "../mock-data/data/apps-v1-DaemonSet-gprod-berlioz-main-agent.json" "../mock-data/data/apps-v1-DaemonSet-gprod-berlioz-main-agent.json"
sync "../mock-data/data/apps-v1-DaemonSet-metadata-proxy-v0-1.json" "../mock-data/data/apps-v1-DaemonSet-metadata-proxy-v0-1.json"
sync "../mock-data/data/apps-v1-DaemonSet-nvidia-gpu-device-plugin.json" "../mock-data/data/apps-v1-DaemonSet-nvidia-gpu-device-plugin.json"
sync "../mock-data/data/apps-v1-DaemonSet-prometheus-to-sd.json" "../mock-data/data/apps-v1-DaemonSet-prometheus-to-sd.json"
sync "../mock-data/data/apps-v1-Deployment-event-exporter-v0-2-4.json" "../mock-data/data/apps-v1-Deployment-event-exporter-v0-2-4.json"
sync "../mock-data/data/apps-v1-Deployment-fluentd-gcp-scaler.json" "../mock-data/data/apps-v1-Deployment-fluentd-gcp-scaler.json"
sync "../mock-data/data/apps-v1-Deployment-gprod-addr-main-app.json" "../mock-data/data/apps-v1-Deployment-gprod-addr-main-app.json"
sync "../mock-data/data/apps-v1-Deployment-gprod-addr-main-web.json" "../mock-data/data/apps-v1-Deployment-gprod-addr-main-web.json"
sync "../mock-data/data/apps-v1-Deployment-gprod-berlioz-main-ctlr.json" "../mock-data/data/apps-v1-Deployment-gprod-berlioz-main-ctlr.json"
sync "../mock-data/data/apps-v1-Deployment-gprod-sprt-main-dtrace.json" "../mock-data/data/apps-v1-Deployment-gprod-sprt-main-dtrace.json"
sync "../mock-data/data/apps-v1-Deployment-gprod-sprt-main-grfna.json" "../mock-data/data/apps-v1-Deployment-gprod-sprt-main-grfna.json"
sync "../mock-data/data/apps-v1-Deployment-gprod-sprt-main-prmts.json" "../mock-data/data/apps-v1-Deployment-gprod-sprt-main-prmts.json"
sync "../mock-data/data/apps-v1-Deployment-heapster.json" "../mock-data/data/apps-v1-Deployment-heapster.json"
sync "../mock-data/data/apps-v1-Deployment-kube-dns-autoscaler.json" "../mock-data/data/apps-v1-Deployment-kube-dns-autoscaler.json"
sync "../mock-data/data/apps-v1-Deployment-kube-dns.json" "../mock-data/data/apps-v1-Deployment-kube-dns.json"
sync "../mock-data/data/apps-v1-Deployment-l7-default-backend.json" "../mock-data/data/apps-v1-Deployment-l7-default-backend.json"
sync "../mock-data/data/apps-v1-Deployment-metrics-server-v0-3-1.json" "../mock-data/data/apps-v1-Deployment-metrics-server-v0-3-1.json"
sync "../mock-data/data/extensions-v1beta1-Ingress-gprod-addr-web.json" "../mock-data/data/extensions-v1beta1-Ingress-gprod-addr-web.json"
sync "../mock-data/data/v1-Service-default-http-backend.json" "../mock-data/data/v1-Service-default-http-backend.json"
sync "../mock-data/data/v1-Service-gprod-addr-main-app-default.json" "../mock-data/data/v1-Service-gprod-addr-main-app-default.json"
sync "../mock-data/data/v1-Service-gprod-addr-main-web-default.json" "../mock-data/data/v1-Service-gprod-addr-main-web-default.json"
sync "../mock-data/data/v1-Service-gprod-sprt-main-dtrace-client.json" "../mock-data/data/v1-Service-gprod-sprt-main-dtrace-client.json"
sync "../mock-data/data/v1-Service-gprod-sprt-main-dtrace-web.json" "../mock-data/data/v1-Service-gprod-sprt-main-dtrace-web.json"
sync "../mock-data/data/v1-Service-gprod-sprt-main-grfna-default.json" "../mock-data/data/v1-Service-gprod-sprt-main-grfna-default.json"
sync "../mock-data/data/v1-Service-gprod-sprt-main-prmts-push.json" "../mock-data/data/v1-Service-gprod-sprt-main-prmts-push.json"
sync "../mock-data/data/v1-Service-gprod-sprt-main-prmts-server.json" "../mock-data/data/v1-Service-gprod-sprt-main-prmts-server.json"
sync "../mock-data/data/v1-Service-heapster.json" "../mock-data/data/v1-Service-heapster.json"
sync "../mock-data/data/v1-Service-kube-dns.json" "../mock-data/data/v1-Service-kube-dns.json"
sync "../mock-data/data/v1-Service-kubernetes.json" "../mock-data/data/v1-Service-kubernetes.json"
sync "../mock-data/data/v1-Service-metrics-server.json" "../mock-data/data/v1-Service-metrics-server.json"
sync "../mock-data/data/v1-Service-sample-external-service.json" "../mock-data/data/v1-Service-sample-external-service.json"

#Copying mock-data/data/samples
sync "../mock-data/data/samples/deploy.sh" "../mock-data/data/samples/deploy.sh"

#Copying mock-data/data/samples/01-ingress-isolated-ns
sync "../mock-data/data/samples/01-ingress-isolated-ns/01-ingress-isolated-ns-01-namespace.yaml" "../mock-data/data/samples/01-ingress-isolated-ns/01-ingress-isolated-ns-01-namespace.yaml"
sync "../mock-data/data/samples/01-ingress-isolated-ns/01-ingress-isolated-ns-02-deployment.yaml" "../mock-data/data/samples/01-ingress-isolated-ns/01-ingress-isolated-ns-02-deployment.yaml"
sync "../mock-data/data/samples/01-ingress-isolated-ns/01-ingress-isolated-ns-03-deny-all-ingress.yaml" "../mock-data/data/samples/01-ingress-isolated-ns/01-ingress-isolated-ns-03-deny-all-ingress.yaml"
# Finish copying mock-data/data/samples/01-ingress-isolated-ns

#Copying mock-data/data/samples/02-ingress-isolated-ns
sync "../mock-data/data/samples/02-ingress-isolated-ns/02-ingress-isolated-ns-01-namespace.yaml" "../mock-data/data/samples/02-ingress-isolated-ns/02-ingress-isolated-ns-01-namespace.yaml"
sync "../mock-data/data/samples/02-ingress-isolated-ns/02-ingress-isolated-ns-02-deployment.yaml" "../mock-data/data/samples/02-ingress-isolated-ns/02-ingress-isolated-ns-02-deployment.yaml"
sync "../mock-data/data/samples/02-ingress-isolated-ns/02-ingress-isolated-ns-03-deny-all-ingress.yaml" "../mock-data/data/samples/02-ingress-isolated-ns/02-ingress-isolated-ns-03-deny-all-ingress.yaml"
# Finish copying mock-data/data/samples/02-ingress-isolated-ns

#Copying mock-data/data/samples/03-ingress-isolated-pod
sync "../mock-data/data/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-01-namespace.yaml" "../mock-data/data/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-01-namespace.yaml"
sync "../mock-data/data/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-02-isolated-nginx.yaml" "../mock-data/data/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-02-isolated-nginx.yaml"
sync "../mock-data/data/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-03-open-nginx.yaml" "../mock-data/data/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-03-open-nginx.yaml"
sync "../mock-data/data/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-04-deny-all-ingress.yaml" "../mock-data/data/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-04-deny-all-ingress.yaml"
# Finish copying mock-data/data/samples/03-ingress-isolated-pod

#Copying mock-data/data/samples/04-egress-isolated-ns
sync "../mock-data/data/samples/04-egress-isolated-ns/04-egress-isolated-ns-01-namespace.yaml" "../mock-data/data/samples/04-egress-isolated-ns/04-egress-isolated-ns-01-namespace.yaml"
sync "../mock-data/data/samples/04-egress-isolated-ns/04-egress-isolated-ns-02-deployment.yaml" "../mock-data/data/samples/04-egress-isolated-ns/04-egress-isolated-ns-02-deployment.yaml"
sync "../mock-data/data/samples/04-egress-isolated-ns/04-egress-isolated-ns-03-deny-all-egress.yaml" "../mock-data/data/samples/04-egress-isolated-ns/04-egress-isolated-ns-03-deny-all-egress.yaml"
# Finish copying mock-data/data/samples/04-egress-isolated-ns


#Copying mock-data/data/samples/05-egress-isolated-pod
sync "../mock-data/data/samples/05-egress-isolated-pod/05-egress-isolated-pod-01-namespace.yaml" "../mock-data/data/samples/05-egress-isolated-pod/05-egress-isolated-pod-01-namespace.yaml"
sync "../mock-data/data/samples/05-egress-isolated-pod/05-egress-isolated-pod-02-isolated-nginx.yaml" "../mock-data/data/samples/05-egress-isolated-pod/05-egress-isolated-pod-02-isolated-nginx.yaml"
sync "../mock-data/data/samples/05-egress-isolated-pod/05-egress-isolated-pod-03-open-nginx.yaml" "../mock-data/data/samples/05-egress-isolated-pod/05-egress-isolated-pod-03-open-nginx.yaml"
sync "../mock-data/data/samples/05-egress-isolated-pod/05-egress-isolated-pod-04-deny-all-egress.yaml" "../mock-data/data/samples/05-egress-isolated-pod/05-egress-isolated-pod-04-deny-all-egress.yaml"
# Finish copying mock-data/data/samples/05-egress-isolated-pod

#Copying mock-data/data/samples/06-multi-ns-web-app
sync "../mock-data/data/samples/06-multi-ns-web-app/06-multi-ns-web-app-01-namespace.yaml" "../mock-data/data/samples/06-multi-ns-web-app/06-multi-ns-web-app-01-namespace.yaml"
sync "../mock-data/data/samples/06-multi-ns-web-app/06-multi-ns-web-app-02-db.yaml" "../mock-data/data/samples/06-multi-ns-web-app/06-multi-ns-web-app-02-db.yaml"
sync "../mock-data/data/samples/06-multi-ns-web-app/06-multi-ns-web-app-03-backend.yaml" "../mock-data/data/samples/06-multi-ns-web-app/06-multi-ns-web-app-03-backend.yaml"
sync "../mock-data/data/samples/06-multi-ns-web-app/06-multi-ns-web-app-04-logger.yaml" "../mock-data/data/samples/06-multi-ns-web-app/06-multi-ns-web-app-04-logger.yaml"
sync "../mock-data/data/samples/06-multi-ns-web-app/06-multi-ns-web-app-05-frontend.yaml" "../mock-data/data/samples/06-multi-ns-web-app/06-multi-ns-web-app-05-frontend.yaml"
sync "../mock-data/data/samples/06-multi-ns-web-app/06-multi-ns-web-app-06-policies.yaml" "../mock-data/data/samples/06-multi-ns-web-app/06-multi-ns-web-app-06-policies.yaml"
# Finish copying mock-data/data/samples/06-multi-ns-web-app

# Finish copying mock-data/data/samples

# Finish copying mock-data/data

#Copying mock-data/data-big

# .yaml
sync "../mock-data/data-big/data-all.yaml" "../mock-data/data-big/data-all.yaml"
sync "../mock-data/data-big/data-cluster-role-bindings.yaml" "../mock-data/data-big/data-cluster-role-bindings.yaml"
sync "../mock-data/data-big/data-cluster-roles.yaml" "../mock-data/data-big/data-cluster-roles.yaml"
sync "../mock-data/data-big/data-config-maps-huge.yaml" "../mock-data/data-big/data-config-maps-huge.yaml"
sync "../mock-data/data-big/data-config-maps.yaml" "../mock-data/data-big/data-config-maps.yaml"
sync "../mock-data/data-big/data-custom-data.yaml" "../mock-data/data-big/data-custom-data.yaml"
sync "../mock-data/data-big/data-deployment-net-policy-sample.yaml" "../mock-data/data-big/data-deployment-net-policy-sample.yaml"
sync "../mock-data/data-big/data-ingresses.yaml" "../mock-data/data-big/data-ingresses.yaml"
sync "../mock-data/data-big/data-network-policy.yaml" "../mock-data/data-big/data-network-policy.yaml"
sync "../mock-data/data-big/data-node.yaml" "../mock-data/data-big/data-node.yaml"
sync "../mock-data/data-big/data-pod-security-policy.yaml" "../mock-data/data-big/data-pod-security-policy.yaml"
sync "../mock-data/data-big/data-role-bindings.yaml" "../mock-data/data-big/data-role-bindings.yaml"
sync "../mock-data/data-big/data-role-pv.yaml" "../mock-data/data-big/data-role-pv.yaml"
sync "../mock-data/data-big/data-role-pvc.yaml" "../mock-data/data-big/data-role-pvc.yaml"
sync "../mock-data/data-big/data-roles.yaml" "../mock-data/data-big/data-roles.yaml"
sync "../mock-data/data-big/data-service-accounts.yaml" "../mock-data/data-big/data-service-accounts.yaml"
sync "../mock-data/data-big/tmp.yaml" "../mock-data/data-big/tmp.yaml"

#Copying mock-data/data-big/samples
sync "../mock-data/data-big/samples/deploy.sh" "../mock-data/data-big/samples/deploy.sh"

#Copying mock-data/data-big/samples/01-ingress-isolated-ns
sync "../mock-data/data-big/samples/01-ingress-isolated-ns/01-ingress-isolated-ns-01-namespace.yaml" "../mock-data/data-big/samples/01-ingress-isolated-ns/01-ingress-isolated-ns-01-namespace.yaml"
sync "../mock-data/data-big/samples/01-ingress-isolated-ns/01-ingress-isolated-ns-02-deployment.yaml" "../mock-data/data-big/samples/01-ingress-isolated-ns/01-ingress-isolated-ns-02-deployment.yaml"
sync "../mock-data/data-big/samples/01-ingress-isolated-ns/01-ingress-isolated-ns-03-deny-all-ingress.yaml" "../mock-data/data-big/samples/01-ingress-isolated-ns/01-ingress-isolated-ns-03-deny-all-ingress.yaml"
# Finish copying mock-data/data-big/samples/01-ingress-isolated-ns

#Copying mock-data/data-big/samples/02-ingress-isolated-ns
sync "../mock-data/data-big/samples/02-ingress-isolated-ns/02-ingress-isolated-ns-01-namespace.yaml" "../mock-data/data-big/samples/02-ingress-isolated-ns/02-ingress-isolated-ns-01-namespace.yaml"
sync "../mock-data/data-big/samples/02-ingress-isolated-ns/02-ingress-isolated-ns-02-deployment.yaml" "../mock-data/data-big/samples/02-ingress-isolated-ns/01-ingress-isolated-ns-02-deployment.yaml"
sync "../mock-data/data-big/samples/02-ingress-isolated-ns/02-ingress-isolated-ns-03-deny-all-ingress.yaml" "../mock-data/data-big/samples/02-ingress-isolated-ns/01-ingress-isolated-ns-03-deny-all-ingress.yaml"
# Finish copying mock-data/data-big/samples/02-ingress-isolated-ns

#Copying mock-data/data-big/samples/03-ingress-isolated-pod
sync "../mock-data/data-big/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-01-namespace.yaml" "../mock-data/data-big/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-01-namespace.yaml"
sync "../mock-data/data-big/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-02-isolated-nginx.yaml" "../mock-data/data-big/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-02-isolated-nginx.yaml"
sync "../mock-data/data-big/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-03-open-nginx.yaml" "../mock-data/data-big/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-03-open-nginx.yaml"
sync "../mock-data/data-big/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-04-deny-all-ingress.yaml" "../mock-data/data-big/samples/03-ingress-isolated-pod/03-ingress-isolated-pod-04-deny-all-ingress.yaml"
# Finish copying mock-data/data-big/samples/03-ingress-isolated-pod

#Copying mock-data/data-big/samples/04-egress-isolated-ns
sync "../mock-data/data-big/samples/04-egress-isolated-ns/04-egress-isolated-ns-01-namespace.yaml" "../mock-data/data-big/samples/04-egress-isolated-ns/04-egress-isolated-ns-01-namespace.yaml"
sync "../mock-data/data-big/samples/04-egress-isolated-ns/04-egress-isolated-ns-02-deployment.yaml" "../mock-data/data-big/samples/04-egress-isolated-ns/04-egress-isolated-ns-02-deployment.yaml"
sync "../mock-data/data-big/samples/04-egress-isolated-ns/04-egress-isolated-ns-03-deny-all-egress.yaml" "../mock-data/data-big/samples/04-egress-isolated-ns/04-egress-isolated-ns-03-deny-all-egress.yaml"
# Finish copying mock-data/data-big/samples/04-egress-isolated-ns


#Copying mock-data/data-big/samples/05-egress-isolated-pod
sync "../mock-data/data-big/samples/05-egress-isolated-pod/05-egress-isolated-pod-01-namespace.yaml" "../mock-data/data-big/samples/05-egress-isolated-pod/05-egress-isolated-pod-01-namespace.yaml"
sync "../mock-data/data-big/samples/05-egress-isolated-pod/05-egress-isolated-pod-02-isolated-nginx.yaml" "../mock-data/data-big/samples/05-egress-isolated-pod/05-egress-isolated-pod-02-isolated-nginx.yaml"
sync "../mock-data/data-big/samples/05-egress-isolated-pod/05-egress-isolated-pod-03-open-nginx.yaml" "../mock-data/data-big/samples/05-egress-isolated-pod/05-egress-isolated-pod-03-open-nginx.yaml"
sync "../mock-data/data-big/samples/05-egress-isolated-pod/05-egress-isolated-pod-04-deny-all-egress.yaml" "../mock-data/data-big/samples/05-egress-isolated-pod/05-egress-isolated-pod-04-deny-all-egress.yaml"
# Finish copying mock-data/data-big/samples/05-egress-isolated-pod

#Copying mock-data/data-big/samples/06-multi-ns-web-app
sync "../mock-data/data-big/samples/06-multi-ns-web-app/06-multi-ns-web-app-01-namespace.yaml" "../mock-data/data-big/samples/06-multi-ns-web-app/06-multi-ns-web-app-01-namespace.yaml"
sync "../mock-data/data-big/samples/06-multi-ns-web-app/06-multi-ns-web-app-02-db.yaml" "../mock-data/data-big/samples/06-multi-ns-web-app/06-multi-ns-web-app-02-db.yaml"
sync "../mock-data/data-big/samples/06-multi-ns-web-app/06-multi-ns-web-app-03-backend.yaml" "../mock-data/data-big/samples/06-multi-ns-web-app/06-multi-ns-web-app-03-backend.yaml"
sync "../mock-data/data-big/samples/06-multi-ns-web-app/06-multi-ns-web-app-04-logger.yaml" "../mock-data/data-big/samples/06-multi-ns-web-app/06-multi-ns-web-app-04-logger.yaml"
sync "../mock-data/data-big/samples/06-multi-ns-web-app/06-multi-ns-web-app-05-frontend.yaml" "../mock-data/data-big/samples/06-multi-ns-web-app/06-multi-ns-web-app-05-frontend.yaml"
sync "../mock-data/data-big/samples/06-multi-ns-web-app/06-multi-ns-web-app-06-policies.yaml" "../mock-data/data-big/samples/06-multi-ns-web-app/06-multi-ns-web-app-06-policies.yaml"
# Finish copying mock-data/data-big/samples/06-multi-ns-web-app

# Finish copying mock-data/data-big

# Finish copying mock-data

#Copying concrete
sync "concrete/item.ts" "concrete/item.ts"
sync "concrete/registry.ts" "concrete/registry.ts"
# Finish copying concrete

#Copying facade
sync "facade/registry.ts" "facade/registry.ts"
# Finish copying facade

#Copying loaders
sync "loaders/k8s.ts" "loaders/k8s.ts"
sync "loaders/local.ts" "loaders/local.ts"
# Finish copying loaders


#Copying logic

#Copying logic/helpers
sync "logic/helpers/common.ts" "logic/helpers/common.ts"
sync "logic/helpers/index.ts" "logic/helpers/index.ts"
sync "logic/helpers/resources.ts" "logic/helpers/resources.ts"
sync "logic/helpers/roles.ts" "logic/helpers/roles.ts"
# Finish copying logic/helpers

#Copying logic/parsers
sync "logic/parsers/001_scope-all.ts" "logic/parsers/001_scope-all.ts"
sync "logic/parsers/005_node.ts" "logic/parsers/005_node.ts"
sync "logic/parsers/010_namespace.ts" "logic/parsers/010_namespace.ts"
sync "logic/parsers/030_app-controllers.ts" "logic/parsers/030_app-controllers.ts"
sync "logic/parsers/031_app-controller-cont.ts" "logic/parsers/031_app-controller-cont.ts"
sync "logic/parsers/032_app-controller-volume.ts" "logic/parsers/032_app-controller-volume.ts"
sync "logic/parsers/033_app-controller-service-account.ts" "logic/parsers/033_app-controller-service-account.ts"
sync "logic/parsers/035_autoscaler.ts" "logic/parsers/035_autoscaler.ts"
sync "logic/parsers/040_service.ts" "logic/parsers/040_service.ts"
sync "logic/parsers/050_ingress.ts" "logic/parsers/050_ingress.ts"
sync "logic/parsers/090_replica-set.ts" "logic/parsers/090_replica-set.ts"
sync "logic/parsers/100_pod.ts" "logic/parsers/100_pod.ts"
sync "logic/parsers/101_pod_pvc.ts" "logic/parsers/101_pod_pvc.ts"
sync "logic/parsers/110_config-map.ts" "logic/parsers/110_config-map.ts"
sync "logic/parsers/110_network-policy.ts" "logic/parsers/110_network-policy.ts"
sync "logic/parsers/110_persistent-volume-claim.ts" "logic/parsers/110_persistent-volume-claim.ts"
sync "logic/parsers/110_service-account.ts" "logic/parsers/110_service-account.ts"
sync "logic/parsers/111_network-policy-used-by.ts" "logic/parsers/111_network-policy-used-by.ts"
sync "logic/parsers/111_pvc_pv.ts" "logic/parsers/111_pvc_pv.ts"
sync "logic/parsers/112_network-policies.ts" "logic/parsers/112_network-policies.ts"
sync "logic/parsers/115_role-init.ts" "logic/parsers/115_role-init.ts"
sync "logic/parsers/120_role-binding.ts" "logic/parsers/120_role-binding.ts"
sync "logic/parsers/125_role.ts" "logic/parsers/125_role.ts"
sync "logic/parsers/130_service-account-role-matrix.ts" "logic/parsers/130_service-account-role-matrix.ts"
sync "logic/parsers/135_role_psp.ts" "logic/parsers/135_role_psp.ts"
sync "logic/parsers/136_pod-security-policy.ts" "logic/parsers/136_pod-security-policy.ts"
# Finish copying logic/parsers

#Copying logic/polishers
sync "logic/polishers/010_namespace.ts" "logic/polishers/010_namespace.ts"
sync "logic/polishers/020_nodes-resources.ts" "logic/polishers/020_nodes-resources.ts"
sync "logic/polishers/030_container-resource.ts" "logic/polishers/030_container-resource.ts"
sync "logic/polishers/031_app-controller-resources.ts" "logic/polishers/031_app-controller-resources.ts"
sync "logic/polishers/032_namespace-resources.ts" "logic/polishers/032_namespace-resources.ts"
sync "logic/polishers/033_container-radioactive.ts" "logic/polishers/033_container-radioactive.ts"
sync "logic/polishers/033_launcher-radioactive.ts" "logic/polishers/033_launcher-radioactive.ts"
sync "logic/polishers/033_pod-radioactive.ts" "logic/polishers/033_pod-radioactive.ts"
sync "logic/polishers/040_storage-class.ts" "logic/polishers/040_storage-class.ts"
sync "logic/polishers/041_storage.ts" "logic/polishers/041_storage.ts"
# Finish copying logic/polishers

#Copying logic/processor
sync "logic/processor/base/builder.ts" "logic/processor/base/builder.ts"
sync "logic/processor/base/executor.ts" "logic/processor/base/executor.ts"
sync "logic/processor/concrete/builder.ts" "logic/processor/concrete/builder.ts"
sync "logic/processor/concrete/executor.ts" "logic/processor/concrete/executor.ts"
sync "logic/processor/concrete/handler-args.ts" "logic/processor/concrete/handler-args.ts"
sync "logic/processor/logic/builder.ts" "logic/processor/logic/builder.ts"
sync "logic/processor/logic/executor.ts" "logic/processor/logic/executor.ts"
sync "logic/processor/logic/handler-args.ts" "logic/processor/logic/handler-args.ts"
sync "logic/processor/scope/builder.ts" "logic/processor/scope/builder.ts"
sync "logic/processor/scope/executor.ts" "logic/processor/scope/executor.ts"
sync "logic/processor/scope/handler-args.ts" "logic/processor/scope/handler-args.ts"
sync "logic/processor/index.ts" "logic/processor/index.ts"
sync "logic/processor/types.ts" "logic/processor/types.ts"
# Finish copying logic/processor

#Copying logic/scope
sync "logic/scope/app.ts" "logic/scope/app.ts"
sync "logic/scope/index.ts" "logic/scope/index.ts"
sync "logic/scope/infra.ts" "logic/scope/infra.ts"
sync "logic/scope/item.ts" "logic/scope/item.ts"
sync "logic/scope/items.ts" "logic/scope/items.ts"
sync "logic/scope/label-matcher.ts" "logic/scope/label-matcher.ts"
sync "logic/scope/namespace.ts" "logic/scope/namespace.ts"
# Finish copying logic/scope

sync "logic/item.ts" "logic/item.ts"
sync "logic/parser-builder.ts" "logic/parser-builder.ts"
sync "logic/properties-builder.ts" "logic/properties-builder.ts"
sync "logic/table-builder.ts" "logic/table-builder.ts"
# Finish copying logic

#Copying mock
sync "mock/gke.ts" "mock/gke.ts"
sync "mock/index-gke.ts" "mock/index-gke.ts"
sync "mock/index-remote.ts" "mock/index-remote.ts"
sync "mock/k8s-mock.ts" "mock/k8s-mock.ts"
# Finish copying mock

#Copying parsers
sync "parsers/api-groups.ts" "parsers/api-groups.ts"
sync "parsers/k8s.ts" "parsers/k8s.ts"
# Finish copying parsers

#Copying reporting
sync "reporting/reporter.ts" "reporting/reporter.ts"
sync "reporting/snapshot-reporter.ts" "reporting/snapshot-reporter.ts"
sync "reporting/snapshot.ts" "reporting/snapshot.ts"
sync "reporting/target.ts" "reporting/target.ts"
# Finish copying reporting

#Copying routers
sync "routers/top.ts" "routers/top.ts"
# Finish copying routers

#Copying utils
sync "utils/debug-object-logger.ts" "utils/debug-object-logger.ts"
sync "utils/job-dampener.ts" "utils/job-dampener.ts"
sync "utils/name-helpers.ts" "utils/name-helpers.ts"
# Finish copying utils

sync "context.ts" "context.ts"
sync "index.ts" "index.ts"
sync "version.ts" "version.ts"
if [[ global_status -ne 0 ]]; then
    log_error "[sync-from-parser] failed"
fi

exit $global_status
