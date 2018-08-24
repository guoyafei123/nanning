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
    <!-- 主体 -->
    <div class="main_all_content">
      <!-- 筛选 -->
      <div class="main_content_top">
        <el-form ref="form" status-icon :model="form" class="float-left">
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
        <div class="main_nav_two float-right">
          <router-link to="/Equipment_management/all"><span><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
          <router-link to="/Equipment_management/maps"><span @click="btn_map"><i class="icon iconfont icon-liebiaoditu-xian-"></i>地图</span></router-link>
        </div>
      </div>
      <!-- 表格 -->
      <div class="main_content_table">
        <el-table
          :data="tableData"
          border
          :highlight-current-row="true"
          :default-sort = "{prop: 'Serial_number', order: 'descending'}">
          <el-table-column
            prop="Serial_number"
            type="index"
            fixed="left"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            :show-overflow-tooltip="true"
            label="设备名称">
          </el-table-column>
          <el-table-column
            prop="location"
            :show-overflow-tooltip="true"
            label="设备位置">
          </el-table-column>
          <el-table-column
            prop="deviceTypeName"
            :show-overflow-tooltip="true"
            label="设备类型">
          </el-table-column>
          <el-table-column
            prop="height"
            label="相对地板高度 (cm)">
          </el-table-column>
          <el-table-column
            prop="fheight"
            label="相对天花板高度 (cm)">
          </el-table-column>
          <el-table-column
            prop="startDate"
            :show-overflow-tooltip="true"
            label="投入使用时间">
          </el-table-column>
          <el-table-column
            prop="startDate"
            :formatter="formatter"
            label="运行时长 (天)">
          </el-table-column>
          <el-table-column
            prop="lifeMonth"
            label="更换周期 (天)">
          </el-table-column>
          <el-table-column 
            prop="status"
            label="状态">
            <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.status === 1 ? 'green' : 'red'"
                    disable-transitions v-if='scope.row.status==1'>正常</el-tag>
                  <el-tag
                    :type="scope.row.status === 2 ? 'red' : 'green'"
                    disable-transitions v-if='scope.row.status==2'>故障</el-tag>
                  <el-tag
                    :type="scope.row.status === 2 ? 'red' : 'green'"
                    disable-transitions v-if='scope.row.status==3'>警报</el-tag>
                </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            width="140px"
            label="操作">
            <template slot-scope="scope">
              <button @click="start_plan(scope.row)" data-toggle="modal" data-target="#mymodal"><i class="el-icon-edit-outline" data-toggle="tooltip" title="编辑"></i></button>
              <button @click="delete_plan(scope.row)" data-toggle="modal" data-target="#mymodal2"><i class="el-icon-delete" data-toggle="tooltip" title="删除"></i></button>
              <button @click="show3(scope.row)"><i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i></button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="main_content_bottom">
        <div class="bottom_con">
          <div class="float-left btn-system">
            <a href="javascript:;">打印</a>
            <a href="javascript:;">导出</a>
            <a href="javascript:;" @click="qrcode">导出二维码</a>
          </div>
          <el-pagination
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="10"
                         layout="prev, pager, next"
                         :total="totalList">
          </el-pagination>
          <span>{{page}}页</span>
          <el-pagination
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="10"
                         layout="total"
                         :total="totalList">
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- 编辑Modal -->
    <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">修改设备</h4>
            <h5 class="modal-p font-blue">{{this.form.name}}</h5>
          </div>
          <div class="modal-body">
            <!--
              class类not-null为必填标识,如需请加在<el-form-item>
              class类hint-error为错误提示
             -->
            <div class="main_content">
              <el-form class="row" ref="form" :label-position="labelPosition" :model="form">
                <el-form-item label="设备名称" class="not-null">
                  <!-- <span class="hint-error">设备名称有误或重复</span> -->
                  <el-input v-model="form.name" class="col-sm-4"></el-input>
                </el-form-item>
                <el-form-item label="所属单位" class="not-null">
                  <el-select v-model="form.unitId" placeholder="选择单位" class="select selectUnit col-sm-4">
                    <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="设备类型" class="not-null">
                  <el-select
                    v-model="form.equipmentId"
                    placeholder="选择设备类型" class="start col-sm-4">
                    <el-option
                      v-for="item in equipmentList"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="设备位置" class="not-null">
                  <el-select
                    v-model="form.buildingId"
                  placeholder="选择建筑"  class="start col-sm-4">
                    <el-option label="室外" value="0"></el-option>
                    <el-option
                      v-for="item in form.buildList"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                  <el-select
                    v-model="form.floorId"
                    placeholder="选择楼层" class="start col-sm-4">
                    <el-option
                      v-for="item in form.floorList"
                      :label="item.floorName+'层'"
                      :value="item.id">
                    </el-option>
                  </el-select>
                  <el-select
                    v-model="form.roomId"
                    placeholder="选择房间" class="start col-sm-4">
                    <el-option
                      v-for="item in form.roomList"
                      :label="item.roomNumber+'房间'"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="坐标">
                  <el-input placeholder="X" v-model="form.point.pointX" class="col-sm-4"></el-input>
                  <el-input placeholder="Y" v-model="form.point.pointY" class="col-sm-4"></el-input>
                </el-form-item>
                <div class="col-sm-12">
                  <div class="row">
                    <el-form-item label="物理地址" class="col-sm-4">
                      <el-input v-model="form.PhysicalAddress"></el-input>
                    </el-form-item>
                    <el-form-item label="控制器ID" class="not-null col-sm-4">
                      <el-input v-model="form.controlId"></el-input>
                    </el-form-item>
                  </div>
                </div>
                <el-form-item label="相对房顶高度 (cm)" class="col-sm-4">
                  <el-input v-model="form.RoofHeight"></el-input>
                </el-form-item>
                <el-form-item label="相对地板高度 (cm)" class="col-sm-4">
                  <el-input v-model="form.floorHeight"></el-input>
                </el-form-item>
                <div class="col-sm-12">
                    <div class="row">
                      <el-form-item label="生产商" class="col-sm-4">
                        <el-input v-model="form.Bike"></el-input>
                      </el-form-item>
                      <el-form-item label="生产日期" class="col-sm-4">
                        <div class="block">
                          <el-date-picker
                            v-model="form.ProductionDay"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd">
                          </el-date-picker>
                        </div>
                      </el-form-item>
                      <el-form-item label="投入使用日期" class="col-sm-4">
                        <div class="block">
                          <el-date-picker
                            v-model="form.startDate"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd">
                          </el-date-picker>
                          </div>
                        </el-form-item>
                      </div>
                    </div>
                  <div class="col-sm-12">
                    <div class="row">
                      <el-form-item label="维保单位" class="col-sm-4">
                        <el-input v-model="form.Refundable"></el-input>
                      </el-form-item>
                      <el-form-item label="维保人员" class="col-sm-4">
                        <el-input v-model="form.linkname"></el-input>
                      </el-form-item>
                      <el-form-item label="维保电话" class="col-sm-4">
                        <el-input v-model="form.phone"></el-input>
                      </el-form-item>
                    </div>
                </div>
                <div class="col-sm-12 margin-bottom20">
                  <div class="row">
                    <el-form-item label="更换周期 (天)" class="not-null col-sm-4">
                      <el-input v-model="form.Retroperiod"></el-input>
                    </el-form-item>
                  </div>
                </div>                 
              </el-form>
            </div>
          </div>
          <div class="modal-footer">
            <el-button type="primary" @click.native.prevent="startRow()" icon="el-icon-circle-check-outline" class="primary" data-dismiss="modal">提交</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 删除设备Modal -->
    <div class="modal fade" id="mymodal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel2">提示</h4>
                <h5 class="modal-p">删除操作并不影响之前的统计数据</h5>
              </div>
              <div class="modal-body text-center container-padding40">
                <h3 class="font-red size-14">是否删除</h3>
                <p class="font-white size-16">{{ deviceName }}</p>
              </div>
              <div class="modal-footer">
                <el-button type="danger" @click.native.prevent="deleteRow()" icon="el-icon-delete" class="danger" data-dismiss="modal">删除</el-button>
                <el-button class="back" data-dismiss="modal">取消</el-button>
              </div>
            </div>
          </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
  import { realconsole } from '../../assets/js/management.js'
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
        this.deviceName = row.name;
        this.deviceIndex = row.id;
      },
      show3(row){//跳转
        console.log(row.id);
        this.$store.commit('currentPage',this.currentPage4);
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
      qrcode(){
        window.open("/api/qrcode/deviceImgs?unitId="+this.unit+'&buildingId='+this.building+'&floorId='+this.floor+'&roomId='+this.room+'&deviceTypeId='+this.equipment);
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
            pageSize:14
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
        
        this.buildSearch(this.unit);
        this.$store.commit('Unit',this.unit);
        this.tableList();
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
        console.log(curVal)
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
      },
      Refresh(){
        // this.floor
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
    },
    computed:mapState([
      'Refresh'
    ])
  };
</script>
