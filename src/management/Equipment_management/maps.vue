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
                :label="item.floorName+'层'"
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
                <li v-for="(item,index) in table_list" @click="floor_btn(item.id)" :class="{'active': item.id == active}">{{ item.floorName }}</li>
            </ul> 
            <div id="floorImg" style="width: 100%;height: 100%;position:relative;left:0;top:0;">
              <img id="imgPic" :src="this.svgUrl" class="img-responsive">
              <!-- <div v-for="item in deviceList" :id="'alarmDiv'+item.id"></div> -->
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
            <managementMap-vue v-on:childByValue="childByValue"></managementMap-vue>
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
  import { realconsole } from '../../assets/js/management.js';
  import { setPointList } from '../../assets/js/pointDevice';
  export default {
    data() {
      return {
        active:'',
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
        table_list:[],
        deviceList:[]
      }
    },
    components:{
      'managementMap-vue': managementMapVue,
    },
    methods: {
      childByValue: function (childValue) {
        this.unit = childValue.unitId ;
        this.building = childValue.buildingId ;
        this.floor = childValue.floorId ;
        console.log(this.floor)
        this.floor_btn(this.floor);
      },
      floor_btn(id){
        this.active = id ;
        this.table_list.forEach((item)=>{
          if(item.id == id){
            this.svgUrl = item.svgUrl ;
            this.floor = id ;
          }
        });
        var area = document.getElementById('floorImg');
        panzoom((area),{
          maxZoom:1,
          minZoom:1
        });
        
      },
      findPageBuildIngFloor(){
        this.$fetch("/api/building/findPageBuildIngFloor",{
          pageIndex:1,
          pageSize:1000,
          buildingId:this.building
        }).then(response=>{
          console.log(response.data.pageBuildIng.result);
          this.table_list = response.data.pageBuildIng.result;    
          this.table_list.forEach((item,index)=>{
            if(index == 0){
              this.svgUrl = item.svgUrl ;
              this.active = item.id ;
            }
          })     
        })
      },
      btn_add(){
        $('#right').hide();
      },
      buildSearch(unitId){
        this.$fetch("/api/building/selectNode",{
          unitId:unitId
        }).then(response=>{
          if (response) {
            this.buildList = response.data.list;
          }
        })
      },
      floorSearch(buildIngId){
        this.$fetch("/api/building/selectNode",{
          buildIngId:buildIngId
        }).then(response=>{
          if (response) {
            this.floorList = response.data.list;
          }
        })
      },
      roomSearch(floorId){
        this.$fetch("/api/building/selectNode",{
          floorId:floorId
        }).then(response=>{
          if (response) {
            this.roomList = response.data.list;
          }
        })
      },
      equipmentSearch(){
        this.$fetch("/api/device/deviceTypeEnumList").then(response=>{
          if (response) {
            this.equipmentList = response.data.deviceTypeEnum;
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
        this.building = '';
        this.floor = '';
        this.room = '';
        this.buildSearch(this.unit);
        this.$store.commit('Unit',this.unit);
      },
      building(curVal,oldVal){
        this.building = curVal ;
        //console.log(this.building);
        this.floor = '';
        this.room = '';
        this.table_list = [];
        this.floorSearch(this.building);
        this.$store.commit('buildDevice',this.building);
        if(this.building != 0 && this.building != '0'){
          $('.floorMap').show();
          $('.map').hide();
          this.findPageBuildIngFloor();
        }else{
          $('.floorMap').hide();
          $('.map').show();
        }
      },
      floor(curVal,oldVal){
        this.floor = curVal ;
        this.room = '';
        //console.log(this.floor);
        if(this.floor !== 0){
          this.roomSearch(this.floor);
          this.floor_btn(this.floor);
          this.$store.commit('floorDevice',this.floor);
          this.$fetch("/api/device/queryDevice",{
            floorId:this.floor
          }).then(res=>{
            console.log(res.data.deviceList);
            this.deviceList = res.data.deviceList ;
            console.log(this.deviceList);
            $("#floorImg div").remove();
            this.deviceList.forEach((element,index) => {
              $('#floorImg').append('<div id="alarmDiv'+ element.id +'" data-toggle="tooltip" data-placement="top" title="'+element.name+'"></div>');
              setPointList(element.xRate,element.yRate,this.iconByType[element.deviceTypeId],'alarmDiv'+ element.id);
            });
          });
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
        console.log(this.buildUnit)
        if(this.buildUnit != 0 && this.buildUnit != '0'){
          this.building = this.buildUnit ;
          this.findPageBuildIngFloor();
        }
      },
      deviceSimple(){
        this.unit = this.deviceSimple.unitId ;
        this.building = this.deviceSimple.buildingId ;
        this.floor = this.deviceSimple.floorId ;
        this.floor_btn(this.floor);
      }
    },
    mounted(){
      realconsole();
      this.unitSearch();
      this.equipmentSearch();
      this.findPageBuildIngFloor();
    },
    computed:mapState([
      'buildUnit',
      'iconByType',
      'deviceSimple'
    ])
  };
</script>