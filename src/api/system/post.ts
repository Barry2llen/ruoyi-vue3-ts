import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'

// 查询岗位列表
export function listPost(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/post/list',
    method: 'get',
    params: query
  })
}

// 查询岗位详细
export function getPost(postId: string | number) {
  return request<ApiResponse>({
    url: '/system/post/' + postId,
    method: 'get'
  })
}

// 新增岗位
export function addPost(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/post',
    method: 'post',
    data: data
  })
}

// 修改岗位
export function updatePost(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/post',
    method: 'put',
    data: data
  })
}

// 删除岗位
export function delPost(postId: string | number) {
  return request<ApiResponse>({
    url: '/system/post/' + postId,
    method: 'delete'
  })
}
