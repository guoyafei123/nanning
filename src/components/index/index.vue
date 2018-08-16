<template>
  <div class="row">
    <!-- #头部 -->
    <!-- <header-vue></header-vue> -->
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
  import HeaderVue from '../publick/header.vue';
  import index_leftVue from './index_left.vue';
  import index_rightVue from './index_right.vue';
  // import min_mapVue from './min_map.vue';
  export default {
    components:{
      'header-vue':HeaderVue,
      'index_left-vue':index_leftVue,
      'index_right-vue':index_rightVue,
      // 'min_map-vue':min_mapVue
    },
    mounted(){
      this.$store.commit('route_path',this.$route.path);

      var strcookie = document.cookie;//获取cookie字符串
      var arrcookie = strcookie.split("; ");//分割
      //遍历匹配
      // for ( var i = 0; i < arrcookie.length; i++) {
      //   var arr = arrcookie[i].split("=");
      //   if (arr[0] == ticket){
      //     alert('有');
      //   }else{
      //     alert('没有');
      //   }
      // }
      console.log(strcookie);
      // UM_distinctid=16492fb08aa103-077faa85b2954b-5b193413-1aeaa0-16492fb08ab146; Hm_lvt_af3bcae330acc9d3f90536b76c35fec9=1531474283,1531884236,1532920252,1533121090; u=%E5%BE%B7%E7%8E%9B%E8%A5%BF%E4%BA%9A

    }
    
  }

</script>