import _ from "the-lodash";
import { ScopeParser } from "../parser-builder";

export default ScopeParser()
  .order(136)
  .target({
    namespaced: false,
    scopeKind: "PodSecurityPolicy",
  })
  .kind("psp")
  .handler(({ scope, itemScope, createK8sItem, createAlert, helpers }) => {
    if (itemScope.isNotUsed) {
      var rawContainer = scope.fetchNamespaceRawContainer(
        "",
        "PodSecurityPolicies"
      );
      var logicItem = createK8sItem(rawContainer);
      itemScope.registerItem(logicItem);
      createAlert("Unused", "warn", itemScope.kind + " not used.");
    }

    itemScope
      .buildProperties()
      .fromConfig("Priviledged", "spec.allowPrivilegeEscalation", false)
      .fromConfig("Capabilities", "spec.allowedCapabilities")
      .fromConfig("ReadOnlyRootFS", "spec.readOnlyRootFilesystem", false)
      .fromConfig("Volumes", "spec.volumes", [])
      .build();

    helpers.common.determineSharedFlag(itemScope);
  });
