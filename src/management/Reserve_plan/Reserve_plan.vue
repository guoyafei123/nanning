<template>
  <div class="row" id="Reserve_plan">
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
    <!-- #右边 -->
    <section id="right" class="position-fixed-right z-index-20">
      <div class="overlay"></div>
      <right-vue></right-vue>
    </section>
    <!-- #右边 End-->
    <!-- 收起导航 -->
    <div class="fix" @click="hide_left"><i class="el-icon-arrow-right"></i></div>
    <pdf-vue></pdf-vue>
  </div>
</template>

<script>
  import leftVue from '../left.vue';
  import MainVue from '../main.vue';
  import rightVue from './right.vue';
  import pdfVue from '../../components/publick/pdf.vue';
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
      'left-vue':leftVue,
      'right-vue':rightVue,
      'main-vue':MainVue,
      'pdf-vue':pdfVue
    },
    watch:{

    }
  }
</script>

<style scoped>
</style>
