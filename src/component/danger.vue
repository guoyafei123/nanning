<template>
  <div class="row">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left container-padding5 z-index-20">
      <div class="overlay"></div>
      <dan_left-vue></dan_left-vue>
    </section>
    <!-- #左边 End-->
    <!-- #右边 -->
    <section id="right" class="position-fixed-right container-padding5 z-index-20">
      <div class="overlay"></div>
      <dan_right-vue></dan_right-vue>
    </section>

    <!-- #右边 End-->
  </div>
</template>

<script>
  import HeaderVue from './header.vue';
  import Dan_leftVue from './dan_left.vue';
  import Dan_rightVue from './dan_right.vue';
  export default {
    components:{
      'header-vue':HeaderVue,
      'dan_left-vue':Dan_leftVue,
      'dan_right-vue':Dan_rightVue
    }
  }
</script>

<style scoped>

</style>
