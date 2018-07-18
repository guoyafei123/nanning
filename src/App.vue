<template>
  <div id="app">
    <!-- #地图主容器 -->
    <map-vue></map-vue>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
    <div class="row">
      <footer-vue></footer-vue>
    </div>
  </div>
</template>

<script>
  import MapVue from './components/map';
  import FooterVue from './components/footer';
  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      'map-vue': MapVue,
      'footer-vue': FooterVue
    }
  }
</script>

<style lang="scss">

</style>
