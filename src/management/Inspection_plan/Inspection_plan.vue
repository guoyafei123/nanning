<template>
  <div class="row" id="Inspection_plan">
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
    <!-- #右边 End-->
    <!-- 收起导航 -->
    <div class="fix" @click="hide_left"><i class="el-icon-arrow-right"></i></div>
  </div>
</template>

<script>
  import Set_leftVue from '../left.vue';
  import MainVue from '../main.vue';
  import Set_rightVue from './right.vue';
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
