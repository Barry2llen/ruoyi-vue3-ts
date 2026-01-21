import request from '@/utils/request'
import type { ApiResponse } from '@/types/api'
import type { UserInfoResponse } from '@/types/user'

// 登录方法
export function login(username: string, password: string, code: string, uuid: string) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request<ApiResponse & { token: string }>({
    url: '/login',
    headers: {
      isToken: false,
      repeatSubmit: false
    },
    method: 'post',
    data: data
  })
}

// 注册方法
export function register(data: Record<string, unknown>) {
  return request<ApiResponse>({
    url: '/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request<ApiResponse & UserInfoResponse>({
    url: '/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request<ApiResponse>({
    url: '/logout',
    method: 'post'
  })
}

// 获取验证码
export function getCodeImg() {
  return request<ApiResponse>({
    url: '/captchaImage',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}
