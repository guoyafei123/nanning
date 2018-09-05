<template>
  <div id="list-maps">
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="icon iconfont icon-jianzhuguanli-mian-"></i>
          <h2>建筑管理</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Building_management/list"><span class="btn_add" @click="btn_add"><i class="fa fa-plus"></i>新增</span></router-link>
        </div>
      </div>
      <div class="main_all_content">
        <!-- 筛选 -->
        <div class="main_content_top">
          <el-form class="float-left">
            <el-select v-model="buildUnit" placeholder="选择单位" class="select build">
              <el-option label="全部单位" value=""></el-option>
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form>
          <div class="main_nav_two float-right">
            <router-link to="/Building_management/all"><span><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
            <router-link to="/Building_management/maps"><span><i class="icon iconfont icon-liebiaoditu-xian-"></i>地图</span></router-link>
          </div>
        </div>
        <div class="maps map">
          <managementMap-vue></managementMap-vue>
        </div>
        <div class="floorMap maps" style="display:none;">
          <ul class="list-unstyled floor-item">
              <li v-for="(item,index) in table_list" @click="floor_btn(item.id)">{{ item.floorName }}</li>
          </ul>
          <div id="floorImg" style="width: 100%;height: 100%;position:relative;left:0;top:0;">
             <img :src="this.svgUrl" class="img-responsive">
          </div>
        </div>  
        <div class="roomMap maps" style="display:none;">
          <ul class="list-unstyled floor-item">
              <li>{{ this.floorName }}</li>
          </ul>
          <div id="floorImg" style="width: 100%;height: 100%;position:relative;left:0;top:0;">
            <img :src="this.roomSvgUrl" class="img-responsive">
          </div>
        </div>
      </div>
    </aside>
    
  </div>
</template>

<script> 
import panzoom from 'panzoom';
 import{ mapState } from "vuex";
  import managementMapVue from '../managementMap';
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
        buildUnit:null,//选择单位,
        optionList:[],//全部单位列表,
        floorList:[],//楼层列表
        svgUrl:'',
        table_list:[],
        floorName:'',
        roomSvgUrl:'',
      }
    },
    components:{
      'managementMap-vue': managementMapVue,
    },
    methods: {
      floor_btn(id){
        //console.log(id)
        this.table_list.forEach((item)=>{
          if(item.id == id){
            this.svgUrl = item.svgUrl ;
          }
        })
        var area = document.getElementById('floorImg');
        panzoom((area),{
          maxZoom:1,
          minZoom:0.5
        });
      },
      btn_add(){
        $('#right').css('display','none');
      },
      unitSearch(){
        this.$fetch(
          "/api/unit/queryUnit"
        )
          .then(response => {
            if (response) {
              //console.log(response);
              this.optionList = response.data.unitList;
              //console.log(this.optionList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
          .then(err => {
            // //console.log(err);
          });
      },
      findPageBuildIngFloor(){
        console.log(this.buildingId)
        this.$fetch("/api/building/findPageBuildIngFloor",{
          pageIndex:1,
          pageSize:1000,
          buildingId:this.buildingId
        }).then(response=>{
          //console.log(response.data.pageBuildIng.result);
          this.table_list = response.data.pageBuildIng.result;
          this.table_list.forEach(item=>{
             if(this.floorId == item.id){
                this.roomSvgUrl = item.svgUrl ;
                this.floorName = item.floorName ;
             }
          })
         
        })
      }
    },
    watch:{
      $route: {
        handler: function(val, oldVal){
          // //console.log(val);
          if(this.$route.path == '/Building_management/maps'){
            $('.plan').hide();
            $('.total').show();
            $('.floor_wrap').hide();
            $('.room_wrap').hide();
            this.tableList();
            this.$store.commit('tableData',this.tableData);
          }
        },
        // 深度观察监听
        deep: true
      },
      buildUnit(curVal,oldVal){
        this.buildUnit = curVal;
        //console.log(this.buildUnit);
        this.$store.commit('buildUnit',this.buildUnit);
      },
      buildingId(){
        console.log(this.buildingId)
        this.findPageBuildIngFloor();
      },
      floorId(){
        this.table_list.forEach(item=>{
          if(this.floorId == item.id){
            this.roomSvgUrl = item.svgUrl ;
            this.floorName = item.floorName ;
          }
        })
      }
    },
    mounted(){
      realconsole();
      this.unitSearch();
      this.findPageBuildIngFloor();
      this.$store.commit('route_path',this.$route.path);
    },
    
     computed:mapState([
       'buildingId',
       'floorId'
    ])
  };
</script>
<style lang="scss" scoped>
</style>
