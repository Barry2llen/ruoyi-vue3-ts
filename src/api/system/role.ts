import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'

// 查询角色列表
export function listRole(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/role/list',
    method: 'get',
    params: query
  })
}

// 查询角色详细
export function getRole(roleId: string | number) {
  return request<ApiResponse>({
    url: '/system/role/' + roleId,
    method: 'get'
  })
}

// 新增角色
export function addRole(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/role',
    method: 'post',
    data: data
  })
}

// 修改角色
export function updateRole(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/role',
    method: 'put',
    data: data
  })
}

// 角色数据权限
export function dataScope(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/role/dataScope',
    method: 'put',
    data: data
  })
}

// 角色状态修改
export function changeRoleStatus(roleId: string | number, status: string) {
  const data = {
    roleId,
    status
  }
  return request<ApiResponse>({
    url: '/system/role/changeStatus',
    method: 'put',
    data: data
  })
}

// 删除角色
export function delRole(roleId: string | number) {
  return request<ApiResponse>({
    url: '/system/role/' + roleId,
    method: 'delete'
  })
}

// 查询角色已授权用户列表
export function allocatedUserList(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/role/authUser/allocatedList',
    method: 'get',
    params: query
  })
}

// 查询角色未授权用户列表
export function unallocatedUserList(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/role/authUser/unallocatedList',
    method: 'get',
    params: query
  })
}

// 取消用户授权角色
export function authUserCancel(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/role/authUser/cancel',
    method: 'put',
    data: data
  })
}

// 批量取消用户授权角色
export function authUserCancelAll(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/role/authUser/cancelAll',
    method: 'put',
    params: data
  })
}

// 授权用户选择
export function authUserSelectAll(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/role/authUser/selectAll',
    method: 'put',
    params: data
  })
}

// 根据角色ID查询部门树结构
export function deptTreeSelect(roleId: string | number) {
  return request<ApiResponse>({
    url: '/system/role/deptTree/' + roleId,
    method: 'get'
  })
}
