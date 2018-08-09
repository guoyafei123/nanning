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
    <section id="right" class="position-fixed-right container-padding5 z-index-20">
      <div class="overlay"></div>
      <set_right-vue></set_right-vue>
    </section>

    <!-- #右边 End-->
  </div>
</template>

<script>
  import HeaderVue from '../../components/header.vue';
  import leftVue from '../left.vue';
  import MainVue from './main.vue';
  import rightVue from './right.vue';
  import '../../assets/css/setting.scss';
  export default {
    components:{
      'header-vue':HeaderVue,
      'set_left-vue':leftVue,
      'set_right-vue':rightVue,
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
  @media (min-width: 768px) and (max-width:1600px){
    #left{
      width:295px;
    }
  }
  @media (min-width: 1600px){
    #left{
      width:17.58%;
    }
    #right{
      width:24%;
    }
  }
</style>
