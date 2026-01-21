import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'

// 查询调度日志列表
export function listJobLog(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/monitor/jobLog/list',
    method: 'get',
    params: query
  })
}

// 删除调度日志
export function delJobLog(jobLogId: string | number) {
  return request<ApiResponse>({
    url: '/monitor/jobLog/' + jobLogId,
    method: 'delete'
  })
}

// 清空调度日志
export function cleanJobLog() {
  return request<ApiResponse>({
    url: '/monitor/jobLog/clean',
    method: 'delete'
  })
}
