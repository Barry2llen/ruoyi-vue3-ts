export interface ApiResponse<T = unknown> {
  code?: number
  msg?: string
  data?: T
  [key: string]: unknown
}

export interface PageQuery {
  pageNum?: number
  pageSize?: number
  [key: string]: unknown
}

export interface PageResult<T = unknown> {
  rows: T[]
  total: number
  [key: string]: unknown
}
