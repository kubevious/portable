export type Error = {
    messages: {
        msg:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
        i: React.Key
    }[]
    runCommands: Command[]
} | null

export type Command = {
    os: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal
    command: string
}

export type ClusterErrorProps = {
    error: Error
    selectedCommand: Command
    backToList: () => void
    selectCommand: (cmd: Command) => void
}

export type ClusterListProps = {
    clusters: Cluster[]
    selectedCluster: Cluster
    selectCluster: (item: Cluster) => void
    addCustomConfig: () => void
}

export interface Cluster {
    name?: string
    kind?: string
    ready?: boolean
}

export type CustomConfigProps = {
    backToList: () => void
    createCustomConfig: (config: string) => void
}
