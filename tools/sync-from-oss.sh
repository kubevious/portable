#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

echo "Sync from oss..."

# Copying components
./copy-file-from-ui.sh "src/components/About/index.js" "src/components/About/index.js"

./copy-file-from-ui.sh "src/components/Alerts/index.js" "src/components/Alerts/index.js"
./copy-file-from-ui.sh "src/components/Alerts/AlertTable/index.js" "src/components/Alerts/AlertTable/index.js"
./copy-file-from-ui.sh "src/components/Alerts/styles.scss" "src/components/Alerts/styles.scss"

./copy-file-from-ui.sh "src/components/BurgerMenu/index.js" "src/components/BurgerMenu/index.js"
./copy-file-from-ui.sh "src/components/BurgerMenu/styles.scss" "src/components/BurgerMenu/styles.scss"

./copy-file-from-ui.sh "src/components/Diagram/index.js" "src/components/Diagram/index.js"
./copy-file-from-ui.sh "src/components/Diagram/visual-view.js" "src/components/Diagram/visual-view.js"
./copy-file-from-ui.sh "src/components/Diagram/visual-node.js" "src/components/Diagram/visual-node.js"
./copy-file-from-ui.sh "src/components/Diagram/styles.scss" "src/components/Diagram/styles.scss"

./copy-file-from-ui.sh "src/components/DnComponent/index.js" "src/components/DnComponent/index.js"
./copy-file-from-ui.sh "src/components/DnComponent/styles.scss" "src/components/DnComponent/styles.scss"

./copy-file-from-ui.sh "src/components/DnShortcutComponent/index.js" "src/components/DnShortcutComponent/index.js"
./copy-file-from-ui.sh "src/components/DnShortcutComponent/styles.scss" "src/components/DnShortcutComponent/styles.scss"

./copy-file-from-ui.sh "src/components/ErrorBox/index.js" "src/components/ErrorBox/index.js"
./copy-file-from-ui.sh "src/components/ErrorBox/styles.scss" "src/components/ErrorBox/styles.scss"

./copy-file-from-ui.sh "src/components/Header/index.js" "src/components/Header/index.js"
./copy-file-from-ui.sh "src/components/Header/styles.scss" "src/components/Header/styles.scss"

./copy-file-from-ui.sh "src/components/MarkerPreview/index.js" "src/components/MarkerPreview/index.js"

./copy-file-from-ui.sh "src/components/Popup/index.js" "src/components/Popup/index.js"
./copy-file-from-ui.sh "src/components/Popup/styles.scss" "src/components/Popup/styles.scss"

./copy-file-from-ui.sh "src/components/Properties/index.js" "src/components/Properties/index.js"
./copy-file-from-ui.sh "src/components/Properties/styles.scss" "src/components/Properties/styles.scss"

./copy-file-from-ui.sh "src/components/Properties/Config/index.js" "src/components/Properties/Config/index.js"
./copy-file-from-ui.sh "src/components/Properties/Config/styles.scss" "src/components/Properties/Config/styles.scss"

./copy-file-from-ui.sh "src/components/Properties/DnList/index.js" "src/components/Properties/DnList/index.js"
./copy-file-from-ui.sh "src/components/Properties/DnList/styles.scss" "src/components/Properties/DnList/styles.scss"

./copy-file-from-ui.sh "src/components/Properties/EnvironmentVariables/index.js" "src/components/Properties/EnvironmentVariables/index.js"
./copy-file-from-ui.sh "src/components/Properties/EnvironmentVariables/styles.scss" "src/components/Properties/EnvironmentVariables/styles.scss"

./copy-file-from-ui.sh "src/components/Properties/PropertiesTable/index.js" "src/components/Properties/PropertiesTable/index.js"
./copy-file-from-ui.sh "src/components/Properties/PropertiesTable/styles.scss" "src/components/Properties/PropertiesTable/styles.scss"

./copy-file-from-ui.sh "src/components/Properties/PropertyGroup/index.js" "src/components/Properties/PropertyGroup/index.js"

./copy-file-from-ui.sh "src/components/Search/index.js" "src/components/Search/index.js"
./copy-file-from-ui.sh "src/components/Search/styles.scss" "src/components/Search/styles.scss"
# Finish copying components


#Copying HOC
./copy-file-from-ui.sh "src/HOC/BaseComponent.js" "src/HOC/BaseComponent.js"
# Finish copying HOC

#Copying state
./copy-file-from-ui.sh "src/state/diagram-source.js" "src/state/diagram-source.js"
./copy-file-from-ui.sh "src/state/shared-state.js" "src/state/shared-state.js"
./copy-file-from-ui.sh "src/state/state-handler.js" "src/state/state-handler.js"
./copy-file-from-ui.sh "src/state/kubevious-handler.js" "src/state/kubevious-handler.js"
# Finish copying state

#Copying utils
./copy-file-from-ui.sh "src/utils/constants.js" "src/utils/constants.js"
./copy-file-from-ui.sh "src/utils/naming-utils.js" "src/utils/naming-utils.js"
./copy-file-from-ui.sh "src/utils/remote-track.js" "src/utils/remote-track.js"
./copy-file-from-ui.sh "src/utils/save-fields.js" "src/utils/save-fields.js"
./copy-file-from-ui.sh "src/utils/ui-utils.js" "src/utils/ui-utils.js"
./copy-file-from-ui.sh "src/utils/util.js" "src/utils/util.js"
# Finish copying utils

./copy-file-from-ui.sh "src/BaseRootApiService.js" "src/BaseRootApiService.js"

# Copying services
./copy-file-from-ui.sh "src/services/BackendClient.js" "src/services/BackendClient.js"
./copy-file-from-ui.sh "src/services/DiagramService.js" "src/services/DiagramService.js"
./copy-file-from-ui.sh "src/services/MiscService.js" "src/services/MiscService.js"
./copy-file-from-ui.sh "src/services/RootApiService.js" "src/services/RootApiService.js"
./copy-file-from-ui.sh "src/services/WebSocketService.js" "src/services/WebSocketService.js"
# Finish copying services

# Copying services-mock
./copy-file-from-ui.sh "src/services-mock/MockDiagramService.js" "src/services-mock/MockDiagramService.js"
./copy-file-from-ui.sh "src/services-mock/MockMiscService.js" "src/services-mock/MockMiscService.js"
./copy-file-from-ui.sh "src/services-mock/MockRootApiService.js" "src/services-mock/MockRootApiService.js"
./copy-file-from-ui.sh "src/services-mock/MockWebSocketService.js" "src/services-mock/MockWebSocketService.js"
# Finish copying services-mock

echo "Successfully synced"
