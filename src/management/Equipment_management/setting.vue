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
    <div class="fix" @click="show" style="display:none;width:20px;height:60px;position: fixed;top:35%;left:0;background:#333;text-align:center;line-height: 60px;">
        <span style="font-size: 23px;
      display: block;
      font-weight: normal;
      transform: scale(1, 2.5);color: #fff;">&gt;</span>
    </div>
    <!-- #右边 End-->
  </div>
</template>

<script>
  import HeaderVue from '../../components/publick/header.vue';
  import Set_leftVue from '../left.vue';
  import MainVue from './main.vue';
  import Set_rightVue from './set_right.vue';
  import '../../assets/css/setting.scss';
  import '../../assets/css/upd-element.css';
  export default {
    methods:{
      show(){
        $('main').css('margin-left','17.58%');
        $("#left").css('width','17.58%');
        $('.show_left').slideToggle(1000,function(){
          $('.fix').hide();
        });
      }
    },
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
  @media (min-width: 768px) and (max-width:1600px){
    #left{
      width:295px;
    }
     #right{
      width:400px;
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
