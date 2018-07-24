<template>
  <div style="height:100%;">
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-th-large font-gray-666 float-left"></i>
          <h2 class="float-left font-white size-16">路线规划</h2>
        </div>
        <div class="main_nav float-right">
          <!--<router-link to="/Inspection_plan/maps"><button><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link>-->
          <!--<router-link to="/Inspection_plan/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>完整</button></router-link>-->
          <router-link to="/Inspection_plan/list"><button style="margin-right:20px;border-right:2px solid #333333;"><i class="fa fa-th-large font-gray-666 float-left"></i>列表</button></router-link>
        </div>
      </div>
      <div class="main_content">
        <el-form ref="form" :label-position="labelPosition" :model="form">
          <el-form-item label="路线名称" >
            <span class="font-red" style="position: absolute;top:-45px;right:20px;">路线名称重复，请重新输入</span>
            <el-input v-model="form.name" style="width:190px;"></el-input>
          </el-form-item>
          <el-form-item label="巡检类型">
            <el-select v-model="form.region2" placeholder="巡检类型" class="select">
              <el-option v-for="item in inspectionTypeList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择单位">
            <el-select v-model="form.region1" placeholder="选择单位" class="select">
              <el-option label="全部单位" value=""></el-option>
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="起点">
            <el-select
              v-model="building"
            placeholder="选择建筑"  class="sbwz_138_32 start" :disabled="isdisabled">
            <el-option
              v-for="item in buildList"
              :label="item.name"
              :value="item.id">
            </el-option>
            </el-select>
            <el-select
              v-model="floor"
              placeholder="选择楼层" class="sbwz_90_32 start" :disabled="isdisabled">
              <el-option
                v-for="item in floorList"
                :label="item.floor+'层'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="room"
              placeholder="选择房间" class="sbwz_90_32 start" :disabled="isdisabled">
              <el-option
                v-for="item in roomList"
                :label="item.roomNumber+'房间'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="equipment"
              placeholder="选择设备" class="sbwz_120_32 start" :disabled="isdisabled">
              <el-option
                v-for="item in equipmentList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <div class="float-right" v-if="!isdisabled" @click="jinyong" style="width:32px;height:32px;border:1px solid #333333;margin-top:5px;margin-right:5px;display:flex;justify-content: center;align-items: center;">
              <i class="fa fa-th-large font-gray-666 float-right"></i>
            </div>
            <div class="float-right" v-if="isdisabled" @click="kaiqi" style="width:32px;height:32px;border:1px solid #333333;margin-top:5px;margin-right:5px;display:flex;justify-content: center;align-items: center;">
              <i class="fa fa-th-large font-gray-666 float-right"></i>
            </div>
          </el-form-item>
          <el-form-item label="终点">
            <el-select
              v-model="buildings"
              placeholder="选择建筑" class="sbwz_138_32 end" :disabled="isdisableds">
              <el-option
                v-for="item in buildLists"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="floors"
              placeholder="选择楼层" class="sbwz_90_32 end" :disabled="isdisableds">
              <el-option
                v-for="item in floorLists"
                :label="item.floor+'层'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="rooms"
              placeholder="选择房间" class="sbwz_90_32 end" :disabled="isdisableds">
              <el-option
                v-for="item in roomLists"
                :label="item.roomNumber+'房间'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="equipments"
              placeholder="选择设备" class="sbwz_120_32 end" :disabled="isdisableds">
              <el-option
                v-for="item in equipmentLists"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <div class="float-right" v-if="!isdisableds" @click="jinyongs" style="width:32px;height:32px;border:1px solid #333333;margin-top:5px;margin-right:5px;display:flex;justify-content: center;align-items: center;">
              <i class="fa fa-th-large font-gray-666 float-right"></i>
            </div>
            <div class="float-right" v-if="isdisableds" @click="kaiqis" style="width:32px;height:32px;border:1px solid #333333;margin-top:5px;margin-right:5px;display:flex;justify-content: center;align-items: center;">
              <i class="fa fa-th-large font-gray-666 float-right"></i>
            </div>
          </el-form-item>
          <el-form-item label="节点">
            <div class="contentNode">
              <ul>
                <li v-for="(item,index) in inspectionListNode">
                  <span style="display: inline-block;font-size: 13px;color: #999999;margin-right:20px;">{{ item.build }}</span>
                  <span style="display: inline-block;font-size: 13px;color: #999999;margin-right:20px;" v-show="item.floor!=''">{{ item.floor }}层</span>
                  <span style="display: inline-block;font-size: 13px;color: #999999;margin-right:20px;" v-show="item.room!=''">{{ item.room }}房间</span>
                  <span style="display: inline-block;font-size: 13px;color: #999999;">{{ item.equipment }}</span>
                  <div class="float-right" @click="Delete(index)" style="width:32px;height:32px;border:1px solid #333333;margin-top:5px;margin-right:5px;display:flex;justify-content: center;align-items: center;">
                    <i class="fa fa-th-large font-gray-666 float-right"></i>
                  </div>
                </li>
              </ul>
            </div>
            <el-select
              v-model="buildingNode"
              placeholder="选择建筑" class="sbwz_138_32 Node">
              <el-option
                v-for="item in buildListNode"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="floorNode"
              placeholder="选择楼层" class="sbwz_90_32 Node">
              <el-option
                v-for="item in floorListNode"
                :label="item.floor+'层'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="roomNode"
              placeholder="选择房间" class="sbwz_90_32 Node">
              <el-option
                v-for="item in roomListNode"
                :label="item.roomNumber+'房间'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="equipmentNode"
              placeholder="选择设备" class="sbwz_120_32 end">
              <el-option
                v-for="item in equipmentListNode"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <div class="float-right" @click="Add" style="width:32px;height:32px;border:1px solid #333333;margin-top:5px;margin-right:5px;display:flex;justify-content: center;align-items: center;">
              <i class="fa fa-th-large font-gray-666 float-right"></i>
            </div>
          </el-form-item>
          <div style="width:485px;margin:0 auto 25px;border-top:1px solid #222222;"></div>
          <el-form-item style="margin-bottom: 20px;">
            <el-button type="primary"  icon="el-icon-search" class="primary" @click="btn">保存并提交</el-button>
            <el-button class="back">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </aside>

  </div>
</template>

<script>
    export default {
      data() {
        return {
          labelPosition: 'top',
          form: {
            name: '',//路线名称
            region: '',//巡检类型
            region1: '',//选择单位
            region2:''//巡检类型
          },
          building:'',//选择建筑（开始）
          buildings:'',//选择建筑（结束）
          buildingNode:'',//选择建筑节点
          floor:'',//选择楼层（开始）
          floors:'',//选择楼层（结束）
          floorNode:'',//选择楼层节点
          room:'',//选择房间（开始）
          rooms:'',//选择房间（结束）
          roomNode:'',//选择房间节点
          equipment:'',//选择设备（开始）
          equipments:'',//选择设备(结束）
          equipmentNode:'',//选择设备节点
          optionList:[],//选择单位列表
          buildList:[],//选择建筑列表（开始）
          buildLists:[],//选择建筑列表(结束）
          buildListNode:[],//选择建筑列表节点
          floorList:[],//选择楼层列表（开始）
          floorLists:[],//选择楼层列表(结束）
          floorListNode:[],//选择楼层列表节点
          roomList:[],//选择房间列表（开始）
          roomLists:[],//选择房间列表(结束）
          roomListNode:[],//选择房间列表节点
          equipmentList:[],//选择设备列表（开始）
          equipmentLists:[],//选择设备列表(结束）
          equipmentListNode:[],//选择设备列表节点
          startNodes:[],//起点整合列表
          inspectionNodes:[],//节点整合列表
          endNodes:[],//终点整合列表
          inspectionListNode:[],//展示节点列表
          inspectionListIndex:0,
          isdisabled:false,
          isdisableds:false,
          inspectionTypeList:[{//巡检类型列表
            name:'全部',id:0
          },{
            name:'举报检查',id:1
          },{
            name:'活动检查',id:2
          },{
            name:'例行检查',id:3
          },{
            name:'复查',id:4
          },{
            name:'施工检查',id:5
          },{
            name:'解除临时查封',id:6
          },{
            name:'恢复工作检查',id:7
          }, {
            name: '其他检查', id: 8
          }]
        }
      },
      methods:{
        jinyong(){//禁用选择框
          this.isdisabled=true;
        },
        kaiqi(){//开启
          this.isdisabled=false;
        },
        jinyongs(){
          this.isdisableds=true
        },
        kaiqis(){
          this.isdisableds=false;
        },
        Delete(index){//删除节点
          this.inspectionNodes.splice(index,1);
          this.inspectionListNode.splice(index,1)
        },
        btn(){//保存、提交
          this.inspectionNode()
        },
        Add(){//点击添加节点

          //声明所有展示的节点
          var buildName = '';
          var buildId = '';
          var floorName = '';
          var floorId = 0;
          var roomName = '';
          var roomId = 0;
          var equipmentName = '';
          var deviceId = 0;
          var buildListName = '';
          var floorListName = '';
          var roomListName = '';
          var equipmentListName = '';
          var buildListsName = '';
          var floorListsName = '';
          var roomListsName = '';
          var equipmentListsName = '';

          //给所有添加的节点一个下标值
          this.inspectionListIndex++;



          //循环得出需要的id、name值
            //起点
          this.buildList.forEach((item,index)=>{
            // console.log(item.id)
            if(item.id == this.building){
              // console.log(item.name);
              buildListName = item.name;
            }
          });
          this.floorList.forEach((item,index)=>{
            if(item.id == this.floor){
              floorListName = item.floorName;
            }
          });
          this.roomList.forEach((item,index)=>{
            if(item.id == this.room){
              roomListName = item.roomNumber;
            }
          });
          this.equipmentList.forEach((item,index)=>{
            if(item.id == this.equipment){
              equipmentListName = item.name;
            }
          });


          //中间节点
          this.buildListNode.forEach((item,index)=>{
            // console.log(item.id)
            if(item.id == this.buildingNode){
              // console.log(item.name);
              buildId = item.id;
              buildName = item.name;
            }
          });
          // console.log(buildName);
          this.floorListNode.forEach((item,index)=>{
            console.log(item.id)
            if(item.id == this.floorNode){
              floorId = item.id;
              floorName = item.floorName;
            }
          });
          // console.log(floorName);
          this.roomListNode.forEach((item,index)=>{
            if(item.id == this.roomNode){
              roomId =item.id;
              roomName = item.roomNumber;
            }
          });
          // console.log(roomName);
          this.equipmentListNode.forEach((item,index)=>{
            if(item.id == this.equipmentNode){
              deviceId =item.id;
              equipmentName = item.name;
            }
          });
          // console.log(equipmentName);
          // console.log(this.inspectionNodes);
          //终点
          this.buildLists.forEach((item,index)=>{
            // console.log(item.id)
            if(item.id == this.buildings){
              // console.log(item.name);
              buildListsName = item.name;
            }
          });
          this.floorLists.forEach((item,index)=>{
            if(item.id == this.floors){
              floorListsName = item.floorName;
            }
          });
          this.roomLists.forEach((item,index)=>{
            if(item.id == this.rooms){
              roomListsName = item.roomNumber;
            }
          });
          this.equipmentLists.forEach((item,index)=>{
            if(item.id == this.equipments){
              equipmentListsName = item.name;
            }
          });

          //添加节点数组的内容
          if(buildListName!==''){//起点
            this.startNodes.push({sorting:0,buildingId:this.building,buildingName:buildListName,floorId:this.floor,floorNumber:floorListName,roomId:this.room,roomNumber:roomListName,deviceId:this.equipment,deviceName:equipmentListName});
          }
          if(buildName!==''){//节点
            this.inspectionNodes.push({sorting:this.inspectionListIndex,buildingId:buildId,buildingName:buildName,floorId:floorId,floorNumber:floorName,roomId:roomId,roomNumber:roomName,deviceId:deviceId,deviceName:equipmentName});
            this.inspectionListNode.push({build:buildName,floor:floorName,room:roomName,equipment:equipmentName})
          }
          if(buildListsName!==''){//终点
            this.endNodes.push({sorting:this.inspectionNodes.length+1,buildingId:this.buildings,buildingName:buildListsName,floorId:this.floors,floorNumber:floorListsName,roomId:this.rooms,roomNumber:roomListsName,deviceId:this.equipments,deviceName:equipmentListsName});
          }
          console.log(this.endNodes)
          //获取数组长度   inspectionNodes
          console.log(this.inspectionNodes.length+1);

        },
        unitSearch(){
          this.$fetch(
            "/api/unit/queryUnit"
          )
            .then(response => {
              if (response) {
                console.log(response);
                this.optionList = response.data.unitList;
                console.log(this.optionList);
                $(' .el-select-dropdown__item').mouseover(function(){
                  $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
                });
              }
            })
            .then(err => {
              console.log(err);
            });
        },
        buildSearch(unitId){
          this.$fetch("/api/building/selectNode",{
            unitId:unitId
          }).then(response=>{
            console.log('buildSearch:'+JSON.stringify(response));
            if (response) {
              this.buildList = response.data.list;
              console.log(this.buildList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        floorSearch(buildIngId){
          this.$fetch("/api/building/selectNode",{
            buildIngId:buildIngId
          }).then(response=>{
            console.log('floorSearch:'+response);
            if (response) {
              this.floorList = response.data.list;
              console.log(this.floorList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        roomSearch(floorId){
          this.$fetch("/api/building/selectNode",{
            floorId:floorId
          }).then(response=>{
            console.log('roomSearch:'+response);
            if (response) {
              this.roomList = response.data.list;
              console.log(this.roomList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        equipmentSearch(roomId){
          this.$fetch("/api/building/selectNode",{
            roomId:roomId
          }).then(response=>{
            console.log('equipmentSearch:'+response);
            if (response) {
              this.equipmentList = response.data.list;
              console.log(this.equipmentList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        buildSearchs(unitId){
          this.$fetch("/api/building/selectNode",{
            unitId:unitId
          }).then(response=>{
            console.log('buildSearchs:'+JSON.stringify(response));
            if (response) {
              this.buildLists = response.data.list;
              console.log(this.buildLists);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        floorSearchs(buildIngId){
          this.$fetch("/api/building/selectNode",{
            buildIngId:buildIngId
          }).then(response=>{
            console.log('floorSearchs:'+response);
            if (response) {
              this.floorLists = response.data.list;
              console.log(this.floorLists);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        roomSearchs(floorId){
          this.$fetch("/api/building/selectNode",{
            floorId:floorId
          }).then(response=>{
            console.log('roomSearchs:'+response);
            if (response) {
              this.roomLists = response.data.list;
              console.log(this.roomLists);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        equipmentSearchs(roomId){
          this.$fetch("/api/building/selectNode",{
            roomId:roomId
          }).then(response=>{
            console.log('equipmentSearchs:'+response);
            if (response) {
              this.equipmentLists = response.data.list;
              console.log(this.equipmentLists);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        buildSearchNode(unitId){
          this.$fetch("/api/building/selectNode",{
            unitId:unitId
          }).then(response=>{
            console.log('buildSearchNode:'+JSON.stringify(response));
            if (response) {
              this.buildListNode = response.data.list;
              console.log(this.buildListNode);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        floorSearchNode(buildIngId){
          this.$fetch("/api/building/selectNode",{
            buildIngId:buildIngId
          }).then(response=>{
            console.log('floorSearchNode:'+response);
            if (response) {
              this.floorListNode= response.data.list;
              console.log(this.floorListNode);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        roomSearchNode(floorId){
          this.$fetch("/api/building/selectNode",{
            floorId:floorId
          }).then(response=>{
            console.log('roomSearchNode:'+response);
            if (response) {
              this.roomListNode = response.data.list;
              console.log(this.roomListNode);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        equipmentSearchNode(roomId){
          this.$fetch("/api/building/selectNode",{
            roomId:roomId
          }).then(response=>{
            console.log('equipmentSearchNode:'+response);
            if (response) {
              this.equipmentListNode = response.data.list;
              console.log(this.equipmentListNode);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        inspectionNode(){
          var unitName = '';
          this.optionList.forEach((item,index)=>{
            if(item.id == this.form.region1){
              unitName = item.name;
            }
          });
          this.$fetch("/api/admin/inspection/insertInspectionPlan",{
            name:this.form.name,
            type:this.form.region2,
            unitId:this.form.region1,
            unitName:unitName,
            startNodes:this.startNodes,
            endNodes:this.endNodes,
            inspectionNodes:this.inspectionNodes
          }).then(response=>{
            console.log(response);
          })
        }
      },
      mounted(){
        $('.el-scrollbar').css({
            'background':'#000'
        });
        $('.el-select-dropdown').css('border-color','#333');
        $('.el-select-dropdown__item').css('color','#999');
        $(' .el-select-dropdown__item').mouseover(function(){
          $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
        });
        $('.modal-body .el-input__inner').css({'background-color':'#111','border-color':'#282828','border-radius':'0'});
        this.unitSearch();
      },
      watch:{
        form:{
          //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
          handler(curVal,oldVal){
            // console.log(curVal);
            this.form = curVal;
            // console.log(this.form);
            this.buildSearch(this.form.region1);
            this.buildSearchs(this.form.region1);
            this.buildSearchNode(this.form.region1);
          },
          deep:true
        },
        building(curVal,oldVal){
          this.building = curVal ;
          // console.log(this.building);
          this.floorSearch(this.building);
        },
        floor(curVal,oldVal){
          this.floor = curVal ;
          // console.log(this.floor);
          this.roomSearch(this.floor);
        },
        room(curVal,oldVal){
          this.room = curVal ;
          console.log(this.room);
          this.equipmentSearch(this.room);
        },
        buildings(curVal,oldVal){
          this.buildings = curVal ;
          // console.log(this.building);
          this.floorSearchs(this.buildings);
        },
        floors(curVal,oldVal){
          this.floors = curVal ;
          // console.log(this.floor);
          this.roomSearchs(this.floors);
        },
        rooms(curVal,oldVal){
          this.rooms = curVal ;
          // console.log(this.rooms);
          this.equipmentSearchs(this.rooms);
        },
        buildingNode(curVal,oldVal){
          this.buildingNode = curVal ;
          // console.log(this.building);
          this.floorSearchNode(this.buildingNode);
        },
        floorNode(curVal,oldVal){
          this.floorNode = curVal ;
          // console.log(this.floor);
          this.roomSearchNode(this.floorNode);
        },
        roomNode(curVal,oldVal){
          this.roomNode = curVal ;
          // console.log(this.roomNode);
          this.equipmentSearchNode(this.roomNode);
        }
      }
    }
</script>

<style lang="scss" scoped>
  .clearFix:after{
    clear:both;
    content:'';
    display:block;
  }
  h2{
    margin: 0;
    padding: 0;
  }

  @media (min-width: 768px) and (max-width:1600px){
    aside{
      width:525px;
      max-height:740px;
      background:#111111;
      overflow: hidden;
    }
    .main_content{
      width:500px;
      height:672px;
      margin:0 auto;
      overflow-y: scroll;
      border-top:1px solid #222222;

    }
  }
  @media (min-width: 1600px){
    aside{
      width:525px;
      max-height:740px;
      background:#111111;
      overflow: hidden;
    }
    .main_content{
      width:500px;
      height:672px;
      margin:0 auto;
      overflow-y: scroll;
      border-top:1px solid #222222;

    }
  }
  .main_header{
    width:100%;
    height:68px;
  }
  .main_title{
    display: flex;
    align-items: center;
  }
  .main_title i{
    margin-left:20px;
    margin-right:10px;
  }
  .main_title h2{
    line-height: 68px;
  }
  .main_header button{
    width:64px;
    height:28px;
    float: left;
    outline:none;
    display: flex;
    align-items: center;
    justify-content: center;
    border:2px solid #333333;
    background: #111111;
    font-size: 12px;
    color: #999;
    margin-top: 21px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .main_header a:nth-child(1) button{
    border-right:none;
  }
  .main_header a:nth-child(3) button{
    border-left:none;
  }
  .main_header button i{
    margin-right: 3px;
  }
  .main_header button.btn_add{
    width:64px;
    height:28px;
    border:none;
    background: #bad616;
    margin-left: 6px;
    margin-right: 20px;
  }

  //模态框
  .modal-content{
    background-color: #111111 !important;
  }
  .modal-title{
    font-size:24px;
    color: #ffffff;
    text-align: center;
    letter-spacing: 15px;
    text-indent: 15px;
  }
  .modal-p{
    color: #666666;
    text-align: center;
    font-size: 12px;
  }
  .modal-header{
    border-bottom:1px solid #222222;
  }
  .modal-footer{
    border-top:1px solid #222222;
  }


</style>
