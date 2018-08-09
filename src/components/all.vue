<template>
  <div>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="fa fa-th-large font-gray-666 float-left"></i>
        <h2 class="float-left font-white size-16">设备管理</h2>
      </div>
      <div class="main_nav float-right">
        <router-link to="/Equipment_management/list"><button class="btn_add" @click="btn_add"><i class="fa fa-th-large font-gray-666 float-left"></i>新增</button></router-link>
      </div>
    </div>
    <div class="main_all_content">
      <div class="main_content_top">
        <el-form label-width="80px" class="float-left">
          <el-select v-model="unit" placeholder="选择单位" class="select" style="width:200px;">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-select
              v-model="building"
            placeholder="选择建筑"  class="sbwz_138_32 start float-left" style="width:200px;">
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
              v-model="equipment"
              placeholder="选择设备类型" class="sbwz_120_32 start startDevice" style="width:auto;">
              <el-option
                v-for="item in equipmentList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
        </el-form>
        <div class="main_nav_two float-right">
          <router-link to="/Equipment_management/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>列表</button></router-link>
          <router-link to="/Equipment_management/maps"><button @click="btn_map"><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link>
        </div>
      </div>
      <div class="main_content_table">
        <el-table
          :data="tableData"
          border
          :default-sort = "{prop: 'Serial_number', order: 'descending'}"
          style="width: 100%;height:570px;">
          <el-table-column
            prop="Serial_number"
            type="index"
            width="60"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            width="170"
            :show-overflow-tooltip="true"
            label="设备名称">
          </el-table-column>
          <el-table-column
            prop="location"
            width="160"
            :show-overflow-tooltip="true"
            label="设备位置">
          </el-table-column>
          <el-table-column
            prop="deviceTypeName"
            width="100"
            :show-overflow-tooltip="true"
            label="设备类型">
          </el-table-column>
          <el-table-column
            prop="height"
            width="130"
            label="相对地板高度（m）">
          </el-table-column>
          <el-table-column
            prop="fheight"
            width="140"
            label="相对天花板高度（m）">
          </el-table-column>
          <el-table-column
            prop="startDate"
            width="100"
            :show-overflow-tooltip="true"
            label="投入使用时间">
          </el-table-column>
          <el-table-column
            prop="startDate"
            width="130"
            :formatter="formatter"
            label="运行时长（天）">
          </el-table-column>
          <el-table-column
            prop="lifeMonth"
             width="120"
            label="更换周期（天）">
          </el-table-column>
          <el-table-column 
            prop="status"
            width="120"
            label="状态">
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.status === 1 ? 'green' : 'red'"
                disable-transitions v-if='scope.row.status==1'>正常<i class="fa fa-th-large font-gray-666"></i></el-tag>
              <el-tag
                :type="scope.row.status === 2 ? 'yellow' : 'green'"
                disable-transitions v-if='scope.row.status==2'>故障</el-tag>
              <el-tag
                :type="scope.row.status === 3 ? 'red' : 'green'"
                disable-transitions v-if='scope.row.status==3'>警报</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <button @click="start_plan(scope.row)" data-toggle="modal" data-target="#mymodal" style="width:40px;height:22px;border:2px solid #bad616;color: #bad616;background-color: #111111;line-height: 19px;margin:0;padding:0;font-size: 12px;text-align: center;margin-right:10px;">修改</button>
              <i @click="delete_plan(scope.row)" data-toggle="modal" data-target="#mymodal2"  class="fa fa-th-large font-gray-666" style="margin-right: 10px;"></i>
              <i @click="show3(scope.row)" class="fa fa-th-large font-gray-666"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="main_content_bottom">
        <div class="bottom_con">
          <div class="float-left">
            <a href="javascript:;" class="font-gray-666" style="margin-left:5px;">打印</a>
            <a href="javascript:;" class="font-gray-666" style="margin-left:5px;">导出</a>
            <a href="javascrip:;" class="font-gray-666" style="margin-left:5px;">导出二维码</a>
          </div>
          <el-pagination style="float: right;background: transparent"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="10"
                         layout="prev, pager, next"
                         :total="totalList">
          </el-pagination>
          <span style="float: right;margin-top:5px;color: #666;margin-left:5px;margin-right:10px;">{{page}}页</span>
          <el-pagination style="float: right;"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="10"
                         layout="total"
                         :total="totalList">
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">修改设备</h4>
          </div>
          <div class="modal-body" style="height:650px;overflow-y:auto;">
            <el-form ref="form" :label-position="labelPosition" :model="form">
              <el-form-item label="设备名称">
                <!-- <span class="font-red" style="position: absolute;top:-45px;right:20px;">建筑名称有误或重复</span> -->
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="所属单位">
                <el-select v-model="form.unitId" placeholder="选择单位" class="select selectUnit" style="width:auto;">
                  <el-option label="全部单位" value=""></el-option>
                  <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="设备类型">
                <el-select
                  v-model="form.equipmentId"
                  placeholder="选择设备类型" class="sbwz_138_32 start" style="margin-left:0px;width:auto;">
                  <el-option
                    v-for="item in equipmentList"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="设备位置">
                <el-select
                  v-model="form.buildingId"
                placeholder="选择建筑"  class="sbwz_138_32 start float-left" style="margin-left:0px;width:auto;">
                  <el-option label="室外" value="0"></el-option>
                  <el-option
                    v-for="item in form.buildList"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
                <el-select
                  v-model="form.floorId"
                  placeholder="选择楼层" class="sbwz_138_32 start">
                  <el-option
                    v-for="item in form.floorList"
                    :label="item.floorName+'层'"
                    :value="item.id">
                  </el-option>
                </el-select>
                <el-select
                  v-model="form.roomId"
                  placeholder="选择房间" class="sbwz_138_32 start">
                  <el-option
                    v-for="item in form.roomList"
                    :label="item.roomNumber+'房间'"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="坐标">
                <el-input v-model="form.point.pointX" style="display:inline-block;width:200px;"></el-input>
                <el-input v-model="form.point.pointY" style="display:inline-block;width:200px;"></el-input>
              </el-form-item>

              <el-form-item label="物理地址">
                <el-input v-model="form.PhysicalAddress"></el-input>
              </el-form-item>

              <el-form-item label="投入使用日期">
                <div class="block">
                  <el-date-picker
                    v-model="form.startDate"
                    type="date"
                    placeholder="选择年"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </el-form-item>
              <el-form-item label="运行时长">
                <el-input v-model="form.time"></el-input>
              </el-form-item>
              <el-form-item label="相对房顶高度（m）">
                <el-input v-model="form.RoofHeight"></el-input>
              </el-form-item>
              <el-form-item label="相对地板高度（m）">
                <el-input v-model="form.floorHeight"></el-input>
              </el-form-item>
              <el-form-item label="更换周期（天）">
                <el-input v-model="form.Retroperiod"></el-input>
              </el-form-item>
              <el-form-item label="生产商">
                <el-input v-model="form.Bike"></el-input>
              </el-form-item>
              <el-form-item label="生产日期">
                <div class="block">
                  <el-date-picker
                    v-model="form.ProductionDay"
                    type="date"
                    placeholder="选择年"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </el-form-item>
              <el-form-item label="维保单位">
                <el-input v-model="form.Refundable"></el-input>
              </el-form-item>
              <el-form-item label="维保人员">
                <el-input v-model="form.linkname"></el-input>
              </el-form-item>
              <el-form-item label="维保电话">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <div style="clear: both;"></div>
            </el-form>
          </div>
          <div class="modal-footer">
            <el-button type="primary" @click.native.prevent="startRow()" icon="el-icon-search" class="primary" data-dismiss="modal">提交</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="mymodal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" style="">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel2">提示</h4>
            <h5 class="modal-p">删除操作并不影响之前的统计数据</h5>
          </div>
          <div class="modal-body" style="height:217px;">
            <h2 style="text-align:center;font-size: 16px;color:#f13131;margin-top:30px;font-weight:bold;">是否删除</h2>
            <p style="text-align: center;font-size: 16px; color: #fff;margin-top:20px;">{{ deviceName }}</p>
          </div>
          <div class="modal-footer">
            <el-button type="danger" @click.native.prevent="deleteRow()" icon="el-icon-search" class="danger" data-dismiss="modal">删除</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="mymodal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel3" style="">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel3">提示</h4>
            <h5 class="modal-p">关闭操作并不影响之前的统计数据</h5>
          </div>
          <div class="modal-body" style="height:217px;">
            <h2 style="text-align:center;font-size: 16px;color:#f13131;margin-top:30px;font-weight:bold;">是否关闭</h2>
            <p style="text-align: center;font-size: 16px; color: #fff;margin-top:20px;">{{ deviceName }}</p>
          </div>
          <div class="modal-footer">
            <el-button type="danger" @click.native.prevent="StopRow()" icon="el-icon-search" class="danger" data-dismiss="modal">关闭</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { realconsole } from '../assets/js/management.js'
  export default {
    data() {
      return {
        labelPosition: 'top',
        form:{
          id:'',
          name:'',
          unitId:null,
          unitName:'',
          buildingId:'',
          buildingName:'',
          floorId:'',
          floorNumber:'',
          roomId:'',
          roomNumber:'',
          equipmentId:'',
          deviceTypeName:'',
          roomList:[],
          floorList:[],
          buildList:[],
          point:{
            pointX:'',
            pointY:'',
            xRate:'',
            yRate:''
          },
          PhysicalAddress:'',
          startDate:'',
          lifeMonth:'',
          RoofHeight:'',
          floorHeight:'',
          Retroperiod:'',
          Bike:'',
          ProductionDay:'',
          Refundable:'',
          linkname:'',
          phone:''
        },


        
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
        tableData: [],//设备列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        deviceIndex:'',
        deviceName:''
      }
    },
    methods: {
      formatter(row, column){
        return this.dateMinus(row.startDate)
      },
      btn_map(){
        $('.plan').hide();
        $('.mapTable').show();
        $('.total').show();
      },
      btn_add(){
        $('#right').css('display','none');
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      start_plan(row){//修改
        $('#mymodal').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
        this.deviceIndex = row.id ;
        this.tableData.forEach((item,index)=>{
          if(item.id == row.id){
            this.form.id = item.id ;
            this.form.name = item.name ;
            this.form.unitId = item.unitId ;
            this.form.unitName = item.unitName ;
            this.form.buildingId = item.buildingId ;
            this.form.buildingName = item.buildingName ;
            this.form.floorId = item.floorId ;
            this.form.floorNumber = item.floorNumber ;
            this.form.roomId = item.roomId ;
            this.form.roomNumber = item.roomNumber
            this.form.equipmentId = item.deviceTypeId ;
            this.form.deviceTypeName = item.deviceTypeName;
            this.form.point.pointX = item.pointX ;
            this.form.point.pointY = item.pointY ;
            this.form.point.xRate = item.xRate ;
            this.form.point.yRate = item.yRate ;
            this.form.PhysicalAddress = item.mac ;
            this.form.startDate = item.startDate ;
            this.form.RoofHeight = item.height ;
            this.form.floorHeight = item.fheight ;
            this.form.Retroperiod = item.lifeMonth ;
            this.form.Bike = item.firm ;
            this.form.ProductionDay = item.productDate ;
            this.form.Refundable = item.maintenanceUnit ;
            this.form.linkname = item.maintenanceUser ;
            this.form.phone = item.maintenancePhone ;
          }
        })
      },
      startRow(){
        this.$fetch("/api/device/updateDevice",{
          'id':this.form.id,
          'name':this.form.name,
          'unitId':this.form.unitId,
          'unitName':this.form.unitName,
          'buildingId':this.form.buildingId,
          'buildingName':this.form.buildingName,
          'floorId':this.form.floorId,
          'floorNumber':this.form.floorNumber,
          'roomId':this.form.roomId,
          'roomNumber':this.form.roomNumber,
          'deviceTypeId':this.form.equipmentId,
          'deviceTypeName':this.form.deviceTypeName,
          'pointX':this.form.point.pointX,
          'pointY':this.form.point.pointY,
          'xRate':this.form.point.xRate,
          'yRate':this.form.point.yRate,
          'mac':this.form.PhysicalAddress,
          'startDate':this.form.startDate,
          'height':this.form.RoofHeight,
          'fheight':this.form.floorHeight,
          'lifeMonth':this.form.Retroperiod,
          'firm':this.form.Bike,
          'productDate':this.form.ProductionDay,
          'maintenanceUnit':this.form.Refundable,
          'maintenanceUser':this.form.linkname,
          'maintenancePhone':this.form.phone
        }).then(response=>{
          if(response){
            console.log('修改成功...'+ JSON.stringify(response));
            this.tableList();
          }
        })
      },
      delete_plan(row){//删除
        $('#mymodal2').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
        this.deviceName = row.name;
        this.deviceIndex = row.id;
      },
      show3(row){//跳转
        console.log(row.id);
        this.$store.commit('deviceId',row.id);
        $('.plan').show();
        $('.mapTable').hide();
        $('.total').hide();
      },
      deleteRow(){
          console.log(this.deviceIndex);
          this.$fetch("/api/device/deleteDevice",{
            'deviceId':this.deviceIndex
          }).then(response=>{
            if(response){
              console.log('删除成功...'+ JSON.stringify(response));
              this.tableData.splice(this.deviceIndex,1);
              this.tableList();
            }
          }).then(err => {
            console.log(err);
          });
      },
      dateMinus(sDate){ 
    　　var sdate = new Date(sDate.replace(/-/g, "/")); 
    　　var now = new Date(); 
    　　var days = now.getTime() - sdate.getTime(); 
    　　var day = parseInt(days / (1000 * 60 * 60 * 24)); 
    　　return day; 
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
            // console.log(err);
          });
      },
      tableList(){
        this.$fetch(
          "/api/device/deviceList",{
            unitId:this.unit,
            deviceTypeId:this.equipment,
            buildingId:this.building,
            floorId:this.floor,
            roomId:this.room,
            currentPage:this.currentPage4,
            pageSize:9
          }
        )
          .then(response => {
            console.log('设备111111111111111111'+JSON.stringify(response));
            if (response) {
              // console.log(response.data.inspectionPlanList);
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              this.tableData.forEach((item,index)=>{
                // console.log(111)
                if(index == this.tableData.length-1){
                  this.$store.commit('deviceId',item.id);
                }
              })
              if(this.totalList % 9 == 0){
                this.page = parseInt( this.totalList / 9 )
              }else{
                this.page = parseInt( this.totalList / 9 ) + 1
              }
            }
          })
          .then(err => {
            // console.log(err);
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
          }
        })
      },
      equipmentSearch(){
        this.$fetch("/api/device/deviceTypeEnumList").then(response=>{
          console.log('equipmentSearch:'+response);
          if (response) {
            this.equipmentList = response.data.deviceTypeEnum;
            console.log(this.equipmentList);
          }
        })
      },
      formBuildSearch(unitId){
        this.$fetch("/api/building/selectNode",{
          unitId:unitId
        }).then(response=>{
          console.log('formBuildSearch:'+JSON.stringify(response));
          if (response) {
            this.form.buildList = response.data.list;
            console.log(this.form.buildList);
          }
        })
      },
      formFloorSearch(buildIngId){
        this.$fetch("/api/building/selectNode",{
          buildIngId:buildIngId
        }).then(response=>{
          console.log('formFloorSearch:'+response);
          if (response) {
            this.form.floorList = response.data.list;
            console.log(this.form.floorList);
          }
        })
      },
      formRoomSearch(floorId){
        this.$fetch("/api/building/selectNode",{
          floorId:floorId
        }).then(response=>{
          console.log('formRoomSearch:'+response);
          if (response) {
            this.form.roomList = response.data.list;
            console.log(this.form.roomList);
          }
        })
      }
    },
    computed:{
      unitId(){
        return this.form.unitId;
      },
      buildingId(){
        return this.form.buildingId;
      },
      floorId(){
        return this.form.floorId;
      },
      roomId(){
        return this.form.roomId;
      },
      equipmentId(){
        return this.form.equipmentId;
      }
    },
    watch:{
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        console.log(this.currentPage4);
        this.tableList();
      },
      unit(curVal,oldVal){
        this.unit = curVal;
        this.tableList();
        this.buildSearch(this.unit);
        this.$store.commit('Unit',this.unit);
      },
      building(curVal,oldVal){
        this.building = curVal ;
        console.log(this.building);
        this.floor = '';
        this.room = '';
        this.equipment = '';
        this.floorSearch(this.building);
        this.tableList();
      },
      floor(curVal,oldVal){
        this.floor = curVal ;
        console.log(this.floor);
        if(this.floor !== 0){
          this.roomSearch(this.floor);
          this.tableList();
        }
      },
      room(curVal,oldVal){
        this.room = curVal ;
        console.log(this.room);
        this.tableList();
      },
      equipment(curVal,oldVal){
        this.equipment = curVal ;
        console.log(this.equipment);
        this.tableList();
      },
      unitId(curVal,oldVal){
        this.form.unitId = curVal;
        this.formBuildSearch(this.form.unitId);
      },
      buildingId(curVal,oldVal){
        this.form.buildingId = curVal;
        console.log(this.form.buildingId)
        this.form.floorId = '';
        this.form.roomId = '';
        this.form.equipmentId = '';
        this.formFloorSearch(this.form.buildingId);
      },
      floorId(curVal,oldVal){
        this.form.floorId = curVal;
        if(this.form.floorId !== 0){
          this.formRoomSearch(this.form.floorId);
        }
      },
      roomId(curVal,oldVal){
        this.form.roomId = curVal ;
      },
      equipmentId(curVal,oldVal){
        this.form.equipmentId = curVal;
      }
    },
    mounted(){
      realconsole();
      this.tableList();
      this.unitSearch();
      this.equipmentSearch();
      $('#right').show();
      // this.$store.commit('Unit',this.unit);
      if(this.$route.path == '/Equipment_management/all'){
        $('.mapTable').hide();
      }
    }
  };
</script>
<style lang="scss" scoped>
  h2{
    margin: 0;
    padding: 0;
  }
  main{
    height: 100%;
  }
  @media (min-width: 768px) and (max-width:1600px){
    main {
      padding-left:295px;
      padding-right:400px;
    }
  }
  @media (min-width: 1600px){
    main {
      margin-left:17.58%;
      margin-right: 24%;
    }
  }
  .main_header{
    width:100%;
    height:68px;
    background: #111111;
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
  .main_header button,.main_nav_two button{
    width:64px;
    height:28px;
    float: left;
    outline:none;
    display: flex;
    align-items: center;
    justify-content: center;
    border:2px solid transparent;
    background: #111111;
    font-size: 12px;
    color: #999;
    margin-top: 21px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .main_header a:nth-child(2) button{
    border-left:none;
  }
  .main_header button i{
    margin-right: 3px;
  }
  .main_header button.btn_add i{
    color: #000;
  }
  .main_header button.btn_add{
    width:64px;
    height:28px;
    border:none;
    background: #bad616;
    margin-left: 6px;
    margin-right: 20px;
    color: #000;
  }
  .main_nav_two{
    margin-top:6px;
    margin-right:20px;
  }
  .main_nav_two button{
    margin-top:0;
  }
  .main_nav_two i{
    margin-right: 3px;
  }
  .main_content_top{
    height:40px;
    background: #222222;
  }
  .main_content_table{
    width:100%;
    background: #111111;
  }
  .main_content_bottom{
    width:100%;
    height:60px;
    padding-top:10px;
    background: #111111;
    .bottom_con{
      margin:0 20px;
      padding-top:10px;
      border-top:1px solid #222222;
    }
  }
  .main_con_nav{
    button{
      background-color: #222222;
    }
    margin-left:30%;
    a:nth-last-child(1) button{
      border-left:none;
    }
    .link-active button{
      color: #191d03;
      background-color: #bad616;
    }
    .link-active i{
      color: #191d03;
      background-color: #bad616;
    }
  }
  .router-link-active button{
    color: #b8b8b8;
    background-color: #000000;
  }
  .router-link-active i{
    color: #b8b8b8;
    background-color: #333333;
  }
 
  .main_nav_show{
    width:64px;
    position: absolute;
    top:159px;
    z-index: 33;
    border:2px solid #bad616;
    ul{
      width:100%;
      li{
        float: none;
        width:100%;
        a{
          button{
            margin:0;
            border-top:2px;
            border-bottom:2px;
            margin-left:-42px;
            border-color:#bad616;
          }
        }
      }
    }
  }
  .btn_active button{
    background-color: #bad616;
    color: #0c0e01;
  }
  .btn_active i{
    color: #0c0e01;
    background-color: transparent;
  }

  .span_show{
    width:40px;
    height:32px;
    border:2px solid #bad616;
    box-sizing: border-box;
    display: inline-block;
    line-height: 31px !important;
    text-align:center;
    color: #bad616;
    background-color: #111111;
  }
  .span_hide{
    width:40px;
    height:32px;
    border:2px solid #333333;
    box-sizing: border-box;
    display: inline-block;
    line-height: 31px !important;
    text-align:center;
    color: #5e5e5e;
    background-color: #111111;
  }
  .danger{
    width:132px;
    background-color: #f13131;
    color: #000;
    font-size: 14px;
    height:32px;
    line-height: 32px;
    padding:0;
  }
  .el-tag--red{
    color: red !important;
    padding:0 !important;
    border:none;
  }
  .el-tag--green{
    color: #fff !important;
    padding:0 !important;
    border:none;
    i{
      margin-left:7px;
    }
  }
  .el-tag--yellow{
    color: yellow !important;
    padding:0 !important;
    border:none;
    i{
      margin-left:7px;
    }
  }

  .start{
    margin-top:4px;
    margin-left:10px;
  }
</style>
