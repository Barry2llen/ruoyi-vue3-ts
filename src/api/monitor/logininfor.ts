import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'

// 查询登录日志列表
export function list(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/monitor/logininfor/list',
    method: 'get',
    params: query
  })
}

// 删除登录日志
export function delLogininfor(infoId: string | number) {
  return request<ApiResponse>({
    url: '/monitor/logininfor/' + infoId,
    method: 'delete'
  })
}

// 解锁用户登录状态
export function unlockLogininfor(userName: string) {
  return request<ApiResponse>({
    url: '/monitor/logininfor/unlock/' + userName,
    method: 'get'
  })
}

// 清空登录日志
export function cleanLogininfor() {
  return request<ApiResponse>({
    url: '/monitor/logininfor/clean',
    method: 'delete'
  })
}
