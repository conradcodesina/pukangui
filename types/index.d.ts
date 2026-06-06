import type { App, DefineComponent } from 'vue'

export type PkComponent = DefineComponent<Record<string, any>, Record<string, any>, any>

export type PkMessageType = 'success' | 'warning' | 'error' | 'info' | string

export interface PkMessageOptions {
  type?: PkMessageType
  message?: string
}

export interface PkNotificationOptions {
  title?: string
  message?: string
  type?: PkMessageType
  duration?: number
}

export interface PkNotificationHandler {
  close: () => void
}

export interface PkMessageBoxOptions {
  title?: string
  message?: string
  confirmText?: string
  cancelText?: string
}

declare const PukangUI: {
  install: (app: App) => void
}

export default PukangUI

export const PkAside: PkComponent
export const PkButton: PkComponent
export const PkCheckbox: PkComponent
export const PkContainer: PkComponent
export const PkDatePicker: PkComponent
export const PkDialog: PkComponent
export const PkDropdown: PkComponent
export const PkFooter: PkComponent
export const PkForm: PkComponent
export const PkFormItem: PkComponent
export const PkHeader: PkComponent
export const PkInput: PkComponent
export const PkMain: PkComponent
export const PkPanel: PkComponent
export const PkPagination: PkComponent
export const PkScrollbar: PkComponent
export const PkSearch: PkComponent
export const PkSelect: PkComponent
export const PkSlider: PkComponent
export const PkSwitch: PkComponent
export const PkTable: PkComponent
export const PkTag: PkComponent
export const PkTree: PkComponent
export const PkUpload: PkComponent

export function PkMessage(options: PkMessageOptions, duration?: number): void
export function PkNotification(options: PkNotificationOptions): PkNotificationHandler
export function PkMessageBox(options: PkMessageBoxOptions): Promise<'confirm'>

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $pkMessage: typeof PkMessage
    $pkNotification: typeof PkNotification
    $pkMessageBox: typeof PkMessageBox
  }

  export interface GlobalComponents {
    PkAside: typeof PkAside
    PkButton: typeof PkButton
    PkCheckbox: typeof PkCheckbox
    PkContainer: typeof PkContainer
    PkDatePicker: typeof PkDatePicker
    PkDialog: typeof PkDialog
    PkDropdown: typeof PkDropdown
    PkFooter: typeof PkFooter
    PkForm: typeof PkForm
    PkFormItem: typeof PkFormItem
    PkHeader: typeof PkHeader
    PkInput: typeof PkInput
    PkMain: typeof PkMain
    PkPanel: typeof PkPanel
    PkPagination: typeof PkPagination
    PkScrollbar: typeof PkScrollbar
    PkSearch: typeof PkSearch
    PkSelect: typeof PkSelect
    PkSlider: typeof PkSlider
    PkSwitch: typeof PkSwitch
    PkTable: typeof PkTable
    PkTag: typeof PkTag
    PkTree: typeof PkTree
    PkUpload: typeof PkUpload
  }
}
