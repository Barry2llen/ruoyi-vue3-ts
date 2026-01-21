export interface UserInfo {
  userId: string
  userName: string
  nickName: string
  avatar?: string
}

export interface UserInfoResponse {
  user: UserInfo
  roles: string[]
  permissions: string[]
  isDefaultModifyPwd?: boolean
  isPasswordExpired?: boolean
}
