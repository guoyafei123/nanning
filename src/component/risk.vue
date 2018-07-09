<template>
  <div class="row">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left container-padding5 z-index-20">
      <div class="overlay"></div>
      <risk_left-vue></risk_left-vue>
    </section>
    <!-- #左边 End-->
    <!-- #右边 -->
    <!-- <section id="right" class="position-fixed-right container-padding5 z-index-20">
      <div class="overlay"></div>
      <risk_right-vue></risk_right-vue>
    </section> -->

    <!-- #右边 End-->
  </div>
</template>

<script>
  import HeaderVue from './header.vue';
  import Risk_leftVue from './risk_left.vue';
  import Risk_rightVue from './risk_right.vue';
  export default {
    components:{
      'header-vue':HeaderVue,
      'risk_left-vue':Risk_leftVue,
      'risk_right-vue':Risk_rightVue
    }
  }
</script>

<style scoped>

</style>
