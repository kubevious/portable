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
sync "components/About/index.tsx" "src/components/About/index.tsx"
sync "components/About/types.ts" "src/components/About/types.ts"

sync "components/Events/index.tsx" "src/components/Events/index.tsx"

sync "components/Feedback/index.tsx" "src/components/Feedback/index.tsx"
sync "components/Feedback/types.ts" "src/components/Feedback/types.ts"
sync "components/Feedback/styles.scss" "src/components/Feedback/styles.scss"

sync "components/Header/styles.scss" "src/components/Header/styles.scss"

sync "components/MessageNotification/index.tsx" "src/components/MessageNotification/index.tsx"
sync "components/MessageNotification/types.ts" "src/components/MessageNotification/types.ts"
sync "components/MessageNotification/styles.scss" "src/components/MessageNotification/styles.scss"

sync "components/NewVersion/index.tsx" "src/components/NewVersion/index.tsx"
sync "components/NewVersion/types.ts" "src/components/NewVersion/types.ts"
sync "components/NewVersion/styles.scss" "src/components/NewVersion/styles.scss"

sync "components/NotificationList/index.tsx" "src/components/NotificationList/index.tsx"
sync "components/NotificationList/types.ts" "src/components/NotificationList/types.ts"
sync "components/NotificationList/styles.scss" "src/components/NotificationList/styles.scss"

sync "components/Notifications/index.tsx" "src/components/Notifications/index.tsx"
sync "components/Notifications/types.ts" "src/components/Notifications/types.ts"
sync "components/Notifications/styles.scss" "src/components/Notifications/styles.scss"

sync "components/PostFeedback/index.tsx" "src/components/PostFeedback/index.tsx"
sync "components/PostFeedback/styles.scss" "src/components/PostFeedback/styles.scss"

sync "components/Root/styles.scss" "src/components/Root/styles.scss"

sync "components/Search/styles.scss" "src/components/Search/styles.scss"
sync "components/Search/types.ts" "src/components/Search/types.ts"

sync "components/SEO/index.tsx" "src/components/SEO/index.tsx"

sync "components/Snooze/index.tsx" "src/components/Snooze/index.tsx"
sync "components/Snooze/types.ts" "src/components/Snooze/types.ts"
sync "components/Snooze/styles.scss" "src/components/Snooze/styles.scss"

sync "components/UiLogs/index.tsx" "src/components/UiLogs/index.tsx"
# Finish copying components

# Copying services
sync "services/WebSocketService.ts" "src/services/WebSocketService.ts"
sync "services/BaseService.ts" "src/services/BaseService.ts"
sync "services/MiscService.ts" "src/services/MiscService.ts"
# Finish copying services

# Copying services-mock
sync "services-mock/utils.ts" "src/services-mock/utils.ts"
sync "services-mock/MockMiscService.ts" "src/services-mock/MockMiscService.ts"
sync "services-mock/MockWebSocketService.ts" "src/services-mock/MockWebSocketService.ts"
# Finish copying services-mock

# Copying state
sync "state/diagram-source.ts" "src/state/diagram-source.ts"
sync "state/kubevious-handler.ts" "src/state/kubevious-handler.ts"
sync "state/state-handler.ts" "src/state/state-handler.ts"
# Finish copying state

#Copying styles
sync "styles/fonts.scss" "src/styles/fonts.scss"
# Finish copying utils

#Copying utils
sync "utils/save-fields.ts" "src/utils/save-fields.ts"
sync "utils/ui-utils.ts" "src/utils/ui-utils.ts"
sync "utils/util.ts" "src/utils/util.ts"
# Finish copying utils

# Copying boot
sync "boot/aboutMockData.ts" "src/boot/aboutMockData.ts"
sync "boot/diagramMockData.ts" "src/boot/diagramMockData.ts"
sync "boot/filterData.ts" "src/boot/filterData.ts"
sync "boot/targetSnippets.ts" "src/boot/targetSnippets.ts"
# Finish copying boot

sync "index.scss" "src/index.scss"
sync "index.tsx" "src/index.tsx"
sync "version.ts" "src/version.ts"

if [[ global_status -ne 0 ]]; then
    log_error "[sync-from-ui] failed"
fi

exit $global_status
