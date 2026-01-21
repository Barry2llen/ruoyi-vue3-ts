import useDictStore from '@/store/modules/dict'
import { getDicts } from '@/api/system/dict/data'
import type { DictOption } from '@/types/dict'
import type { ToRefs } from 'vue'

/**
 * 获取字典数据
 */
export function useDict(...args: string[]): ToRefs<Record<string, DictOption[]>> {
  const res = ref<Record<string, DictOption[]>>({})
  return (() => {
    args.forEach((dictType) => {
      res.value[dictType] = []
      const dicts = useDictStore().getDict(dictType)
      if (dicts) {
        res.value[dictType] = dicts as DictOption[]
      } else {
        getDicts(dictType).then((resp) => {
          const items = resp.data ?? []
          res.value[dictType] = items.map((p) => ({
            label: p.dictLabel,
            value: p.dictValue,
            elTagType: p.listClass,
            elTagClass: p.cssClass
          }))
          useDictStore().setDict(dictType, res.value[dictType])
        })
      }
    })
    return toRefs(res.value)
  })()
}
