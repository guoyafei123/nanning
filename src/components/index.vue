<template>
  <div class="row">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left z-index-20">
      <div class="overlay"></div>
      <index_left-vue></index_left-vue>
    </section>
    <!-- #左边 End-->
    <!-- <section id="min-map" class="position-fixed-right z-index-999">
      <div class="overlay"></div>
      <min_map-vue></min_map-vue>
    </section> -->
    <!-- #右边 -->
    <section id="right" class="position-fixed-right z-index-20">
      <div class="overlay"></div>
      <index_right-vue></index_right-vue>
    </section>
    <!-- #右边 End-->
  </div>
</template>

<script>
  import HeaderVue from './header.vue';
  import index_leftVue from './index_left.vue';
  import index_rightVue from './index_right.vue';
  // import min_mapVue from './min_map.vue';
  export default {
    data(){
      return{
        
      }
    },
    components:{
      'header-vue':HeaderVue,
      'index_left-vue':index_leftVue,
      'index_right-vue':index_rightVue,
      // 'min_map-vue':min_mapVue
    },
    mounted(){
      this.$store.commit('route_path',this.$route.path);
    }
    
  }

</script>