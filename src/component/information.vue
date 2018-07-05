<template>
  <div class="row">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left container-padding5 z-index-20">
      <div class="overlay"></div>
      <infor_left-vue></infor_left-vue>
    </section>
    <!-- #左边 End-->
    <!-- #右边 -->
    <section id="right" class="position-fixed-right container-padding5 z-index-20">
      <div class="overlay"></div>
      <infor_right-vue></infor_right-vue>
    </section>

    <!-- #右边 End-->
  </div>
</template>

<script>
  import HeaderVue from './header.vue';
  import Infor_leftVue from './infor_left.vue';
  import Infor_rightVue from './infor_right.vue';
  export default {
    components:{
      'header-vue':HeaderVue,
      'infor_left-vue':Infor_leftVue,
      'infor_right-vue':Infor_rightVue
    }
  }
</script>

<style scoped>
  .row{
    position: relative;
    z-index: 22;
  }
</style>
