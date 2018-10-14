<template>
  <div class="content-wrapper clearfix">
    <div class="left-wrapper ">
      <div class="photo-album">
        <h2>我的相册</h2>
        <div class="photo-list clearfix">
          <ul class="image-list">
            <li v-for="(photo, index) in photoList" :key="photo" :index="index">
              <router-link @click.native="selectNav(1)"  :to="'/photoImage/'+photo.id">
                <img :src="photo.photo_image[0].image">
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="search">
        <input type="text" v-model="searchWord" placeholder="请输入内容"/>
        <button @click="searchArticle">搜索</button>
      </div>
    </div>
    <div class="right-wrapper">
      <ul class="article-lists">
        <li class="clearfix" v-for="(item, index) in articles" :key="index">
          <div class="article">
            <div class="content">
              <router-link :to="'/article/'+index" class="title">{{item.title}}</router-link>
              <div class="first-content">
                {{item.text}}
              </div>
            </div>
          </div>
          <!--<div class="picture">-->
            <!--<img v-if="item.image_url == ''" src="./images/mmm.jpg"/>-->
            <!--<img v-if="item.image_url != ''"/>-->
          <!--</div>-->
          <div class="add_time">发布时间：{{item.add_time}}</div>
        </li>
      </ul>
      <div style="clear: both"></div>
      <div class="page">
        <Pagination :count="articleCount" @changePageSize="changePageSize" @changePage="changePage"></Pagination>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Pagination from '../Pagination/Pagination'
import {getPhotoList} from '../../../api/api'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      page: 1,
      page_size: 10,
      searchWord: '',
      pageType: 'init', // 查寻类型，初始化查询与搜索查询
      count: 0, // 返回条数
      photoList: [] // 相册列表
    }
  },
  computed: {
    ...mapState(['articles', 'articleCount'])
  },
  mounted () {
    this.getPhotoList()
  },
  components: {Pagination},
  methods: {
    getArticle () {
      if (this.pageType === 'init') {
        this.$store.dispatch('getArticlesList', {page: this.page, page_size: this.page_size})
      } else {
        this.$store.dispatch('getArticlesList', {page: this.page, page_size: this.page_size, search: this.searchWord})
      }
    },
    searchArticle () {
      this.pageType = 'search'
      this.getArticle()
    },
    changePage (val) {
      // 改变当前页
      this.page = val
      this.getArticle()
    },
    changePageSize (val) {
      // 改变每页条数
      this.page_size = val
      this.getArticle()
    },
    getPhotoList () {
      let para = {page: 1, page_size: 6}
      getPhotoList(para).then(res => {
        this.count = res.data.count
        this.photoList = res.data.results
        console.log(this.photoList)
      }).catch(res => {
        // this.$message({
        //   message: '加载相册列表出错',
        //   type: 'error'
        // })
      })
    },
    selectNav (index) {
      this.$store.dispatch('setSelectNav', index)
    }
  }
}
</script>

<style>
  .content-wrapper {
    width: 100%;
    margin-top: 10px;
  }
  .content-wrapper .left-wrapper{
    width: 280px;
    float: left;
  }
  .content-wrapper .left-wrapper .photo-album h2{
    color: #333;
    font-size: 14px;
    line-height: 30px;
    padding-left: 20px;
    background: #fff;
    font-weight: 700;
  }
  .content-wrapper .left-wrapper .photo-list {
    padding: 10px;
    background: rgba(255,255,255,0.5);
    font-weight: 700;
    margin-left: auto;
  }
  /*解决高度坍塌*/
  .clearfix:after{
    /*在最后添加内容*/
    content: "";
    /*将其转换为块级元素*/
    display: block;
    /*清除浮动*/
    clear: both;
  }
  .content-wrapper .left-wrapper .search{
    margin-top: 20px;
  }
  .content-wrapper .left-wrapper .search input{
    border: 1px solid #c93282;
    line-height: 36px;
    height: 36px;
    width: 72%;
    padding-left: 10px;
    outline: none;
  }
  .content-wrapper .left-wrapper .search button{
    line-height: 36px;
    height: 36px;
    width: 25%;
    text-align: center;
    border: 0;
    background-color: #c93282;

  }
  .content-wrapper .left-wrapper .photo-list ul{
    margin-left: 4px;
  }
  .content-wrapper .left-wrapper .photo-list li{
    width: 80px;
    height: 80px;
    list-style: none;
    float: left;
    padding: 2px;
    overflow: hidden;
  }
  img {
    border: 0;
    display: block;
  }
  .content-wrapper .left-wrapper .photo-list img{
    width: 80px;
    height: 80px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
  }
  .content-wrapper .left-wrapper .photo-list img:hover{
    transform: scale(1.05);
  }
  .content-wrapper .right-wrapper {
    width: 680px;
    float: right;
  }
  .content-wrapper .right-wrapper .article-lists {
    width: 100%;
  }
  .content-wrapper .right-wrapper .article-lists li{
    display: inline-block;
    width: 100%;
    margin-bottom: 10px;
    background: rgba(255,255,255,0.6);
    padding: 10px;
    overflow: hidden;
  }
  .content-wrapper .right-wrapper .article-lists .article{
    display: inline-block;
    width: 100%;
  }
  .content-wrapper .right-wrapper .article-lists .article .content .title{
    display: inline-block;
    font-size: 16px;
    line-height: 25px;
    font-weight: 700;
    padding: 10px 0px;
    color: black;
  }
  .content-wrapper .right-wrapper .article-lists .article .content a:hover{
    text-decoration:underline;
    color: #C93282;
  }
  .content-wrapper .right-wrapper .article-lists .article .content .first-content{
    color: #797b7c;
    line-height: 22px;
    height: 90px;
    text-align: justify;
    display: inline-block;
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    overflow:hidden;
  }
  .content-wrapper .right-wrapper .article-lists .picture{
    display: inline-block;
    width: 150px;
    height: 100px;
    position: relative;
  }
  .content-wrapper .right-wrapper .article-lists .add_time{
    font-size: 14px;
    color: #3b4249;
  }
  .content-wrapper .right-wrapper .article-lists img{
    width: 100%;
    height: 100%;
    vertical-align: top;
    margin-left: 20px;
  }
</style>
