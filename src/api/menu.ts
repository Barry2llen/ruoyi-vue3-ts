import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'
import type { AppRouteRecordRaw } from '@/types/router'

// 获取路由
export const getRouters = () => {
  return request<ApiResponse<AppRouteRecordRaw[]>>({
    url: '/getRouters',
    method: 'get'
  })
}
