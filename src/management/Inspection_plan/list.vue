<template>
  <div id="add-new" class="add-map">
    <!-- 表单 -->
    <aside>
      <!-- 标题 -->
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-plus"></i>
        <h2>巡检规划</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Inspection_plan/all"><span class="btn-back"><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
        </div>
      </div>
      <section class="border-top-solid-333 margin-left15 margin-right15"></section>
      <!-- 表单 -->
      <div class="main_content">
        <!--
          class类not-null为必填标识,如需请加在<el-form-item>
          class类hint-error为错误提示
         -->
        <el-form class="row" ref="form" status-icon :rules="rules" :label-position="labelPosition" :model="form" >
          <el-form-item label="路线名称" prop="name" class="not-null">
            <!-- <span class="hint-error">单位名称有误或重复</span> -->
            <el-input v-model="form.name" class="col-sm-10"></el-input>
          </el-form-item>
          <el-form-item label="所属单位" prop="region1"  class="not-null">
            <el-select v-model="form.region1" placeholder="请选择" :disabled="isdisabled" class="select col-sm-4">
              <!-- <el-option label="全部单位" value=""></el-option> -->
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="巡检类型" prop="region2" class="not-null">
            <el-select v-model="form.region2" placeholder="请选择" class="select col-sm-4">
              <el-option v-for="item in inspectionTypeList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="起点" prop="building" class="line-start not-null col-sm-12">
            <el-select
              v-model="form.building"
            placeholder="选择建筑"  class="start" :disabled="isdisabled">
              <el-option
                v-for="item in buildList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="floor"
              placeholder="选择楼层" class="start startFloor" style="display: none;" :disabled="isdisabled">
              <el-option
                v-for="item in floorList"
                :label="item.floor"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="room"
              placeholder="选择房间" class="start startRoom"  style="display: none;" :disabled="isdisabled">
              <el-option
                v-for="item in roomList"
                :label="item.roomNumber"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="equipment"
              placeholder="选择设备" class="start startDevice" style="display: none;" :disabled="isdisabled">
              <el-option
                v-for="item in equipmentList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <div class="icon-frame float-right" v-if="!isdisabled" @click="jinyong">
              <el-tooltip content="全屏" placement="保存">
                <i class="fas fa-check-circle font-blue float-right"></i>
              </el-tooltip>
            </div>
            <div class="icon-frame float-right" v-if="isdisabled" @click="kaiqi">
              <el-tooltip content="全屏" placement="编辑">
                <i class="fas fa-pencil-alt font-yellow float-right"></i>
              </el-tooltip>
            </div>
          </el-form-item>
          <el-form-item label="终点" prop="buildings" class="line-end not-null col-sm-12">
            <el-select
              v-model="form.buildings"
              placeholder="选择建筑" class="end" :disabled="isdisableds">
              <el-option
                v-for="item in buildLists"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="floors"
              placeholder="选择楼层" class="end endFloor" style="display: none;" :disabled="isdisableds">
              <el-option
                v-for="item in floorLists"
                :label="item.floor"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="rooms"
              placeholder="选择房间" class="end endRoom" style="display: none;" :disabled="isdisableds">
              <el-option
                v-for="item in roomLists"
                :label="item.roomNumber"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="equipments"
              placeholder="选择设备" class="end endDevice" style="display: none;" :disabled="isdisableds">
              <el-option
                v-for="item in equipmentLists"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <div class="icon-frame float-right" v-if="!isdisableds" @click="jinyongs">
              <el-tooltip content="全屏" placement="保存">
              <i class="fas fa-check-circle font-blue float-right"></i>
            </el-tooltip>
            </div>
            <div class="icon-frame float-right" v-if="isdisableds" @click="kaiqis">
              <el-tooltip content="全屏" placement="编辑">
              <i class="fas fa-pencil-alt font-yellow float-right"></i>
            </el-tooltip>
            </div>
          </el-form-item>
          <el-form-item label="节点" prop="buildingNode" class="line-node not-null col-sm-12">
            <div class="contentNode">
              <ul class="list-unstyled margin-bottom0">
                <li class="margin-bottom0" v-for="(item,index) in inspectionListNode">
                  <span class="line-show">{{ item.build }}</span>
                  <span class="line-show" v-show="item.floor!=''">{{ item.floor }}</span>
                  <span class="line-show" v-show="item.room!=''">{{ item.room }}</span>
                  <span class="line-show margin-right0">{{ item.equipment }}</span>
                  <div class="icon-frame float-right" @click="Delete(index)">
                  <el-tooltip content="全屏" placement="移除">  
                    <i class="fas fa-minus-circle font-red float-right"></i>
                  </el-tooltip>
                  </div>
                </li>
              </ul>
            </div>
            <el-select
              v-model="form.buildingNode"
              placeholder="选择建筑" class="Node">
              <el-option
                v-for="item in buildListNode"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="floorNode"
              placeholder="选择楼层" class="Node NodeFloor"  style="display: none;">
              <el-option
                v-for="item in floorListNode"
                :label="item.floor"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="roomNode"
              placeholder="选择房间" class="Node NodeRoom"  style="display: none;">
              <el-option
                v-for="item in roomListNode"
                :label="item.roomNumber"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="equipmentNode"
              placeholder="选择设备" class="Node NodeDevice"  style="display: none;">
              <el-option
                v-for="item in equipmentListNode"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <div class="icon-frame float-right" @click="Add">
              <el-tooltip content="全屏" placement="添加节点">  
                <i class="fas fa-plus-circle font-blue float-right"></i>
              </el-tooltip>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div class="main_footer">
        <a class="btn-ok" @click="btn('form')"><i class="el-icon-circle-check-outline"></i> 保存并提交</a>
        <a class="btn-back" @click="back">返回</a>
      </div>
    </aside>
    <!-- 地图 -->
    <aside>      
        <div class="maps">
          <div class="text-center padding-top120">
            <!-- <h1 class="size-80 font-white">地图</h1> -->
          </div>
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
            region1:'',//选择单位
            region2:'',//巡检类型
            building:'',//选择建筑（开始）
            buildings:'',//选择建筑（结束）
            buildingNode:'',//选择建筑节点
          },
          
          
          
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
          }],
          rules: {
            name:[
              { required: true, trigger: 'blur',  message: '请填写路线名称' }
            ],
            region1:[
              { required: true, message: '请选择所属单位', trigger: 'change' }
            ],
            region2:[
              { required: true, message: '请选择巡检类型', trigger: 'change' }
            ],
            building: [
              { required: true, message: '请选择巡检起点', trigger: 'change' }
            ],
            buildings:[
              { required: true, message: '请选择巡检终点', trigger: 'change' }
            ],
            buildingNode:[
              { required: true, message: '请选择巡检节点', trigger: 'change' }
            ]
          }
        }
      },
      methods:{
        jinyong(){//禁用选择框
          this.isdisabled=true;
          $('')
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
        btn(formName){//保存、提交
         this.$refs[formName].validate((valid) => {
            if (valid) {
              this.inspectionNode();

              //循环得出需要的id、name值
              var buildListName = '';
              var floorListName = '';
              var roomListName = '';
              var equipmentListName = '';
              var buildListsName = '';
              var floorListsName = '';
              var roomListsName = '';
              var equipmentListsName = '';
              //起点
              this.buildList.forEach((item,index)=>{
                // //console.log(item.id)
                if(item.id == this.form.building){
                  // //console.log(item.name);
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

              //终点
              this.buildLists.forEach((item,index)=>{
                // //console.log(item.id)
                if(item.id == this.form.buildings){
                  // //console.log(item.name);
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


              if(this.form.building !== 0 && this.form.building !== '0'){//起点
                this.inspectionNodes.push({sorting:0,buildingId:this.form.building,buildingName:buildListName,floorId:this.floor,floorNumber:floorListName,roomId:this.room,roomNumber:roomListName,deviceId:this.equipment,deviceName:equipmentListName});
              }else{
                this.inspectionNodes.push({sorting:0,buildingId:0,buildingName:'室外',floorId:0,floorNumber:'',roomId:0,roomNumber:'',deviceId:this.equipment,deviceName:equipmentListName});
              }
              if(this.form.buildings !== 0 && this.form.buildings !== '0'){//终点
                this.inspectionNodes.push({sorting:this.inspectionNodes.length+1,buildingId:this.form.buildings,buildingName:buildListsName,floorId:this.floors,floorNumber:floorListsName,roomId:this.rooms,roomNumber:roomListsName,deviceId:this.equipments,deviceName:equipmentListsName});
              }else{
                this.inspectionNodes.push({sorting:this.inspectionNodes.length+1,buildingId:0,buildingName:'室外',floorId:0,floorNumber:'',roomId:0,roomNumber:'',deviceId:this.equipments,deviceName:equipmentListsName});
              }
              //console.log(this.endNodes);


              this.$router.push({path:'/Inspection_plan/all'});
              $('#right').show();
            } else {
              //console.log('error submit!!');
              return false;
            }
          });
        },
        back(){
          this.$router.push({path:'/Inspection_plan/all'});
          $('#right').show();
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

          //给所有添加的节点一个下标值
          this.inspectionListIndex++;

          //循环得出需要的id、name值

          //中间节点
          this.buildListNode.forEach((item,index)=>{
            // //console.log(item.id)
            if(item.id == this.form.buildingNode){
              // //console.log(item.name);
              buildId = item.id;
              buildName = item.name;
            }
          });
          // //console.log(buildName);
          this.floorListNode.forEach((item,index)=>{
            // //console.log(item.id)

            if(item.id == this.floorNode){
              floorId = item.id;
              floorName = item.floorName;
            }
          });
          // //console.log(floorName);
          this.roomListNode.forEach((item,index)=>{
            if(item.id == this.roomNode){
              roomId =item.id;
              roomName = item.roomNumber;
            }
          });
          // //console.log(roomName);
          this.equipmentListNode.forEach((item,index)=>{
            if(item.id == this.equipmentNode){
              deviceId =item.id;
              equipmentName = item.name;
            }
          });
          // //console.log(equipmentName);
          // //console.log(this.inspectionNodes);


          //添加节点数组的内容

          if(this.form.buildingNode !== 0 && this.form.buildingNode !== '0'){//节点
            this.inspectionNodes.push({sorting:this.inspectionListIndex,buildingId:buildId,buildingName:buildName,floorId:floorId,floorNumber:floorName,roomId:roomId,roomNumber:roomName,deviceId:deviceId,deviceName:equipmentName});
            this.inspectionListNode.push({build:buildName,floor:floorName,room:roomName,equipment:equipmentName})
          }else{
            this.inspectionNodes.push({sorting:this.inspectionListIndex,buildingId:0,buildingName:'室外',floorId:0,floorNumber:'',roomId:0,roomNumber:'',deviceId:deviceId,deviceName:equipmentName});
            this.inspectionListNode.push({build:'室外',floor:'',room:'',equipment:equipmentName})
          }
          this.form.buildingNode = '';

          //获取数组长度   inspectionNodes
          //console.log(this.inspectionNodes.length+1);

        },
        unitSearch(){
          this.$fetch(
            "/api/unit/queryUnit"
          )
            .then(response => {
              if (response) {
                // //console.log(response);
                this.optionList = response.data.unitList;
                // //console.log(this.optionList);
              }
            })
            .then(err => {
              //console.log(err);
            });
        },
        buildSearch(unitId){
          this.$fetch("/api/building/selectNode",{
            unitId:unitId
          }).then(response=>{
            //console.log('buildSearch:'+JSON.stringify(response));
            if (response) {
              this.buildList = response.data.list;
              // //console.log(this.buildList);
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
              // //console.log(this.floorList);
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
              // //console.log(this.roomList);
            }
          })
        },
        equipmentSearch(roomId){
          this.$fetch("/api/building/selectNode",{
            roomId:roomId
          }).then(response=>{
            //console.log('equipmentSearch:'+response);
            if (response) {
              this.equipmentList = response.data.list;
              // //console.log(this.equipmentList);
            }
          })
        },
        equipmentSearchOut(unit,buildingId){
          this.$fetch("/api/building/selectNode",{
            unitId:unit,
            buildIngId:buildingId
          }).then(response=>{
            //console.log('equipmentSearch:'+response);
            if (response) {
              this.equipmentList = response.data.list;
              // //console.log(this.equipmentList);
            }
          })
        },
        buildSearchs(unitId){
          this.$fetch("/api/building/selectNode",{
            unitId:unitId
          }).then(response=>{
            //console.log('buildSearchs:'+JSON.stringify(response));
            if (response) {
              this.buildLists = response.data.list;
              // //console.log(this.buildLists);
            }
          })
        },
        floorSearchs(buildIngId){
          this.$fetch("/api/building/selectNode",{
            buildIngId:buildIngId
          }).then(response=>{
            //console.log('floorSearchs:'+response);
            if (response) {
              this.floorLists = response.data.list;
              // //console.log(this.floorLists);
            }
          })
        },
        roomSearchs(floorId){
          this.$fetch("/api/building/selectNode",{
            floorId:floorId
          }).then(response=>{
            //console.log('roomSearchs:'+response);
            if (response) {
              this.roomLists = response.data.list;
              // //console.log(this.roomLists);
            }
          })
        },
        equipmentSearchs(roomId){
          this.$fetch("/api/building/selectNode",{
            roomId:roomId
          }).then(response=>{
            //console.log('equipmentSearchs:'+response);
            if (response) {
              this.equipmentLists = response.data.list;
              // //console.log(this.equipmentLists);
            }
          })
        },
        equipmentSearchsOut(unit,buildIngId){
          this.$fetch("/api/building/selectNode",{
            unitId:unit,
            buildIngId:buildIngId
          }).then(response=>{
            //console.log('equipmentSearchs:'+response);
            if (response) {
              this.equipmentLists = response.data.list;
              // //console.log(this.equipmentLists);
            }
          })
        },
        buildSearchNode(unitId){
          this.$fetch("/api/building/selectNode",{
            unitId:unitId
          }).then(response=>{
            //console.log('buildSearchNode:'+JSON.stringify(response));
            if (response) {
              this.buildListNode = response.data.list;
              // //console.log(this.buildListNode);
            }
          })
        },
        floorSearchNode(buildIngId){
          this.$fetch("/api/building/selectNode",{
            buildIngId:buildIngId
          }).then(response=>{
            //console.log('floorSearchNode:'+response);
            if (response) {
              this.floorListNode= response.data.list;
              // //console.log(this.floorListNode);
            }
          })
        },
        roomSearchNode(floorId){
          this.$fetch("/api/building/selectNode",{
            floorId:floorId
          }).then(response=>{
            //console.log('roomSearchNode:'+response);
            if (response) {
              this.roomListNode = response.data.list;
              // //console.log(this.roomListNode);
            }
          })
        },
        equipmentSearchNode(roomId){
          this.$fetch("/api/building/selectNode",{
            roomId:roomId
          }).then(response=>{
            //console.log('equipmentSearchNode:'+response);
            if (response) {
              this.equipmentListNode = response.data.list;
              // //console.log(this.equipmentListNode);
            }
          })
        },
        equipmentSearchNodeOut(unit,buildingId){
          this.$fetch("/api/building/selectNode",{
            unitId:unit,
            buildIngId:buildingId
          }).then(response=>{
            //console.log('equipmentSearchNode:'+response);
            if (response) {
              this.equipmentListNode = response.data.list;
              // //console.log(this.equipmentListNode);
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
          var inspectionNodes = { name:this.form.name,type:this.form.region2,unitId:this.form.region1,unitName:unitName,inspectionNodes:this.inspectionNodes };
          this.$post("/api/admin/inspection/insertInspectionPlan",inspectionNodes,{
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(response=>{
            //console.log(response);
            //console.log(this.startNodes);
            //console.log(this.endNodes);
            //console.log(this.inspectionNodes)
          })
        }
      },
      mounted(){
        $('.el-scrollbar').css({
            'background':'#000'
        });
        $('.el-select-dropdown').css('border-color','#333');
        $('.el-select-dropdown__item').css('color','#999');
        $('.modal-body .el-input__inner').css({'background-color':'#111','border-color':'#282828','border-radius':'0'});
        this.unitSearch();
      },
      computed:{
        region1(){
          return this.form.region1 ;
        },
        building(){
          return this.form.building ;
        },
        buildings(){
          return this.form.buildings ;
        },
        buildingNode(){
          return this.form.buildingNode ;
        }
      },
      watch:{
        // form:{
        //   //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
        //   handler(curVal,oldVal){
        //     // //console.log(curVal);
        //     this.form = curVal;
        //     // //console.log(this.form);
            
        //   },
        //   deep:true
        // },
        region1(curVal,oldVal){
          this.form.region1 = curVal ;
          this.buildSearch(this.form.region1);
          this.buildSearchs(this.form.region1);
          this.buildSearchNode(this.form.region1);
        },
        building(curVal,oldVal){
          this.form.building = curVal ;
          //console.log(this.form.building);
          //console.log(typeof this.form.building)
          if(this.form.building !== 0 && this.form.building !== '0'){
            $('.startFloor').show();
            $('.startDevice').hide();
            this.floor = '';
            this.room = '';
            this.equipment = '';
            this.floorSearch(this.form.building);
          }else{
            $('.startFloor').hide();
            $('.startRoom').hide();
            $('.startDevice').show();
            this.equipment = '';
            console.log(this.form.building)
            this.equipmentSearchOut(this.form.region1,this.form.building);
          }
        },
        floor(curVal,oldVal){
          this.floor = curVal ;
          //console.log(this.floor);
          if(this.floor !== 0){
            this.roomSearch(this.floor);
            $('.startRoom').show();
          }
        },
        room(curVal,oldVal){
          this.room = curVal ;
          //console.log(this.room);
          if(this.room !== 0){
            this.equipmentSearch(this.room);
            $('.startDevice').show();
          }
        },
        buildings(curVal,oldVal){
          this.form.buildings = curVal ;
          // //console.log(this.form.building);
          if(this.form.buildings !== 0 && this.form.buildings !== '0'){
            $('.endFloor').show();
            $('.endDevice').hide();
            this.floors = '';
            this.rooms = '';
            this.equipments = '';
            this.floorSearchs(this.form.buildings);
          }else{
            $('.endFloor').hide();
            $('.endRoom').hide();
            $('.endDevice').show();
            this.equipments = '';
            this.equipmentSearchsOut(this.form.region1,this.form.buildings);
          }
        },
        floors(curVal,oldVal){
          this.floors = curVal ;
          // //console.log(this.floor);
          if(this.floors !== 0){
            this.roomSearchs(this.floors);
            $('.endRoom').show();
          }
        },
        rooms(curVal,oldVal){
          this.rooms = curVal ;
          // //console.log(this.rooms);
          if(this.rooms !== 0){
            this.equipmentSearchs(this.rooms);
            $('.endDevice').show();
          }
        },
        buildingNode(curVal,oldVal){
          this.form.buildingNode = curVal ;
          if(this.form.buildingNode !== 0 && this.form.buildingNode !== '0'){
            $('.NodeFloor').show();
            $('.NodeRoom').hide();
            $('.NodeDevice').hide();
            this.floorNode = '';
            this.roomNode = '';
            this.equipmentNode = '';
            this.floorSearchNode(this.form.buildingNode);
          }else{
            $('.NodeFloor').hide();
            $('.NodeRoom').hide();
            $('.NodeDevice').show();
            this.equipmentNode = '';
            this.equipmentSearchNodeOut(this.form.region1,this.form.buildingNode);
          }
        },
        floorNode(curVal,oldVal){
          this.floorNode = curVal ;
          // //console.log(this.floor);
          if(this.floorNode !== 0){
            this.roomSearchNode(this.floorNode);
            $('.NodeRoom').show();
            $('.NodeDevice').hide();
          }
        },
        roomNode(curVal,oldVal){
          this.roomNode = curVal ;
          // //console.log(this.roomNode);
          if(this.roomNode !== 0){
            this.equipmentSearchNode(this.roomNode);
            $('.NodeDevice').show();
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
</style>
