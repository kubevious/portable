export type EditorItem = {
    script?: string;
    target?: string;
    name?: string;
    propagate?: boolean;
    shape?: string;
    color?: string;
    item_count?: number;
    error_count?: number;
    enabled?: boolean;
    is_current?: boolean;
};

export type AlertCount = {
    error?: number
    warn?: number
}

export type Flags = string[]

export interface SelectedData {
    dn: string
    id?: number
    errors?: number
    warnings?: number
    options?: DnOptions
    markers?: string[]
}

export interface DiagramData {
    flags?: Flags
    dn?: string
    rn?: string
    kind?: string
    order?: number
    alertCount?: AlertCount
    errorCount?: number
    children: DiagramData[]
    markers?: string[]
    childrenCount: number
    name?: string
    selfAlertCount?: AlertCount
}

export interface PersistableFields {
    selected_dn?: string
    time_machine_enabled?: boolean
    time_machine_target_date?: Date
    time_machine_date_to?: Date
    time_machine_duration?: number
}

export type PersistableParams = {
    sd?: string | null
    tme?: string | null
    tmtd?: string | null
    tmdt?: string | null
    tmd?: string | null
}

export type DnOptions = {
    relativeTo?: string
}

export interface GoldenLayoutWindowInfo {
    id?: string;
    name: string;
    component: any;
    location: GoldenLayoutLocation;
    title: string;
    allowVerticalScroll?: boolean;
    skipClose?: boolean;
    height?: number;
    width?: number;
}

export enum GoldenLayoutLocation {
    main = "main",
    right = "right",
    left = "left",
    bottom = "bottom",
    top = "top"
}
