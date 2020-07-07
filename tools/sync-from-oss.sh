#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

echo "Sync from oss..."

# Copying components
./copy-file-from-source.sh "src/components/About/index.js" "src/components/About/index.js" "ui"

./copy-file-from-source.sh "src/components/Alerts/index.js" "src/components/Alerts/index.js" "ui"
./copy-file-from-source.sh "src/components/Alerts/AlertTable/index.js" "src/components/Alerts/AlertTable/index.js" "ui"
./copy-file-from-source.sh "src/components/Alerts/styles.scss" "src/components/Alerts/styles.scss" "ui"

./copy-file-from-source.sh "src/components/BurgerMenu/index.js" "src/components/BurgerMenu/index.js" "ui"
./copy-file-from-source.sh "src/components/BurgerMenu/styles.scss" "src/components/BurgerMenu/styles.scss" "ui"

./copy-file-from-source.sh "src/components/Diagram/index.js" "src/components/Diagram/index.js" "ui"
#./copy-file-from-source.sh "src/components/Diagram/visual-view.js" "src/components/Diagram/visual-view.js" "ui"
#./copy-file-from-source.sh "src/components/Diagram/visual-node.js" "src/components/Diagram/visual-node.js" "ui"
./copy-file-from-source.sh "src/components/Diagram/styles.scss" "src/components/Diagram/styles.scss" "ui"

./copy-file-from-source.sh "src/components/DnComponent/index.js" "src/components/DnComponent/index.js" "ui"
./copy-file-from-source.sh "src/components/DnComponent/styles.scss" "src/components/DnComponent/styles.scss" "ui"

#./copy-file-from-source.sh "src/components/DnShortcutComponent/index.js" "src/components/DnShortcutComponent/index.js" "ui"
#./copy-file-from-source.sh "src/components/DnShortcutComponent/styles.scss" "src/components/DnShortcutComponent/styles.scss" "ui"

./copy-file-from-source.sh "src/components/ErrorBox/index.js" "src/components/ErrorBox/index.js" "ui"
./copy-file-from-source.sh "src/components/ErrorBox/styles.scss" "src/components/ErrorBox/styles.scss" "ui"

./copy-file-from-source.sh "src/components/GoldenLayout/index.js" "src/components/GoldenLayout/index.js" "ui"
./copy-file-from-source.sh "src/components/GoldenLayout/styles.scss" "src/components/GoldenLayout/styles.scss" "ui"

./copy-file-from-source.sh "src/components/Header/index.js" "src/components/Header/index.js" "ui"
./copy-file-from-source.sh "src/components/Header/styles.scss" "src/components/Header/styles.scss" "ui"

./copy-file-from-source.sh "src/components/Popup/index.js" "src/components/Popup/index.js" "ui"
./copy-file-from-source.sh "src/components/Popup/styles.scss" "src/components/Popup/styles.scss" "ui"

./copy-file-from-source.sh "src/components/Properties/index.js" "src/components/Properties/index.js" "ui"
./copy-file-from-source.sh "src/components/Properties/styles.scss" "src/components/Properties/styles.scss" "ui"

./copy-file-from-source.sh "src/components/Properties/Config/index.js" "src/components/Properties/Config/index.js" "ui"
./copy-file-from-source.sh "src/components/Properties/Config/styles.scss" "src/components/Properties/Config/styles.scss" "ui"

./copy-file-from-source.sh "src/components/Properties/DnList/index.js" "src/components/Properties/DnList/index.js" "ui"
./copy-file-from-source.sh "src/components/Properties/DnList/styles.scss" "src/components/Properties/DnList/styles.scss" "ui"

./copy-file-from-source.sh "src/components/Properties/EnvironmentVariables/index.js" "src/components/Properties/EnvironmentVariables/index.js" "ui"
./copy-file-from-source.sh "src/components/Properties/EnvironmentVariables/styles.scss" "src/components/Properties/EnvironmentVariables/styles.scss" "ui"

./copy-file-from-source.sh "src/components/Properties/PropertiesTable/index.js" "src/components/Properties/PropertiesTable/index.js" "ui"
./copy-file-from-source.sh "src/components/Properties/PropertiesTable/styles.scss" "src/components/Properties/PropertiesTable/styles.scss" "ui"

./copy-file-from-source.sh "src/components/Properties/PropertyGroup/index.js" "src/components/Properties/PropertyGroup/index.js" "ui"

./copy-file-from-source.sh "src/components/Search/index.js" "src/components/Search/index.js" "ui"
./copy-file-from-source.sh "src/components/Search/styles.scss" "src/components/Search/styles.scss" "ui"
# Finish copying components


#Copying HOC
./copy-file-from-source.sh "src/HOC/BaseComponent.js" "src/HOC/BaseComponent.js" "ui"
# Finish copying HOC

#Copying state
#./copy-file-from-source.sh "src/state/diagram-source.js" "src/state/diagram-source.js" "ui"
./copy-file-from-source.sh "src/state/shared-state.js" "src/state/shared-state.js" "ui"
#./copy-file-from-source.sh "src/state/state-handler.js" "src/state/state-handler.js" "ui"
./copy-file-from-source.sh "src/state/kubevious-handler.js" "src/state/kubevious-handler.js" "ui"
# Finish copying state

#Copying utils
./copy-file-from-source.sh "src/utils/constants.js" "src/utils/constants.js" "ui"
./copy-file-from-source.sh "src/utils/naming-utils.js" "src/utils/naming-utils.js" "ui"
./copy-file-from-source.sh "src/utils/remote-track.js" "src/utils/remote-track.js" "ui"
./copy-file-from-source.sh "src/utils/save-fields.js" "src/utils/save-fields.js" "ui"
./copy-file-from-source.sh "src/utils/ui-utils.js" "src/utils/ui-utils.js" "ui"
./copy-file-from-source.sh "src/utils/util.js" "src/utils/util.js" "ui"
# Finish copying utils

./copy-file-from-source.sh "src/BaseRootApiService.js" "src/BaseRootApiService.js" "ui"

# Copying services
./copy-file-from-source.sh "src/services/BackendClient.js" "src/services/BackendClient.js" "ui"
#./copy-file-from-source.sh "src/services/DiagramService.js" "src/services/DiagramService.js" "ui"
./copy-file-from-source.sh "src/services/MiscService.js" "src/services/MiscService.js" "ui"
#./copy-file-from-source.sh "src/services/RootApiService.js" "src/services/RootApiService.js" "ui"
#./copy-file-from-source.sh "src/services/WebSocketService.js" "src/services/WebSocketService.js" "ui"
# Finish copying services

# Copying services-mock
#./copy-file-from-source.sh "src/services-mock/MockDiagramService.js" "src/services-mock/MockDiagramService.js" "ui"
./copy-file-from-source.sh "src/services-mock/MockMiscService.js" "src/services-mock/MockMiscService.js" "ui"
#./copy-file-from-source.sh "src/services-mock/MockRootApiService.js" "src/services-mock/MockRootApiService.js" "ui"
./copy-file-from-source.sh "src/services-mock/MockWebSocketService.js" "src/services-mock/MockWebSocketService.js" "ui"
# Finish copying services-mock

echo "Successfully synced"
