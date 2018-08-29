<template>
  <div class="row" id="Risk_management">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left z-index-20">
      <div class="overlay"></div>
      <left-vue></left-vue>
    </section>
    <!-- #中间-->
    <section id="manage-center" class="position-fixed-left z-index-20">      
      <main-vue></main-vue>
    </section> 
    <!-- 收起导航 -->
    <div class="fix" @click="hide_left"><i class="el-icon-arrow-right"></i></div>
  </div>
</template>

<script>
  import HeaderVue from '../../components/publick/header.vue';
  import leftVue from '../left.vue';
  import MainVue from '../main.vue';
  export default {  
    data(){
      return{

      }
    },
    methods:{
      hide_left(){
        $('#manage-center').removeClass('open-center');
        $("#left").addClass('open-left'); 
        $('.show_left').animate({'left':'toggle'},200,function(){
          $('.fix').hide();
        });
      }
    },
    components:{
      'header-vue':HeaderVue,
      'left-vue':leftVue,
      'main-vue':MainVue
    },
    watch:{

    }
  }
</script>

<style scoped>
</style>
