/*
* 包含多个有action触发直接更新状态
* */
import {GET_ARTICLES, SET_SELECT_NAV} from './mutations_types'

export default {
  [GET_ARTICLES] (state, {articles, articleCount}) {
    state.articles = articles
    state.articleCount = articleCount
  },
  [SET_SELECT_NAV] (state, index) {
    state.selectNav = index
  }
}
