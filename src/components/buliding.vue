<template>
  <div class="row">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left container-padding5 z-index-20">
      <div class="overlay"></div>
      <bulid_left-vue></bulid_left-vue>
    </section>
    <!-- #左边 End-->
    <!-- #右边 -->
    <section id="right" class="position-fixed-right container-padding5 z-index-20">
      <div class="overlay"></div>
      <bulid_right-vue></bulid_right-vue>
    </section>

    <!-- #右边 End-->
  </div>
</template>

<script>
  import HeaderVue from './header.vue';
  import Bulid_leftVue from './bulid_left.vue';
  import Bulid_rightVue from './bulid_right.vue';
  export default {
    components:{
      'header-vue':HeaderVue,
      'bulid_left-vue':Bulid_leftVue,
      'bulid_right-vue':Bulid_rightVue
    }
  }
</script>

<style scoped>

</style>
