/**
 * 通用js方法封装处理
 * Copyright (c) 2019 ruoyi
 */

import type { DictOption } from '@/types/dict'

type PlainObject = Record<string, unknown>

// 日期格式化
export function parseTime(
  time: string | number | Date | null | undefined,
  pattern?: string
): string | null {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '')
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key: string) => {
    let value = formatObj[key as keyof typeof formatObj]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

// 表单重置
export function resetForm(
  this: { $refs: Record<string, { resetFields: () => void } | undefined> },
  refName: string
): void {
  const ref = this.$refs[refName]
  if (ref) {
    ref.resetFields()
  }
}

// 添加日期范围
export function addDateRange<T extends PlainObject>(
  params: T & { params?: PlainObject },
  dateRange: Array<string | number | Date>,
  propName?: string
): T & { params: PlainObject } {
  const search = params
  search.params =
    typeof search.params === 'object' && search.params !== null && !Array.isArray(search.params)
      ? search.params
      : {}
  const range = Array.isArray(dateRange) ? dateRange : []
  if (typeof propName === 'undefined') {
    search.params['beginTime'] = range[0]
    search.params['endTime'] = range[1]
  } else {
    search.params[`begin${propName}`] = range[0]
    search.params[`end${propName}`] = range[1]
  }
  return search as T & { params: PlainObject }
}

// 回显数据字典
export function selectDictLabel(datas: DictOption[], value: string | number): string {
  if (value === undefined) {
    return ''
  }
  const actions: Array<string | number> = []
  datas.some((item) => {
    if (item.value == `${value}`) {
      actions.push(item.label)
      return true
    }
    return false
  })
  if (actions.length === 0) {
    actions.push(value)
  }
  return actions.join('')
}

// 回显数据字典（字符串、数组）
export function selectDictLabels(
  datas: DictOption[],
  value: string | number | Array<string | number>,
  separator = ','
): string {
  if (value === undefined || value.length === 0) {
    return ''
  }
  let currentValue: string
  if (Array.isArray(value)) {
    currentValue = value.join(',')
  } else {
    currentValue = `${value}`
  }
  const actions: string[] = []
  const temp = currentValue.split(separator)
  Object.keys(temp).some((val) => {
    let match = false
    datas.some((item) => {
      if (item.value == `${temp[Number(val)]}`) {
        actions.push(item.label + separator)
        match = true
      }
    })
    if (!match) {
      actions.push(temp[Number(val)] + separator)
    }
  })
  return actions.join('').substring(0, actions.join('').length - 1)
}

// 字符串格式化(%s )
export function sprintf(str: string, ...args: Array<string | number>): string {
  let flag = true
  let i = 0
  const result = str.replace(/%s/g, () => {
    const arg = args[i++]
    if (typeof arg === 'undefined') {
      flag = false
      return ''
    }
    return arg
  })
  return flag ? result : ''
}

// 转换字符串，undefined,null等转化为""
export function parseStrEmpty(str?: string | number | null): string {
  if (!str || str == 'undefined' || str == 'null') {
    return ''
  }
  return String(str)
}

// 数据合并
export function mergeRecursive<T extends PlainObject, K extends PlainObject>(
  source: T,
  target: K
): T & K {
  for (const p in target) {
    try {
      const targetValue = target[p]
      if (targetValue && (targetValue as PlainObject).constructor == Object) {
        source[p as keyof T] = mergeRecursive(
          source[p as keyof T] as PlainObject,
          targetValue as PlainObject
        ) as T[keyof T]
      } else {
        source[p as keyof T] = targetValue as T[keyof T]
      }
    } catch (e) {
      source[p as keyof T] = target[p] as T[keyof T]
    }
  }
  return source as T & K
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function handleTree<T extends PlainObject>(
  data: T[],
  id?: string,
  parentId?: string,
  children?: string
): T[] {
  const config = {
    id: id || 'id',
    parentId: parentId || 'parentId',
    childrenList: children || 'children'
  }

  const childrenListMap: Record<string, T> = {}
  const tree: T[] = []
  for (const d of data) {
    const currentId = d[config.id as keyof T] as unknown as string
    childrenListMap[currentId] = d
    if (!d[config.childrenList as keyof T]) {
      d[config.childrenList as keyof T] = [] as unknown as T[keyof T]
    }
  }

  for (const d of data) {
    const currentParentId = d[config.parentId as keyof T] as unknown as string
    const parentObj = childrenListMap[currentParentId]
    if (!parentObj) {
      tree.push(d)
    } else {
      const childrenList = parentObj[config.childrenList as keyof T] as unknown as T[]
      childrenList.push(d)
    }
  }
  return tree
}

/**
* 参数处理
* @param {*} params  参数
*/
export function tansParams(params: PlainObject): string {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName]
    const part = `${encodeURIComponent(propName)}=`
    if (value !== null && value !== '' && typeof value !== 'undefined') {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && value[key] !== '' && typeof value[key] !== 'undefined') {
            const currentParams = `${propName}[${key}]`
            const subPart = `${encodeURIComponent(currentParams)}=`
            result += subPart + encodeURIComponent(value[key] as string) + '&'
          }
        }
      } else {
        result += part + encodeURIComponent(value as string) + '&'
      }
    }
  }
  return result
}

// 返回项目路径
export function getNormalPath(p: string): string {
  if (p.length === 0 || p == 'undefined') {
    return p
  }
  let res = p.replace('//', '/')
  if (res[res.length - 1] === '/') {
    return res.slice(0, res.length - 1)
  }
  return res
}

// 验证是否为blob格式
export function blobValidate(data: Blob): boolean {
  return data.type !== 'application/json'
}
