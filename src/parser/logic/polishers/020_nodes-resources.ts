import _ from "the-lodash";
import { PropertyValueWithUnit } from "../../../lib/types";
import { LogicParser } from "../parser-builder";

export default LogicParser()
  .order(20)
  .target({
    path: ["infra", "nodes"],
  })
  .handler(({ item, infraScope, helpers }) => {
    let nodesResourcesProps: Record<string, PropertyValueWithUnit> = {};
    let perNodeResources: Record<string, PropertyValueWithUnit | null> = {};
    for (let metric of helpers.resources.METRICS) {
      for (let counter of ["allocatable", "capacity"]) {
        nodesResourcesProps[metric + " " + counter] = {
          value: 0,
          unit: helpers.resources.METRIC_UNITS[metric],
        };
      }
      perNodeResources[metric] = null;
    }

    for (let node of item.getChildrenByKind("node")) {
      let nodeProps = node.getProperties("resources");
      if (nodeProps) {
        for (let metric of helpers.resources.METRICS) {
          for (let counter of ["allocatable", "capacity"]) {
            let value = <PropertyValueWithUnit>(
              nodeProps.config[metric + " " + counter]
            );
            if (value) {
              nodesResourcesProps[metric + " " + counter].value += value.value;
            }
          }

          {
            let value = <PropertyValueWithUnit>(
              nodeProps.config[metric + " " + "allocatable"]
            );
            if (value) {
              if (perNodeResources[metric] != null) {
                perNodeResources[metric] = {
                  value: Math.min(perNodeResources[metric]!.value, value.value),
                  unit: perNodeResources[metric]!.unit,
                };
              } else {
                perNodeResources[metric] = value;
              }
            }
          }
        }
      }
    }

    let nodeResourcesProps: Record<string, PropertyValueWithUnit> = {};
    for (let metric of helpers.resources.METRICS) {
      if (perNodeResources[metric] == null) {
        perNodeResources[metric] = {
          value: 0,
          unit: helpers.resources.METRIC_UNITS[metric],
        };
      }
      nodeResourcesProps[metric] = perNodeResources[metric]!;
    }

    infraScope.setNodeResources(nodeResourcesProps);

    item.addProperties({
      kind: "key-value",
      id: "cluster-resources",
      title: "Cluster Resources",
      order: 7,
      config: nodesResourcesProps,
    });

    item.addProperties({
      kind: "key-value",
      id: "node-resources",
      title: "Node Resources",
      order: 8,
      config: nodeResourcesProps,
    });

    let clusterAllocatableResources: Record<string, PropertyValueWithUnit> = {};
    for (let metric of helpers.resources.METRICS) {
      clusterAllocatableResources[metric] =
        nodesResourcesProps[metric + " " + "allocatable"];
    }
    infraScope.setClusterResources(clusterAllocatableResources);
  });
