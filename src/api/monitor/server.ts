import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'

// 获取服务信息
export function getServer() {
  return request<ApiResponse>({
    url: '/monitor/server',
    method: 'get'
  })
}
