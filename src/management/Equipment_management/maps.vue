<template>
  <div id="list-maps">
    <aside>
      <!-- 标题 -->
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="icon iconfont icon-shebeiguanli-mian-"></i>
          <h2>设备管理</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Equipment_management/list"><span class="btn_add" @click="btn_add"><i class="fa fa-plus"></i>新增</span></router-link>
        </div>
      </div>
      <!-- 主体 -->
      <div class="main_all_content">
        <!-- 筛选 -->
        <div class="main_content_top">
          <el-form ref="form" :model="form" class="float-left">
          <el-select v-model="unit" placeholder="选择单位" class="select">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-select
              v-model="building"
            placeholder="选择建筑"  class="start">
              <el-option label="室外" value="0"></el-option>
              <el-option
                v-for="item in buildList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="floor"
              placeholder="选择楼层" class="start startFloor">
              <el-option
                v-for="item in floorList"
                :label="item.floor+'层'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="room"
              placeholder="选择房间" class="start startRoom">
              <el-option
                v-for="item in roomList"
                :label="item.roomNumber+'房间'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="equipment"
              placeholder="选择设备类型" class="start startDevice">
              <el-option label="全部设备" value=""></el-option>
              <el-option
                v-for="item in equipmentList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
        </el-form>
        <!-- 切换 -->
          <div class="main_nav_two float-right">
            <router-link to="/Equipment_management/all"><span><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
            <router-link to="/Equipment_management/maps"><span><i class="icon iconfont icon-liebiaoditu-xian-"></i>地图</span></router-link>
          </div>
        </div>
        <!-- 地图 -->
        <div class="maps">
          <!-- 平面图楼层 -->
          <div class="floorMap maps" style="display:none;">
            <ul class="list-unstyled floor-item" style="top: 120px">
                <li v-for="(item,index) in table_list" @click="floor_btn(item.id)">{{ item.floorName }}</li>
            </ul> 
            <div id="floorImg" style="width: 100%;height: 100%;position:relative;left:0;top:0;">
              <img :src="this.svgUrl" class="img-responsive">
            </div>
          </div>
          <!-- 地图/平面图切换 -->
          <!-- <div class="floorMap popup-map-min z-index-10"  style="display:none;"> -->
            <!-- 地图 -->
            <!-- <div class="position-absolute-top"> -->
              <!-- <img src="http://yhyimg.99xf.cn/xf/api/building_plan/25_1.jpg" alt="" class="img-responsive center-block"> -->
            <!-- </div> -->
            <!-- icon -->
            <!-- <div class="position-absolute-top popup-map-min-point"> -->
              <!-- <i class="icon iconfont icon-shuidi-" data-toggle="tooltip" title="灭火器"><i class="icon iconfont icon-miehuoqi-mian-"></i></i> -->
            <!-- </div> -->
            <!-- 提示文字 -->
            <!-- <h5>2D</h5> -->
          <!-- </div> -->
          
              <!-- icon -->
                <!-- <div class="position-absolute-top popup-map-min-point z-index-100" style="top:120px; left:300px;">
                  <el-tooltip content="液位计" placement="top" manual="ture">
                    <i class="icon iconfont icon-shuidi-"><i class="icon iconfont icon-yeweiji-"></i></i>
                  </el-tooltip>  
                </div> -->
                <!-- icon -->
                <!-- <div class="position-absolute-top popup-map-min-point z-index-100" style="top: 60px; left:200px;">
                  <el-tooltip content="灭火器" placement="top">
                    <i class="icon iconfont icon-shuidi-"><i class="icon iconfont icon-miehuoqi-mian-"></i></i>
                  </el-tooltip>  
                </div> -->
                <!-- 聚合 -->
                <!-- <div class="position-absolute-top popup-map-min-point z-index-100" style="top: 100px; left:100px;">
                  <el-tooltip placement="top">
                    <div slot="content" class="text-center"><span class="font-blue">康健宝盛广场</span><br/>226个设备</div>
                    <i class="icon iconfont icon-shuidi-"><span>226</span></i>
                  </el-tooltip>                  
                </div> -->
          <div class="maps map">
            <managementMap-vue></managementMap-vue>
          </div>
        </div>
      </div>
    </aside>    
  </div>
</template>

<script>
import panzoom from 'panzoom';
import{mapState} from "vuex";
import managementMapVue from '../managementMap';
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
      
        unit:null,//选择单位
        building:'',//选择建筑
        floor:'',
        room:'',
        equipment:'',
        roomList:[],
        floorList:[],
        buildList:[],
        equipmentList:[],
        optionList:[],//全部单位列表
        svgUrl:'',
        table_list:[]
      }
    },
    components:{
      'managementMap-vue': managementMapVue,
    },
    methods: {
      floor_btn(id){
        console.log(id)
        this.table_list.forEach((item)=>{
          if(item.id == id){
            this.svgUrl = item.svgUrl ;
            // $('.floorMap').append('<div id="alarmDiv'+ this.imgIndex +'"></div>');
           
            // setPointList(this.iconByType[this.form.equipmentId],'alarmDiv'+ this.imgIndex);
          }
        });
        var area = document.getElementById('floorImg');
        panzoom((area),{
          maxZoom:1,
          minZoom:0.5
        });
      },
      findPageBuildIngFloor(){
        this.$fetch("/api/building/findPageBuildIngFloor",{
          pageIndex:1,
          pageSize:1000,
          buildingId:this.buildUnit
        }).then(response=>{
          console.log(response.data.pageBuildIng.result);
          this.table_list = response.data.pageBuildIng.result;         
        })
      },
      btn_add(){
        // //console.log($('#right'));
        $('#right').hide();
      },
      buildSearch(unitId){
        this.$fetch("/api/building/selectNode",{
          unitId:unitId
        }).then(response=>{
          //console.log('buildSearch:'+JSON.stringify(response));
          if (response) {
            this.buildList = response.data.list;
            //console.log(this.buildList);
          }
        })
      },
      floorSearch(buildIngId){
        this.$fetch("/api/building/selectNode",{
          buildIngId:buildIngId
        }).then(response=>{
          //console.log('floorSearch:'+response);
          if (response) {
            this.floorList = response.data.list;
            //console.log(this.floorList);
          }
        })
      },
      roomSearch(floorId){
        this.$fetch("/api/building/selectNode",{
          floorId:floorId
        }).then(response=>{
          //console.log('roomSearch:'+response);
          if (response) {
            this.roomList = response.data.list;
            //console.log(this.roomList);
          }
        })
      },
      equipmentSearch(){
        this.$fetch("/api/device/deviceTypeEnumList").then(response=>{
          //console.log('equipmentSearch:'+response);
          if (response) {
            this.equipmentList = response.data.deviceTypeEnum;
            //console.log(this.equipmentList);
          }
        })
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
      }
    },
    watch:{
      unit(curVal,oldVal){
        this.unit = curVal;
        this.buildSearch(this.unit);
        this.$store.commit('Unit',this.unit);
      },
      building(curVal,oldVal){
        this.building = curVal ;
        //console.log(this.building);
        this.floor = '';
        this.room = '';
        this.equipment = '';
        this.floorSearch(this.building);
        this.$store.commit('buildDevice',this.building);
      },
      floor(curVal,oldVal){
        this.floor = curVal ;
        //console.log(this.floor);
        if(this.floor !== 0){
          this.roomSearch(this.floor);
          this.$store.commit('floorDevice',this.floor);
        }
      },
      room(curVal,oldVal){
        this.room = curVal ;
        //console.log(this.room);
        this.$store.commit('roomDevice',this.room);
      },
      equipment(curVal,oldVal){
        this.equipment = curVal ;
        this.$store.commit('equipmentDevice',this.equipment);
      },
      buildUnit(){
        this.findPageBuildIngFloor();
      }
    },
    mounted(){
      realconsole();
      this.unitSearch();
      this.equipmentSearch();
      this.findPageBuildIngFloor();
      this.$store.commit('route_path',this.$route.path);
    },
    computed:mapState([
      'buildUnit',
      'iconByType'
    ])
  };
</script>