/*** UNDER NO CIRCUMSTANCES DO NOT EDIT THIS FILE. THIS FILE IS COPIED                                    ***/
/*** FROM OSS UI. ANY CHANGES TO BE MADE IN KUBEVIOUS OSS UI.                                             ***/
/*** SOURCE: ../parser/src/lib/parsers/api-groups.js                                                      ***/

module.exports = [
    {
        api: null,
        kinds: [
            "Node",
            "Namespace",
            "LimitRange",
            "Service",
            "ConfigMap",
            "Pod",
            "ServiceAccount",
            "PersistentVolumeClaim",
            "PersistentVolume"
        ]
    },
    {
        api: "apps",
        kinds: [
            "ReplicaSet",
            "Deployment",
            "DaemonSet",
            "StatefulSet"
        ]
    },
    {
        api: "autoscaling",
        kinds: [
            "HorizontalPodAutoscaler"
        ]
    },
    {
        api: "batch",
        kinds: [
            "Job"
        ]
    },
    {
        api: "extensions",
        kinds: [
            "Ingress"
        ]
    },
    {
        api: "rbac.authorization.k8s.io",
        kinds: [
            "Role",
            "RoleBinding",
            "ClusterRole",
            "ClusterRoleBinding",
        ]
    },
    {
        api: "policy",
        kinds: [
            "PodSecurityPolicy"
        ]
    }
]