<template>
  <div class="row">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left z-index-20">
      <div class="overlay"></div>
      <set_left-vue></set_left-vue>
    </section>
    <!-- #中间-->
    <section id="manage-center" class="position-fixed-left z-index-20">
      <main-vue></main-vue>
    </section>    
    <!-- #右边 -->
    <section id="right" class="position-fixed-right z-index-20">
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
  import Set_rightVue from './right.vue';
  import '../../assets/css/setting.scss';
  export default {
    data(){
      return{

      }
    },
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
    },
    watch:{

    }
  }
</script>

<style scoped>
</style>
