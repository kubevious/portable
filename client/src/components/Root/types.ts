import { GoldenLayout } from '@kubevious/ui-components';
import { GoldenLayoutWindowInfo } from '../../types';

export type Error = {
    data: {
        message: string
        stack: string
        reason?: string
        name?: string
        mark?: {
            name?: string | null
            buffer?: string
            position?: number
            line?: number
            column?: number
        }
    }
    status?: number
}

export type RootState = {
    showPopup: boolean
    popupContent: any
    layout: GoldenLayout | null
    windows: GoldenLayoutWindowInfo[]
    isError: boolean
    error: Error | null
    showClustersPopup: boolean
}
