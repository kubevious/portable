import _ from "the-lodash";
import { PropertyValueWithUnit } from "../../../lib/types";
import { LogicParser } from "../parser-builder";

export default LogicParser()
  .order(20)
  .target({
    path: ["infra", "storage", "storclass"],
  })
  .handler(({ item, infraScope, helpers }) => {
    let classProps: Record<string, any> = {
      Capacity: { value: 0, unit: "bytes" },
    };

    classProps["Storage Class"] = item.naming;

    let persistentVolumes = item.getChildrenByKind("pv");

    classProps["Volume Count"] = persistentVolumes.length;

    for (let pv of persistentVolumes) {
      let pvProps = pv.getProperties("properties");
      if (pvProps) {
        {
          let value = <PropertyValueWithUnit>pvProps!.config["Capacity"];
          if (value) {
            classProps["Capacity"].value += value.value;
          }
        }
      }
    }

    item.addProperties({
      kind: "key-value",
      id: "properties",
      title: "Properties",
      order: 10,
      config: classProps,
    });
  });
