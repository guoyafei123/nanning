<template>
  <div id="app">
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
  </div>
</template>

<script>
  import MapVue from './components/map';
  import FooterVue from './components/footer';
  import{mapState} from "vuex"
  export default {
    name: 'app',
    data () {
      return {
        mapAndFooter:true
      }
    },
    components: {
      'map-vue': MapVue,
      'footer-vue': FooterVue
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
      $("[data-toggle='tooltip']").tooltip();
      // alert(this.$route.path);
      // this.$router.path
      // 
    }
  }
</script>

<style lang="scss">

</style>
