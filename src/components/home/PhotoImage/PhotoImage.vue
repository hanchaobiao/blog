<template>
  <div class="photo-image-wrapper">
    <ul class="photo-image-list">
      <li v-for="(photo, index) in photoImageList" :key="photo" :index="index">
          <el-card :body-style="{ padding: '0px'}" @click.native ="catImage(index)" v-loading="loading">
            <img :src="photo.image" class="image">
            <div style="padding: 14px;">
              <!--<span class="photo-name">{{photo.name}}</span>-->
              <div class="bottom clearfix">
                <time class="time">上传日期：{{ photo.add_time.substring(0, 10) }}</time>
              </div>
            </div>
          </el-card>
      </li>
    </ul>
    <div class="block pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[12, 24, 48, 64]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count">
      </el-pagination>
    </div>
    <el-dialog
      :visible.sync="centerDialogVisible"
      custom-class="image-dialog"
      top="50px"
      center>
      <el-carousel :interval="5000" :autoplay="false" :initial-index="init_index" arrow="always"
                   indicator-position="none" ref="carousel">
        <el-carousel-item v-for="item in photoImageList" :key="item">
          <div class="table-cell">
            <img :src="item.image"/>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </div>
</template>
<script>
import {getPhotoImageList} from '../../../api/api'
export default {
  data () {
    return {
      currentDate: new Date(),
      photoImageList: [], // 相册列表
      page: 1, // 当前页
      page_size: 12, // 每页显示数量
      count: 0, // 总条数,
      photo_id: '',
      centerDialogVisible: false, // 弹出层
      init_index: 0, // 初始播放图片下标
      loading: false
    }
  },
  mounted () {
    this.getPhotoImageList()
  },
  methods: {
    getPhotoImageList () {
      this.photo_id = this.$route.params.id
      let para = {page: this.page, page_size: this.page_size, photo_id: this.photo_id}
      getPhotoImageList(para).then(res => {
        this.count = res.data.count
        this.photoImageList = res.data.results
        this.loading = false
      }).catch(res => {
        this.$message({
          message: '加载相册列表出错',
          type: 'error'
        })
      })
    },
    handleSizeChange (val) {
      this.page_size = val
      this.loading = true
      this.getPhotoImageList()
    },
    handleCurrentChange (val) {
      this.page = val
      this.loading = true
      this.getPhotoImageList()
    },
    catImage (index) {
      // 切换到指定位置, 先show 再获取ref
      this.centerDialogVisible = true
      if (this.init_index === 0 && index !== this.init_index) {
        this.init_index = index
      }
      this.$nextTick(function () {
        this.$refs.carousel.setActiveItem(index)
      })
    }
    // setActiveItem (index) {
    //
    // }
  }
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
    width: 220px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .photo-image-wrapper .photo-info {
    width: 1000px;
    padding: 5px 5px;
    background: rgba(255,255,255,0.5);
  }
  .photo-image-wrapper .photo-image-list {
    width: 1000px;
  }
  .photo-image-wrapper .photo-image-list li{
    list-style: none;
    display: inline-block;
    vertical-align: top;
    width: 220px;
    margin: 10px 10px;
  }
  .photo-image-list {
    width: 1000px;
  }
  .photo-image-wrapper .photo-image-list li img {
    width: 220px;
    height: 160px;
  }
  .photo-name {
    display: inline-block;
    width: 160px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-break:keep-all;
  }
  .pagination {
    width: 500px;
    margin: 20px auto 50px;
  }
  .image-dialog {
    width: 1000px;
    height: 650px;
    padding: 0;
    margin: 0 auto;
  }
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog--center .el-dialog__body {
    padding: 0;
  }
  .el-carousel {
    width: 1000px;
    height: 650px;
  }
  .el-carousel__container {
    width: 1000px;
    height: 650px;
  }
  .el-carousel__item div {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0.75;
    width: 1000px;
    height: 650px;
    text-align:center;
    background: rgba(0,0,0,0.2);
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .table-cell {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
  .el-carousel__item img {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    max-width: 1000px;
    max-height: 650px;
    z-index: -1;
  }

</style>
