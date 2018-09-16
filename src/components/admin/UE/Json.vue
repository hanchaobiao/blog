<template>
    <div>
      {{json}}
    </div>
</template>

<script>
export default {
  data () {
    return {
      json: ''
    }
  },
  mounted () {
    var state = this.$route.params.state
    var url = this.$route.params.url
    this.json = {state: state, url: url}
    console.log(this.json, '--------')
  }
}
</script>

<style>

</style>
