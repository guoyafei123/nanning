<template>  
    <section>
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
      <div class="main_all_content">
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
          <div class="main_nav_two float-right">
            <router-link to="/Equipment_management/all"><span><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
            <router-link to="/Equipment_management/maps"><span @click="btn_map"><i class="icon iconfont icon-liebiaoditu-xian-"></i>地图</span></router-link>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </section>
</template>
<script>
  export default {
    data(){
      return{
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
      }
    },
    methods:{
      btn_add(){
        $('#right').css('display','none');
      },
      btn_map() {
        $(".plan").hide();
        $(".mapTable").show();
        $(".total").show();
      },
      buildSearch(unitId){
        this.$fetch("/api/building/selectNode",{
          unitId:unitId
        }).then(response=>{
          //console.log('buildSearch:'+JSON.stringify(response));
          if (response) {
            this.buildList = response.data.list;
            console.log(this.buildList);
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
        if(this.unit == ''){
          this.building = '';
        }else{
          this.building = '';
        }
        this.floor = '';
        this.room = '';
        this.buildSearch(this.unit);
        this.$store.commit('EquipmentUnit',[this.unit,new Date().getTime()]);
      },
      building(curVal,oldVal){
        this.building = curVal ;
        //console.log(this.building);
        this.floor = '';
        this.room = '';
        
        this.$store.commit('EquipmentBuild',[this.building,new Date().getTime()]);
        if(this.building == ''){
          return ;
        }
        this.floorSearch(this.building);
      },
      floor(curVal,oldVal){
        this.floor = curVal ;
        this.room = '';
        //console.log(this.floor);
        if(this.floor !== ''){
          this.roomSearch(this.floor);
          this.$store.commit('EquipmentFloor',[this.floor,new Date().getTime()]);
        }
      },
      room(curVal,oldVal){
        this.room = curVal ;
        //console.log(this.room);
        this.$store.commit('EquipmentRoom',[this.room,new Date().getTime()]);
      },
      equipment(curVal,oldVal){
        this.equipment = curVal ;
        //console.log(this.equipment);
        this.$store.commit('Equipment',[this.equipment,new Date().getTime()]);
      }
    },
    mounted(){
      this.unitSearch();
      this.equipmentSearch();
    }
  }
</script>
<style scoped>
</style>
