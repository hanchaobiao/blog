<template>
    <div>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 15, 20, 25]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="count">
        </el-pagination>
      </div>
    </div>
</template>
<script>
export default {
  props: {// 带有默认值的数字
    count: {
      type: Number,
      default: 100
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(val)
      this.$emit('changePageSize', val)
    },
    handleCurrentChange (val) {
      this.$emit('changePage', val)
      console.log(`当前页: ${val}`)
    }
  },
  data () {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  }
}
</script>

<style>
.block {
  margin: 30px;
}
</style>
