import useTagsViewStore from '@/store/modules/tagsView'
import router from '@/router'
import type { TagView } from '@/types/tags'
import type { AppRouteMeta } from '@/types/router'
import type { RouteLocationRaw } from 'vue-router'

export default {
  // 刷新当前tab页签
  refreshPage(obj?: TagView) {
    const { path, query, matched, meta } = router.currentRoute.value
    if (obj === undefined) {
      matched.forEach((m) => {
        const component = m.components?.default
        if (component && component.name) {
          if (!['Layout', 'ParentView'].includes(component.name)) {
            obj = {
              name: m.components.default.name,
              path: path,
              query: query,
              meta: meta as AppRouteMeta
            }
          }
        }
      })
    }
    return useTagsViewStore().delCachedView(obj as TagView).then(() => {
      const { path, query } = obj as TagView
      router.replace({
        path: '/redirect' + path,
        query: query
      })
    })
  },
  // 关闭当前tab页签，打开新页签
  closeOpenPage(obj?: RouteLocationRaw) {
    useTagsViewStore().delView(router.currentRoute.value)
    if (obj !== undefined) {
      return router.push(obj)
    }
  },
  // 关闭指定tab页签
  closePage(obj?: TagView) {
    if (obj === undefined) {
      return useTagsViewStore().delView(router.currentRoute.value).then(({ visitedViews }) => {
        const latestView = visitedViews.slice(-1)[0]
        if (latestView) {
          return router.push(latestView.fullPath)
        }
        return router.push('/')
      })
    }
    return useTagsViewStore().delView(obj)
  },
  // 关闭所有tab页签
  closeAllPage() {
    return useTagsViewStore().delAllViews()
  },
  // 关闭左侧tab页签
  closeLeftPage(obj?: TagView) {
    return useTagsViewStore().delLeftTags(obj || (router.currentRoute.value as TagView))
  },
  // 关闭右侧tab页签
  closeRightPage(obj?: TagView) {
    return useTagsViewStore().delRightTags(obj || (router.currentRoute.value as TagView))
  },
  // 关闭其他tab页签
  closeOtherPage(obj?: TagView) {
    return useTagsViewStore().delOthersViews(obj || (router.currentRoute.value as TagView))
  },
  // 打开tab页签
  openPage(title: string, url: string, params?: Record<string, string | number>) {
    const obj: TagView = { path: url, meta: { title: title } }
    useTagsViewStore().addView(obj)
    return router.push({ path: url, query: params })
  },
  // 修改tab页签
  updatePage(obj: TagView) {
    return useTagsViewStore().updateVisitedView(obj)
  }
}
