<template>
  <div id="app">
    <div class="main">
      <v-header></v-header>
      <div class="nav-wapper">
        <div class="tab">
          <div class="tab-item" >
            <router-link to="/homePage" @click.native="setSelectNav(0)" :class="{ active: selectNav === 0 }">首页</router-link>
          </div>
          <div class="tab-item">
            <router-link to="/photo" @click.native="setSelectNav(1)" :class="{ active: selectNav === 1 }">相册</router-link>
          </div>
          <!--<div class="tab-item">-->
            <!--<router-link to="/ueditor">留言</router-link>-->
          <!--</div>-->
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/home/Header/Header.vue'
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['selectNav'])
  },
  components: {'v-header': Header},
  mounted () {
    // 初始化请求数据
    this.$store.dispatch('getArticlesList', {page: this.page, page_size: this.page_size})
    this.$store.dispatch('setSelectNav', 0)
  },
  methods: {
    setSelectNav (index) {
      this.$store.dispatch('setSelectNav', index)
    }
  }
}
</script>

<style>
  #app {
    width: 100%;
    background: url("../static/images/backgound.jpg") no-repeat center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-size: cover;
  }
  .main {
    width: 1000px;
    margin: 0 auto;
    /*background-color: red;*/
  }
  .nav-wapper{
    width: 100%;
    height: 40px;
    margin-top: 30px;
  }

  .nav-wapper .tab-item {
    float: left;
    padding: 5px;
    width: 100px;
    height: 30px;
    vertical-align: center;
    text-align: center;
    text-shadow:1px 1px 0px white;
  }
  .nav-wapper .tab-item a{
    color: #C93282;
    width: 100%;
    height: 30px;
    line-height: 30px;
  }
  .active {
    color: white;
    font-size: 20px;
    font-weight: 500;
    display: inline-block;
    background-color: #C93282;
    border-radius: 15px 0 15px 0;
  }
</style>
