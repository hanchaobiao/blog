<template>
    <div class="header">
      <div class="image">
        <span><img src="http://127.0.0.1:8000/media/article/20180916/20180916103632900.jpg"/></span>
        <span class="title">baby的小窝</span>
      </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.header {
  width: 100%;
  /* 防止子元素maigin击穿，影响父元素 */
  overflow:hidden;
}
.header .image {
  margin-top: 20px;
}
.header img {
  width: 90px;
  height: 90px;
  display: inline-block;
  border-radius: 10px;
  border: #00a2d4 2px solid;
  filter:alpha(opacity=60);
  /* CSS3 standard */
  opacity:0.6;
}
.header .image .title {
  margin-left: 20px;
  display: inline-block;
  vertical-align: top;
  height: 90px;
  line-height: 90px;
  font-weight: 700;
  font-size: 24px;
  color: #1f7994;
}

</style>
