<template>
  <div class="row">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left container-padding5 z-index-20">
      <div class="overlay"></div>
      <ins_left-vue></ins_left-vue>
    </section>
    <!-- #左边 End-->
    <!-- #右边 -->
    <section id="right" class="position-fixed-right container-padding5 z-index-20">
      <div class="overlay"></div>
      <ins_right-vue></ins_right-vue>
    </section>

    <!-- #右边 End-->
  </div>
</template>

<script>
  import HeaderVue from './header.vue';
  import Ins_leftVue from './ins_left.vue';
  import Ins_rightVue from './ins_right.vue';
  export default {
    components:{
      'header-vue':HeaderVue,
      'ins_left-vue':Ins_leftVue,
      'ins_right-vue':Ins_rightVue
    }
  }
</script>

<style scoped>
  .row{
    position: relative;
    z-index: 22;
  }
</style>
