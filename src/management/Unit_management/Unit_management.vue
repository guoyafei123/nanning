<template>
  <div class="row">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left container-padding5 z-index-20"  style="width:295px;padding:0;">
      <div class="overlay"></div>
      <set_left-vue></set_left-vue>
    </section>
    <!-- #左边 End-->
    <main-vue></main-vue>
    <!-- #右边 -->
    <section id="right" class="position-fixed-right container-padding5 z-index-20" style="">
      <div class="overlay"></div>
      <set_right-vue></set_right-vue>
    </section>

    <!-- #右边 End-->
  </div>
</template>

<script>
  import HeaderVue from '../../components/header.vue';
  import Set_leftVue from './Unit_left.vue';
  import MainVue from './Unit_main.vue';
  import Set_rightVue from './Unit_right.vue';
  import '../../assets/css/setting.scss';
  export default {
    components:{
      'header-vue':HeaderVue,
      'set_left-vue':Set_leftVue,
      'set_right-vue':Set_rightVue,
      'main-vue':MainVue
    }
  }
</script>

<style scoped>
  .row{
    position: relative;
    z-index: 22;
  }
  .position-fixed-right{
    top:0;
  }
  #header{
    height: 110px;
    /*background:rgba(0,0,0,1)*/
  }
</style>
