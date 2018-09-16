import Vue from 'vue'
import Router from 'vue-router'
import UE from '@/components/admin/UE/UE'
import HomePage from '../components/home/HomePage/HomePage'
import Article from '../components/home/Article/Article'
import Json from '@/components/admin/UE/Json'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active', // 配置被点击路由后添加的class名称
  routes: [
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/ueditor',
      name: 'UE',
      component: UE
    },
    {
      path: '/json/:state/:url',
      name: 'Json',
      component: Json
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article // 显示文章内容
    },
    {
      path: '/',
      redirect: '/homePage'
    }
  ]
})
