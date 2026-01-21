import request from '@/utils/request'
import { parseStrEmpty } from '@/utils/ruoyi'
import type { ApiResponse } from '@/types/api'

// 查询用户列表
export function listUser(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/user/list',
    method: 'get',
    params: query
  })
}

// 查询用户详细
export function getUser(userId: string | number) {
  return request<ApiResponse>({
    url: '/system/user/' + parseStrEmpty(userId),
    method: 'get'
  })
}

// 新增用户
export function addUser(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/user',
    method: 'post',
    data: data
  })
}

// 修改用户
export function updateUser(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/user',
    method: 'put',
    data: data
  })
}

// 删除用户
export function delUser(userId: string | number) {
  return request<ApiResponse>({
    url: '/system/user/' + userId,
    method: 'delete'
  })
}

// 用户密码重置
export function resetUserPwd(userId: string | number, password: string) {
  const data = {
    userId,
    password
  }
  return request<ApiResponse>({
    url: '/system/user/resetPwd',
    method: 'put',
    data: data
  })
}

// 用户状态修改
export function changeUserStatus(userId: string | number, status: string) {
  const data = {
    userId,
    status
  }
  return request<ApiResponse>({
    url: '/system/user/changeStatus',
    method: 'put',
    data: data
  })
}

// 查询用户个人信息
export function getUserProfile() {
  return request<ApiResponse>({
    url: '/system/user/profile',
    method: 'get'
  })
}

// 修改用户个人信息
export function updateUserProfile(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/user/profile',
    method: 'put',
    data: data
  })
}

// 用户密码重置
export function updateUserPwd(oldPassword: string, newPassword: string) {
  const data = {
    oldPassword,
    newPassword
  }
  return request<ApiResponse>({
    url: '/system/user/profile/updatePwd',
    method: 'put',
    data: data
  })
}

// 用户头像上传
export function uploadAvatar(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/user/profile/avatar',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: data
  })
}

// 查询授权角色
export function getAuthRole(userId: string | number) {
  return request<ApiResponse>({
    url: '/system/user/authRole/' + userId,
    method: 'get'
  })
}

// 保存授权角色
export function updateAuthRole(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/user/authRole',
    method: 'put',
    params: data
  })
}

// 查询部门下拉树结构
export function deptTreeSelect() {
  return request<ApiResponse>({
    url: '/system/user/deptTree',
    method: 'get'
  })
}
