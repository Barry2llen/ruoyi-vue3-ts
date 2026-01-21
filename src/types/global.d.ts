import type { useDict } from '@/utils/dict'
import type { download } from '@/utils/request'
import type {
  addDateRange,
  handleTree,
  parseTime,
  resetForm,
  selectDictLabel,
  selectDictLabels
} from '@/utils/ruoyi'
import type { getConfigKey } from '@/api/system/config'

import type auth from '@/plugins/auth'
import type cache from '@/plugins/cache'
import type downloadPlugin from '@/plugins/download'
import type modal from '@/plugins/modal'
import type tab from '@/plugins/tab'

declare module 'vue' {
  interface ComponentCustomProperties {
    useDict: typeof useDict
    download: typeof download
    parseTime: typeof parseTime
    resetForm: typeof resetForm
    handleTree: typeof handleTree
    addDateRange: typeof addDateRange
    getConfigKey: typeof getConfigKey
    selectDictLabel: typeof selectDictLabel
    selectDictLabels: typeof selectDictLabels
    $tab: typeof tab
    $auth: typeof auth
    $cache: typeof cache
    $modal: typeof modal
    $download: typeof downloadPlugin
  }
}
