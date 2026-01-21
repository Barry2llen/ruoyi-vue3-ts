import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'

// 查询操作日志列表
export function list(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/monitor/operlog/list',
    method: 'get',
    params: query
  })
}

// 删除操作日志
export function delOperlog(operId: string | number) {
  return request<ApiResponse>({
    url: '/monitor/operlog/' + operId,
    method: 'delete'
  })
}

// 清空操作日志
export function cleanOperlog() {
  return request<ApiResponse>({
    url: '/monitor/operlog/clean',
    method: 'delete'
  })
}
