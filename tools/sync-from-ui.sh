#!/bin/bash
MY_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/$(basename "${BASH_SOURCE[0]}")"
MY_DIR="$(dirname $MY_PATH)"
cd $MY_DIR

source $MY_DIR/utils.sh

log_header "Sync from UI"

global_status=0
function sync {
    ./copy-file-from-source.sh "$1" "$2" "ui"
    local status=$?
    if [[ ${status} -ne 0 ]]; then
        global_status=1
    fi
}

# Copying components
sync "src/components/About/index.js" "src/components/About/index.js"

sync "src/components/BurgerMenu/index.js" "src/components/BurgerMenu/index.js"
sync "src/components/BurgerMenu/styles.scss" "src/components/BurgerMenu/styles.scss"

sync "src/components/Alerts/styles.scss" "src/components/Alerts/styles.scss"

sync "src/components/CopyClipboard/index.js" "src/components/CopyClipboard/index.js"
sync "src/components/CopyClipboard/styles.scss" "src/components/CopyClipboard/styles.scss"

sync "src/components/Summary/index.js" "src/components/Summary/index.js"
sync "src/components/Summary/styles.scss" "src/components/Summary/styles.scss"

sync "src/components/Diagram/index.js" "src/components/Diagram/index.js"
sync "src/components/Diagram/styles.scss" "src/components/Diagram/styles.scss"
sync "src/components/Diagram/packer.growing.js" "src/components/Diagram/packer.growing.js"

sync "src/components/DnComponent/index.js" "src/components/DnComponent/index.js"
sync "src/components/DnComponent/styles.scss" "src/components/DnComponent/styles.scss"

sync "src/components/DnShortcutComponent/styles.scss" "src/components/DnShortcutComponent/styles.scss"

sync "src/components/Header/styles.scss" "src/components/Header/styles.scss"

sync "src/components/ErrorBox/index.js" "src/components/ErrorBox/index.js"
sync "src/components/ErrorBox/styles.scss" "src/components/ErrorBox/styles.scss"

sync "src/components/Events/index.js" "src/components/Events/index.js"

sync "src/components/Feedback/index.js" "src/components/Feedback/index.js"
sync "src/components/Feedback/styles.scss" "src/components/Feedback/styles.scss"

sync "src/components/GenerateDnPath/index.js" "src/components/GenerateDnPath/index.js"

sync "src/components/GoldenLayout/styles.scss" "src/components/GoldenLayout/styles.scss"

sync "src/components/MessageNotification/index.js" "src/components/MessageNotification/index.js"
sync "src/components/MessageNotification/styles.scss" "src/components/MessageNotification/styles.scss"

sync "src/components/NewVersion/index.js" "src/components/NewVersion/index.js"
sync "src/components/NewVersion/styles.scss" "src/components/NewVersion/styles.scss"

sync "src/components/NotificationList/index.js" "src/components/NotificationList/index.js"
sync "src/components/NotificationList/styles.scss" "src/components/NotificationList/styles.scss"

sync "src/components/Notifications/index.js" "src/components/Notifications/index.js"
sync "src/components/Notifications/styles.scss" "src/components/Notifications/styles.scss"

sync "src/components/Popup/index.js" "src/components/Popup/index.js"
sync "src/components/Popup/styles.scss" "src/components/Popup/styles.scss"

sync "src/components/PostFeedback/index.js" "src/components/PostFeedback/index.js"
sync "src/components/PostFeedback/styles.scss" "src/components/PostFeedback/styles.scss"

sync "src/components/Properties/index.js" "src/components/Properties/index.js"
sync "src/components/Properties/styles.scss" "src/components/Properties/styles.scss"
sync "src/components/Properties/styles.scss" "src/components/Properties/obsidian.scss"

sync "src/components/Properties/Config/index.js" "src/components/Properties/Config/index.js"
sync "src/components/Properties/Config/styles.scss" "src/components/Properties/Config/styles.scss"

sync "src/components/Properties/DnList/index.js" "src/components/Properties/DnList/index.js"
sync "src/components/Properties/DnList/styles.scss" "src/components/Properties/DnList/styles.scss"

sync "src/components/Properties/KeyValueList/index.js" "src/components/Properties/KeyValueList/index.js"
sync "src/components/Properties/KeyValueList/styles.scss" "src/components/Properties/KeyValueList/styles.scss"

sync "src/components/Properties/PropertiesContents/index.js" "src/components/Properties/PropertiesContents/index.js"

sync "src/components/Properties/PropertiesObjectList/index.js" "src/components/Properties/PropertiesObjectList/index.js"

sync "src/components/Properties/PropertiesTable/index.js" "src/components/Properties/PropertiesTable/index.js"
sync "src/components/Properties/PropertiesTable/styles.scss" "src/components/Properties/PropertiesTable/styles.scss"

sync "src/components/Properties/PropertyGroup/index.js" "src/components/Properties/PropertyGroup/index.js"

sync "src/components/Root/styles.scss" "src/components/Root/styles.scss"

sync "src/components/Search/styles.scss" "src/components/Search/styles.scss"

sync "src/components/SEO/index.js" "src/components/SEO/index.js"

sync "src/components/Snooze/index.js" "src/components/Snooze/index.js"
sync "src/components/Snooze/styles.scss" "src/components/Snooze/styles.scss"

sync "src/components/UiLogs/index.js" "src/components/UiLogs/index.js"
# Finish copying components

#Copying HOC
sync "src/HOC/BaseComponent.js" "src/HOC/BaseComponent.js"
# Finish copying HOC

# Copying services
sync "src/services/BackendClient.js" "src/services/BackendClient.js"
sync "src/services/BaseService.js" "src/services/BaseService.js"
sync "src/services/WebSocketService.js" "src/services/WebSocketService.js"
# Finish copying services

# Copying services-mock
sync "src/services-mock/MockMiscService.js" "src/services-mock/MockMiscService.js"
# Finish copying services-mock

#Copying state
sync "src/state/diagram-source.js" "src/state/diagram-source.js"
sync "src/state/kubevious-handler.js" "src/state/kubevious-handler.js"
sync "src/state/shared-state.js" "src/state/shared-state.js"
# Finish copying state

#Copying styles
sync "src/styles/fonts.scss" "src/styles/fonts.scss"
# Finish copying utils

#Copying utils
sync "src/utils/constants.js" "src/utils/constants.js"
sync "src/utils/remote-track.js" "src/utils/remote-track.js"
sync "src/utils/save-fields.js" "src/utils/save-fields.js"
sync "src/utils/ui-utils.js" "src/utils/ui-utils.js"
sync "src/utils/util.js" "src/utils/util.js"
# Finish copying utils

#Copying utils
sync "src/boot/aboutMockData.js" "src/boot/aboutMockData.js"
sync "src/boot/diagramMockData.js" "src/boot/diagramMockData.js"
sync "src/boot/filterData.js" "src/boot/filterData.js"
sync "src/boot/targetSnippets.js" "src/boot/targetSnippets.js"
# Finish copying utils

sync "src/BaseRootApiService.js" "src/BaseRootApiService.js"
sync "src/index.scss" "src/index.scss"

if [[ global_status -ne 0 ]]; then
    log_error "[sync-from-ui] failed"
fi

exit $global_status
