#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

function sync {
    ./copy-file-from-source.sh "$1" "$2" "ui"
}

echo "Sync from UI..."

# Copying components
sync "src/components/About/index.js" "src/components/About/index.js"

sync "src/components/Alerts/index.js" "src/components/Alerts/index.js"
sync "src/components/Alerts/styles.scss" "src/components/Alerts/styles.scss"
sync "src/components/Alerts/AlertView/index.js" "src/components/Alerts/AlertView/index.js"

sync "src/components/BurgerMenu/index.js" "src/components/BurgerMenu/index.js"
sync "src/components/BurgerMenu/styles.scss" "src/components/BurgerMenu/styles.scss"

sync "src/components/CopyClipboard/index.js" "src/components/CopyClipboard/index.js"
sync "src/components/CopyClipboard/styles.scss" "src/components/CopyClipboard/styles.scss"

sync "src/components/Diagram/index.js" "src/components/Diagram/index.js"
#sync "src/components/Diagram/visual-view.js" "src/components/Diagram/visual-view.js"
#sync "src/components/Diagram/visual-node.js" "src/components/Diagram/visual-node.js"
sync "src/components/Diagram/styles.scss" "src/components/Diagram/styles.scss"

sync "src/components/DnComponent/index.js" "src/components/DnComponent/index.js"
sync "src/components/DnComponent/styles.scss" "src/components/DnComponent/styles.scss"

sync "src/components/ErrorBox/index.js" "src/components/ErrorBox/index.js"
sync "src/components/ErrorBox/styles.scss" "src/components/ErrorBox/styles.scss"

sync "src/components/GoldenLayout/styles.scss" "src/components/GoldenLayout/styles.scss"

sync "src/components/Popup/index.js" "src/components/Popup/index.js"
sync "src/components/Popup/styles.scss" "src/components/Popup/styles.scss"

sync "src/components/Properties/index.js" "src/components/Properties/index.js"
sync "src/components/Properties/styles.scss" "src/components/Properties/styles.scss"

sync "src/components/Properties/Config/index.js" "src/components/Properties/Config/index.js"
sync "src/components/Properties/Config/styles.scss" "src/components/Properties/Config/styles.scss"

sync "src/components/Properties/DnList/index.js" "src/components/Properties/DnList/index.js"
sync "src/components/Properties/DnList/styles.scss" "src/components/Properties/DnList/styles.scss"

sync "src/components/Properties/EnvironmentVariables/index.js" "src/components/Properties/EnvironmentVariables/index.js"
sync "src/components/Properties/EnvironmentVariables/styles.scss" "src/components/Properties/EnvironmentVariables/styles.scss"

sync "src/components/Properties/PropertiesTable/index.js" "src/components/Properties/PropertiesTable/index.js"
sync "src/components/Properties/PropertiesTable/styles.scss" "src/components/Properties/PropertiesTable/styles.scss"

sync "src/components/Properties/PropertyGroup/index.js" "src/components/Properties/PropertyGroup/index.js"

sync "src/components/Search/index.js" "src/components/Search/index.js"
sync "src/components/Search/styles.scss" "src/components/Search/styles.scss"
# Finish copying components


#Copying HOC
sync "src/HOC/BaseComponent.js" "src/HOC/BaseComponent.js"
# Finish copying HOC

#Copying state
sync "src/state/shared-state.js" "src/state/shared-state.js"
sync "src/state/kubevious-handler.js" "src/state/kubevious-handler.js"
# Finish copying state

#Copying utils
sync "src/utils/constants.js" "src/utils/constants.js"
sync "src/utils/naming-utils.js" "src/utils/naming-utils.js"
sync "src/utils/remote-track.js" "src/utils/remote-track.js"
sync "src/utils/save-fields.js" "src/utils/save-fields.js"
sync "src/utils/ui-utils.js" "src/utils/ui-utils.js"
sync "src/utils/util.js" "src/utils/util.js"
# Finish copying utils

sync "src/BaseRootApiService.js" "src/BaseRootApiService.js"

# Copying services
sync "src/services/BaseService.js" "src/services/BaseService.js"
sync "src/services/BackendClient.js" "src/services/BackendClient.js"
sync "src/services/DiagramService.js" "src/services/DiagramService.js"
sync "src/services/WebSocketService.js" "src/services/WebSocketService.js"
# Finish copying services

# Copying services-mock
sync "src/services-mock/MockWebSocketService.js" "src/services-mock/MockWebSocketService.js"
# Finish copying services-mock

echo "Successfully synced"
