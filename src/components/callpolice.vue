<template>
    <div class="row">
      <!-- #头部 -->
      <header-vue></header-vue>
      <!-- #头部 End-->
      <!-- #左边 -->
      <section id="left" class="position-fixed-left container-padding5 z-index-20">
        <div class="overlay"></div>
        <call_left-vue></call_left-vue>
      </section>
      <!-- #左边 End-->
      <!-- #右边 -->
      <section id="right" class="position-fixed-right container-padding5 z-index-20">
        <div class="overlay"></div>
        <call_right-vue></call_right-vue>
      </section>

      <!-- #右边 End-->
    </div>
</template>

<script>
    import HeaderVue from './header.vue';
    import Call_leftVue from './call_left.vue';
    import Call_rightVue from './call_right.vue';
    export default {
      components:{
        'header-vue':HeaderVue,
        'call_left-vue':Call_leftVue,
        'call_right-vue':Call_rightVue
      }
    }
</script>

<style scoped>
  .row{
    position: relative;
    z-index: 22;
  }
</style>
