import _ from "the-lodash";
import { ScopeParser } from "../parser-builder";

export default ScopeParser()
  .order(135)
  .target({
    namespaced: true, // TODO: Fix later. ClusterRole scope should be created as NonNamespaced in step# 115.
    scopeKind: "ClusterRole",
  })
  .target({
    namespaced: true,
    scopeKind: "Role",
  });
