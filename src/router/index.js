import Vue from 'vue'
import Router from 'vue-router'
// import UE from '@/components/admin/UE/UE'
import HomePage from '../components/home/HomePage/HomePage'
import Article from '../components/home/Article/Article'
import Photo from '../components/home/Photo/Photo'
import PhotoImage from '../components/home/PhotoImage/PhotoImage'

Vue.use(Router)

export default new Router({
  // linkActiveClass: 'active', // 配置被点击路由后添加的class名称
  base: '/home/', // 路径前缀，在所有路由前加/home
  mode: 'history',
  routes: [
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    },
    // {
    //   path: '/ueditor',
    //   name: 'UE',
    //   component: UE
    // },
    {
      path: '/photo/',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/photoImage/:id',
      name: 'PhotoImage',
      component: PhotoImage
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article // 显示文章内容
    },
    {
      path: '/home',
      redirect: '/homePage'
    }
  ]
})
