<template>
  <div id="list-maps">
    <aside>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-weixianpin-mian-"></i>
        <h2>危险品管理</h2>
      </div>
      <div class="main_nav float-right">
        <router-link to="/Dangerous_goods_management/list"><span class="btn_add" @click="btn_add"><i class="fa fa-plus"></i>新增</span></router-link>
      </div>
    </div>
      <div class="main_all_content">
        <!-- 筛选 -->
        <div class="main_content_top">
          <el-form class="float-left">
            <el-select v-model="unit" placeholder="选择单位" class="select">
              <el-option label="全部单位" value=""></el-option>
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
            <el-select
              v-model="building"
            placeholder="选择建筑"  class="sbwz_138_32 start float-left">
              <el-option label="室外" value="0"></el-option>
              <el-option
                v-for="item in buildList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="floor"
              placeholder="选择楼层" class="sbwz_90_32 start startFloor">
              <el-option
                v-for="item in floorList"
                :label="item.floor+'层'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="room"
              placeholder="选择房间" class="sbwz_90_32 start startRoom">
              <el-option
                v-for="item in roomList"
                :label="item.roomNumber+'房间'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="status"
              placeholder="选择状态" class="sbwz_120_32 start startDevice">
              <el-option
                v-for="item in statusList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form>
          <div class="main_nav_two float-right">
            <router-link to="/Dangerous_goods_management/all"><span><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
            <router-link to="/Dangerous_goods_management/maps"><span><i class="icon iconfont icon-liebiaoditu-xian-"></i>地图</span></router-link>
          </div>
        </div>
        <!-- 地图 -->
        <div class="maps">
          <!-- icon -->
                <!-- <div class="position-absolute-top popup-map-min-point z-index-100"  style="top: 60px; left:200px;">
                  <el-tooltip content="危险品名称" placement="top">
                    <i class="icon iconfont icon-shuidi-"><i class="icon iconfont icon-weixianpin-xian-"></i></i>
                  </el-tooltip>
                </div> -->
                <!-- 平面图楼层 -->
          <div class="floorMap maps" style="display:none;">
            <ul class="list-unstyled floor-item" style="top: 120px">
                <li v-for="(item,index) in table_list" @click="floor_btn(item.floorId)" :class="{'active': item.floorId == active}">{{ item.floorNumber }}</li>
            </ul> 
            <div id="floorImg" style="width: 100%;height: 100%;position:relative;left:0;top:0;">
              <img id="imgPic" :src="this.svgUrl" class="img-responsive">
            </div>
          </div>
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
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
        active:'',
        unit:null,//选择单位
        building:'',//选择建筑
        floor:'',
        room:'',
        status:'',
        roomList:[],
        floorList:[],
        buildList:[],
        statusList:[],
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
          if(item.floorId == id){
            this.svgUrl = item.imgUrl ;
            this.floor = floorId ;
          }
        });
        var area = document.getElementById('floorImg');
        panzoom((area),{
          maxZoom:1,
          minZoom:1
        });
      },
      findPageBuildIngFloor(){
        this.$fetch("/api/trouble/queryTroubleByFloorId",{
          floorId:this.floor,
          type:5,
          status:0
        }).then(response=>{
          console.log(response.data.troubles);
          this.table_list = response.data.troubles;  
          this.table_list.forEach((item,index)=>{
            if(index == 0){
              this.svgUrl = item.imgUrl ;
              this.active = item.floorId ;
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
      status(curVal,oldVal){
        this.status = curVal ;
        this.$store.commit('dengerStatus',this.status);
      },
      unit(curVal,oldVal){
        this.unit = curVal;
        this.buildSearch(this.unit);
        this.$store.commit('dangerUnit',this.unit);
      },
      building(curVal,oldVal){
        this.building = curVal ;
        //console.log(this.building);
        if(this.building !== 0 && this.building !== '0'){
          this.floor = '';
          this.room = '';
          this.equipment = '';
          this.floorSearch(this.building);
          this.$store.commit('dangerBuild',this.building);
          $('.floorMap').show();
          $('.map').hide();
          this.findPageBuildIngFloor();
        }else{
          this.floor = '';
          this.room = '';
          this.equipment = '';
          this.equipmentSearch(this.building);
          this.$store.commit('dangerBuild',this.building);
          $('.floorMap').hide();
          $('.map').show();
        }
      },
      floor(curVal,oldVal){
        this.floor = curVal ;
        //console.log(this.floor);
        if(this.floor !== 0){
          this.roomSearch(this.floor);
          $('.startRoom').show();
          this.floor_btn(this.floor);
          this.$store.commit('dangerFloor',this.floor);
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
        if(this.room !== 0){
          this.equipmentSearch(this.room);
          $('.startDevice').show();
          this.$store.commit('dangerRoom',this.room);
        }
      },
      DangerSimple(){
        this.unit = this.DangerSimple.unitId ;
        this.building = this.DangerSimple.buildingId ;
        this.floor = this.DangerSimple.floorId ;
        this.floor_btn(this.floor);
      },
      buildUnit(){
        console.log(this.buildUnit)
        if(this.buildUnit != 0 && this.buildUnit != '0'){
          this.building = this.buildUnit ;
          this.findPageBuildIngFloor();
        }
      }
    },
    mounted(){
      realconsole();
      this.unitSearch();
      this.findPageBuildIngFloor();
    },
    computed:mapState([
      'buildUnit',
      'DangerSimple'
    ])
  };
</script>
<style lang="scss" scoped>
</style>
