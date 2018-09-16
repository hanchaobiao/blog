/*
* 包含多个有action触发直接更新状态
* */
import {GET_ARTICLES} from './mutations_types'

export default {
  [GET_ARTICLES] (state, {articles, articleCount}) {
    state.articles = articles
    state.articleCount = articleCount
  }
}
