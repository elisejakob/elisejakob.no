<template>
  <div id="app">
    <Header />
    <transition name="fade"><router-view/></transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
}
</script>

<style lang="scss">
@import 'css/main.scss';
</style>
