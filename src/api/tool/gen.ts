import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'

// 查询生成表数据
export function listTable(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/tool/gen/list',
    method: 'get',
    params: query
  })
}
// 查询db数据库列表
export function listDbTable(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/tool/gen/db/list',
    method: 'get',
    params: query
  })
}

// 查询表详细信息
export function getGenTable(tableId: string | number) {
  return request<ApiResponse>({
    url: '/tool/gen/' + tableId,
    method: 'get'
  })
}

// 修改代码生成信息
export function updateGenTable(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/tool/gen',
    method: 'put',
    data: data
  })
}

// 导入表
export function importTable(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/tool/gen/importTable',
    method: 'post',
    params: data
  })
}

// 创建表
export function createTable(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/tool/gen/createTable',
    method: 'post',
    params: data
  })
}

// 预览生成代码
export function previewTable(tableId: string | number) {
  return request<ApiResponse>({
    url: '/tool/gen/preview/' + tableId,
    method: 'get'
  })
}

// 删除表数据
export function delTable(tableId: string | number) {
  return request<ApiResponse>({
    url: '/tool/gen/' + tableId,
    method: 'delete'
  })
}

// 生成代码（自定义路径）
export function genCode(tableName: string) {
  return request<ApiResponse>({
    url: '/tool/gen/genCode/' + tableName,
    method: 'get'
  })
}

// 同步数据库
export function synchDb(tableName: string) {
  return request<ApiResponse>({
    url: '/tool/gen/synchDb/' + tableName,
    method: 'get'
  })
}
