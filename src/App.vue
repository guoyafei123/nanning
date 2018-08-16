<template>
  <div id="app">
    <template v-if="mapAndFooter">
      <header-vue></header-vue>
    </template>
    
    <!-- #地图主容器 -->
    <template v-if="mapAndFooter">
      <map-vue ></map-vue>
    </template>
    
    <div class="container-fluid">
      <router-view></router-view>
    </div>
    <div v-if="mapAndFooter" class="row public-footer">
      <footer-vue></footer-vue>
    </div>
  <!-- 警报弹窗 -->
<!--   <el-dialog title="" :visible.sync="dialogVisible" top="120px" style="background-color: rgba(0,0,0,1);">
      <a class="go-back" @click="dialogVisible = false" data-toggle="tooltip" title="关闭"><i class="el-icon-circle-close-outline size-24"></i></a>
      <earlyinfo-vue></earlyinfo-vue>
    </el-dialog> -->
  </div>    
</template>

<script>
  import MapVue from './components/publick/map';
  import FooterVue from './components/publick/footer';
  import HeaderVue from './components/publick/header';
  import{mapState} from "vuex";
  // import EarlyinfoVue from './components/earlyinfo';
  // import { realconsole } from './assets/js/management.js'
  export default {
    name: 'app',
    data () {
      return {
        mapAndFooter:true
      }
    },
    components: {
      'map-vue': MapVue,
      'footer-vue': FooterVue,
      'header-vue': HeaderVue,
      // 'earlyinfo-vue':EarlyinfoVue
    },
    computed:mapState([
      'route_path',
    ]),
    watch:{
      // 所有巡检单位
      route_path(){
        console.log(this.route_path);
        if(this.route_path=='/login' || this.route_path=='/register'){
          this.mapAndFooter=false;
        }else{
          this.mapAndFooter=true;
        }
      },
    },

    mounted() {     
      console.log('加载')
      // realconsole();
      $("[data-toggle='tooltip']").tooltip({html : true });
      // alert(this.$route.path);
      // this.$router.path
      // 
    },
    methods: {
      
    },
  }
</script>

<style lang="scss">

</style>
