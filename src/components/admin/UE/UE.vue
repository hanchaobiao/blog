<template>
  <div class="ue-wrapper">
    <div class="title">
      <el-input placeholder="请输入标题" v-model="title">
        <template slot="prepend">标题</template>
      </el-input>
    </div>
      <!--这个地方的大小是可以自己控制的-->
      <div id="editor"></div>
    <div class="button-btn">
    <el-row>
      <el-button type="primary" @click="createArticle">提交文章</el-button>
      <el-button type="warning">保存草稿箱</el-button>
    </el-row>
    </div>
  </div>
</template>

<script>
import {createArticle} from '../../../api/api'
export default {
  name: 'UE',
  data () {
    return {
      editor: null,
      title: ''
    }
  },
  props: {
    defaultMsg: {
      type: String
    },
    config: {
      type: Object
    }
  },
  mounted () {
    const _this = this
    this.editor = window.UE.getEditor('editor') // 初始化UE
    this.editor.addListener('ready', function () {
      _this.editor.setContent(_this.defaultMsg) // 确保UE加载完成后，放入内容。
    })
  },
  methods: {
    createArticle () {
      // 新增文章
      this.$confirm('是否提交该文章', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        createArticle({
          title: this.title,
          content: this.editor.getContent(),
          text: this.editor.getPlainTxt()
        }).then((response) => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          })
        }).catch(function (error) {
          this.$message({
            type: 'error',
            message: error
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  destroyed () {
    this.editor.destroy()
  }
}
</script>

<style>
  .ue-wrapper {
    width: 1000px;
  }
  #editor{
    width: 1000px;
    height: 300px;
  }
  .ue-wrapper .title{
    margin: 20px 0;
  }
  .ue-wrapper .button-btn{
    margin: 100px 0 50px  0;
  }
</style>
