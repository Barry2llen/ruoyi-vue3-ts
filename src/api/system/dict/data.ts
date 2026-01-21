import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'

// 查询字典数据列表
export function listData(query: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/dict/data/list',
    method: 'get',
    params: query
  })
}

// 查询字典数据详细
export function getData(dictCode: string | number) {
  return request<ApiResponse>({
    url: '/system/dict/data/' + dictCode,
    method: 'get'
  })
}

// 根据字典类型查询字典数据信息
export function getDicts(dictType: string) {
  return request<ApiResponse<Array<{ dictLabel: string; dictValue: string; listClass?: string; cssClass?: string }>>>({
    url: '/system/dict/data/type/' + dictType,
    method: 'get'
  })
}

// 新增字典数据
export function addData(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/dict/data',
    method: 'post',
    data: data
  })
}

// 修改字典数据
export function updateData(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/system/dict/data',
    method: 'put',
    data: data
  })
}

// 删除字典数据
export function delData(dictCode: string | number) {
  return request<ApiResponse>({
    url: '/system/dict/data/' + dictCode,
    method: 'delete'
  })
}
