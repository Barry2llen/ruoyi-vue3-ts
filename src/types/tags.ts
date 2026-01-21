import type { LocationQuery, RouteRecordName } from 'vue-router'
import type { AppRouteMeta } from './router'

export interface TagView {
  name?: RouteRecordName | null
  path: string
  fullPath?: string
  meta: AppRouteMeta
  query?: LocationQuery
  [key: string]: unknown
}
