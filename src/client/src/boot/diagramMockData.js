export const GRAPH_DATA = {
    "rn": "root",
    "kind": "root",
    "order": 100,
    "alertCount": {},
    "flags": {
        "xnamespace": {
            "propagatable": true,
            "name": "xnamespace"
        },
        "radioactive": {
            "propagatable": true,
            "name": "radioactive"
        }
    },
    "children": [
        {
            "rn": "ns-[kubevious]",
            "name": "kubevious",
            "kind": "ns",
            "order": 100,
            "alertCount": {},
            "flags": {
                "xnamespace": {
                    "propagatable": true,
                    "name": "xnamespace"
                }
            },
            "markers": [
                "marker-1",
                "marker-2",
            ],
            "children": [
                {
                    "rn": "app-[kubevious]",
                    "name": "kubevious",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[55c9b88bfc]",
                                    "name": "55c9b88bfc",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[6b7f7f78d6]",
                                    "name": "6b7f7f78d6",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[794d54fdb6]",
                                    "name": "794d54fdb6",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[7f89f68d6c]",
                                    "name": "7f89f68d6c",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[865cf6dfcf]",
                                    "name": "865cf6dfcf",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[s9jjd]",
                                            "name": "s9jjd",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[d6b55cfc9]",
                                    "name": "d6b55cfc9",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[kubevious]",
                            "name": "kubevious",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[kubevious/kubevious]",
                                    "name": "kubevious/kubevious",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[kubevious-mysql-client]",
                                    "name": "kubevious-mysql-client",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "shared": {
                                            "name": "shared"
                                        }
                                    },
                                    "children": []
                                },
                                {
                                    "rn": "port-[http (TCP-4000)]",
                                    "name": "http (TCP-4000)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[NodePort]",
                                            "name": "NodePort",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[NodePort]",
                            "name": "NodePort",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[kubevious]",
                            "name": "kubevious",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[kubevious-parser]",
                    "name": "kubevious-parser",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[6594d58d68]",
                                    "name": "6594d58d68",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[679556b9f6]",
                                    "name": "679556b9f6",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[6c6749879]",
                                    "name": "6c6749879",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[6f8c445555]",
                                    "name": "6f8c445555",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[76bc6566b]",
                                    "name": "76bc6566b",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[85d9bf6d8c]",
                                    "name": "85d9bf6d8c",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[dqqsg]",
                                            "name": "dqqsg",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[kubevious-parser]",
                            "name": "kubevious-parser",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[kubevious/parser]",
                                    "name": "kubevious/parser",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[http (TCP-4500)]",
                                    "name": "http (TCP-4500)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[kubevious-parser]",
                            "name": "kubevious-parser",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[kubevious-kubevious-parser]",
                                    "name": "kubevious-kubevious-parser",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[kubevious-kubevious-parser]",
                                            "name": "kubevious-kubevious-parser",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[kubevious-ui]",
                    "name": "kubevious-ui",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[54dc98746b]",
                                    "name": "54dc98746b",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[66697c58fb]",
                                    "name": "66697c58fb",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[679dc5b85b]",
                                    "name": "679dc5b85b",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[686cfc86f]",
                                    "name": "686cfc86f",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[8g8f8]",
                                            "name": "8g8f8",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[757d9cc4cc]",
                                    "name": "757d9cc4cc",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[79cccf9fb9]",
                                    "name": "79cccf9fb9",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[85f4cb5959]",
                                    "name": "85f4cb5959",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[f6c46df8c]",
                                    "name": "f6c46df8c",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[kubevious-ui]",
                            "name": "kubevious-ui",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[kubevious/ui]",
                                    "name": "kubevious/ui",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[kubevious-mysql-client]",
                                    "name": "kubevious-mysql-client",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "shared": {
                                            "name": "shared"
                                        }
                                    },
                                    "children": []
                                },
                                {
                                    "rn": "port-[http (TCP-3000)]",
                                    "name": "http (TCP-3000)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[NodePort]",
                                            "name": "NodePort",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": [
                                                {
                                                    "rn": "ingress-[kubevious]",
                                                    "name": "kubevious",
                                                    "kind": "ingress",
                                                    "order": 100,
                                                    "alertCount": {},
                                                    "flags": {},
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[header-config-volume]",
                                    "name": "header-config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[kubevious-ui-header]",
                                            "name": "kubevious-ui-header",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[header-config-volume]",
                                    "name": "header-config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[kubevious-ui-header]",
                                            "name": "kubevious-ui-header",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[NodePort]",
                            "name": "NodePort",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "ingress-[kubevious]",
                                    "name": "kubevious",
                                    "kind": "ingress",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "ingress-[kubevious]",
                            "name": "kubevious",
                            "kind": "ingress",
                            "order": 250,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[kubevious-ui]",
                            "name": "kubevious-ui",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[kubevious-mysql]",
                    "name": "kubevious-mysql",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[StatefulSet]",
                            "name": "StatefulSet",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "pod-[0]",
                                    "name": "0",
                                    "kind": "pod",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[mysql]",
                            "name": "mysql",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[mysql]",
                                    "name": "mysql",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[mysql (TCP-3306)]",
                                    "name": "mysql (TCP-3306)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[conf]",
                                    "name": "conf",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[init-script]",
                                    "name": "init-script",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[kubevious-mysql-init-script]",
                                            "name": "kubevious-mysql-init-script",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[init-mysql]",
                            "name": "init-mysql",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[mysql]",
                                    "name": "mysql",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[conf]",
                                    "name": "conf",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[config-map]",
                                    "name": "config-map",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[kubevious-mysql-conf]",
                                            "name": "kubevious-mysql-conf",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[conf]",
                                    "name": "conf",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[config-map]",
                                    "name": "config-map",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[kubevious-mysql-conf]",
                                            "name": "kubevious-mysql-conf",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[init-script]",
                                    "name": "init-script",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[kubevious-mysql-init-script]",
                                            "name": "kubevious-mysql-init-script",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "raw-[Raw Configs]",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "raw-[ConfigMaps]",
                            "name": "ConfigMaps",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "configmap-[big-config]",
                                    "name": "big-config",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-[book]",
            "name": "book",
            "kind": "ns",
            "order": 100,
            "alertCount": {},
            "flags": {},
            "children": [
                {
                    "rn": "app-[book-app]",
                    "name": "book-app",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "markers": [
                        "marker-1",
                        "marker-2",
                    ],
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[7676cf7c64]",
                                    "name": "7676cf7c64",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[b7c586fd6]",
                                    "name": "b7c586fd6",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[cloudsql-proxy]",
                            "name": "cloudsql-proxy",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/cloudsql-docker/gce-proxy]",
                                    "name": "gcr.io/cloudsql-docker/gce-proxy",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[google-cloud-key]",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[gprod-addr-main-app]",
                                            "name": "gprod-addr-main-app",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[nginx]",
                            "name": "nginx",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[nginx]",
                                    "name": "nginx",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[my-config-1]",
                                    "name": "my-config-1",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "shared": {
                                            "name": "shared"
                                        }
                                    },
                                    "children": []
                                },
                                {
                                    "rn": "port-[default (TCP-3000)]",
                                    "name": "default (TCP-3000)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[google-cloud-key]",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[gprod-addr-main-app]",
                                            "name": "gprod-addr-main-app",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": [
                                {
                                    "rn": "rlbndg-[kubevious-pods-fetcher]",
                                    "name": "kubevious-pods-fetcher",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "shared": {
                                            "name": "shared"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[kubevious-kubevious-parser]",
                                            "name": "kubevious-kubevious-parser",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[book-web]",
                    "name": "book-web",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "markers": [
                        "marker-3"
                    ],
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "markers": [
                                "marker-4"
                            ],
                            "children": [
                                {
                                    "rn": "replicaset-[765d65995c]",
                                    "name": "765d65995c",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[7b4b9c5cc5]",
                                    "name": "7b4b9c5cc5",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[b476b75d7]",
                                    "name": "b476b75d7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[nginx]",
                            "name": "nginx",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[nginx]",
                                    "name": "nginx",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[my-config-1]",
                                    "name": "my-config-1",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "shared": {
                                            "name": "shared"
                                        }
                                    },
                                    "children": []
                                },
                                {
                                    "rn": "port-[default (TCP-4000)]",
                                    "name": "default (TCP-4000)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[NodePort]",
                            "name": "NodePort",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {
                                "warn": 1
                            },
                            "flags": {},
                            "children": [
                                {
                                    "rn": "ingress-[book-web-ingress]",
                                    "name": "book-web-ingress",
                                    "kind": "ingress",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "ingress-[book-web-ingress]",
                            "name": "book-web-ingress",
                            "kind": "ingress",
                            "order": 250,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": [
                                {
                                    "rn": "rlbndg-[kubevious-pods-fetcher]",
                                    "name": "kubevious-pods-fetcher",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "shared": {
                                            "name": "shared"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[kubevious-kubevious-parser]",
                                            "name": "kubevious-kubevious-parser",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "raw-[Raw Configs]",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "raw-[Services]",
                            "name": "Services",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "service-[book-app-svc]",
                                    "name": "book-app-svc",
                                    "kind": "service",
                                    "order": 100,
                                    "alertCount": {
                                        "error": 1
                                    },
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-[ConfigMaps]",
                            "name": "ConfigMaps",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "configmap-[my-config-2]",
                                    "name": "my-config-2",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-[gitlab]",
            "name": "gitlab",
            "kind": "ns",
            "order": 100,
            "alertCount": {},
            "flags": {
                "xnamespace": {
                    "propagatable": true,
                    "name": "xnamespace"
                }
            },
            "children": [
                {
                    "rn": "app-[gitlab-cainjector]",
                    "name": "gitlab-cainjector",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[5d757b9fdd]",
                                    "name": "5d757b9fdd",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[zd7sf]",
                                            "name": "zd7sf",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[cainjector]",
                            "name": "cainjector",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[quay.io/jetstack/cert-manager-cainjector]",
                                    "name": "quay.io/jetstack/cert-manager-cainjector",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[gitlab-cainjector]",
                            "name": "gitlab-cainjector",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[gitlab-cainjector]",
                                    "name": "gitlab-cainjector",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[gitlab-cainjector]",
                                            "name": "gitlab-cainjector",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-cert-manager]",
                    "name": "gitlab-cert-manager",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[5ffcc7f99f]",
                                    "name": "5ffcc7f99f",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[b5h99]",
                                            "name": "b5h99",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[certmanager]",
                            "name": "certmanager",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[quay.io/jetstack/cert-manager-controller]",
                                    "name": "quay.io/jetstack/cert-manager-controller",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-9402]",
                                    "name": "TCP-9402",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[gitlab-cert-manager]",
                            "name": "gitlab-cert-manager",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[gitlab-cert-manager-controller-certificates]",
                                    "name": "gitlab-cert-manager-controller-certificates",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[gitlab-cert-manager-controller-certificates]",
                                            "name": "gitlab-cert-manager-controller-certificates",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "crlbndg-[gitlab-cert-manager-controller-challenges]",
                                    "name": "gitlab-cert-manager-controller-challenges",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[gitlab-cert-manager-controller-challenges]",
                                            "name": "gitlab-cert-manager-controller-challenges",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "crlbndg-[gitlab-cert-manager-controller-clusterissuers]",
                                    "name": "gitlab-cert-manager-controller-clusterissuers",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[gitlab-cert-manager-controller-clusterissuers]",
                                            "name": "gitlab-cert-manager-controller-clusterissuers",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "crlbndg-[gitlab-cert-manager-controller-ingress-shim]",
                                    "name": "gitlab-cert-manager-controller-ingress-shim",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[gitlab-cert-manager-controller-ingress-shim]",
                                            "name": "gitlab-cert-manager-controller-ingress-shim",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "crlbndg-[gitlab-cert-manager-controller-issuers]",
                                    "name": "gitlab-cert-manager-controller-issuers",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[gitlab-cert-manager-controller-issuers]",
                                            "name": "gitlab-cert-manager-controller-issuers",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "crlbndg-[gitlab-cert-manager-controller-orders]",
                                    "name": "gitlab-cert-manager-controller-orders",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[gitlab-cert-manager-controller-orders]",
                                            "name": "gitlab-cert-manager-controller-orders",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "crlbndg-[gitlab-cert-manager-leaderelection]",
                                    "name": "gitlab-cert-manager-leaderelection",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[gitlab-cert-manager-leaderelection]",
                                            "name": "gitlab-cert-manager-leaderelection",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-cert-manager-webhook]",
                    "name": "gitlab-cert-manager-webhook",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[76d9d9cc69]",
                                    "name": "76d9d9cc69",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[6f65j]",
                                            "name": "6f65j",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[certmanager]",
                            "name": "certmanager",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[quay.io/jetstack/cert-manager-webhook]",
                                    "name": "quay.io/jetstack/cert-manager-webhook",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[certs]",
                                    "name": "certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[gitlab-cert-manager-webhook-tls]",
                                            "name": "gitlab-cert-manager-webhook-tls",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[certs]",
                                    "name": "certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[gitlab-cert-manager-webhook-tls]",
                                            "name": "gitlab-cert-manager-webhook-tls",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {
                                "warn": 1
                            },
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[gitlab-cert-manager-webhook]",
                            "name": "gitlab-cert-manager-webhook",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[gitlab-cert-manager-webhook:auth-delegator]",
                                    "name": "gitlab-cert-manager-webhook:auth-delegator",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[system:auth-delegator]",
                                            "name": "system:auth-delegator",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "rlbndg-[gitlab-cert-manager-webhook:webhook-authentication-reader]",
                                    "name": "gitlab-cert-manager-webhook:webhook-authentication-reader",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "rl-[extension-apiserver-authentication-reader]",
                                            "name": "extension-apiserver-authentication-reader",
                                            "kind": "rl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-gitlab-exporter]",
                    "name": "gitlab-gitlab-exporter",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[868bc56dd8]",
                                    "name": "868bc56dd8",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[qb57h]",
                                            "name": "qb57h",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[gitlab-exporter]",
                            "name": "gitlab-exporter",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/gitlab-exporter]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/gitlab-exporter",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[gitlab-exporter (TCP-9168)]",
                                    "name": "gitlab-exporter (TCP-9168)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[gitlab-exporter-config]",
                                    "name": "gitlab-exporter-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-gitlab-exporter]",
                                            "name": "gitlab-gitlab-exporter",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[gitlab-exporter-secrets]",
                                    "name": "gitlab-exporter-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[certificates]",
                            "name": "certificates",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/alpine-certificates]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/alpine-certificates",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[configure]",
                            "name": "configure",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[busybox]",
                                    "name": "busybox",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[gitlab-exporter-config]",
                                    "name": "gitlab-exporter-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-gitlab-exporter]",
                                            "name": "gitlab-gitlab-exporter",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[init-gitlab-exporter-secrets]",
                                    "name": "init-gitlab-exporter-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[gitlab-exporter-secrets]",
                                    "name": "gitlab-exporter-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[gitlab-exporter-config]",
                                    "name": "gitlab-exporter-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-gitlab-exporter]",
                                            "name": "gitlab-gitlab-exporter",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[init-gitlab-exporter-secrets]",
                                    "name": "init-gitlab-exporter-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[gitlab-exporter-secrets]",
                                    "name": "gitlab-exporter-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-gitlab-runner]",
                    "name": "gitlab-gitlab-runner",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[65ff67bdd8]",
                                    "name": "65ff67bdd8",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[mnsbp]",
                                            "name": "mnsbp",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[gitlab-gitlab-runner]",
                            "name": "gitlab-gitlab-runner",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gitlab/gitlab-runner]",
                                    "name": "gitlab/gitlab-runner",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[metrics (TCP-9252)]",
                                    "name": "metrics (TCP-9252)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[runner-secrets]",
                                    "name": "runner-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-gitlab-runner]",
                                    "name": "etc-gitlab-runner",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[scripts]",
                                    "name": "scripts",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-gitlab-runner]",
                                            "name": "gitlab-gitlab-runner",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[configure]",
                            "name": "configure",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gitlab/gitlab-runner]",
                                    "name": "gitlab/gitlab-runner",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[runner-secrets]",
                                    "name": "runner-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[scripts]",
                                    "name": "scripts",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-gitlab-runner]",
                                            "name": "gitlab-gitlab-runner",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[init-runner-secrets]",
                                    "name": "init-runner-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[runner-secrets]",
                                    "name": "runner-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-gitlab-runner]",
                                    "name": "etc-gitlab-runner",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[init-runner-secrets]",
                                    "name": "init-runner-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[scripts]",
                                    "name": "scripts",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-gitlab-runner]",
                                            "name": "gitlab-gitlab-runner",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[gitlab-gitlab-runner]",
                            "name": "gitlab-gitlab-runner",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "rlbndg-[gitlab-gitlab-runner]",
                                    "name": "gitlab-gitlab-runner",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "rl-[gitlab-gitlab-runner]",
                                            "name": "gitlab-gitlab-runner",
                                            "kind": "rl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-gitlab-shell]",
                    "name": "gitlab-gitlab-shell",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[7b89877f4c]",
                                    "name": "7b89877f4c",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[hbd29]",
                                            "name": "hbd29",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[gitlab-shell]",
                            "name": "gitlab-shell",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/gitlab-shell]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/gitlab-shell",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[ssh (TCP-2222)]",
                                    "name": "ssh (TCP-2222)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[shell-config]",
                                    "name": "shell-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-gitlab-shell]",
                                            "name": "gitlab-gitlab-shell",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[shell-secrets]",
                                    "name": "shell-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[certificates]",
                            "name": "certificates",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/alpine-certificates]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/alpine-certificates",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[configure]",
                            "name": "configure",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[busybox]",
                                    "name": "busybox",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[shell-config]",
                                    "name": "shell-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-gitlab-shell]",
                                            "name": "gitlab-gitlab-shell",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[shell-init-secrets]",
                                    "name": "shell-init-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[shell-secrets]",
                                    "name": "shell-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[shell-config]",
                                    "name": "shell-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-gitlab-shell]",
                                            "name": "gitlab-gitlab-shell",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[shell-init-secrets]",
                                    "name": "shell-init-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[shell-secrets]",
                                    "name": "shell-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "hpa-[gitlab-gitlab-shell]",
                            "name": "gitlab-gitlab-shell",
                            "kind": "hpa",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-minio]",
                    "name": "gitlab-minio",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[79db4985c4]",
                                    "name": "79db4985c4",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[k5bmw]",
                                            "name": "k5bmw",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[minio]",
                            "name": "minio",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[minio/minio]",
                                    "name": "minio/minio",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[service (TCP-9000)]",
                                    "name": "service (TCP-9000)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": [
                                                {
                                                    "rn": "ingress-[gitlab-minio]",
                                                    "name": "gitlab-minio",
                                                    "kind": "ingress",
                                                    "order": 100,
                                                    "alertCount": {},
                                                    "flags": {},
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[export]",
                                    "name": "export",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[minio-server-config]",
                                    "name": "minio-server-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[podinfo]",
                                    "name": "podinfo",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[configure]",
                            "name": "configure",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[busybox]",
                                    "name": "busybox",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[minio-configuration]",
                                    "name": "minio-configuration",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[minio-server-config]",
                                    "name": "minio-server-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[podinfo]",
                                    "name": "podinfo",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[export]",
                                    "name": "export",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[minio-configuration]",
                                    "name": "minio-configuration",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[minio-server-config]",
                                    "name": "minio-server-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "ingress-[gitlab-minio]",
                                    "name": "gitlab-minio",
                                    "kind": "ingress",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "ingress-[gitlab-minio]",
                            "name": "gitlab-minio",
                            "kind": "ingress",
                            "order": 250,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-nginx-ingress-controller]",
                    "name": "gitlab-nginx-ingress-controller",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[5865798d7]",
                                    "name": "5865798d7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[7db754f856]",
                                    "name": "7db754f856",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[c68sq]",
                                            "name": "c68sq",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[gwp94]",
                                            "name": "gwp94",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[qj84g]",
                                            "name": "qj84g",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[fcf57c789]",
                                    "name": "fcf57c789",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[nginx-ingress-controller]",
                            "name": "nginx-ingress-controller",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[quay.io/kubernetes-ingress-controller/nginx-ingress-controller]",
                                    "name": "quay.io/kubernetes-ingress-controller/nginx-ingress-controller",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[http (TCP-80)]",
                                    "name": "http (TCP-80)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[LoadBalancer]",
                                            "name": "LoadBalancer",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "port-[https (TCP-443)]",
                                    "name": "https (TCP-443)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[LoadBalancer]",
                                            "name": "LoadBalancer",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "port-[stats (TCP-18080)]",
                                    "name": "stats (TCP-18080)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP 2]",
                                            "name": "ClusterIP 2",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "port-[metrics (TCP-10254)]",
                                    "name": "metrics (TCP-10254)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "port-[gitlab-shell (TCP-22)]",
                                    "name": "gitlab-shell (TCP-22)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[LoadBalancer]",
                                            "name": "LoadBalancer",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[LoadBalancer]",
                            "name": "LoadBalancer",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "service-[ClusterIP 2]",
                            "name": "ClusterIP 2",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[gitlab-nginx-ingress]",
                            "name": "gitlab-nginx-ingress",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "rlbndg-[gitlab-nginx-ingress]",
                                    "name": "gitlab-nginx-ingress",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "rl-[gitlab-nginx-ingress]",
                                            "name": "gitlab-nginx-ingress",
                                            "kind": "rl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-nginx-ingress-default-backend]",
                    "name": "gitlab-nginx-ingress-default-backend",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[7f87d67c8]",
                                    "name": "7f87d67c8",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[2fznh]",
                                            "name": "2fznh",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[zv7jx]",
                                            "name": "zv7jx",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[nginx-ingress-default-backend]",
                            "name": "nginx-ingress-default-backend",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/defaultbackend]",
                                    "name": "k8s.gcr.io/defaultbackend",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[http (TCP-8080)]",
                                    "name": "http (TCP-8080)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-postgresql]",
                    "name": "gitlab-postgresql",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[556dc9c6d4]",
                                    "name": "556dc9c6d4",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[8466fc49b6]",
                                    "name": "8466fc49b6",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[tp87g]",
                                            "name": "tp87g",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[cb4c58788]",
                                    "name": "cb4c58788",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[gitlab-postgresql]",
                            "name": "gitlab-postgresql",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[postgres]",
                                    "name": "postgres",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[postgresql (TCP-5432)]",
                                    "name": "postgresql (TCP-5432)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[data]",
                                    "name": "data",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[password-file]",
                                    "name": "password-file",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[gitlab-postgresql-password]",
                                            "name": "gitlab-postgresql-password",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[metrics]",
                            "name": "metrics",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[wrouesnel/postgres_exporter]",
                                    "name": "wrouesnel/postgres_exporter",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[metrics (TCP-9187)]",
                                    "name": "metrics (TCP-9187)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[data]",
                                    "name": "data",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[password-file]",
                                    "name": "password-file",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[gitlab-postgresql-password]",
                                            "name": "gitlab-postgresql-password",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-prometheus-server]",
                    "name": "gitlab-prometheus-server",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[cf7649bb9]",
                                    "name": "cf7649bb9",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[z95n4]",
                                            "name": "z95n4",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[prometheus-server-configmap-reload]",
                            "name": "prometheus-server-configmap-reload",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[jimmidyson/configmap-reload]",
                                    "name": "jimmidyson/configmap-reload",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[config-volume]",
                                    "name": "config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-prometheus-server]",
                                            "name": "gitlab-prometheus-server",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[prometheus-server]",
                            "name": "prometheus-server",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[prom/prometheus]",
                                    "name": "prom/prometheus",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-9090]",
                                    "name": "TCP-9090",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[config-volume]",
                                    "name": "config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-prometheus-server]",
                                            "name": "gitlab-prometheus-server",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[storage-volume]",
                                    "name": "storage-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[config-volume]",
                                    "name": "config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-prometheus-server]",
                                            "name": "gitlab-prometheus-server",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[storage-volume]",
                                    "name": "storage-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[gitlab-prometheus-server]",
                            "name": "gitlab-prometheus-server",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[gitlab-prometheus-server]",
                                    "name": "gitlab-prometheus-server",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[gitlab-prometheus-server]",
                                            "name": "gitlab-prometheus-server",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-redis-sentinel]",
                    "name": "gitlab-redis-sentinel",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[5dbfcc649f]",
                                    "name": "5dbfcc649f",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[69879b577]",
                                    "name": "69879b577",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[jdspq]",
                                            "name": "jdspq",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[thjjr]",
                                            "name": "thjjr",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[7dd554445c]",
                                    "name": "7dd554445c",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[sentinel]",
                            "name": "sentinel",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/gitlab-redis-ha]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/gitlab-redis-ha",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-26379]",
                                    "name": "TCP-26379",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[gitlab-config]",
                                    "name": "gitlab-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[gitlab-config]",
                                    "name": "gitlab-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[gitlab-redis]",
                            "name": "gitlab-redis",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": [
                                {
                                    "rn": "rlbndg-[gitlab-redis]",
                                    "name": "gitlab-redis",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "shared": {
                                            "name": "shared"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "rl-[gitlab-redis]",
                                            "name": "gitlab-redis",
                                            "kind": "rl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-registry]",
                    "name": "gitlab-registry",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[74c959fc8]",
                                    "name": "74c959fc8",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[2krpd]",
                                            "name": "2krpd",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[registry]",
                            "name": "registry",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry]",
                                    "name": "registry",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[registry-server-config]",
                                    "name": "registry-server-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[certificates]",
                            "name": "certificates",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/alpine-certificates]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/alpine-certificates",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[configure]",
                            "name": "configure",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[busybox]",
                                    "name": "busybox",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[registry-secrets]",
                                    "name": "registry-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[registry-server-config]",
                                    "name": "registry-server-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[registry-server-config]",
                                    "name": "registry-server-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[registry-secrets]",
                                    "name": "registry-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "hpa-[gitlab-registry]",
                            "name": "gitlab-registry",
                            "kind": "hpa",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {
                                "warn": 1
                            },
                            "flags": {},
                            "children": [
                                {
                                    "rn": "ingress-[gitlab-registry]",
                                    "name": "gitlab-registry",
                                    "kind": "ingress",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "ingress-[gitlab-registry]",
                            "name": "gitlab-registry",
                            "kind": "ingress",
                            "order": 250,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-sidekiq-all-in-1]",
                    "name": "gitlab-sidekiq-all-in-1",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[5dd9f54858]",
                                    "name": "5dd9f54858",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[649889b7c6]",
                                    "name": "649889b7c6",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[v7ml6]",
                                            "name": "v7ml6",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[sidekiq]",
                            "name": "sidekiq",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/gitlab-sidekiq-ee]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/gitlab-sidekiq-ee",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[metrics (TCP-3807)]",
                                    "name": "metrics (TCP-3807)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[sidekiq-metrics]",
                                    "name": "sidekiq-metrics",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[sidekiq-config]",
                                    "name": "sidekiq-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[sidekiq-secrets]",
                                    "name": "sidekiq-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[certificates]",
                            "name": "certificates",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/alpine-certificates]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/alpine-certificates",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[configure]",
                            "name": "configure",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[busybox]",
                                    "name": "busybox",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[sidekiq-config]",
                                    "name": "sidekiq-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[init-sidekiq-secrets]",
                                    "name": "init-sidekiq-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[sidekiq-secrets]",
                                    "name": "sidekiq-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[dependencies]",
                            "name": "dependencies",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/gitlab-sidekiq-ee]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/gitlab-sidekiq-ee",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[sidekiq-config]",
                                    "name": "sidekiq-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[sidekiq-secrets]",
                                    "name": "sidekiq-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[sidekiq-metrics]",
                                    "name": "sidekiq-metrics",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[sidekiq-config]",
                                    "name": "sidekiq-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[init-sidekiq-secrets]",
                                    "name": "init-sidekiq-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[sidekiq-secrets]",
                                    "name": "sidekiq-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "hpa-[gitlab-sidekiq-all-in-1]",
                            "name": "gitlab-sidekiq-all-in-1",
                            "kind": "hpa",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-task-runner]",
                    "name": "gitlab-task-runner",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[9f9cf668f]",
                                    "name": "9f9cf668f",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[q9q67]",
                                            "name": "q9q67",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[task-runner]",
                            "name": "task-runner",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/gitlab-task-runner-ee]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/gitlab-task-runner-ee",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[task-runner-config]",
                                    "name": "task-runner-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[task-runner-secrets]",
                                    "name": "task-runner-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[task-runner-tmp]",
                                    "name": "task-runner-tmp",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[certificates]",
                            "name": "certificates",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/alpine-certificates]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/alpine-certificates",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[configure]",
                            "name": "configure",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[busybox]",
                                    "name": "busybox",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[task-runner-config]",
                                    "name": "task-runner-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[init-task-runner-secrets]",
                                    "name": "init-task-runner-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[task-runner-secrets]",
                                    "name": "task-runner-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[task-runner-config]",
                                    "name": "task-runner-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[task-runner-tmp]",
                                    "name": "task-runner-tmp",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[init-task-runner-secrets]",
                                    "name": "init-task-runner-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[task-runner-secrets]",
                                    "name": "task-runner-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-unicorn]",
                    "name": "gitlab-unicorn",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[57fb68c97f]",
                                    "name": "57fb68c97f",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[84c5c578b5]",
                                    "name": "84c5c578b5",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[84d7dc6557]",
                                    "name": "84d7dc6557",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[2smmj]",
                                            "name": "2smmj",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[8hbrb]",
                                            "name": "8hbrb",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[bbcvd]",
                                            "name": "bbcvd",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[d75ck]",
                                            "name": "d75ck",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[k8zbh]",
                                            "name": "k8zbh",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[pc8qk]",
                                            "name": "pc8qk",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[q8gs4]",
                                            "name": "q8gs4",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[vh6gk]",
                                            "name": "vh6gk",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[wfcr5]",
                                            "name": "wfcr5",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[xkxs4]",
                                            "name": "xkxs4",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[xw7hr]",
                                            "name": "xw7hr",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[unicorn]",
                            "name": "unicorn",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/gitlab-unicorn-ee]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/gitlab-unicorn-ee",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[unicorn (TCP-8080)]",
                                    "name": "unicorn (TCP-8080)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": [
                                                {
                                                    "rn": "ingress-[gitlab-unicorn]",
                                                    "name": "gitlab-unicorn",
                                                    "kind": "ingress",
                                                    "order": 100,
                                                    "alertCount": {},
                                                    "flags": {},
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[unicorn-metrics]",
                                    "name": "unicorn-metrics",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[unicorn-config]",
                                    "name": "unicorn-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-unicorn]",
                                            "name": "gitlab-unicorn",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[unicorn-secrets]",
                                    "name": "unicorn-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[shared-upload-directory]",
                                    "name": "shared-upload-directory",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[shared-artifact-directory]",
                                    "name": "shared-artifact-directory",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[shared-tmp]",
                                    "name": "shared-tmp",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[gitlab-workhorse]",
                            "name": "gitlab-workhorse",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/gitlab-workhorse-ee]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/gitlab-workhorse-ee",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[workhorse (TCP-8181)]",
                                    "name": "workhorse (TCP-8181)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": [
                                                {
                                                    "rn": "ingress-[gitlab-unicorn]",
                                                    "name": "gitlab-unicorn",
                                                    "kind": "ingress",
                                                    "order": 100,
                                                    "alertCount": {},
                                                    "flags": {},
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[workhorse-config]",
                                    "name": "workhorse-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-workhorse-config]",
                                            "name": "gitlab-workhorse-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[workhorse-secrets]",
                                    "name": "workhorse-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[shared-upload-directory]",
                                    "name": "shared-upload-directory",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[shared-artifact-directory]",
                                    "name": "shared-artifact-directory",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[shared-tmp]",
                                    "name": "shared-tmp",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[certificates]",
                            "name": "certificates",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/alpine-certificates]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/alpine-certificates",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[configure]",
                            "name": "configure",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[busybox]",
                                    "name": "busybox",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[unicorn-config]",
                                    "name": "unicorn-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-unicorn]",
                                            "name": "gitlab-unicorn",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[workhorse-config]",
                                    "name": "workhorse-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-workhorse-config]",
                                            "name": "gitlab-workhorse-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[init-unicorn-secrets]",
                                    "name": "init-unicorn-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[unicorn-secrets]",
                                    "name": "unicorn-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[workhorse-secrets]",
                                    "name": "workhorse-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[shared-tmp]",
                                    "name": "shared-tmp",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[dependencies]",
                            "name": "dependencies",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/gitlab-unicorn-ee]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/gitlab-unicorn-ee",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[unicorn-config]",
                                    "name": "unicorn-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-unicorn]",
                                            "name": "gitlab-unicorn",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[unicorn-secrets]",
                                    "name": "unicorn-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[shared-tmp]",
                                    "name": "shared-tmp",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[unicorn-metrics]",
                                    "name": "unicorn-metrics",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[unicorn-config]",
                                    "name": "unicorn-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-unicorn]",
                                            "name": "gitlab-unicorn",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[workhorse-config]",
                                    "name": "workhorse-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-workhorse-config]",
                                            "name": "gitlab-workhorse-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[init-unicorn-secrets]",
                                    "name": "init-unicorn-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[unicorn-secrets]",
                                    "name": "unicorn-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[workhorse-secrets]",
                                    "name": "workhorse-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[shared-upload-directory]",
                                    "name": "shared-upload-directory",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[shared-artifact-directory]",
                                    "name": "shared-artifact-directory",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "hpa-[gitlab-unicorn]",
                            "name": "gitlab-unicorn",
                            "kind": "hpa",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "ingress-[gitlab-unicorn]",
                                    "name": "gitlab-unicorn",
                                    "kind": "ingress",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "ingress-[gitlab-unicorn]",
                            "name": "gitlab-unicorn",
                            "kind": "ingress",
                            "order": 250,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-gitaly]",
                    "name": "gitlab-gitaly",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[StatefulSet]",
                            "name": "StatefulSet",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "pod-[0]",
                                    "name": "0",
                                    "kind": "pod",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[gitaly]",
                            "name": "gitaly",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/gitaly]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/gitaly",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-8075]",
                                    "name": "TCP-8075",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "port-[TCP-9236]",
                                    "name": "TCP-9236",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[gitaly-config]",
                                    "name": "gitaly-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-gitaly]",
                                            "name": "gitlab-gitaly",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[gitaly-secrets]",
                                    "name": "gitaly-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[certificates]",
                            "name": "certificates",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/alpine-certificates]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/alpine-certificates",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[configure]",
                            "name": "configure",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[busybox]",
                                    "name": "busybox",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[gitaly-config]",
                                    "name": "gitaly-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-gitaly]",
                                            "name": "gitlab-gitaly",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[init-gitaly-secrets]",
                                    "name": "init-gitaly-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[gitaly-secrets]",
                                    "name": "gitaly-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[gitaly-config]",
                                    "name": "gitaly-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-gitaly]",
                                            "name": "gitlab-gitaly",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[gitaly-secrets]",
                                    "name": "gitaly-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[init-gitaly-secrets]",
                                    "name": "init-gitaly-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-redis-server]",
                    "name": "gitlab-redis-server",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[StatefulSet]",
                            "name": "StatefulSet",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "pod-[0]",
                                    "name": "0",
                                    "kind": "pod",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[redis]",
                            "name": "redis",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/gitlab-redis-ha]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/gitlab-redis-ha",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-6379]",
                                    "name": "TCP-6379",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[gitlab-config]",
                                    "name": "gitlab-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[metrics]",
                            "name": "metrics",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[oliver006/redis_exporter]",
                                    "name": "oliver006/redis_exporter",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[metrics (TCP-9121)]",
                                    "name": "metrics (TCP-9121)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[gitlab-metrics]",
                                    "name": "gitlab-metrics",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[configure]",
                            "name": "configure",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[busybox]",
                                    "name": "busybox",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[gitlab]",
                                    "name": "gitlab",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[gitlab-config]",
                                    "name": "gitlab-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[gitlab-metrics]",
                                    "name": "gitlab-metrics",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[gitlab-config]",
                                    "name": "gitlab-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[gitlab-metrics]",
                                    "name": "gitlab-metrics",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[gitlab]",
                                    "name": "gitlab",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[gitlab-redis]",
                            "name": "gitlab-redis",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": [
                                {
                                    "rn": "rlbndg-[gitlab-redis]",
                                    "name": "gitlab-redis",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "shared": {
                                            "name": "shared"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "rl-[gitlab-redis]",
                                            "name": "gitlab-redis",
                                            "kind": "rl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-issuer.1]",
                    "name": "gitlab-issuer.1",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Job]",
                            "name": "Job",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "cont-[create-issuer]",
                            "name": "create-issuer",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/kubectl]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/kubectl",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[scripts]",
                                    "name": "scripts",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-certmanager-issuer-certmanager]",
                                            "name": "gitlab-certmanager-issuer-certmanager",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[scripts]",
                                    "name": "scripts",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-certmanager-issuer-certmanager]",
                                            "name": "gitlab-certmanager-issuer-certmanager",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[gitlab-certmanager-issuer]",
                            "name": "gitlab-certmanager-issuer",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "rlbndg-[gitlab-certmanager-issuer]",
                                    "name": "gitlab-certmanager-issuer",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "rl-[gitlab-certmanager-issuer]",
                                            "name": "gitlab-certmanager-issuer",
                                            "kind": "rl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-migrations.1]",
                    "name": "gitlab-migrations.1",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Job]",
                            "name": "Job",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "cont-[migrations]",
                            "name": "migrations",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/gitlab-rails-ee]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/gitlab-rails-ee",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[migrations-config]",
                                    "name": "migrations-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-migrations]",
                                            "name": "gitlab-migrations",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[migrations-secrets]",
                                    "name": "migrations-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[certificates]",
                            "name": "certificates",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[registry.gitlab.com/gitlab-org/build/cng/alpine-certificates]",
                                    "name": "registry.gitlab.com/gitlab-org/build/cng/alpine-certificates",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "initcont-[configure]",
                            "name": "configure",
                            "kind": "initcont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[busybox]",
                                    "name": "busybox",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[migrations-config]",
                                    "name": "migrations-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-migrations]",
                                            "name": "gitlab-migrations",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[init-migrations-secrets]",
                                    "name": "init-migrations-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[migrations-secrets]",
                                    "name": "migrations-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[migrations-config]",
                                    "name": "migrations-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[gitlab-migrations]",
                                            "name": "gitlab-migrations",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[init-migrations-secrets]",
                                    "name": "init-migrations-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[migrations-secrets]",
                                    "name": "migrations-secrets",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-ssl-certs]",
                                    "name": "etc-ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[gitlab-minio-create-buckets.1]",
                    "name": "gitlab-minio-create-buckets.1",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Job]",
                            "name": "Job",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "cont-[minio-mc]",
                            "name": "minio-mc",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[minio/mc]",
                                    "name": "minio/mc",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[minio-configuration]",
                                    "name": "minio-configuration",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[minio-configuration]",
                                    "name": "minio-configuration",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "raw-[Raw Configs]",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "raw-[Services]",
                            "name": "Services",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "service-[gitlab-redis]",
                                    "name": "gitlab-redis",
                                    "kind": "service",
                                    "order": 100,
                                    "alertCount": {
                                        "error": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "service-[gitlab-redis-sentinel]",
                                    "name": "gitlab-redis-sentinel",
                                    "kind": "service",
                                    "order": 100,
                                    "alertCount": {
                                        "error": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "service-[gitlab-redis-slave-svc]",
                                    "name": "gitlab-redis-slave-svc",
                                    "kind": "service",
                                    "order": 100,
                                    "alertCount": {
                                        "error": 1
                                    },
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-[ConfigMaps]",
                            "name": "ConfigMaps",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "configmap-[cert-manager-cainjector-leader-election]",
                                    "name": "cert-manager-cainjector-leader-election",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[cert-manager-cainjector-leader-election-core]",
                                    "name": "cert-manager-cainjector-leader-election-core",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[cert-manager-controller]",
                                    "name": "cert-manager-controller",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[gitlab-gitlab-chart-info]",
                                    "name": "gitlab-gitlab-chart-info",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[gitlab-minio-config-cm]",
                                    "name": "gitlab-minio-config-cm",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[gitlab-nginx-ingress-controller]",
                                    "name": "gitlab-nginx-ingress-controller",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[gitlab-nginx-ingress-custom-headers]",
                                    "name": "gitlab-nginx-ingress-custom-headers",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[gitlab-nginx-ingress-tcp]",
                                    "name": "gitlab-nginx-ingress-tcp",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[gitlab-postgresql]",
                                    "name": "gitlab-postgresql",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[gitlab-redis]",
                                    "name": "gitlab-redis",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[gitlab-registry]",
                                    "name": "gitlab-registry",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[gitlab-sidekiq]",
                                    "name": "gitlab-sidekiq",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[gitlab-sidekiq-all-in-1]",
                                    "name": "gitlab-sidekiq-all-in-1",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[gitlab-task-runner]",
                                    "name": "gitlab-task-runner",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[gitlab-unicorn-tests]",
                                    "name": "gitlab-unicorn-tests",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[ingress-controller-leader-gitlab-nginx]",
                                    "name": "ingress-controller-leader-gitlab-nginx",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-[kube-system]",
            "name": "kube-system",
            "kind": "ns",
            "order": 100,
            "alertCount": {},
            "flags": {
                "radioactive": {
                    "propagatable": true,
                    "name": "radioactive"
                },
                "xnamespace": {
                    "propagatable": true,
                    "name": "xnamespace"
                }
            },
            "children": [
                {
                    "rn": "app-[calico-node]",
                    "name": "calico-node",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        },
                        "radioactive": {
                            "propagatable": true,
                            "name": "radioactive"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[DaemonSet]",
                            "name": "DaemonSet",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "radioactive": {
                                    "propagatable": true,
                                    "name": "radioactive"
                                }
                            },
                            "children": [
                                {
                                    "rn": "pod-[hnddt]",
                                    "name": "hnddt",
                                    "kind": "pod",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "pod-[q7bmz]",
                                    "name": "q7bmz",
                                    "kind": "pod",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[calico-node]",
                            "name": "calico-node",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "radioactive": {
                                    "propagatable": true,
                                    "name": "radioactive"
                                }
                            },
                            "children": [
                                {
                                    "rn": "image-[gcr.io/projectcalico-org/node]",
                                    "name": "gcr.io/projectcalico-org/node",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[lib-modules]",
                                    "name": "lib-modules",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-calico]",
                                    "name": "etc-calico",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[var-run-calico]",
                                    "name": "var-run-calico",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[var-lib-calico]",
                                    "name": "var-lib-calico",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[install-cni]",
                            "name": "install-cni",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/projectcalico-org/cni]",
                                    "name": "gcr.io/projectcalico-org/cni",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[cni-bin-dir]",
                                    "name": "cni-bin-dir",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[cni-net-dir]",
                                    "name": "cni-net-dir",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[lib-modules]",
                                    "name": "lib-modules",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[etc-calico]",
                                    "name": "etc-calico",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[cni-bin-dir]",
                                    "name": "cni-bin-dir",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[cni-net-dir]",
                                    "name": "cni-net-dir",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[var-run-calico]",
                                    "name": "var-run-calico",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[var-lib-calico]",
                                    "name": "var-lib-calico",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[calico-sa]",
                            "name": "calico-sa",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                },
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[calico-sa]",
                                    "name": "calico-sa",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        },
                                        "shared": {
                                            "name": "shared"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[calico]",
                                            "name": "calico",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "rlbndg-[gce:podsecuritypolicy:calico-sa]",
                                    "name": "gce:podsecuritypolicy:calico-sa",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "error": 1
                                    },
                                    "flags": {
                                        "shared": {
                                            "name": "shared"
                                        }
                                    },
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[fluentd-gcp-v3.2.0]",
                    "name": "fluentd-gcp-v3.2.0",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "radioactive": {
                            "propagatable": true,
                            "name": "radioactive"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[DaemonSet]",
                            "name": "DaemonSet",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "radioactive": {
                                    "propagatable": true,
                                    "name": "radioactive"
                                }
                            },
                            "children": [
                                {
                                    "rn": "pod-[fhp9g]",
                                    "name": "fhp9g",
                                    "kind": "pod",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "pod-[vdqxs]",
                                    "name": "vdqxs",
                                    "kind": "pod",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[fluentd-gcp]",
                            "name": "fluentd-gcp",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/stackdriver-agents/stackdriver-logging-agent]",
                                    "name": "gcr.io/stackdriver-agents/stackdriver-logging-agent",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[varlog]",
                                    "name": "varlog",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[varlibdockercontainers]",
                                    "name": "varlibdockercontainers",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[config-volume]",
                                    "name": "config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[fluentd-gcp-config-old-v1.2.5]",
                                            "name": "fluentd-gcp-config-old-v1.2.5",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[prometheus-to-sd-exporter]",
                            "name": "prometheus-to-sd-exporter",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/prometheus-to-sd]",
                                    "name": "k8s.gcr.io/prometheus-to-sd",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[varlog]",
                                    "name": "varlog",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[varlibdockercontainers]",
                                    "name": "varlibdockercontainers",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[config-volume]",
                                    "name": "config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[fluentd-gcp-config-old-v1.2.5]",
                                            "name": "fluentd-gcp-config-old-v1.2.5",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[fluentd-gcp]",
                            "name": "fluentd-gcp",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[ip-masq-agent]",
                    "name": "ip-masq-agent",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "radioactive": {
                            "propagatable": true,
                            "name": "radioactive"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[DaemonSet]",
                            "name": "DaemonSet",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "radioactive": {
                                    "propagatable": true,
                                    "name": "radioactive"
                                }
                            },
                            "children": [
                                {
                                    "rn": "pod-[4blmr]",
                                    "name": "4blmr",
                                    "kind": "pod",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "pod-[lmxr5]",
                                    "name": "lmxr5",
                                    "kind": "pod",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[ip-masq-agent]",
                            "name": "ip-masq-agent",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "radioactive": {
                                    "propagatable": true,
                                    "name": "radioactive"
                                }
                            },
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/ip-masq-agent-amd64]",
                                    "name": "k8s.gcr.io/ip-masq-agent-amd64",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[config]",
                                    "name": "config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[config]",
                                    "name": "config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[ip-masq-agent]",
                            "name": "ip-masq-agent",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[metadata-proxy-v0.1]",
                    "name": "metadata-proxy-v0.1",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "radioactive": {
                            "propagatable": true,
                            "name": "radioactive"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[DaemonSet]",
                            "name": "DaemonSet",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "radioactive": {
                                    "propagatable": true,
                                    "name": "radioactive"
                                }
                            },
                            "children": []
                        },
                        {
                            "rn": "cont-[metadata-proxy]",
                            "name": "metadata-proxy",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "radioactive": {
                                    "propagatable": true,
                                    "name": "radioactive"
                                }
                            },
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/metadata-proxy]",
                                    "name": "k8s.gcr.io/metadata-proxy",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[prometheus-to-sd-exporter]",
                            "name": "prometheus-to-sd-exporter",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/prometheus-to-sd]",
                                    "name": "k8s.gcr.io/prometheus-to-sd",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[metadata-proxy]",
                            "name": "metadata-proxy",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[nvidia-gpu-device-plugin]",
                    "name": "nvidia-gpu-device-plugin",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "radioactive": {
                            "propagatable": true,
                            "name": "radioactive"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[DaemonSet]",
                            "name": "DaemonSet",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "cont-[nvidia-gpu-device-plugin]",
                            "name": "nvidia-gpu-device-plugin",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "radioactive": {
                                    "propagatable": true,
                                    "name": "radioactive"
                                }
                            },
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/nvidia-gpu-device-plugin@sha256]",
                                    "name": "k8s.gcr.io/nvidia-gpu-device-plugin@sha256",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[device-plugin]",
                                    "name": "device-plugin",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[dev]",
                                    "name": "dev",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[device-plugin]",
                                    "name": "device-plugin",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[dev]",
                                    "name": "dev",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[prometheus-to-sd]",
                    "name": "prometheus-to-sd",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "radioactive": {
                            "propagatable": true,
                            "name": "radioactive"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[DaemonSet]",
                            "name": "DaemonSet",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "radioactive": {
                                    "propagatable": true,
                                    "name": "radioactive"
                                }
                            },
                            "children": [
                                {
                                    "rn": "pod-[8vjjp]",
                                    "name": "8vjjp",
                                    "kind": "pod",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "pod-[fhpgv]",
                                    "name": "fhpgv",
                                    "kind": "pod",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[prometheus-to-sd]",
                            "name": "prometheus-to-sd",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/prometheus-to-sd]",
                                    "name": "k8s.gcr.io/prometheus-to-sd",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[prometheus-to-sd-new-model]",
                            "name": "prometheus-to-sd-new-model",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/prometheus-to-sd]",
                                    "name": "k8s.gcr.io/prometheus-to-sd",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[prometheus-to-sd]",
                            "name": "prometheus-to-sd",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[calico-node-vertical-autoscaler]",
                    "name": "calico-node-vertical-autoscaler",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[6d58db487]",
                                    "name": "6d58db487",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[b889c775f]",
                                    "name": "b889c775f",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[bpvk7]",
                                            "name": "bpvk7",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[autoscaler]",
                            "name": "autoscaler",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gke.gcr.io/cpvpa-amd64]",
                                    "name": "gke.gcr.io/cpvpa-amd64",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[config]",
                                    "name": "config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[calico-node-vertical-autoscaler]",
                                            "name": "calico-node-vertical-autoscaler",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[config]",
                                    "name": "config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[calico-node-vertical-autoscaler]",
                                            "name": "calico-node-vertical-autoscaler",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[calico-cpva]",
                            "name": "calico-cpva",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                },
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[calico-cpva]",
                                    "name": "calico-cpva",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        },
                                        "shared": {
                                            "name": "shared"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[calico-cpva]",
                                            "name": "calico-cpva",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[calico-typha]",
                    "name": "calico-typha",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        },
                        "radioactive": {
                            "propagatable": true,
                            "name": "radioactive"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "radioactive": {
                                    "propagatable": true,
                                    "name": "radioactive"
                                }
                            },
                            "children": [
                                {
                                    "rn": "replicaset-[65bfd5544b]",
                                    "name": "65bfd5544b",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[bhvr6]",
                                            "name": "bhvr6",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[6fc97446fc]",
                                    "name": "6fc97446fc",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[calico-typha]",
                            "name": "calico-typha",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/projectcalico-org/typha]",
                                    "name": "gcr.io/projectcalico-org/typha",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[calico-typha (TCP-5473)]",
                                    "name": "calico-typha (TCP-5473)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[etc-calico]",
                                    "name": "etc-calico",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[etc-calico]",
                                    "name": "etc-calico",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[calico-sa]",
                            "name": "calico-sa",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                },
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[calico-sa]",
                                    "name": "calico-sa",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        },
                                        "shared": {
                                            "name": "shared"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[calico]",
                                            "name": "calico",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "rlbndg-[gce:podsecuritypolicy:calico-sa]",
                                    "name": "gce:podsecuritypolicy:calico-sa",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "error": 1
                                    },
                                    "flags": {
                                        "shared": {
                                            "name": "shared"
                                        }
                                    },
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[calico-typha-horizontal-autoscaler]",
                    "name": "calico-typha-horizontal-autoscaler",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[847fc7bc8d]",
                                    "name": "847fc7bc8d",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[d777c75b4]",
                                    "name": "d777c75b4",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[w86pc]",
                                            "name": "w86pc",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[autoscaler]",
                            "name": "autoscaler",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gke.gcr.io/cluster-proportional-autoscaler-amd64]",
                                    "name": "gke.gcr.io/cluster-proportional-autoscaler-amd64",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[typha-cpha]",
                            "name": "typha-cpha",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[typha-cpha]",
                                    "name": "typha-cpha",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[typha-cpha]",
                                            "name": "typha-cpha",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "rlbndg-[typha-cpha]",
                                    "name": "typha-cpha",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "rl-[typha-cpha]",
                                            "name": "typha-cpha",
                                            "kind": "rl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[calico-typha-vertical-autoscaler]",
                    "name": "calico-typha-vertical-autoscaler",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[77b7f88f74]",
                                    "name": "77b7f88f74",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[d9b7979f8]",
                                    "name": "d9b7979f8",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[mrlwx]",
                                            "name": "mrlwx",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[autoscaler]",
                            "name": "autoscaler",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gke.gcr.io/cpvpa-amd64]",
                                    "name": "gke.gcr.io/cpvpa-amd64",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[config]",
                                    "name": "config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[calico-typha-vertical-autoscaler]",
                                            "name": "calico-typha-vertical-autoscaler",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[config]",
                                    "name": "config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[calico-typha-vertical-autoscaler]",
                                            "name": "calico-typha-vertical-autoscaler",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[calico-cpva]",
                            "name": "calico-cpva",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                },
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[calico-cpva]",
                                    "name": "calico-cpva",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        },
                                        "shared": {
                                            "name": "shared"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[calico-cpva]",
                                            "name": "calico-cpva",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[event-exporter-v0.2.4]",
                    "name": "event-exporter-v0.2.4",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[5f88c66fb7]",
                                    "name": "5f88c66fb7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[85fwj]",
                                            "name": "85fwj",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[event-exporter]",
                            "name": "event-exporter",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/event-exporter]",
                                    "name": "k8s.gcr.io/event-exporter",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[prometheus-to-sd-exporter]",
                            "name": "prometheus-to-sd-exporter",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/prometheus-to-sd]",
                                    "name": "k8s.gcr.io/prometheus-to-sd",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[ssl-certs]",
                                    "name": "ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[event-exporter-sa]",
                            "name": "event-exporter-sa",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[event-exporter-rb]",
                                    "name": "event-exporter-rb",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[view]",
                                            "name": "view",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[fluentd-gcp-scaler]",
                    "name": "fluentd-gcp-scaler",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[59b7b75cd7]",
                                    "name": "59b7b75cd7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[6965bb45c9]",
                                    "name": "6965bb45c9",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[hzbxf]",
                                            "name": "hzbxf",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[fluentd-gcp-scaler]",
                            "name": "fluentd-gcp-scaler",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/fluentd-gcp-scaler]",
                                    "name": "k8s.gcr.io/fluentd-gcp-scaler",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[fluentd-gcp-scaler]",
                            "name": "fluentd-gcp-scaler",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "rlbndg-[fluentd-gcp-scaler-binding]",
                                    "name": "fluentd-gcp-scaler-binding",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "rl-[system:fluentd-gcp-scaler]",
                                            "name": "system:fluentd-gcp-scaler",
                                            "kind": "rl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[heapster-gke]",
                    "name": "heapster-gke",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[566bdc98db]",
                                    "name": "566bdc98db",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[92f4r]",
                                            "name": "92f4r",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[fcdb559f8]",
                                    "name": "fcdb559f8",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[heapster]",
                            "name": "heapster",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gke.gcr.io/heapster]",
                                    "name": "gke.gcr.io/heapster",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[prom-to-sd]",
                            "name": "prom-to-sd",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/prometheus-to-sd]",
                                    "name": "k8s.gcr.io/prometheus-to-sd",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[heapster-nanny]",
                            "name": "heapster-nanny",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/addon-resizer]",
                                    "name": "k8s.gcr.io/addon-resizer",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[heapster-config-volume]",
                                    "name": "heapster-config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[heapster-config]",
                                            "name": "heapster-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[heapster-config-volume]",
                                    "name": "heapster-config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[heapster-config]",
                                            "name": "heapster-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {
                                "warn": 1
                            },
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[heapster]",
                            "name": "heapster",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[heapster-binding]",
                                    "name": "heapster-binding",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[system:heapster]",
                                            "name": "system:heapster",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "rlbndg-[heapster-binding]",
                                    "name": "heapster-binding",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "rl-[system:pod-nanny]",
                                            "name": "system:pod-nanny",
                                            "kind": "rl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[kube-dns]",
                    "name": "kube-dns",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[79868f54c5]",
                                    "name": "79868f54c5",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[87l98]",
                                            "name": "87l98",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-[p854d]",
                                            "name": "p854d",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[kubedns]",
                            "name": "kubedns",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/k8s-dns-kube-dns-amd64]",
                                    "name": "k8s.gcr.io/k8s-dns-kube-dns-amd64",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[dns-local (UDP-10053)]",
                                    "name": "dns-local (UDP-10053)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[dns-tcp-local (TCP-10053)]",
                                    "name": "dns-tcp-local (TCP-10053)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[metrics (TCP-10055)]",
                                    "name": "metrics (TCP-10055)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[kube-dns-config]",
                                    "name": "kube-dns-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[kube-dns]",
                                            "name": "kube-dns",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[dnsmasq]",
                            "name": "dnsmasq",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/k8s-dns-dnsmasq-nanny-amd64]",
                                    "name": "k8s.gcr.io/k8s-dns-dnsmasq-nanny-amd64",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[dns (UDP-53)]",
                                    "name": "dns (UDP-53)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[dns-tcp (TCP-53)]",
                                    "name": "dns-tcp (TCP-53)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[kube-dns-config]",
                                    "name": "kube-dns-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[kube-dns]",
                                            "name": "kube-dns",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[sidecar]",
                            "name": "sidecar",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/k8s-dns-sidecar-amd64]",
                                    "name": "k8s.gcr.io/k8s-dns-sidecar-amd64",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[metrics (TCP-10054)]",
                                    "name": "metrics (TCP-10054)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[prometheus-to-sd]",
                            "name": "prometheus-to-sd",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/prometheus-to-sd]",
                                    "name": "k8s.gcr.io/prometheus-to-sd",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[kube-dns-config]",
                                    "name": "kube-dns-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[kube-dns]",
                                            "name": "kube-dns",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[kube-dns]",
                            "name": "kube-dns",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[system:kube-dns]",
                                    "name": "system:kube-dns",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[system:kube-dns]",
                                            "name": "system:kube-dns",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[kube-dns-autoscaler]",
                    "name": "kube-dns-autoscaler",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[8687c64fc]",
                                    "name": "8687c64fc",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[f95vf]",
                                            "name": "f95vf",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[bb58c6784]",
                                    "name": "bb58c6784",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[autoscaler]",
                            "name": "autoscaler",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gke.gcr.io/cluster-proportional-autoscaler-amd64]",
                                    "name": "gke.gcr.io/cluster-proportional-autoscaler-amd64",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[kube-dns-autoscaler]",
                            "name": "kube-dns-autoscaler",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[system:kube-dns-autoscaler]",
                                    "name": "system:kube-dns-autoscaler",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[system:kube-dns-autoscaler]",
                                            "name": "system:kube-dns-autoscaler",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[l7-default-backend]",
                    "name": "l7-default-backend",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[fd59995cd]",
                                    "name": "fd59995cd",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[4rsq4]",
                                            "name": "4rsq4",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[default-http-backend]",
                            "name": "default-http-backend",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/defaultbackend-amd64]",
                                    "name": "k8s.gcr.io/defaultbackend-amd64",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-8080]",
                                    "name": "TCP-8080",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[NodePort]",
                                            "name": "NodePort",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[NodePort]",
                            "name": "NodePort",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[metrics-server-v0.3.1]",
                    "name": "metrics-server-v0.3.1",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[57c75779f]",
                                    "name": "57c75779f",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[5c6fbf777]",
                                    "name": "5c6fbf777",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[wz946]",
                                            "name": "wz946",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[7475db9b79]",
                                    "name": "7475db9b79",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[7b4d7f457]",
                                    "name": "7b4d7f457",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[c4cddd5f5]",
                                    "name": "c4cddd5f5",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[metrics-server]",
                            "name": "metrics-server",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[k8s.gcr.io/metrics-server-amd64]",
                                    "name": "k8s.gcr.io/metrics-server-amd64",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[https (TCP-443)]",
                                    "name": "https (TCP-443)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[metrics-server-nanny]",
                            "name": "metrics-server-nanny",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gke.gcr.io/addon-resizer]",
                                    "name": "gke.gcr.io/addon-resizer",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[metrics-server-config-volume]",
                                    "name": "metrics-server-config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[metrics-server-config]",
                                            "name": "metrics-server-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[metrics-server-config-volume]",
                                    "name": "metrics-server-config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[metrics-server-config]",
                                            "name": "metrics-server-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[metrics-server]",
                            "name": "metrics-server",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[metrics-server:system:auth-delegator]",
                                    "name": "metrics-server:system:auth-delegator",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[system:auth-delegator]",
                                            "name": "system:auth-delegator",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "crlbndg-[system:metrics-server]",
                                    "name": "system:metrics-server",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[system:metrics-server]",
                                            "name": "system:metrics-server",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "rlbndg-[metrics-server-auth-reader]",
                                    "name": "metrics-server-auth-reader",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "rl-[extension-apiserver-authentication-reader]",
                                            "name": "extension-apiserver-authentication-reader",
                                            "kind": "rl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {
                                                "shared": {
                                                    "name": "shared"
                                                }
                                            },
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "raw-[Raw Configs]",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "alertCount": {},
                    "flags": {
                        "radioactive": {
                            "propagatable": true,
                            "name": "radioactive"
                        }
                    },
                    "children": [
                        {
                            "rn": "raw-[Pods]",
                            "name": "Pods",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "radioactive": {
                                    "propagatable": true,
                                    "name": "radioactive"
                                }
                            },
                            "children": [
                                {
                                    "rn": "pod-[kube-proxy-gke-kubevious-samples-pool-2-d17eaa99-95cn]",
                                    "name": "kube-proxy-gke-kubevious-samples-pool-2-d17eaa99-95cn",
                                    "kind": "pod",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {
                                        "radioactive": {
                                            "propagatable": true,
                                            "name": "radioactive"
                                        }
                                    },
                                    "children": []
                                },
                                {
                                    "rn": "pod-[kube-proxy-gke-kubevious-samples-pool-2-d17eaa99-w6zl]",
                                    "name": "kube-proxy-gke-kubevious-samples-pool-2-d17eaa99-w6zl",
                                    "kind": "pod",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {
                                        "radioactive": {
                                            "propagatable": true,
                                            "name": "radioactive"
                                        }
                                    },
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-[ConfigMaps]",
                            "name": "ConfigMaps",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "configmap-[calico-typha-horizontal-autoscaler]",
                                    "name": "calico-typha-horizontal-autoscaler",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[extension-apiserver-authentication]",
                                    "name": "extension-apiserver-authentication",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[fluentd-gcp-config-v1.2.5]",
                                    "name": "fluentd-gcp-config-v1.2.5",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[gke-common-webhook-lock]",
                                    "name": "gke-common-webhook-lock",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[ingress-gce-lock]",
                                    "name": "ingress-gce-lock",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[ingress-uid]",
                                    "name": "ingress-uid",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[kube-dns-autoscaler]",
                                    "name": "kube-dns-autoscaler",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "configmap-[managed-certificate-config]",
                                    "name": "managed-certificate-config",
                                    "kind": "configmap",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-[ServiceAccounts]",
                            "name": "ServiceAccounts",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "svcaccnt-[attachdetach-controller]",
                                    "name": "attachdetach-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[calico]",
                                    "name": "calico",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[certificate-controller]",
                                    "name": "certificate-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[cloud-provider]",
                                    "name": "cloud-provider",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[clusterrole-aggregation-controller]",
                                    "name": "clusterrole-aggregation-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[cronjob-controller]",
                                    "name": "cronjob-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[daemon-set-controller]",
                                    "name": "daemon-set-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[deployment-controller]",
                                    "name": "deployment-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[disruption-controller]",
                                    "name": "disruption-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[endpoint-controller]",
                                    "name": "endpoint-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[expand-controller]",
                                    "name": "expand-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[generic-garbage-collector]",
                                    "name": "generic-garbage-collector",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[horizontal-pod-autoscaler]",
                                    "name": "horizontal-pod-autoscaler",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[job-controller]",
                                    "name": "job-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[namespace-controller]",
                                    "name": "namespace-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[node-controller]",
                                    "name": "node-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[persistent-volume-binder]",
                                    "name": "persistent-volume-binder",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[pod-garbage-collector]",
                                    "name": "pod-garbage-collector",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[pv-protection-controller]",
                                    "name": "pv-protection-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[pvc-protection-controller]",
                                    "name": "pvc-protection-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[replicaset-controller]",
                                    "name": "replicaset-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[replication-controller]",
                                    "name": "replication-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[resourcequota-controller]",
                                    "name": "resourcequota-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[service-account-controller]",
                                    "name": "service-account-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[service-controller]",
                                    "name": "service-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[statefulset-controller]",
                                    "name": "statefulset-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[ttl-controller]",
                                    "name": "ttl-controller",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[typha-cpva]",
                                    "name": "typha-cpva",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-[RoleBindings]",
                            "name": "RoleBindings",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "rlbndg-[gce:cloud-provider]",
                                    "name": "gce:cloud-provider",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "rlbndg-[system::extension-apiserver-authentication-reader]",
                                    "name": "system::extension-apiserver-authentication-reader",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "rlbndg-[system::leader-locking-kube-controller-manager]",
                                    "name": "system::leader-locking-kube-controller-manager",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "error": 1,
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "rlbndg-[system::leader-locking-kube-scheduler]",
                                    "name": "system::leader-locking-kube-scheduler",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "error": 1,
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "rlbndg-[system:controller:bootstrap-signer]",
                                    "name": "system:controller:bootstrap-signer",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "error": 1,
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "rlbndg-[system:controller:cloud-provider]",
                                    "name": "system:controller:cloud-provider",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "rlbndg-[system:controller:token-cleaner]",
                                    "name": "system:controller:token-cleaner",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "error": 1,
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-[Roles]",
                            "name": "Roles",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "rl-[cloud-provider]",
                                    "name": "cloud-provider",
                                    "kind": "rl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "rl-[gce:cloud-provider]",
                                    "name": "gce:cloud-provider",
                                    "kind": "rl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "rl-[system::leader-locking-kube-controller-manager]",
                                    "name": "system::leader-locking-kube-controller-manager",
                                    "kind": "rl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "rl-[system::leader-locking-kube-scheduler]",
                                    "name": "system::leader-locking-kube-scheduler",
                                    "kind": "rl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "rl-[system:controller:bootstrap-signer]",
                                    "name": "system:controller:bootstrap-signer",
                                    "kind": "rl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "rl-[system:controller:cloud-provider]",
                                    "name": "system:controller:cloud-provider",
                                    "kind": "rl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "rl-[system:controller:token-cleaner]",
                                    "name": "system:controller:token-cleaner",
                                    "kind": "rl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-[openfaas]",
            "name": "openfaas",
            "kind": "ns",
            "order": 100,
            "alertCount": {},
            "flags": {
                "xnamespace": {
                    "propagatable": true,
                    "name": "xnamespace"
                }
            },
            "children": [
                {
                    "rn": "app-[alertmanager]",
                    "name": "alertmanager",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[8487d7f7bb]",
                                    "name": "8487d7f7bb",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[zc26t]",
                                            "name": "zc26t",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[alertmanager]",
                            "name": "alertmanager",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[prom/alertmanager]",
                                    "name": "prom/alertmanager",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-9093]",
                                    "name": "TCP-9093",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[alertmanager-config]",
                                    "name": "alertmanager-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[alertmanager-config]",
                                            "name": "alertmanager-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[auth]",
                                    "name": "auth",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[basic-auth]",
                                            "name": "basic-auth",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[alertmanager-config]",
                                    "name": "alertmanager-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[alertmanager-config]",
                                            "name": "alertmanager-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[auth]",
                                    "name": "auth",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[basic-auth]",
                                            "name": "basic-auth",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[basic-auth-plugin]",
                    "name": "basic-auth-plugin",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[6b4c47c965]",
                                    "name": "6b4c47c965",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[8j4x9]",
                                            "name": "8j4x9",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[basic-auth-plugin]",
                            "name": "basic-auth-plugin",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[openfaas/basic-auth-plugin]",
                                    "name": "openfaas/basic-auth-plugin",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[http (TCP-8080)]",
                                    "name": "http (TCP-8080)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[auth]",
                                    "name": "auth",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[basic-auth]",
                                            "name": "basic-auth",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[auth]",
                                    "name": "auth",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[basic-auth]",
                                            "name": "basic-auth",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[faas-idler]",
                    "name": "faas-idler",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[66ff47fdf5]",
                                    "name": "66ff47fdf5",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[7cqgd]",
                                            "name": "7cqgd",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[faas-idler]",
                            "name": "faas-idler",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[openfaas/faas-idler]",
                                    "name": "openfaas/faas-idler",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[auth]",
                                    "name": "auth",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[basic-auth]",
                                            "name": "basic-auth",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[auth]",
                                    "name": "auth",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[basic-auth]",
                                            "name": "basic-auth",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[gateway]",
                    "name": "gateway",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[d56c44b6d]",
                                    "name": "d56c44b6d",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[7kprp]",
                                            "name": "7kprp",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[dcc7d75b]",
                                    "name": "dcc7d75b",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[gateway]",
                            "name": "gateway",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[openfaas/gateway]",
                                    "name": "openfaas/gateway",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[http (TCP-8080)]",
                                    "name": "http (TCP-8080)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": [
                                                {
                                                    "rn": "ingress-[openfaas-ingress]",
                                                    "name": "openfaas-ingress",
                                                    "kind": "ingress",
                                                    "order": 100,
                                                    "alertCount": {},
                                                    "flags": {},
                                                    "children": []
                                                }
                                            ]
                                        },
                                        {
                                            "rn": "service-[NodePort]",
                                            "name": "NodePort",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[auth]",
                                    "name": "auth",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[basic-auth]",
                                            "name": "basic-auth",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[faas-netes]",
                            "name": "faas-netes",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[openfaas/faas-netes]",
                                    "name": "openfaas/faas-netes",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-8081]",
                                    "name": "TCP-8081",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[faas-netes-temp-volume]",
                                    "name": "faas-netes-temp-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[faas-netes-temp-volume]",
                                    "name": "faas-netes-temp-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[auth]",
                                    "name": "auth",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[basic-auth]",
                                            "name": "basic-auth",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "ingress-[openfaas-ingress]",
                                    "name": "openfaas-ingress",
                                    "kind": "ingress",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[NodePort]",
                            "name": "NodePort",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "ingress-[openfaas-ingress]",
                            "name": "openfaas-ingress",
                            "kind": "ingress",
                            "order": 250,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[openfaas-controller]",
                            "name": "openfaas-controller",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "rlbndg-[openfaas-controller]",
                                    "name": "openfaas-controller",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "rl-[openfaas-controller]",
                                            "name": "openfaas-controller",
                                            "kind": "rl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[nats]",
                    "name": "nats",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[7666fb76bd]",
                                    "name": "7666fb76bd",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[8pfw6]",
                                            "name": "8pfw6",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[nats]",
                            "name": "nats",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[nats-streaming]",
                                    "name": "nats-streaming",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-4222]",
                                    "name": "TCP-4222",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[prometheus]",
                    "name": "prometheus",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[6d4c6646b9]",
                                    "name": "6d4c6646b9",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[llzc9]",
                                            "name": "llzc9",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[prometheus]",
                            "name": "prometheus",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[prom/prometheus]",
                                    "name": "prom/prometheus",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-9090]",
                                    "name": "TCP-9090",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[prometheus-config]",
                                    "name": "prometheus-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[prometheus-config]",
                                            "name": "prometheus-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[prom-data]",
                                    "name": "prom-data",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[prometheus-config]",
                                    "name": "prometheus-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[prometheus-config]",
                                            "name": "prometheus-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[prom-data]",
                                    "name": "prom-data",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[openfaas-prometheus]",
                            "name": "openfaas-prometheus",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "rlbndg-[openfaas-prometheus]",
                                    "name": "openfaas-prometheus",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "rl-[openfaas-prometheus]",
                                            "name": "openfaas-prometheus",
                                            "kind": "rl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-[queue-worker]",
                    "name": "queue-worker",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[75658c877d]",
                                    "name": "75658c877d",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[fc6fs]",
                                            "name": "fc6fs",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[queue-worker]",
                            "name": "queue-worker",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[openfaas/queue-worker]",
                                    "name": "openfaas/queue-worker",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "vol-[auth]",
                                    "name": "auth",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[basic-auth]",
                                            "name": "basic-auth",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[auth]",
                                    "name": "auth",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "secret-[basic-auth]",
                                            "name": "basic-auth",
                                            "kind": "secret",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-[polaris]",
            "name": "polaris",
            "kind": "ns",
            "order": 100,
            "alertCount": {},
            "flags": {
                "xnamespace": {
                    "propagatable": true,
                    "name": "xnamespace"
                }
            },
            "children": [
                {
                    "rn": "app-[polaris-dashboard]",
                    "name": "polaris-dashboard",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {
                        "xnamespace": {
                            "propagatable": true,
                            "name": "xnamespace"
                        }
                    },
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[7795686ff7]",
                                    "name": "7795686ff7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[8554786c49]",
                                    "name": "8554786c49",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[xq69z]",
                                            "name": "xq69z",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[dashboard]",
                            "name": "dashboard",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[quay.io/fairwinds/polaris]",
                                    "name": "quay.io/fairwinds/polaris",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-8080]",
                                    "name": "TCP-8080",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[config]",
                                    "name": "config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[polaris]",
                                            "name": "polaris",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[config]",
                                    "name": "config",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "configmap-[polaris]",
                                            "name": "polaris",
                                            "kind": "configmap",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[polaris-dashboard]",
                            "name": "polaris-dashboard",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "xnamespace": {
                                    "propagatable": true,
                                    "name": "xnamespace"
                                }
                            },
                            "children": [
                                {
                                    "rn": "crlbndg-[polaris-dashboard]",
                                    "name": "polaris-dashboard",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {
                                        "xnamespace": {
                                            "propagatable": true,
                                            "name": "xnamespace"
                                        }
                                    },
                                    "children": [
                                        {
                                            "rn": "crl-[polaris-dashboard]",
                                            "name": "polaris-dashboard",
                                            "kind": "crl",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "raw-[Raw Configs]",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "raw-[ServiceAccounts]",
                            "name": "ServiceAccounts",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "svcaccnt-[default]",
                                    "name": "default",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-[default]",
            "name": "default",
            "kind": "ns",
            "order": 100,
            "alertCount": {},
            "flags": {},
            "children": [
                {
                    "rn": "raw-[Raw Configs]",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "raw-[Services]",
                            "name": "Services",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "service-[kubernetes]",
                                    "name": "kubernetes",
                                    "kind": "service",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-[ServiceAccounts]",
                            "name": "ServiceAccounts",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "svcaccnt-[default]",
                                    "name": "default",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "svcaccnt-[kube-ops-view]",
                                    "name": "kube-ops-view",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-[experiment]",
            "name": "experiment",
            "kind": "ns",
            "order": 100,
            "alertCount": {},
            "flags": {},
            "children": [
                {
                    "rn": "raw-[Raw Configs]",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "raw-[ServiceAccounts]",
                            "name": "ServiceAccounts",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "svcaccnt-[default]",
                                    "name": "default",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-[hipster]",
            "name": "hipster",
            "kind": "ns",
            "order": 100,
            "alertCount": {},
            "flags": {},
            "children": [
                {
                    "rn": "app-[adservice]",
                    "name": "adservice",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[78bf7fbd8c]",
                                    "name": "78bf7fbd8c",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[84b8749d65]",
                                    "name": "84b8749d65",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[ngsw4]",
                                            "name": "ngsw4",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {
                                                "error": 2
                                            },
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[b9cc4b8c5]",
                                    "name": "b9cc4b8c5",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[server]",
                            "name": "server",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/google-samples/microservices-demo/adservice]",
                                    "name": "gcr.io/google-samples/microservices-demo/adservice",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-9555]",
                                    "name": "TCP-9555",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[cartservice]",
                    "name": "cartservice",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[55f8ccc8f4]",
                                    "name": "55f8ccc8f4",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[c5flx]",
                                            "name": "c5flx",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[6884ccc4d]",
                                    "name": "6884ccc4d",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[7c59b85886]",
                                    "name": "7c59b85886",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[f7fb7c956]",
                                    "name": "f7fb7c956",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[server]",
                            "name": "server",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/google-samples/microservices-demo/cartservice]",
                                    "name": "gcr.io/google-samples/microservices-demo/cartservice",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-7070]",
                                    "name": "TCP-7070",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[checkoutservice]",
                    "name": "checkoutservice",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[77d8f889b7]",
                                    "name": "77d8f889b7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[wkkcp]",
                                            "name": "wkkcp",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[7f8444cc85]",
                                    "name": "7f8444cc85",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[server]",
                            "name": "server",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/google-samples/microservices-demo/checkoutservice]",
                                    "name": "gcr.io/google-samples/microservices-demo/checkoutservice",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-5050]",
                                    "name": "TCP-5050",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[currencyservice]",
                    "name": "currencyservice",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[5bfb6949c5]",
                                    "name": "5bfb6949c5",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[7775f7949]",
                                    "name": "7775f7949",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[4bx5q]",
                                            "name": "4bx5q",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[7c75f54c7]",
                                    "name": "7c75f54c7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[server]",
                            "name": "server",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/google-samples/microservices-demo/currencyservice]",
                                    "name": "gcr.io/google-samples/microservices-demo/currencyservice",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[grpc (TCP-7000)]",
                                    "name": "grpc (TCP-7000)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[emailservice]",
                    "name": "emailservice",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[5df6786475]",
                                    "name": "5df6786475",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[6545668f4f]",
                                    "name": "6545668f4f",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[x5lrn]",
                                            "name": "x5lrn",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[84dbb97b49]",
                                    "name": "84dbb97b49",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[server]",
                            "name": "server",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/google-samples/microservices-demo/emailservice]",
                                    "name": "gcr.io/google-samples/microservices-demo/emailservice",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-8080]",
                                    "name": "TCP-8080",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[frontend]",
                    "name": "frontend",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[7b4bf446ff]",
                                    "name": "7b4bf446ff",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[7dbdf6c769]",
                                    "name": "7dbdf6c769",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[b2t8p]",
                                            "name": "b2t8p",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[server]",
                            "name": "server",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/google-samples/microservices-demo/frontend]",
                                    "name": "gcr.io/google-samples/microservices-demo/frontend",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-8080]",
                                    "name": "TCP-8080",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        },
                                        {
                                            "rn": "service-[LoadBalancer]",
                                            "name": "LoadBalancer",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "service-[LoadBalancer]",
                            "name": "LoadBalancer",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[loadgenerator]",
                    "name": "loadgenerator",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[547598db87]",
                                    "name": "547598db87",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[4rj9d]",
                                            "name": "4rj9d",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[56d8c759d5]",
                                    "name": "56d8c759d5",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[main]",
                            "name": "main",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/google-samples/microservices-demo/loadgenerator]",
                                    "name": "gcr.io/google-samples/microservices-demo/loadgenerator",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[paymentservice]",
                    "name": "paymentservice",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[57445cf999]",
                                    "name": "57445cf999",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[58ffcf9f77]",
                                    "name": "58ffcf9f77",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[6b9d88465f]",
                                    "name": "6b9d88465f",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[6lflc]",
                                            "name": "6lflc",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[server]",
                            "name": "server",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/google-samples/microservices-demo/paymentservice]",
                                    "name": "gcr.io/google-samples/microservices-demo/paymentservice",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-50051]",
                                    "name": "TCP-50051",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[productcatalogservice]",
                    "name": "productcatalogservice",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[557c755fb5]",
                                    "name": "557c755fb5",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-[7f5dc87d7]",
                                    "name": "7f5dc87d7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[tsndv]",
                                            "name": "tsndv",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[server]",
                            "name": "server",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/google-samples/microservices-demo/productcatalogservice]",
                                    "name": "gcr.io/google-samples/microservices-demo/productcatalogservice",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-3550]",
                                    "name": "TCP-3550",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[recommendationservice]",
                    "name": "recommendationservice",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[744d5589c7]",
                                    "name": "744d5589c7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[njg8v]",
                                            "name": "njg8v",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {
                                                "error": 2
                                            },
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[7795565967]",
                                    "name": "7795565967",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[server]",
                            "name": "server",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/google-samples/microservices-demo/recommendationservice]",
                                    "name": "gcr.io/google-samples/microservices-demo/recommendationservice",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-8080]",
                                    "name": "TCP-8080",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[redis-cart]",
                    "name": "redis-cart",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[58764b9d5d]",
                                    "name": "58764b9d5d",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[t4fp8]",
                                            "name": "t4fp8",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[65bf66b8fd]",
                                    "name": "65bf66b8fd",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[redis]",
                            "name": "redis",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[redis]",
                                    "name": "redis",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-6379]",
                                    "name": "TCP-6379",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[redis-data]",
                                    "name": "redis-data",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[redis-data]",
                                    "name": "redis-data",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[shippingservice]",
                    "name": "shippingservice",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[5f96974545]",
                                    "name": "5f96974545",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[q6dm9]",
                                            "name": "q6dm9",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-[7b8dd7b7d7]",
                                    "name": "7b8dd7b7d7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-[server]",
                            "name": "server",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[gcr.io/google-samples/microservices-demo/shippingservice]",
                                    "name": "gcr.io/google-samples/microservices-demo/shippingservice",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-50051]",
                                    "name": "TCP-50051",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-[kube-node-lease]",
            "name": "kube-node-lease",
            "kind": "ns",
            "order": 100,
            "alertCount": {},
            "flags": {},
            "children": [
                {
                    "rn": "raw-[Raw Configs]",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "raw-[ServiceAccounts]",
                            "name": "ServiceAccounts",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "svcaccnt-[default]",
                                    "name": "default",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-[kube-public]",
            "name": "kube-public",
            "kind": "ns",
            "order": 100,
            "alertCount": {},
            "flags": {},
            "children": [
                {
                    "rn": "raw-[Raw Configs]",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "raw-[ServiceAccounts]",
                            "name": "ServiceAccounts",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "svcaccnt-[default]",
                                    "name": "default",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-[RoleBindings]",
                            "name": "RoleBindings",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "rlbndg-[system:controller:bootstrap-signer]",
                                    "name": "system:controller:bootstrap-signer",
                                    "kind": "rlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "error": 1,
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-[Roles]",
                            "name": "Roles",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "rl-[system:controller:bootstrap-signer]",
                                    "name": "system:controller:bootstrap-signer",
                                    "kind": "rl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-[openfaas-fn]",
            "name": "openfaas-fn",
            "kind": "ns",
            "order": 100,
            "alertCount": {},
            "flags": {},
            "children": [
                {
                    "rn": "raw-[Raw Configs]",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "raw-[ServiceAccounts]",
                            "name": "ServiceAccounts",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "svcaccnt-[default]",
                                    "name": "default",
                                    "kind": "svcaccnt",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-[sock-shop]",
            "name": "sock-shop",
            "kind": "ns",
            "order": 100,
            "alertCount": {},
            "flags": {},
            "children": [
                {
                    "rn": "app-[carts]",
                    "name": "carts",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[6bfcf84f4]",
                                    "name": "6bfcf84f4",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[hsqsd]",
                                            "name": "hsqsd",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[carts]",
                            "name": "carts",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[weaveworksdemos/carts]",
                                    "name": "weaveworksdemos/carts",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-80]",
                                    "name": "TCP-80",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[tmp-volume]",
                                    "name": "tmp-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[tmp-volume]",
                                    "name": "tmp-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[carts-db]",
                    "name": "carts-db",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[6bfc588c5f]",
                                    "name": "6bfc588c5f",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[zrvzj]",
                                            "name": "zrvzj",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[carts-db]",
                            "name": "carts-db",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[mongo]",
                                    "name": "mongo",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[mongo (TCP-27017)]",
                                    "name": "mongo (TCP-27017)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[tmp-volume]",
                                    "name": "tmp-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[tmp-volume]",
                                    "name": "tmp-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[catalogue]",
                    "name": "catalogue",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[77d4f66dbf]",
                                    "name": "77d4f66dbf",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[pj7jv]",
                                            "name": "pj7jv",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[catalogue]",
                            "name": "catalogue",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[weaveworksdemos/catalogue]",
                                    "name": "weaveworksdemos/catalogue",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-80]",
                                    "name": "TCP-80",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[catalogue-db]",
                    "name": "catalogue-db",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[99cbcbb88]",
                                    "name": "99cbcbb88",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[26kfx]",
                                            "name": "26kfx",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[catalogue-db]",
                            "name": "catalogue-db",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[weaveworksdemos/catalogue-db]",
                                    "name": "weaveworksdemos/catalogue-db",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[mysql (TCP-3306)]",
                                    "name": "mysql (TCP-3306)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[front-end]",
                    "name": "front-end",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[b5f568888]",
                                    "name": "b5f568888",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[8gg8p]",
                                            "name": "8gg8p",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[front-end]",
                            "name": "front-end",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[weaveworksdemos/front-end]",
                                    "name": "weaveworksdemos/front-end",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-8079]",
                                    "name": "TCP-8079",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[NodePort]",
                                            "name": "NodePort",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[NodePort]",
                            "name": "NodePort",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[orders]",
                    "name": "orders",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[54d7666f75]",
                                    "name": "54d7666f75",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[dmj9p]",
                                            "name": "dmj9p",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[orders]",
                            "name": "orders",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[weaveworksdemos/orders]",
                                    "name": "weaveworksdemos/orders",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-80]",
                                    "name": "TCP-80",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[tmp-volume]",
                                    "name": "tmp-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[tmp-volume]",
                                    "name": "tmp-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[orders-db]",
                    "name": "orders-db",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[7888765df9]",
                                    "name": "7888765df9",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[dqsp6]",
                                            "name": "dqsp6",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[orders-db]",
                            "name": "orders-db",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[mongo]",
                                    "name": "mongo",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[mongo (TCP-27017)]",
                                    "name": "mongo (TCP-27017)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[tmp-volume]",
                                    "name": "tmp-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[tmp-volume]",
                                    "name": "tmp-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[payment]",
                    "name": "payment",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[7d8497bcd7]",
                                    "name": "7d8497bcd7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[z8ksd]",
                                            "name": "z8ksd",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[payment]",
                            "name": "payment",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[weaveworksdemos/payment]",
                                    "name": "weaveworksdemos/payment",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-80]",
                                    "name": "TCP-80",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[queue-master]",
                    "name": "queue-master",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[6bb75d8867]",
                                    "name": "6bb75d8867",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[9dh6g]",
                                            "name": "9dh6g",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[queue-master]",
                            "name": "queue-master",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[weaveworksdemos/queue-master]",
                                    "name": "weaveworksdemos/queue-master",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-80]",
                                    "name": "TCP-80",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[rabbitmq]",
                    "name": "rabbitmq",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[5786759fc9]",
                                    "name": "5786759fc9",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[w6t8r]",
                                            "name": "w6t8r",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[rabbitmq]",
                            "name": "rabbitmq",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[rabbitmq]",
                                    "name": "rabbitmq",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-5672]",
                                    "name": "TCP-5672",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[shipping]",
                    "name": "shipping",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[58bc954d85]",
                                    "name": "58bc954d85",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[jv9zg]",
                                            "name": "jv9zg",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[shipping]",
                            "name": "shipping",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[weaveworksdemos/shipping]",
                                    "name": "weaveworksdemos/shipping",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-80]",
                                    "name": "TCP-80",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[tmp-volume]",
                                    "name": "tmp-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[tmp-volume]",
                                    "name": "tmp-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[user]",
                    "name": "user",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[6b5f6896c4]",
                                    "name": "6b5f6896c4",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[7xjgm]",
                                            "name": "7xjgm",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[user]",
                            "name": "user",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[weaveworksdemos/user]",
                                    "name": "weaveworksdemos/user",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[TCP-80]",
                                    "name": "TCP-80",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-[user-db]",
                    "name": "user-db",
                    "kind": "app",
                    "order": 100,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "launcher-[Deployment]",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "replicaset-[6d5c9f6d84]",
                                    "name": "6d5c9f6d84",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "pod-[4b9wj]",
                                            "name": "4b9wj",
                                            "kind": "pod",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-[user-db]",
                            "name": "user-db",
                            "kind": "cont",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "image-[weaveworksdemos/user-db]",
                                    "name": "weaveworksdemos/user-db",
                                    "kind": "image",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "port-[mongo (TCP-27017)]",
                                    "name": "mongo (TCP-27017)",
                                    "kind": "port",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": [
                                        {
                                            "rn": "service-[ClusterIP]",
                                            "name": "ClusterIP",
                                            "kind": "service",
                                            "order": 100,
                                            "alertCount": {},
                                            "flags": {},
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-[tmp-volume]",
                                    "name": "tmp-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-[Volumes]",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "vol-[tmp-volume]",
                                    "name": "tmp-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "alertCount": {},
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-[ClusterIP]",
                            "name": "ClusterIP",
                            "kind": "service",
                            "order": 200,
                            "alertCount": {},
                            "flags": {},
                            "children": []
                        },
                        {
                            "rn": "svcaccnt-[default]",
                            "name": "default",
                            "kind": "svcaccnt",
                            "order": 100,
                            "alertCount": {},
                            "flags": {
                                "shared": {
                                    "name": "shared"
                                }
                            },
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns",
            "name": "",
            "kind": "ns",
            "order": 100,
            "alertCount": {},
            "flags": {},
            "children": [
                {
                    "rn": "raw-[Raw Configs]",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "alertCount": {},
                    "flags": {},
                    "children": [
                        {
                            "rn": "raw-[ClusterRoleBindings]",
                            "name": "ClusterRoleBindings",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "crlbndg-[calico]",
                                    "name": "calico",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[cluster-admin]",
                                    "name": "cluster-admin",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[cluster-autoscaler-updateinfo]",
                                    "name": "cluster-autoscaler-updateinfo",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[gce:beta:kubelet-certificate-bootstrap]",
                                    "name": "gce:beta:kubelet-certificate-bootstrap",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[gce:beta:kubelet-certificate-rotation]",
                                    "name": "gce:beta:kubelet-certificate-rotation",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[gce:cloud-provider]",
                                    "name": "gce:cloud-provider",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[kube-apiserver-kubelet-api-admin]",
                                    "name": "kube-apiserver-kubelet-api-admin",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[kube-ops-view]",
                                    "name": "kube-ops-view",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[kubelet-bootstrap]",
                                    "name": "kubelet-bootstrap",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[kubelet-bootstrap-certificate-bootstrap]",
                                    "name": "kubelet-bootstrap-certificate-bootstrap",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[kubelet-bootstrap-node-bootstrapper]",
                                    "name": "kubelet-bootstrap-node-bootstrapper",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[kubelet-cluster-admin]",
                                    "name": "kubelet-cluster-admin",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[npd-binding]",
                                    "name": "npd-binding",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:aws-cloud-provider]",
                                    "name": "system:aws-cloud-provider",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "error": 1,
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:basic-user]",
                                    "name": "system:basic-user",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:attachdetach-controller]",
                                    "name": "system:controller:attachdetach-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:certificate-controller]",
                                    "name": "system:controller:certificate-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:clusterrole-aggregation-controller]",
                                    "name": "system:controller:clusterrole-aggregation-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:cronjob-controller]",
                                    "name": "system:controller:cronjob-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:daemon-set-controller]",
                                    "name": "system:controller:daemon-set-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:deployment-controller]",
                                    "name": "system:controller:deployment-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:disruption-controller]",
                                    "name": "system:controller:disruption-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:endpoint-controller]",
                                    "name": "system:controller:endpoint-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:expand-controller]",
                                    "name": "system:controller:expand-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:generic-garbage-collector]",
                                    "name": "system:controller:generic-garbage-collector",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:horizontal-pod-autoscaler]",
                                    "name": "system:controller:horizontal-pod-autoscaler",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:job-controller]",
                                    "name": "system:controller:job-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:namespace-controller]",
                                    "name": "system:controller:namespace-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:node-controller]",
                                    "name": "system:controller:node-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:persistent-volume-binder]",
                                    "name": "system:controller:persistent-volume-binder",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:pod-garbage-collector]",
                                    "name": "system:controller:pod-garbage-collector",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:pv-protection-controller]",
                                    "name": "system:controller:pv-protection-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:pvc-protection-controller]",
                                    "name": "system:controller:pvc-protection-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:replicaset-controller]",
                                    "name": "system:controller:replicaset-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:replication-controller]",
                                    "name": "system:controller:replication-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:resourcequota-controller]",
                                    "name": "system:controller:resourcequota-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:route-controller]",
                                    "name": "system:controller:route-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "error": 1,
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:service-account-controller]",
                                    "name": "system:controller:service-account-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:service-controller]",
                                    "name": "system:controller:service-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:statefulset-controller]",
                                    "name": "system:controller:statefulset-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:controller:ttl-controller]",
                                    "name": "system:controller:ttl-controller",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:discovery]",
                                    "name": "system:discovery",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:kube-controller-manager]",
                                    "name": "system:kube-controller-manager",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:kube-scheduler]",
                                    "name": "system:kube-scheduler",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:node]",
                                    "name": "system:node",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:node-proxier]",
                                    "name": "system:node-proxier",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:public-info-viewer]",
                                    "name": "system:public-info-viewer",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[system:volume-scheduler]",
                                    "name": "system:volume-scheduler",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crlbndg-[typha-cpva]",
                                    "name": "typha-cpva",
                                    "kind": "crlbndg",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-[ClusterRoles]",
                            "name": "ClusterRoles",
                            "kind": "raw",
                            "order": 100,
                            "alertCount": {},
                            "flags": {},
                            "children": [
                                {
                                    "rn": "crl-[admin]",
                                    "name": "admin",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[cloud-provider]",
                                    "name": "cloud-provider",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[cluster-admin]",
                                    "name": "cluster-admin",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[edit]",
                                    "name": "edit",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[gce:beta:kubelet-certificate-bootstrap]",
                                    "name": "gce:beta:kubelet-certificate-bootstrap",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[gce:beta:kubelet-certificate-rotation]",
                                    "name": "gce:beta:kubelet-certificate-rotation",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[gce:cloud-provider]",
                                    "name": "gce:cloud-provider",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[gitlab-cert-manager-edit]",
                                    "name": "gitlab-cert-manager-edit",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[gitlab-cert-manager-view]",
                                    "name": "gitlab-cert-manager-view",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[gitlab-cert-manager-webhook:webhook-requester]",
                                    "name": "gitlab-cert-manager-webhook:webhook-requester",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[kube-ops-view]",
                                    "name": "kube-ops-view",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[kubelet-api-admin]",
                                    "name": "kubelet-api-admin",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[kubevious-test]",
                                    "name": "kubevious-test",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[pods-fetcher]",
                                    "name": "pods-fetcher",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[read-updateinfo]",
                                    "name": "read-updateinfo",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:aggregate-to-admin]",
                                    "name": "system:aggregate-to-admin",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:aggregate-to-edit]",
                                    "name": "system:aggregate-to-edit",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:aggregate-to-view]",
                                    "name": "system:aggregate-to-view",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:aws-cloud-provider]",
                                    "name": "system:aws-cloud-provider",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:basic-user]",
                                    "name": "system:basic-user",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:certificates.k8s.io:certificatesigningrequests:nodeclient]",
                                    "name": "system:certificates.k8s.io:certificatesigningrequests:nodeclient",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:certificates.k8s.io:certificatesigningrequests:selfnodeclient]",
                                    "name": "system:certificates.k8s.io:certificatesigningrequests:selfnodeclient",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:attachdetach-controller]",
                                    "name": "system:controller:attachdetach-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:certificate-controller]",
                                    "name": "system:controller:certificate-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:clusterrole-aggregation-controller]",
                                    "name": "system:controller:clusterrole-aggregation-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:cronjob-controller]",
                                    "name": "system:controller:cronjob-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:daemon-set-controller]",
                                    "name": "system:controller:daemon-set-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:deployment-controller]",
                                    "name": "system:controller:deployment-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:disruption-controller]",
                                    "name": "system:controller:disruption-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:endpoint-controller]",
                                    "name": "system:controller:endpoint-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:expand-controller]",
                                    "name": "system:controller:expand-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:generic-garbage-collector]",
                                    "name": "system:controller:generic-garbage-collector",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:horizontal-pod-autoscaler]",
                                    "name": "system:controller:horizontal-pod-autoscaler",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:job-controller]",
                                    "name": "system:controller:job-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:namespace-controller]",
                                    "name": "system:controller:namespace-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:node-controller]",
                                    "name": "system:controller:node-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:persistent-volume-binder]",
                                    "name": "system:controller:persistent-volume-binder",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:pod-garbage-collector]",
                                    "name": "system:controller:pod-garbage-collector",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:pv-protection-controller]",
                                    "name": "system:controller:pv-protection-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:pvc-protection-controller]",
                                    "name": "system:controller:pvc-protection-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:replicaset-controller]",
                                    "name": "system:controller:replicaset-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:replication-controller]",
                                    "name": "system:controller:replication-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:resourcequota-controller]",
                                    "name": "system:controller:resourcequota-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:route-controller]",
                                    "name": "system:controller:route-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:service-account-controller]",
                                    "name": "system:controller:service-account-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:service-controller]",
                                    "name": "system:controller:service-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:statefulset-controller]",
                                    "name": "system:controller:statefulset-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:controller:ttl-controller]",
                                    "name": "system:controller:ttl-controller",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:csi-external-attacher]",
                                    "name": "system:csi-external-attacher",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:csi-external-provisioner]",
                                    "name": "system:csi-external-provisioner",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:discovery]",
                                    "name": "system:discovery",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:kube-aggregator]",
                                    "name": "system:kube-aggregator",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:kube-controller-manager]",
                                    "name": "system:kube-controller-manager",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:kube-scheduler]",
                                    "name": "system:kube-scheduler",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:kubelet-api-admin]",
                                    "name": "system:kubelet-api-admin",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:node]",
                                    "name": "system:node",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:node-bootstrapper]",
                                    "name": "system:node-bootstrapper",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:node-problem-detector]",
                                    "name": "system:node-problem-detector",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:node-proxier]",
                                    "name": "system:node-proxier",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:persistent-volume-provisioner]",
                                    "name": "system:persistent-volume-provisioner",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:public-info-viewer]",
                                    "name": "system:public-info-viewer",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[system:volume-scheduler]",
                                    "name": "system:volume-scheduler",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                },
                                {
                                    "rn": "crl-[typha-cpva]",
                                    "name": "typha-cpva",
                                    "kind": "crl",
                                    "order": 100,
                                    "alertCount": {
                                        "warn": 1
                                    },
                                    "flags": {},
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}


export const HISTORY_GRAPH_DATA = {
    "rn": "root",
    "kind": "root",
    "order": 100,
    "errorCount": 0,
    "children": [
        {
            "rn": "ns-sprt",
            "name": "sprt",
            "kind": "ns",
            "order": 100,
            "errorCount": 0,
            "children": [
                {
                    "rn": "app-gprod-sprt-main-dtrace",
                    "name": "gprod-sprt-main-dtrace",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-5f66947d67",
                                    "name": "5f66947d67",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-5lhx8",
                                            "name": "5lhx8",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-gprod-sprt-main-dtrace",
                            "name": "gprod-sprt-main-dtrace",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-google-cloud-key",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "port-client (TCP-9411)",
                                    "name": "client (TCP-9411)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "service-Service 2",
                                            "name": "Service 2",
                                            "kind": "service",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "port-web (TCP-16686)",
                                    "name": "web (TCP-16686)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "service-Service",
                                            "name": "Service",
                                            "kind": "service",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-Volumes",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-google-cloud-key",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-Service",
                            "name": "Service",
                            "kind": "service",
                            "order": 200,
                            "errorCount": 0,
                            "children": []
                        },
                        {
                            "rn": "service-Service 2",
                            "name": "Service 2",
                            "kind": "service",
                            "order": 200,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-gprod-sprt-main-prmts",
                    "name": "gprod-sprt-main-prmts",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-65665cc8d",
                                    "name": "65665cc8d",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-27c86",
                                            "name": "27c86",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-gprod-sprt-main-prmts",
                            "name": "gprod-sprt-main-prmts",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-google-cloud-key",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "port-server (TCP-9090)",
                                    "name": "server (TCP-9090)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "service-Service",
                                            "name": "Service",
                                            "kind": "service",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "port-push (TCP-9091)",
                                    "name": "push (TCP-9091)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "service-Service 2",
                                            "name": "Service 2",
                                            "kind": "service",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-Volumes",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-google-cloud-key",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-Service",
                            "name": "Service",
                            "kind": "service",
                            "order": 200,
                            "errorCount": 0,
                            "children": []
                        },
                        {
                            "rn": "service-Service 2",
                            "name": "Service 2",
                            "kind": "service",
                            "order": 200,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "raw-Raw Configs",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "raw-Services",
                            "name": "Services",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "service-gprod-sprt-main-dtrace-web",
                                    "name": "gprod-sprt-main-dtrace-web",
                                    "kind": "service",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "service-gprod-sprt-main-dtrace-client",
                                    "name": "gprod-sprt-main-dtrace-client",
                                    "kind": "service",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "service-gprod-sprt-main-grfna-default",
                                    "name": "gprod-sprt-main-grfna-default",
                                    "kind": "service",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "service-gprod-sprt-main-prmts-server",
                                    "name": "gprod-sprt-main-prmts-server",
                                    "kind": "service",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "service-gprod-sprt-main-prmts-push",
                                    "name": "gprod-sprt-main-prmts-push",
                                    "kind": "service",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-ReplicaSets",
                            "name": "ReplicaSets",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-gprod-sprt-main-prmts-65665cc8d",
                                    "name": "gprod-sprt-main-prmts-65665cc8d",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-27c86",
                                            "name": "27c86",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-gprod-sprt-main-dtrace-5f66947d67",
                                    "name": "gprod-sprt-main-dtrace-5f66947d67",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-5lhx8",
                                            "name": "5lhx8",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "raw-Pods",
                            "name": "Pods",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "pod-gprod-sprt-main-dtrace-5f66947d67-5lhx8",
                                    "name": "gprod-sprt-main-dtrace-5f66947d67-5lhx8",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-gprod-sprt-main-prmts-65665cc8d-27c86",
                                    "name": "gprod-sprt-main-prmts-65665cc8d-27c86",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-kubevious",
            "name": "kubevious",
            "kind": "ns",
            "order": 100,
            "errorCount": 0,
            "children": [
                {
                    "rn": "app-kubevious",
                    "name": "kubevious",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-766969d494",
                                    "name": "766969d494",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-gqthz",
                                            "name": "gqthz",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-kubevious",
                            "name": "kubevious",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "port-http (TCP-4000)",
                                    "name": "http (TCP-4000)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "service-Service",
                                            "name": "Service",
                                            "kind": "service",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": [
                                                {
                                                    "rn": "ingress-kubevious",
                                                    "name": "kubevious",
                                                    "kind": "ingress",
                                                    "order": 100,
                                                    "errorCount": 0,
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-Service",
                            "name": "Service",
                            "kind": "service",
                            "order": 200,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "ingress-kubevious",
                                    "name": "kubevious",
                                    "kind": "ingress",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "ingress-kubevious",
                            "name": "kubevious",
                            "kind": "ingress",
                            "order": 250,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-kubevious-ui",
                    "name": "kubevious-ui",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-6fbc9ff959",
                                    "name": "6fbc9ff959",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-5fsp4",
                                            "name": "5fsp4",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-kubevious-ui",
                            "name": "kubevious-ui",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "port-http (TCP-3000)",
                                    "name": "http (TCP-3000)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "service-Service",
                                            "name": "Service",
                                            "kind": "service",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": [
                                                {
                                                    "rn": "ingress-kubevious",
                                                    "name": "kubevious",
                                                    "kind": "ingress",
                                                    "order": 100,
                                                    "errorCount": 0,
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-Service",
                            "name": "Service",
                            "kind": "service",
                            "order": 200,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "ingress-kubevious",
                                    "name": "kubevious",
                                    "kind": "ingress",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "ingress-kubevious",
                            "name": "kubevious",
                            "kind": "ingress",
                            "order": 250,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "raw-Raw Configs",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "raw-Services",
                            "name": "Services",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "service-kubevious-svc",
                                    "name": "kubevious-svc",
                                    "kind": "service",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "ingress-kubevious",
                                            "name": "kubevious",
                                            "kind": "ingress",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "service-kubevious-ui-svc",
                                    "name": "kubevious-ui-svc",
                                    "kind": "service",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "ingress-kubevious",
                                            "name": "kubevious",
                                            "kind": "ingress",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "raw-Ingresses",
                            "name": "Ingresses",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "ingress-kubevious",
                                    "name": "kubevious",
                                    "kind": "ingress",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-ReplicaSets",
                            "name": "ReplicaSets",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-kubevious-ui-6fbc9ff959",
                                    "name": "kubevious-ui-6fbc9ff959",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-5fsp4",
                                            "name": "5fsp4",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-kubevious-766969d494",
                                    "name": "kubevious-766969d494",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-gqthz",
                                            "name": "gqthz",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "raw-Pods",
                            "name": "Pods",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "pod-kubevious-ui-6fbc9ff959-5fsp4",
                                    "name": "kubevious-ui-6fbc9ff959-5fsp4",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-kubevious-766969d494-gqthz",
                                    "name": "kubevious-766969d494-gqthz",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-addr",
            "name": "addr",
            "kind": "ns",
            "order": 100,
            "errorCount": 0,
            "children": [
                {
                    "rn": "raw-Raw Configs",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "raw-ConfigMaps",
                            "name": "ConfigMaps",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "configmap-addr-gprod-addr-main-app-consumes",
                                    "name": "addr-gprod-addr-main-app-consumes",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-addr-gprod-addr-main-proc-consumesdatabase",
                                    "name": "addr-gprod-addr-main-proc-consumesdatabase",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-addr-gprod-addr-main-proc-consumes",
                                    "name": "addr-gprod-addr-main-proc-consumes",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-addr-gprod-addr-main-app-consumesdatabase",
                                    "name": "addr-gprod-addr-main-app-consumesdatabase",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-addr-gprod-addr-main-app-consumesqueue",
                                    "name": "addr-gprod-addr-main-app-consumesqueue",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-addr-gprod-addr-main-proc-consumesqueue",
                                    "name": "addr-gprod-addr-main-proc-consumesqueue",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-Services",
                            "name": "Services",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "service-gprod-addr-main-web-default",
                                    "name": "gprod-addr-main-web-default",
                                    "kind": "service",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "ingress-gprod-addr-web",
                                            "name": "gprod-addr-web",
                                            "kind": "ingress",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "service-gprod-addr-main-app-default",
                                    "name": "gprod-addr-main-app-default",
                                    "kind": "service",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-Ingresses",
                            "name": "Ingresses",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "ingress-gprod-addr-web",
                                    "name": "gprod-addr-web",
                                    "kind": "ingress",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-ReplicaSets",
                            "name": "ReplicaSets",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-gprod-addr-main-proc-995fcd496",
                                    "name": "gprod-addr-main-proc-995fcd496",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-rc8mg",
                                            "name": "rc8mg",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-gprod-addr-main-web-c9759bc44",
                                    "name": "gprod-addr-main-web-c9759bc44",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-2vqh6",
                                            "name": "2vqh6",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-gprod-addr-main-app-6fdb86d945",
                                    "name": "gprod-addr-main-app-6fdb86d945",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-5kd9b",
                                            "name": "5kd9b",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-gprod-addr-main-web-544ccdf995",
                                    "name": "gprod-addr-main-web-544ccdf995",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-Pods",
                            "name": "Pods",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "pod-gprod-addr-main-proc-995fcd496-rc8mg",
                                    "name": "gprod-addr-main-proc-995fcd496-rc8mg",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-gprod-addr-main-app-6fdb86d945-5kd9b",
                                    "name": "gprod-addr-main-app-6fdb86d945-5kd9b",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-gprod-addr-main-web-c9759bc44-2vqh6",
                                    "name": "gprod-addr-main-web-c9759bc44-2vqh6",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-gprod-addr-main-app",
                    "name": "gprod-addr-main-app",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-6fdb86d945",
                                    "name": "6fdb86d945",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-5kd9b",
                                            "name": "5kd9b",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-gprod-addr-main-app",
                            "name": "gprod-addr-main-app",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-google-cloud-key",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "vol-gprod-addr-main-app-consumes",
                                    "name": "gprod-addr-main-app-consumes",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-addr-gprod-addr-main-app-consumes",
                                            "name": "addr-gprod-addr-main-app-consumes",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-gprod-addr-main-app-consumesdatabase",
                                    "name": "gprod-addr-main-app-consumesdatabase",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-addr-gprod-addr-main-app-consumesdatabase",
                                            "name": "addr-gprod-addr-main-app-consumesdatabase",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-gprod-addr-main-app-consumesqueue",
                                    "name": "gprod-addr-main-app-consumesqueue",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-addr-gprod-addr-main-app-consumesqueue",
                                            "name": "addr-gprod-addr-main-app-consumesqueue",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "port-default (TCP-4000)",
                                    "name": "default (TCP-4000)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "service-Service",
                                            "name": "Service",
                                            "kind": "service",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-cloudsql-proxy-gprod-addr-uswest1c-main-book",
                            "name": "cloudsql-proxy-gprod-addr-uswest1c-main-book",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-google-cloud-key",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-Volumes",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-google-cloud-key",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "vol-gprod-addr-main-app-consumes",
                                    "name": "gprod-addr-main-app-consumes",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-addr-gprod-addr-main-app-consumes",
                                            "name": "addr-gprod-addr-main-app-consumes",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-gprod-addr-main-app-consumesdatabase",
                                    "name": "gprod-addr-main-app-consumesdatabase",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-addr-gprod-addr-main-app-consumesdatabase",
                                            "name": "addr-gprod-addr-main-app-consumesdatabase",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-gprod-addr-main-app-consumesqueue",
                                    "name": "gprod-addr-main-app-consumesqueue",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-addr-gprod-addr-main-app-consumesqueue",
                                            "name": "addr-gprod-addr-main-app-consumesqueue",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-Service",
                            "name": "Service",
                            "kind": "service",
                            "order": 200,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-gprod-addr-main-web",
                    "name": "gprod-addr-main-web",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-c9759bc44",
                                    "name": "c9759bc44",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-2vqh6",
                                            "name": "2vqh6",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-544ccdf995",
                                    "name": "544ccdf995",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-gprod-addr-main-web",
                            "name": "gprod-addr-main-web",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-google-cloud-key",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "port-default (TCP-3000)",
                                    "name": "default (TCP-3000)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "service-Service",
                                            "name": "Service",
                                            "kind": "service",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": [
                                                {
                                                    "rn": "ingress-gprod-addr-web",
                                                    "name": "gprod-addr-web",
                                                    "kind": "ingress",
                                                    "order": 100,
                                                    "errorCount": 0,
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-Volumes",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-google-cloud-key",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "service-Service",
                            "name": "Service",
                            "kind": "service",
                            "order": 200,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "ingress-gprod-addr-web",
                                    "name": "gprod-addr-web",
                                    "kind": "ingress",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "ingress-gprod-addr-web",
                            "name": "gprod-addr-web",
                            "kind": "ingress",
                            "order": 250,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-gprod-addr-main-proc",
                    "name": "gprod-addr-main-proc",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-995fcd496",
                                    "name": "995fcd496",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-rc8mg",
                                            "name": "rc8mg",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-gprod-addr-main-proc",
                            "name": "gprod-addr-main-proc",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-google-cloud-key",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "vol-gprod-addr-main-proc-consumes",
                                    "name": "gprod-addr-main-proc-consumes",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-addr-gprod-addr-main-proc-consumes",
                                            "name": "addr-gprod-addr-main-proc-consumes",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-gprod-addr-main-proc-consumesdatabase",
                                    "name": "gprod-addr-main-proc-consumesdatabase",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-addr-gprod-addr-main-proc-consumesdatabase",
                                            "name": "addr-gprod-addr-main-proc-consumesdatabase",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-gprod-addr-main-proc-consumesqueue",
                                    "name": "gprod-addr-main-proc-consumesqueue",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-addr-gprod-addr-main-proc-consumesqueue",
                                            "name": "addr-gprod-addr-main-proc-consumesqueue",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-cloudsql-proxy-gprod-addr-uswest1c-main-book",
                            "name": "cloudsql-proxy-gprod-addr-uswest1c-main-book",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-google-cloud-key",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-Volumes",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-google-cloud-key",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "vol-gprod-addr-main-proc-consumes",
                                    "name": "gprod-addr-main-proc-consumes",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-addr-gprod-addr-main-proc-consumes",
                                            "name": "addr-gprod-addr-main-proc-consumes",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-gprod-addr-main-proc-consumesdatabase",
                                    "name": "gprod-addr-main-proc-consumesdatabase",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-addr-gprod-addr-main-proc-consumesdatabase",
                                            "name": "addr-gprod-addr-main-proc-consumesdatabase",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "vol-gprod-addr-main-proc-consumesqueue",
                                    "name": "gprod-addr-main-proc-consumesqueue",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-addr-gprod-addr-main-proc-consumesqueue",
                                            "name": "addr-gprod-addr-main-proc-consumesqueue",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-berlioz",
            "name": "berlioz",
            "kind": "ns",
            "order": 100,
            "errorCount": 0,
            "children": [
                {
                    "rn": "app-gprod-berlioz-main-ctlr",
                    "name": "gprod-berlioz-main-ctlr",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-6664d965cf",
                                    "name": "6664d965cf",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-mtv55",
                                            "name": "mtv55",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-gprod-berlioz-main-ctlr",
                            "name": "gprod-berlioz-main-ctlr",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-google-cloud-key",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-Volumes",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-google-cloud-key",
                                    "name": "google-cloud-key",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "raw-Raw Configs",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "raw-ReplicaSets",
                            "name": "ReplicaSets",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-gprod-berlioz-main-ctlr-6664d965cf",
                                    "name": "gprod-berlioz-main-ctlr-6664d965cf",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-mtv55",
                                            "name": "mtv55",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "raw-Pods",
                            "name": "Pods",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "pod-gprod-berlioz-main-ctlr-6664d965cf-mtv55",
                                    "name": "gprod-berlioz-main-ctlr-6664d965cf-mtv55",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-default",
            "name": "default",
            "kind": "ns",
            "order": 100,
            "errorCount": 0,
            "children": [
                {
                    "rn": "app-my-nginx",
                    "name": "my-nginx",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-6cc48cd8db",
                                    "name": "6cc48cd8db",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-7fc576d876",
                                    "name": "7fc576d876",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-62xd2",
                                            "name": "62xd2",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-jzl24",
                                            "name": "jzl24",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-ksrgs",
                                            "name": "ksrgs",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-qd7w4",
                                            "name": "qd7w4",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-6jrv4",
                                            "name": "6jrv4",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 1,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-sfr7t",
                                            "name": "sfr7t",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 1,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-ls8tn",
                                            "name": "ls8tn",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 1,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-xcxkj",
                                            "name": "xcxkj",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-gjpv9",
                                            "name": "gjpv9",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 1,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-q4s54",
                                            "name": "q4s54",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-nginx",
                            "name": "nginx",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "raw-Raw Configs",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "raw-Services",
                            "name": "Services",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "service-kubernetes",
                                    "name": "kubernetes",
                                    "kind": "service",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-ReplicaSets",
                            "name": "ReplicaSets",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-my-nginx-6cc48cd8db",
                                    "name": "my-nginx-6cc48cd8db",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-my-nginx-7fc576d876",
                                    "name": "my-nginx-7fc576d876",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-62xd2",
                                            "name": "62xd2",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-jzl24",
                                            "name": "jzl24",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-ksrgs",
                                            "name": "ksrgs",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-qd7w4",
                                            "name": "qd7w4",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-6jrv4",
                                            "name": "6jrv4",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 1,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-sfr7t",
                                            "name": "sfr7t",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 1,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-ls8tn",
                                            "name": "ls8tn",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 1,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-xcxkj",
                                            "name": "xcxkj",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-gjpv9",
                                            "name": "gjpv9",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 1,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-q4s54",
                                            "name": "q4s54",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "raw-Pods",
                            "name": "Pods",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "pod-my-nginx-7fc576d876-62xd2",
                                    "name": "my-nginx-7fc576d876-62xd2",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-my-nginx-7fc576d876-jzl24",
                                    "name": "my-nginx-7fc576d876-jzl24",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-my-nginx-7fc576d876-ksrgs",
                                    "name": "my-nginx-7fc576d876-ksrgs",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-my-nginx-7fc576d876-qd7w4",
                                    "name": "my-nginx-7fc576d876-qd7w4",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-my-nginx-7fc576d876-6jrv4",
                                    "name": "my-nginx-7fc576d876-6jrv4",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 1,
                                    "children": []
                                },
                                {
                                    "rn": "pod-my-nginx-7fc576d876-sfr7t",
                                    "name": "my-nginx-7fc576d876-sfr7t",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 1,
                                    "children": []
                                },
                                {
                                    "rn": "pod-my-nginx-7fc576d876-ls8tn",
                                    "name": "my-nginx-7fc576d876-ls8tn",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 1,
                                    "children": []
                                },
                                {
                                    "rn": "pod-my-nginx-7fc576d876-xcxkj",
                                    "name": "my-nginx-7fc576d876-xcxkj",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-my-nginx-7fc576d876-gjpv9",
                                    "name": "my-nginx-7fc576d876-gjpv9",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 1,
                                    "children": []
                                },
                                {
                                    "rn": "pod-my-nginx-7fc576d876-q4s54",
                                    "name": "my-nginx-7fc576d876-q4s54",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "rn": "ns-kube-public",
            "name": "kube-public",
            "kind": "ns",
            "order": 100,
            "errorCount": 0,
            "children": []
        },
        {
            "rn": "ns-kube-system",
            "name": "kube-system",
            "kind": "ns",
            "order": 100,
            "errorCount": 0,
            "children": [
                {
                    "rn": "raw-Raw Configs",
                    "name": "Raw Configs",
                    "kind": "raw",
                    "order": 1000,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "raw-ConfigMaps",
                            "name": "ConfigMaps",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "configmap-fluentd-gcp-config-old-v1.2.5",
                                    "name": "fluentd-gcp-config-old-v1.2.5",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-gke-common-webhook-lock",
                                    "name": "gke-common-webhook-lock",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-ingress-uid",
                                    "name": "ingress-uid",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-kube-dns-autoscaler",
                                    "name": "kube-dns-autoscaler",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-fluentd-gcp-config-v1.2.5",
                                    "name": "fluentd-gcp-config-v1.2.5",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-ingress-gce-lock",
                                    "name": "ingress-gce-lock",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-metrics-server-config",
                                    "name": "metrics-server-config",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-kube-dns",
                                    "name": "kube-dns",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-extension-apiserver-authentication",
                                    "name": "extension-apiserver-authentication",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-heapster-config",
                                    "name": "heapster-config",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "configmap-managed-certificate-config",
                                    "name": "managed-certificate-config",
                                    "kind": "configmap",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-Services",
                            "name": "Services",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "service-default-http-backend",
                                    "name": "default-http-backend",
                                    "kind": "service",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "service-metrics-server",
                                    "name": "metrics-server",
                                    "kind": "service",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "service-heapster",
                                    "name": "heapster",
                                    "kind": "service",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "service-kube-dns",
                                    "name": "kube-dns",
                                    "kind": "service",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-ReplicaSets",
                            "name": "ReplicaSets",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-heapster-5b66d5bd56",
                                    "name": "heapster-5b66d5bd56",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-d74sp",
                                            "name": "d74sp",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-kube-dns-79868f54c5",
                                    "name": "kube-dns-79868f54c5",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-494x8",
                                            "name": "494x8",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-b2kb7",
                                            "name": "b2kb7",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-kube-dns-autoscaler-bb58c6784",
                                    "name": "kube-dns-autoscaler-bb58c6784",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-dpfv7",
                                            "name": "dpfv7",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-l7-default-backend-fd59995cd",
                                    "name": "l7-default-backend-fd59995cd",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-97mlg",
                                            "name": "97mlg",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-metrics-server-v0.3.1-c4cddd5f5",
                                    "name": "metrics-server-v0.3.1-c4cddd5f5",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-event-exporter-v0.2.4-5f88c66fb7",
                                    "name": "event-exporter-v0.2.4-5f88c66fb7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-fb7vt",
                                            "name": "fb7vt",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-heapster-bfcb6d95",
                                    "name": "heapster-bfcb6d95",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-fluentd-gcp-scaler-59b7b75cd7",
                                    "name": "fluentd-gcp-scaler-59b7b75cd7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-dvtq8",
                                            "name": "dvtq8",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-heapster-5f8f89bfbc",
                                    "name": "heapster-5f8f89bfbc",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-metrics-server-v0.3.1-57c75779f",
                                    "name": "metrics-server-v0.3.1-57c75779f",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-9mf5l",
                                            "name": "9mf5l",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-heapster-5b47cb49f6",
                                    "name": "heapster-5b47cb49f6",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "raw-Pods",
                            "name": "Pods",
                            "kind": "raw",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "pod-kube-proxy-gke-gprod-uswest1c-default-pool-ebeee8a5-10cx",
                                    "name": "kube-proxy-gke-gprod-uswest1c-default-pool-ebeee8a5-10cx",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-fluentd-gcp-v3.2.0-5spzr",
                                    "name": "fluentd-gcp-v3.2.0-5spzr",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-kube-dns-79868f54c5-494x8",
                                    "name": "kube-dns-79868f54c5-494x8",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-prometheus-to-sd-vsbbp",
                                    "name": "prometheus-to-sd-vsbbp",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-kube-proxy-gke-gprod-uswest1c-default-pool-ebeee8a5-5tl4",
                                    "name": "kube-proxy-gke-gprod-uswest1c-default-pool-ebeee8a5-5tl4",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-event-exporter-v0.2.4-5f88c66fb7-fb7vt",
                                    "name": "event-exporter-v0.2.4-5f88c66fb7-fb7vt",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-heapster-5b66d5bd56-d74sp",
                                    "name": "heapster-5b66d5bd56-d74sp",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-prometheus-to-sd-5hkkp",
                                    "name": "prometheus-to-sd-5hkkp",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-fluentd-gcp-v3.2.0-x8xvf",
                                    "name": "fluentd-gcp-v3.2.0-x8xvf",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-fluentd-gcp-v3.2.0-dwxwt",
                                    "name": "fluentd-gcp-v3.2.0-dwxwt",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-metrics-server-v0.3.1-57c75779f-9mf5l",
                                    "name": "metrics-server-v0.3.1-57c75779f-9mf5l",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-fluentd-gcp-scaler-59b7b75cd7-dvtq8",
                                    "name": "fluentd-gcp-scaler-59b7b75cd7-dvtq8",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-kube-dns-79868f54c5-b2kb7",
                                    "name": "kube-dns-79868f54c5-b2kb7",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-kube-dns-autoscaler-bb58c6784-dpfv7",
                                    "name": "kube-dns-autoscaler-bb58c6784-dpfv7",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-l7-default-backend-fd59995cd-97mlg",
                                    "name": "l7-default-backend-fd59995cd-97mlg",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-prometheus-to-sd-55vh2",
                                    "name": "prometheus-to-sd-55vh2",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "pod-kube-proxy-gke-gprod-uswest1c-default-pool-ebeee8a5-22xq",
                                    "name": "kube-proxy-gke-gprod-uswest1c-default-pool-ebeee8a5-22xq",
                                    "kind": "pod",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-fluentd-gcp-v3.2.0",
                    "name": "fluentd-gcp-v3.2.0",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-DaemonSet",
                            "name": "DaemonSet",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        },
                        {
                            "rn": "cont-fluentd-gcp",
                            "name": "fluentd-gcp",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-varlog",
                                    "name": "varlog",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "vol-varlibdockercontainers",
                                    "name": "varlibdockercontainers",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "vol-config-volume",
                                    "name": "config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-fluentd-gcp-config-old-v1.2.5",
                                            "name": "fluentd-gcp-config-old-v1.2.5",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-prometheus-to-sd-exporter",
                            "name": "prometheus-to-sd-exporter",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        },
                        {
                            "rn": "vol-Volumes",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-varlog",
                                    "name": "varlog",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "vol-varlibdockercontainers",
                                    "name": "varlibdockercontainers",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "vol-config-volume",
                                    "name": "config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-fluentd-gcp-config-old-v1.2.5",
                                            "name": "fluentd-gcp-config-old-v1.2.5",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-metadata-proxy-v0.1",
                    "name": "metadata-proxy-v0.1",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-DaemonSet",
                            "name": "DaemonSet",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        },
                        {
                            "rn": "cont-metadata-proxy",
                            "name": "metadata-proxy",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        },
                        {
                            "rn": "cont-prometheus-to-sd-exporter",
                            "name": "prometheus-to-sd-exporter",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-nvidia-gpu-device-plugin",
                    "name": "nvidia-gpu-device-plugin",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-DaemonSet",
                            "name": "DaemonSet",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        },
                        {
                            "rn": "cont-nvidia-gpu-device-plugin",
                            "name": "nvidia-gpu-device-plugin",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-device-plugin",
                                    "name": "device-plugin",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "vol-dev",
                                    "name": "dev",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "vol-Volumes",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-device-plugin",
                                    "name": "device-plugin",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "vol-dev",
                                    "name": "dev",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-prometheus-to-sd",
                    "name": "prometheus-to-sd",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-DaemonSet",
                            "name": "DaemonSet",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        },
                        {
                            "rn": "cont-prometheus-to-sd",
                            "name": "prometheus-to-sd",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        },
                        {
                            "rn": "cont-prometheus-to-sd-new-model",
                            "name": "prometheus-to-sd-new-model",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-l7-default-backend",
                    "name": "l7-default-backend",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-fd59995cd",
                                    "name": "fd59995cd",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-97mlg",
                                            "name": "97mlg",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-default-http-backend",
                            "name": "default-http-backend",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "port-undefined (TCP-8080)",
                                    "name": "undefined (TCP-8080)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "service-Service",
                                            "name": "Service",
                                            "kind": "service",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-Service",
                            "name": "Service",
                            "kind": "service",
                            "order": 200,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-event-exporter-v0.2.4",
                    "name": "event-exporter-v0.2.4",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-5f88c66fb7",
                                    "name": "5f88c66fb7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-fb7vt",
                                            "name": "fb7vt",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-event-exporter",
                            "name": "event-exporter",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        },
                        {
                            "rn": "cont-prometheus-to-sd-exporter",
                            "name": "prometheus-to-sd-exporter",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        },
                        {
                            "rn": "vol-Volumes",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-ssl-certs",
                                    "name": "ssl-certs",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "rn": "app-kube-dns",
                    "name": "kube-dns",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-79868f54c5",
                                    "name": "79868f54c5",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-494x8",
                                            "name": "494x8",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        },
                                        {
                                            "rn": "pod-b2kb7",
                                            "name": "b2kb7",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-kubedns",
                            "name": "kubedns",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-kube-dns-config",
                                    "name": "kube-dns-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-kube-dns",
                                            "name": "kube-dns",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "port-dns-local (UDP-10053)",
                                    "name": "dns-local (UDP-10053)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "port-dns-tcp-local (TCP-10053)",
                                    "name": "dns-tcp-local (TCP-10053)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "port-metrics (TCP-10055)",
                                    "name": "metrics (TCP-10055)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-dnsmasq",
                            "name": "dnsmasq",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-kube-dns-config",
                                    "name": "kube-dns-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-kube-dns",
                                            "name": "kube-dns",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "port-dns (UDP-53)",
                                    "name": "dns (UDP-53)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "port-dns-tcp (TCP-53)",
                                    "name": "dns-tcp (TCP-53)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "service-Service",
                                            "name": "Service",
                                            "kind": "service",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-sidecar",
                            "name": "sidecar",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "port-metrics (TCP-10054)",
                                    "name": "metrics (TCP-10054)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-prometheus-to-sd",
                            "name": "prometheus-to-sd",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        },
                        {
                            "rn": "vol-Volumes",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-kube-dns-config",
                                    "name": "kube-dns-config",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-kube-dns",
                                            "name": "kube-dns",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-Service",
                            "name": "Service",
                            "kind": "service",
                            "order": 200,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-fluentd-gcp-scaler",
                    "name": "fluentd-gcp-scaler",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-59b7b75cd7",
                                    "name": "59b7b75cd7",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-dvtq8",
                                            "name": "dvtq8",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-fluentd-gcp-scaler",
                            "name": "fluentd-gcp-scaler",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-heapster",
                    "name": "heapster",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-5b66d5bd56",
                                    "name": "5b66d5bd56",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-d74sp",
                                            "name": "d74sp",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "rn": "replicaset-bfcb6d95",
                                    "name": "bfcb6d95",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-5f8f89bfbc",
                                    "name": "5f8f89bfbc",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-5b47cb49f6",
                                    "name": "5b47cb49f6",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "rn": "cont-heapster",
                            "name": "heapster",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        },
                        {
                            "rn": "cont-prom-to-sd",
                            "name": "prom-to-sd",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        },
                        {
                            "rn": "cont-heapster-nanny",
                            "name": "heapster-nanny",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-heapster-config-volume",
                                    "name": "heapster-config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-heapster-config",
                                            "name": "heapster-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-Volumes",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-heapster-config-volume",
                                    "name": "heapster-config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-heapster-config",
                                            "name": "heapster-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-Service",
                            "name": "Service",
                            "kind": "service",
                            "order": 200,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-metrics-server-v0.3.1",
                    "name": "metrics-server-v0.3.1",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-c4cddd5f5",
                                    "name": "c4cddd5f5",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": []
                                },
                                {
                                    "rn": "replicaset-57c75779f",
                                    "name": "57c75779f",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-9mf5l",
                                            "name": "9mf5l",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-metrics-server",
                            "name": "metrics-server",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "port-https (TCP-443)",
                                    "name": "https (TCP-443)",
                                    "kind": "port",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "service-Service",
                                            "name": "Service",
                                            "kind": "service",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-metrics-server-nanny",
                            "name": "metrics-server-nanny",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-metrics-server-config-volume",
                                    "name": "metrics-server-config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-metrics-server-config",
                                            "name": "metrics-server-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "vol-Volumes",
                            "name": "Volumes",
                            "kind": "vol",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "vol-metrics-server-config-volume",
                                    "name": "metrics-server-config-volume",
                                    "kind": "vol",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "configmap-metrics-server-config",
                                            "name": "metrics-server-config",
                                            "kind": "configmap",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "service-Service",
                            "name": "Service",
                            "kind": "service",
                            "order": 200,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "rn": "app-kube-dns-autoscaler",
                    "name": "kube-dns-autoscaler",
                    "kind": "app",
                    "order": 100,
                    "errorCount": 0,
                    "children": [
                        {
                            "rn": "launcher-Deployment",
                            "name": "Deployment",
                            "kind": "launcher",
                            "order": 100,
                            "errorCount": 0,
                            "children": [
                                {
                                    "rn": "replicaset-bb58c6784",
                                    "name": "bb58c6784",
                                    "kind": "replicaset",
                                    "order": 100,
                                    "errorCount": 0,
                                    "children": [
                                        {
                                            "rn": "pod-dpfv7",
                                            "name": "dpfv7",
                                            "kind": "pod",
                                            "order": 100,
                                            "errorCount": 0,
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "rn": "cont-autoscaler",
                            "name": "autoscaler",
                            "kind": "cont",
                            "order": 100,
                            "errorCount": 0,
                            "children": []
                        }
                    ]
                }
            ]
        }
    ]
  }

export const PROPERTIES_DATA = [
        {
            "kind": "dn-list",
            "id": "shared-with",
            "title": "Shared With",
            "order": 5,
            "config": [
                "root/ns-[kubevious]/app-[kubevious-ui]/cont-[kubevious-ui]/configmap-[kubevious-mysql-client]",
                "root/ns-[kube-system]/app-[calico-node]/launcher-[DaemonSet]",
                "root/ns-[kube-system]/app-[calico-node]/vol-[Volumes]",
            ],
            "tooltip": "Other objects that also use this configuration."
        },
        {
            "kind": "yaml",
            "id": "config",
            "title": "Config",
            "tooltip": "Kubernetes YAML Configuration",
            "config": {
                "name": "gprod-addr-main-app",
                "image": "gcr.io/berlioz-demo-gprod/addr-main-app@sha256:b5e6317de1171f784784f65f8b563c46c069dd6b3093547a3ee4f3cfb2ddb7e1",
                "ports": [
                    {
                        "name": "default",
                        "containerPort": 4000,
                        "protocol": "TCP"
                    }
                ],
                "env": [
                    {
                        "name": "BERLIOZ_TASK_ID",
                        "valueFrom": {
                            "fieldRef": {
                                "apiVersion": "v1",
                                "fieldPath": "metadata.uid"
                            }
                        }
                    },
                    {
                        "name": "BERLIOZ_IDENTITY",
                        "valueFrom": {
                            "fieldRef": {
                                "apiVersion": "v1",
                                "fieldPath": "metadata.name"
                            }
                        }
                    },
                    {
                        "name": "BERLIOZ_ADDRESS",
                        "valueFrom": {
                            "fieldRef": {
                                "apiVersion": "v1",
                                "fieldPath": "status.podIP"
                            }
                        }
                    },
                    {
                        "name": "BERLIOZ_INSTANCE_ID",
                        "valueFrom": {
                            "fieldRef": {
                                "apiVersion": "v1",
                                "fieldPath": "spec.nodeName"
                            }
                        }
                    },
                    {
                        "name": "BERLIOZ_HOST_IP",
                        "valueFrom": {
                            "fieldRef": {
                                "apiVersion": "v1",
                                "fieldPath": "status.hostIP"
                            }
                        }
                    },
                    {
                        "name": "BERLIOZ_CONSUMES_PATH",
                        "value": "/etc/berlioz/consumes"
                    },
                    {
                        "name": "BERLIOZ_AGENT_PATH",
                        "value": "ws://${BERLIOZ_HOST_IP}:55555/${BERLIOZ_TASK_ID}"
                    },
                    {
                        "name": "BERLIOZ_LISTEN_ADDRESS",
                        "value": "0.0.0.0"
                    },
                    {
                        "name": "BERLIOZ_INFRA",
                        "value": "k8s"
                    },
                    {
                        "name": "BERLIOZ_REGION",
                        "value": "us-west1"
                    },
                    {
                        "name": "BERLIOZ_CLUSTER",
                        "value": "addr"
                    },
                    {
                        "name": "BERLIOZ_SECTOR",
                        "value": "main"
                    },
                    {
                        "name": "BERLIOZ_SERVICE",
                        "value": "app"
                    },
                    {
                        "name": "BERLIOZ_IDENTITY_PREFIX",
                        "value": "gprod-addr-main-app-"
                    },
                    {
                        "name": "BERLIOZ_LISTEN_PORT_DEFAULT",
                        "value": "4000"
                    },
                    {
                        "name": "BERLIOZ_PROVIDED_PORT_DEFAULT",
                        "value": "4000"
                    },
                    {
                        "name": "GOOGLE_APPLICATION_CREDENTIALS",
                        "value": "/var/secrets/google/service-key.json"
                    },
                    {
                        "name": "BERLIOZ_CONSUMED_CLUSTER_SPRT_DTREP_HOST",
                        "value": "gprod-sprt-main-dtrace-client"
                    },
                    {
                        "name": "BERLIOZ_CONSUMED_CLUSTER_SPRT_DTREP_PORT",
                        "value": "80"
                    },
                    {
                        "name": "BERLIOZ_CONSUMED_CLUSTER_SPRT_DTREP_URL",
                        "value": "http://gprod-sprt-main-dtrace-client:80"
                    }
                ],
                "resources": {
                    "requests": {
                        "cpu": "100m",
                        "memory": "100Mi"
                    }
                },
                "volumeMounts": [
                    {
                        "name": "google-cloud-key",
                        "mountPath": "/var/secrets/google"
                    },
                    {
                        "name": "gprod-addr-main-app-consumes",
                        "mountPath": "/etc/berlioz/consumes"
                    },
                    {
                        "name": "gprod-addr-main-app-consumesdatabase",
                        "mountPath": "/etc/berlioz/consumes/database"
                    }
                ],
                "terminationMessagePath": "/dev/termination-log",
                "terminationMessagePolicy": "File",
                "imagePullPolicy": "IfNotPresent"
            }
        },
        {
            "kind": "key-value",
            "id": "env",
            "title": "Environment Variables",
            "tooltip": "Environment variables applied to this container. Also contains variables defined in related ConfigMaps.",
            "order": 10,
            "config": {
                "BERLIOZ_TASK_ID": "<pre>fieldRef:\n  apiVersion: v1\n  fieldPath: metadata.uid\n</pre>",
                "BERLIOZ_IDENTITY": "<pre>fieldRef:\n  apiVersion: v1\n  fieldPath: metadata.name\n</pre>",
                "BERLIOZ_ADDRESS": "<pre>fieldRef:\n  apiVersion: v1\n  fieldPath: status.podIP\n</pre>",
                "BERLIOZ_INSTANCE_ID": "<pre>fieldRef:\n  apiVersion: v1\n  fieldPath: spec.nodeName\n</pre>",
                "BERLIOZ_HOST_IP": "<pre>fieldRef:\n  apiVersion: v1\n  fieldPath: status.hostIP\n</pre>",
                "BERLIOZ_CONSUMES_PATH": "/etc/berlioz/consumes",
                "BERLIOZ_AGENT_PATH": "ws://${BERLIOZ_HOST_IP}:55555/${BERLIOZ_TASK_ID}",
                "BERLIOZ_LISTEN_ADDRESS": "0.0.0.0",
                "BERLIOZ_INFRA": "k8s",
                "BERLIOZ_REGION": "us-west1",
                "BERLIOZ_CLUSTER": "addr",
                "BERLIOZ_SECTOR": "main",
                "BERLIOZ_SERVICE": "app",
                "BERLIOZ_IDENTITY_PREFIX": "gprod-addr-main-app-",
                "BERLIOZ_LISTEN_PORT_DEFAULT": "4000",
                "BERLIOZ_PROVIDED_PORT_DEFAULT": "4000",
                "GOOGLE_APPLICATION_CREDENTIALS": "/var/secrets/google/service-key.json",
                "BERLIOZ_CONSUMED_CLUSTER_SPRT_DTREP_HOST": "gprod-sprt-main-dtrace-client",
                "BERLIOZ_CONSUMED_CLUSTER_SPRT_DTREP_PORT": "80",
                "BERLIOZ_CONSUMED_CLUSTER_SPRT_DTREP_URL": "http://gprod-sprt-main-dtrace-client:80"
            }
        },
        {
            "kind": "table",
            "id": "resource-role-matrix",
            "title": "Resource Role Matrix",
            "order": 8,
            "config": {
                "headers": [
                    {
                        "id": "api",
                        "label": "API Group"
                    },
                    {
                        "id": "resource",
                        "label": "Resource"
                    },
                    {
                        "id": "namespace",
                        "label": "Namespace"
                    },
                    {
                        "id": "name",
                        "label": "Name"
                    },
                    {
                        "id": "get",
                        "kind": "check"
                    },
                    {
                        "id": "list",
                        "kind": "check"
                    },
                    {
                        "id": "watch",
                        "kind": "check"
                    },
                    {
                        "id": "create",
                        "kind": "check"
                    },
                    {
                        "id": "update",
                        "kind": "check"
                    },
                    {
                        "id": "patch",
                        "kind": "check"
                    }
                ],
                "rows": [
                    {
                        "api": "",
                        "resource": "endpoints",
                        "name": "*",
                        "namespace": "*",
                        "get": true
                    },
                    {
                        "api": "",
                        "resource": "namespaces",
                        "name": "*",
                        "namespace": "*",
                        "get": true,
                        "list": true,
                        "watch": true
                    },
                    {
                        "api": "",
                        "resource": "nodes",
                        "name": "*",
                        "namespace": "*",
                        "get": true,
                        "list": true,
                        "update": true,
                        "watch": true
                    },
                    {
                        "api": "",
                        "resource": "pods",
                        "name": "*",
                        "namespace": "*",
                        "get": true,
                        "list": true,
                        "watch": true,
                        "patch": true
                    },
                    {
                        "api": "",
                        "resource": "pods/status",
                        "name": "*",
                        "namespace": "*",
                        "update": true,
                        "patch": true
                    },
                    {
                        "api": "",
                        "resource": "serviceaccounts",
                        "name": "*",
                        "namespace": "*",
                        "get": true,
                        "list": true,
                        "watch": true
                    },
                    {
                        "api": "",
                        "resource": "services",
                        "name": "*",
                        "namespace": "*",
                        "get": true
                    },
                    {
                        "api": "crd.projectcalico.org",
                        "resource": "bgpconfigurations",
                        "name": "*",
                        "namespace": "*",
                        "create": true,
                        "get": true,
                        "list": true,
                        "update": true,
                        "watch": true
                    },
                    {
                        "api": "crd.projectcalico.org",
                        "resource": "bgppeers",
                        "name": "*",
                        "namespace": "*",
                        "create": true,
                        "get": true,
                        "list": true,
                        "update": true,
                        "watch": true
                    },
                    {
                        "api": "crd.projectcalico.org",
                        "resource": "clusterinformations",
                        "name": "*",
                        "namespace": "*",
                        "create": true,
                        "get": true,
                        "list": true,
                        "update": true,
                        "watch": true
                    },
                    {
                        "api": "crd.projectcalico.org",
                        "resource": "felixconfigurations",
                        "name": "*",
                        "namespace": "*",
                        "create": true,
                        "get": true,
                        "list": true,
                        "update": true,
                        "watch": true
                    },
                    {
                        "api": "crd.projectcalico.org",
                        "resource": "globalbgpconfigs",
                        "name": "*",
                        "namespace": "*",
                        "create": true,
                        "get": true,
                        "list": true,
                        "update": true,
                        "watch": true
                    },
                    {
                        "api": "crd.projectcalico.org",
                        "resource": "globalfelixconfigs",
                        "name": "*",
                        "namespace": "*",
                        "create": true,
                        "get": true,
                        "list": true,
                        "update": true,
                        "watch": true
                    },
                    {
                        "api": "crd.projectcalico.org",
                        "resource": "globalnetworkpolicies",
                        "name": "*",
                        "namespace": "*",
                        "create": true,
                        "get": true,
                        "list": true,
                        "update": true,
                        "watch": true
                    },
                    {
                        "api": "crd.projectcalico.org",
                        "resource": "globalnetworksets",
                        "name": "*",
                        "namespace": "*",
                        "create": true,
                        "get": true,
                        "list": true,
                        "update": true,
                        "watch": true
                    },
                    {
                        "api": "crd.projectcalico.org",
                        "resource": "hostendpoints",
                        "name": "*",
                        "namespace": "*",
                        "create": true,
                        "get": true,
                        "list": true,
                        "update": true,
                        "watch": true
                    },
                    {
                        "api": "crd.projectcalico.org",
                        "resource": "ippools",
                        "name": "*",
                        "namespace": "*",
                        "create": true,
                        "get": true,
                        "list": true,
                        "update": true,
                        "watch": true
                    },
                    {
                        "api": "crd.projectcalico.org",
                        "resource": "networkpolicies",
                        "name": "*",
                        "namespace": "*",
                        "create": true,
                        "get": true,
                        "list": true,
                        "update": true,
                        "watch": true
                    },
                    {
                        "api": "extensions",
                        "resource": "networkpolicies",
                        "name": "*",
                        "namespace": "*",
                        "get": true,
                        "list": true,
                        "watch": true
                    },
                    {
                        "api": "networking.k8s.io",
                        "resource": "networkpolicies",
                        "name": "*",
                        "namespace": "*",
                        "watch": true,
                        "list": true
                    }
                ]
            }
        }
    ]
;

export const DN_LIST = [];
function traverseTree(parentDn, node)
{
    var dn;
    if (parentDn) {
        dn = parentDn + '/' + node.rn;
    } else {
        dn = node.rn;
    }
    DN_LIST.push(dn);

    for(var x of node.children)
    {
        traverseTree(dn, x);
    }
}
traverseTree(null, GRAPH_DATA);

export const ALERTS_DATA = [
    {
        'id': 'Initialized-2019-12-27T19:47:53Z',
        'severity': 'warn',
        'msg': 'something happened',
        'date': '2019-12-27T19:47:53Z'
    },
    {
        'id': 'Ready-2019-12-27T19:47:59Z',
        'severity': 'error',
        'msg': 'something happened',
        'date': '2019-12-27T19:47:59Z'
    },
    {
        'id': 'ContainersReady-2019-12-27T19:47:59Z',
        'severity': 'warn',
        'msg': 'something happened',
        'date': '2019-12-27T19:47:59Z'
    },
    {
        'id': 'PodScheduled-2019-12-27T19:47:53Z',
        'severity': 'warn',
        'msg': 'something happened',
        'date': '2019-12-27T19:47:53Z'
    }
]


export const ABOUT_DATA = {
    'version': 'v4.5.6',
    'backend version': 'v1.2.3'
}

export const HISTORY_TIMELINE = [
    {
        'date': '2020-02-13T03:10:50.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T03:11:51.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T03:12:56.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T03:13:57.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T03:14:58.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T03:16:03.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T03:17:03.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T03:18:03.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T03:19:03.000Z',
        'items': 1160,
        'alerts': 56
    },
    {
        'date': '2020-02-13T03:20:09.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T03:21:10.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T03:22:14.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T03:23:19.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T03:24:21.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T03:25:23.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T03:26:23.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T03:58:16.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:00:58.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:02:03.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:03:03.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:04:05.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:05:07.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:06:15.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:07:16.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:08:17.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:09:17.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:10:18.000Z',
        'items': 1160,
        'alerts': 56
    },
    {
        'date': '2020-02-13T04:11:19.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:12:19.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:13:24.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:14:29.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:15:29.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:16:30.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:17:30.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:18:35.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:19:37.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:20:38.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:21:39.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:22:39.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:23:39.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:24:39.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:25:41.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:26:41.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:27:43.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:28:43.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:29:43.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:30:45.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:31:45.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:32:46.000Z',
        'items': 1160,
        'alerts': 56
    },
    {
        'date': '2020-02-13T04:33:52.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:34:57.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:35:59.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:37:04.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:38:09.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:39:09.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:40:10.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:41:11.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:42:12.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:43:13.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:44:15.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:45:17.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:46:22.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:47:27.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:48:33.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:49:33.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:50:33.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:51:38.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:52:38.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:53:40.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:54:40.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:55:45.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T04:56:46.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:57:48.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:58:49.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T04:59:50.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:00:52.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:01:52.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:02:57.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:03:59.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:05:01.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:06:02.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:07:04.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T05:08:05.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:09:05.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:10:11.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:11:11.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:12:12.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T05:13:13.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:14:13.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:15:19.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:16:21.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:17:26.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:18:31.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:19:32.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:20:33.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:21:34.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:22:37.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:23:37.000Z',
        'items': 1160,
        'alerts': 58
    },
    {
        'date': '2020-02-13T05:24:40.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:25:45.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:26:46.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T05:27:47.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T06:29:51.000Z',
        'items': 1160,
        'alerts': 60
    },
    {
        'date': '2020-02-13T06:48:17.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T06:49:20.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T06:50:26.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T06:51:28.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T06:52:28.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T06:53:29.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T06:54:32.000Z',
        'items': 1160,
        'alerts': 59
    },
    {
        'date': '2020-02-13T06:55:33.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T06:56:38.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T06:57:39.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T06:58:43.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T06:59:43.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T07:00:44.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T07:01:44.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T07:02:50.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T07:03:56.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T07:04:58.000Z',
        'items': 1160,
        'alerts': 61
    },
    {
        'date': '2020-02-13T07:06:00.000Z',
        'items': 1160,
        'alerts': 59
    },
    {
        'date': '2020-02-13T07:07:02.000Z',
        'items': 1260,
        'alerts': 60
    },
    {
        'date': '2020-02-13T07:08:05.000Z',
        'items': 1260,
        'alerts': 60
    },
    {
        'date': '2020-02-13T07:09:32.000Z',
        'items': 1260,
        'alerts': 58
    },
    {
        'date': '2020-02-13T07:10:41.000Z',
        'items': 1260,
        'alerts': 58
    },
    {
        'date': '2020-02-13T07:11:43.000Z',
        'items': 1260,
        'alerts': 56
    },
    {
        'date': '2020-02-13T07:12:43.000Z',
        'items': 1260,
        'alerts': 58
    },
    {
        'date': '2020-02-13T07:13:44.000Z',
        'items': 1260,
        'alerts': 58
    },
    {
        'date': '2020-02-13T07:14:45.000Z',
        'items': 1259,
        'alerts': 57
    },
    {
        'date': '2020-02-14T09:48:15.000Z',
        'items': 248,
        'alerts': 25
    },
    {
        'date': '2020-02-14T10:03:34.000Z',
        'items': 248,
        'alerts': 25
    }
]

export const HISTORY_RANGE = {
    'min_date': '2020-02-13T03:10:50.000Z',
    'max_date': '2020-02-14T10:03:34.000Z'
}


export const HISTORY_PROPERTIES = {
    'alerts': [
        {
            'id': 'Port-3500',
            'msg': 'Missing port 3500 definition.',
            'date': '2020-02-29T06:32:57.340Z',
            'severity': 'warn'
        }
    ],
    'props': [
        {
            'id': 'config',
            'kind': 'yaml',
            'title': 'Config',
            'config': {
                'kind': 'Service',
                'spec': {
                    'type': 'ClusterIP',
                    'ports': [
                        {
                            'port': 80,
                            'protocol': 'TCP',
                            'targetPort': 3500
                        }
                    ],
                    'selector': {
                        'app': 'book-web'
                    },
                    'clusterIP': '10.75.1.215',
                    'sessionAffinity': 'None'
                },
                'status': {
                    'loadBalancer': {}
                },
                'metadata': {
                    'uid': 'f70267ff-34c1-11ea-9cdc-42010a8001cf',
                    'name': 'book-web-svc-2',
                    'labels': {
                        'name': 'book-web-svc-2'
                    },
                    'selfLink': '/api/v1/namespaces/book/services/book-web-svc-2',
                    'namespace': 'book',
                    'annotations': {
                        'kubectl.kubernetes.io/last-applied-configuration': '{"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"name":"book-web-svc-2"},"name":"book-web-svc-2","namespace":"book"},"spec":{"ports":[{"port":80,"protocol":"TCP","targetPort":3500}],"selector":{"app":"book-web"},"type":"ClusterIP"}}\n'
                    },
                    'resourceVersion': '206743',
                    'creationTimestamp': '2020-01-11T22:30:26Z'
                },
                'apiVersion': 'v1'
            },
            'tooltip': 'Kubernetes YAML Configuration'
        }
    ]
}
