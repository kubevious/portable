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

#Copying loaders
sync "loaders/k8s.ts" "loaders/k8s.ts"
sync "loaders/local.ts" "loaders/local.ts"
# Finish copying loaders

#Copying logic

#Copying logic/helpers
sync "logic/helpers/common.ts" "logic/helpers/common.ts"
sync "logic/helpers/index.ts" "logic/helpers/index.ts"
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
sync "logic/polishers/030_container-resource.ts" "logic/polishers/030_container-resource.ts"
sync "logic/polishers/033_container-radioactive.ts" "logic/polishers/033_container-radioactive.ts"
sync "logic/polishers/033_launcher-radioactive.ts" "logic/polishers/033_launcher-radioactive.ts"
sync "logic/polishers/033_pod-radioactive.ts" "logic/polishers/033_pod-radioactive.ts"
# Finish copying logic/polishers

#Copying logic/scope
sync "logic/scope/app.ts" "logic/scope/app.ts"
sync "logic/scope/index.ts" "logic/scope/index.ts"
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

#Copying utils
sync "utils/debug-object-logger.ts" "utils/debug-object-logger.ts"
sync "utils/job-dampener.ts" "utils/job-dampener.ts"
sync "utils/name-helpers.ts" "utils/name-helpers.ts"
# Finish copying utils

if [[ global_status -ne 0 ]]; then
    log_error "[sync-from-parser] failed"
fi

exit $global_status
