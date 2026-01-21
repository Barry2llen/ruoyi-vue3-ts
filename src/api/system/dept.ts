import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'

// 查询部门列表
export function listDept(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/dept/list',
    method: 'get',
    params: query
  })
}

// 查询部门列表（排除节点）
export function listDeptExcludeChild(deptId: string | number) {
  return request<ApiResponse>({
    url: '/system/dept/list/exclude/' + deptId,
    method: 'get'
  })
}

// 查询部门详细
export function getDept(deptId: string | number) {
  return request<ApiResponse>({
    url: '/system/dept/' + deptId,
    method: 'get'
  })
}

// 新增部门
export function addDept(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/dept',
    method: 'post',
    data: data
  })
}

// 修改部门
export function updateDept(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/dept',
    method: 'put',
    data: data
  })
}

// 删除部门
export function delDept(deptId: string | number) {
  return request<ApiResponse>({
    url: '/system/dept/' + deptId,
    method: 'delete'
  })
}
