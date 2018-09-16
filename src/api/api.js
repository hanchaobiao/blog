import axios from 'axios'

let host = 'http://127.0.0.1:8000'

// 添加文章
export const createArticle = params => { return axios.post(`${host}/article/`, params) }

// 查看文章列表
export const getArticles = params => { return axios.get(`${host}/article/`, { params: params }) }
