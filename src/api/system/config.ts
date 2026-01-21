import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'

// 查询参数列表
export function listConfig(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/config/list',
    method: 'get',
    params: query
  })
}

// 查询参数详细
export function getConfig(configId: string | number) {
  return request<ApiResponse>({
    url: '/system/config/' + configId,
    method: 'get'
  })
}

// 根据参数键名查询参数值
export function getConfigKey(configKey: string) {
  return request<ApiResponse>({
    url: '/system/config/configKey/' + configKey,
    method: 'get'
  })
}

// 新增参数配置
export function addConfig(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/config',
    method: 'post',
    data: data
  })
}

// 修改参数配置
export function updateConfig(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/config',
    method: 'put',
    data: data
  })
}

// 删除参数配置
export function delConfig(configId: string | number) {
  return request<ApiResponse>({
    url: '/system/config/' + configId,
    method: 'delete'
  })
}

// 刷新参数缓存
export function refreshCache() {
  return request<ApiResponse>({
    url: '/system/config/refreshCache',
    method: 'delete'
  })
}
