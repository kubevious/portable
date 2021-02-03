import { ApiGroup } from "../types";

export const API_GROUPS: ApiGroup[] = [
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
      "PersistentVolume",
    ],
  },
  {
    api: "apps",
    kinds: ["ReplicaSet", "Deployment", "DaemonSet", "StatefulSet"],
  },
  {
    api: "autoscaling",
    kinds: ["HorizontalPodAutoscaler"],
  },
  {
    api: "batch",
    kinds: ["Job"],
  },
  {
    api: "extensions",
    kinds: ["Ingress"],
  },
  {
    api: "rbac.authorization.k8s.io",
    kinds: ["Role", "RoleBinding", "ClusterRole", "ClusterRoleBinding"],
  },
  {
    api: "policy",
    kinds: ["PodSecurityPolicy"],
  },
  {
    api: "networking.k8s.io",
    kinds: ["NetworkPolicy"],
  },
];

// export const API_GROUPS;
