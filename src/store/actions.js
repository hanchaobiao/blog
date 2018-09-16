/*
* 包含多个接收组件通知出发mutation调用间接状态的方法的对象
* */
import {GET_ARTICLES} from './mutations_types'
import {getArticles} from '../api/api'
export default {
  async getArticlesList ({commit, state}, parmas) {
    // 提交对mutations的请求
    console.log(parmas)
    getArticles(parmas).then((response) => {
      const articles = response.data.results
      const articleCount = response.data.count
      commit(GET_ARTICLES, {articles, articleCount})
    }).catch(function () {
      this.$message({
        type: 'error',
        message: '请求发送异常'
      })
    })
  }
}
