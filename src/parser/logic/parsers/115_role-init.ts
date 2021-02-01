import _ from "the-lodash";
import { ConcreteParser } from "../parser-builder";

export default ConcreteParser()
  .order(115)
  .target({
    api: "rbac.authorization.k8s.io",
    kind: "ClusterRole",
  })
  .target({
    api: "rbac.authorization.k8s.io",
    kind: "Role",
  })
  .kind((item) => {
    if (item.config.kind == "Role") {
      return "rl";
    }
    if (item.config.kind == "ClusterRole") {
      return "crl";
    }
    throw new Error();
  })
  .needNamespaceScope(true)
  .namespaceNameCb((item) => {
    if (item.config.kind == "Role") {
      return item.config.metadata.namespace;
    }
    if (item.config.kind == "ClusterRole") {
      return "";
    }
    throw new Error();
  });
