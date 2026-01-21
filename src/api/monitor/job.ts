import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'

// 查询定时任务调度列表
export function listJob(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/monitor/job/list',
    method: 'get',
    params: query
  })
}

// 查询定时任务调度详细
export function getJob(jobId: string | number) {
  return request<ApiResponse>({
    url: '/monitor/job/' + jobId,
    method: 'get'
  })
}

// 新增定时任务调度
export function addJob(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/monitor/job',
    method: 'post',
    data: data
  })
}

// 修改定时任务调度
export function updateJob(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/monitor/job',
    method: 'put',
    data: data
  })
}

// 删除定时任务调度
export function delJob(jobId: string | number) {
  return request<ApiResponse>({
    url: '/monitor/job/' + jobId,
    method: 'delete'
  })
}

// 任务状态修改
export function changeJobStatus(jobId: string | number, status: string) {
  const data = {
    jobId,
    status
  }
  return request<ApiResponse>({
    url: '/monitor/job/changeStatus',
    method: 'put',
    data: data
  })
}


// 定时任务立即执行一次
export function runJob(jobId: string | number, jobGroup: string) {
  const data = {
    jobId,
    jobGroup
  }
  return request<ApiResponse>({
    url: '/monitor/job/run',
    method: 'put',
    data: data
  })
}
