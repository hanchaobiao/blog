<template>
    <div class="article" v-html="articles[this.$route.params.id].content">
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['articles'])
    // defaultData () {
    //   map
    //   return {
    //     content: this.$store.state.articles[this.$route.params.id].content,
    //   }
    // }
  }
}
</script>

<style>
.article {
  width: 1000px;
  margin-top: 20px;
}
</style>
