import { GoldenLayoutWindowInfo } from "@kubevious/ui-components"
import { Cluster } from "../ClusterScreen/types"

export type HeaderState = {
    showSettings: boolean
    isLoading: boolean
    hasNotifications: boolean
    visible_windows: Record<string, boolean>
    cluster: Cluster
}

export type HeaderProps = {
    handleOpenCluster: () => void
    windows:  GoldenLayoutWindowInfo[]
}
