import type { Component } from 'vue'
import type { RouteMeta, RouteRecordRaw } from 'vue-router'

export interface AppRouteMeta extends RouteMeta {
  title?: string
  icon?: string
  affix?: boolean
  activeMenu?: string
  breadcrumb?: boolean
  noCache?: boolean
  link?: string
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta' | 'children' | 'component'> {
  name?: string
  hidden?: boolean
  alwaysShow?: boolean
  roles?: string[]
  permissions?: string[]
  meta?: AppRouteMeta
  component?: Component | string
  children?: AppRouteRecordRaw[]
}
