<template>
  <div id="app">
    <router-link to="/">Hello</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '这是一个vue'
    }
  }
}
</script>
<style scoped>
</style>