export interface DictOption {
  label: string
  value: string | number
  elTagType?: string
  elTagClass?: string
}

export interface DictItem {
  key: string
  value: DictOption[]
}
