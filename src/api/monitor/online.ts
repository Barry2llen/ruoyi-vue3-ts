import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'

// 查询在线用户列表
export function list(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/monitor/online/list',
    method: 'get',
    params: query
  })
}

// 强退用户
export function forceLogout(tokenId: string) {
  return request<ApiResponse>({
    url: '/monitor/online/' + tokenId,
    method: 'delete'
  })
}
