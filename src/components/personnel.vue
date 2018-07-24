<template>
  <div class="row">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left container-padding5 z-index-20">
      <div class="overlay"></div>
      <per_left-vue></per_left-vue>
    </section>
    <!-- #左边 End-->
    <!-- #右边 -->
    <section id="right" class="position-fixed-right container-padding5 z-index-20">
      <div class="overlay"></div>
      <per_right-vue></per_right-vue>
    </section>

    <!-- #右边 End-->
  </div>
</template>

<script>
  import HeaderVue from './header.vue';
  import Per_leftVue from './per_left.vue';
  import Per_rightVue from './per_right.vue';
  export default {
    components:{
      'header-vue':HeaderVue,
      'per_left-vue':Per_leftVue,
      'per_right-vue':Per_rightVue
    },
    
  }
</script>

<style scoped>
  .row{
    position: relative;
    z-index: 22;
  }
</style>
