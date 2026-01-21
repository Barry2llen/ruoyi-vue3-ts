import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'

// 查询字典类型列表
export function listType(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/dict/type/list',
    method: 'get',
    params: query
  })
}

// 查询字典类型详细
export function getType(dictId: string | number) {
  return request<ApiResponse>({
    url: '/system/dict/type/' + dictId,
    method: 'get'
  })
}

// 新增字典类型
export function addType(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/dict/type',
    method: 'post',
    data: data
  })
}

// 修改字典类型
export function updateType(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/dict/type',
    method: 'put',
    data: data
  })
}

// 删除字典类型
export function delType(dictId: string | number) {
  return request<ApiResponse>({
    url: '/system/dict/type/' + dictId,
    method: 'delete'
  })
}

// 刷新字典缓存
export function refreshCache() {
  return request<ApiResponse>({
    url: '/system/dict/type/refreshCache',
    method: 'delete'
  })
}

// 获取字典选择框列表
export function optionselect() {
  return request<ApiResponse>({
    url: '/system/dict/type/optionselect',
    method: 'get'
  })
}
