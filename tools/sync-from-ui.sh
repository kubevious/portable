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
sync "src/components/About/index.tsx" "src/components/About/index.tsx"
sync "src/components/About/types.ts" "src/components/About/types.ts"

sync "src/components/Events/index.tsx" "src/components/Events/index.tsx"

sync "src/components/Feedback/index.tsx" "src/components/Feedback/index.tsx"
sync "src/components/Feedback/types.ts" "src/components/Feedback/types.ts"
sync "src/components/Feedback/styles.scss" "src/components/Feedback/styles.scss"

sync "src/components/Header/styles.scss" "src/components/Header/styles.scss"

sync "src/components/MessageNotification/index.tsx" "src/components/MessageNotification/index.tsx"
sync "src/components/MessageNotification/types.ts" "src/components/MessageNotification/types.ts"
sync "src/components/MessageNotification/styles.scss" "src/components/MessageNotification/styles.scss"

sync "src/components/NewVersion/index.tsx" "src/components/NewVersion/index.tsx"
sync "src/components/NewVersion/types.ts" "src/components/NewVersion/types.ts"
sync "src/components/NewVersion/styles.scss" "src/components/NewVersion/styles.scss"

sync "src/components/NotificationList/index.tsx" "src/components/NotificationList/index.tsx"
sync "src/components/NotificationList/types.ts" "src/components/NotificationList/types.ts"
sync "src/components/NotificationList/styles.scss" "src/components/NotificationList/styles.scss"

sync "src/components/Notifications/index.tsx" "src/components/Notifications/index.tsx"
sync "src/components/Notifications/types.ts" "src/components/Notifications/types.ts"
sync "src/components/Notifications/styles.scss" "src/components/Notifications/styles.scss"

sync "src/components/PostFeedback/index.tsx" "src/components/PostFeedback/index.tsx"
sync "src/components/PostFeedback/styles.scss" "src/components/PostFeedback/styles.scss"

sync "src/components/Root/styles.scss" "src/components/Root/styles.scss"

sync "src/components/Search/styles.scss" "src/components/Search/styles.scss"
sync "src/components/Search/types.ts" "src/components/Search/types.ts"

sync "src/components/SEO/index.tsx" "src/components/SEO/index.tsx"

sync "src/components/Snooze/index.tsx" "src/components/Snooze/index.tsx"
sync "src/components/Snooze/types.ts" "src/components/Snooze/types.ts"
sync "src/components/Snooze/styles.scss" "src/components/Snooze/styles.scss"

sync "src/components/UiLogs/index.tsx" "src/components/UiLogs/index.tsx"
# Finish copying components

# Copying services
sync "src/services/WebSocketService.ts" "src/services/WebSocketService.ts"
sync "src/services/BaseService.ts" "src/services/BaseService.ts"
sync "src/services/MiscService.ts" "src/services/MiscService.ts"
# Finish copying services

# Copying services-mock
sync "src/services-mock/utils.ts" "src/services-mock/utils.ts"
sync "src/services-mock/MockMiscService.ts" "src/services-mock/MockMiscService.ts"
sync "src/services-mock/MockWebSocketService.ts" "src/services-mock/MockWebSocketService.ts"
# Finish copying services-mock

# Copying state
sync "src/state/diagram-source.ts" "src/state/diagram-source.ts"
sync "src/state/kubevious-handler.ts" "src/state/kubevious-handler.ts"
sync "src/state/state-handler.ts" "src/state/state-handler.ts"
# Finish copying state

#Copying styles
sync "src/styles/fonts.scss" "src/styles/fonts.scss"
# Finish copying utils

#Copying utils
sync "src/utils/save-fields.ts" "src/utils/save-fields.ts"
sync "src/utils/ui-utils.ts" "src/utils/ui-utils.ts"
sync "src/utils/util.ts" "src/utils/util.ts"
# Finish copying utils

# Copying boot
sync "src/boot/aboutMockData.ts" "src/boot/aboutMockData.ts"
sync "src/boot/diagramMockData.ts" "src/boot/diagramMockData.ts"
sync "src/boot/filterData.ts" "src/boot/filterData.ts"
sync "src/boot/targetSnippets.ts" "src/boot/targetSnippets.ts"
# Finish copying boot

sync "src/index.scss" "src/index.scss"
sync "src/index.tsx" "src/index.tsx"
sync "src/version.ts" "src/version.ts"

if [[ global_status -ne 0 ]]; then
    log_error "[sync-from-ui] failed"
fi

exit $global_status
