<template>
  <div class="toolright z-index-20">
    <!-- 设备详情 -->
    <div class="plan">
      <section>
          <!-- <span @click="back_first" class="font-gray-666" v-if="this.$route.path == '/Equipment_management/maps'">&lt;返回</span> -->
        <a @click="back_first" class="btn-back" v-if="this.$route.path == '/Equipment_management/maps'"><i class="el-icon-arrow-left"></i>返回</a>
      </section>
      <!-- 设备名称 -->
      <section>        
        <div class="toolcount font-gray-999 size-12 margin-top20 clearfix">
                  <!-- 已选择 -->
                  <div class="personinfo">
                        <p>                       
                        <span class="size-20 font-blue">
                          <!-- <i class="icon iconfont icon-jiankong-mian- size-20"></i> <span> -->{{ this.device.name }}</span>
                        </span>
                        <span class="float-right">
                                <span class="bgbox-max bg-gray-333 font-gray-999 size-10">{{this.device.deviceTypeName}}</span>
                            </span>
                        </p>
                        <p class="col-sm-12 text-left padding0">
                            <span>
                                <i class="el-icon-location"></i> {{this.device.location}}</span>
                        </p>
                        <!-- <P class="col-sm-5 text-right padding0">
                            <span class="text-right">
                            最后更新：<span class="font-gray-999">2018.07.09 08:00:00</span>
                            </span>
                        </P>  -->                       
                  </div>
        </div>
      </section>
      <!-- 设备信息统计 -->
      <section>
          <div class="toolcount margin-top20 clearfix">
              <div class="col-sm-4 font-gray-999 padding0">
                  <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                      <li>
                          <h1 class="toolcount-p1">
                            <span class="font-blue" v-if='this.device.status==1'>正常</span>
                            <span class="font-orange" v-if='this.device.status==2'>故障</span>
                            <span class="font-red" v-if='this.device.status==3'>警报</span>
                          </h1>
                      </li>
                      <li class="margin-top30">
                          <p class="size-10 ">Device Status</p>
                      </li>
                      <li>
                          <p class="size-16 font-blue">设备运行状态</p>
                      </li>
                  </ul>
              </div>
              <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
                  <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
                      <li>
                          <p class="size-18 font-white">信息统计</p>
                      </li>
                      <li class="margin-bottom5">
                          <p class="size-10 set-scaleright">Repair Statistics</p>
                      </li>
                      <li class="margin-top10">
                          <p class="set-width-100">投入时间 <span class="font-white">{{this.device.startDate}}</span></p>
                          <!-- <p class="pull-right">
                              <a class="bgbox-min bg-blue font-black size-10" data-toggle="tooltip" title="查看监控摄像头">
                                    <i class="icon iconfont icon-jiankong-mian-"></i> 监控</a>
                          </p> -->
                      </li>
                      <li class="row text-center padding-right16 margin-top10">
                          <div class="col-sm-4 personnel-borderright">
                              <p class="size-16 show font-blue">18</p>
                              <p>运行(天)</p>
                          </div>                          
                          <div class="col-sm-4 personnel-borderright">
                              <p class="size-16 show font-white">{{this.device.lifeMonth}}</p>
                              <p>更换周期</p>
                          </div>
                          <div class="col-sm-4">
                              <p class="size-16 show font-white" v-html="this.device.maintenanceUnit == null ? '-' : this.device.maintenanceUnit"></p>
                              <p>维保人员</p>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </section>
      <!-- 设备基本信息 -->
      <section>
        <div class="textandimg margin-top20">
          <h4 class="p-title">设备详情<!-- <span class="pull-right font-blue">{{ this.device.name }}</span> --></h4>
          <div class="row textandimg-main margin-top10 size-12">
                  <div class="col-sm-12">
                      <span>设备名称</span>
                      <strong v-html="this.device.name"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>设备类型</span>
                      <strong v-html="this.device.deviceTypeName"></strong>
                  </div>                                  
                  <div class="col-sm-12">
                      <span>设备位置</span>
                      <strong v-html="this.device.location"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>位置坐标 </span>
                      <strong v-html="this.device.point.pointX"></strong>
                      <strong v-html="this.device.point.pointY"></strong>
                  </div>                  
                  <div class="col-sm-6">
                      <span>距离顶部 </span>
                      <strong v-html="this.device.height+'cm'"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>离地高度</span>
                      <strong v-html="this.device.fheight+'cm'"></strong> 
                  </div>                  
                  <div class="col-sm-6">
                      <span>设备状态</span>
                      <strong class="font-blue" v-if='this.device.status==1'>正常</strong>
                      <strong class="font-orange" v-if='this.device.status==2'>故障</strong>
                      <strong class="font-red" v-if='this.device.status==3'>警报</strong>
                  </div>  
                  <div class="col-sm-6">
                      <span>运行时长 </span>
                      <strong v-html="this.device.timeYear+'天'"></strong>
                  </div>  
                  <div class="col-sm-12">
                      <span>投入时间 </span>
                      <strong v-html="this.device.startDate"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>设备二维码 </span>
                      <strong data-toggle="tooltip" title="设备二维码" class="font-blue">查看</strong>
                  </div>
          </div>              
        </div>
      </section>
      <!-- 生产信息 -->
      <section>
        <div class="textandimg margin-top10">
              <h4 class="p-title">生产信息</h4>
              <div class="row textandimg-main margin-top10 size-12">
                  <div class="col-sm-6">
                      <span>生产厂商 </span>
                      <strong v-html="this.device.firm"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>生产日期 </span>
                      <strong v-html="this.device.productDate"> </strong>
                  </div>
                  <div class="col-sm-12">
                    <span>物理地址</span>
                    <strong v-html="this.device.mac"></strong>
                  </div>                 
                </div>
          </div>
      </section>  
      <!-- 维保信息 -->
      <section>
        <div class="textandimg margin-top10">
              <h4 class="p-title">维保信息</h4>
              <div class="row textandimg-main margin-top10 size-12">
                  <div class="col-sm-6">
                      <span>维保单位 </span>
                      <strong v-html="this.device.maintenanceUnit"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>更换周期 </span>
                      <strong v-html="this.device.lifeMonth"></strong>
                      <b>天</b>
                  </div>
                  <div class="col-sm-6">
                      <span>维保人员 </span>
                      <strong v-html="this.device.maintenanceUnit"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>维保电话 </span>
                      <strong v-html="this.device.maintenancePhone"></strong>
                  </div>                   
                </div>
          </div>
      </section>      
    </div>
    <!-- 设备小列表 -->
    <div class="total" style="display: none;">      
        <!-- 总数统计 -->
        <section class="toolcount clearfix">
          <ul class="toolcount-left padding0 col-sm-5">
            <li>
              <p class="size-10 font-gray-666">Device Total</p>
            </li>
            <li>
              <p class="size-18 font-blue">当前设备总数</p>
            </li>
            <li>
              <h1 class="toolcount-p1">{{totalList}}</h1>
            </li>
          </ul>
          <!-- <ul class="list-unstyled col-sm-9 margin-top70 font-gray-666 size-12">
            <li>
              <span>室内设备</span> <strong class="font-gray-ccc">96</strong>
              <span>室外设备</span> <strong class="font-gray-ccc">126</strong>
            </li>
            <li>
              <span>预警设备</span> <strong class="font-gray-ccc">96</strong>
              <span>消防设备</span> <strong class="font-gray-ccc">126</strong>
              <span>灭火设备</span> <strong class="font-gray-ccc">96</strong>
              <span>监控设备</span> <strong class="font-gray-ccc">126</strong>
            </li>
          </ul> -->
        </section>        
    </div>
    <section class="mapTable">
          <!-- 列表 -->          
          <div class="toolbuildrate">
            <div class="main_content_table">
              <el-table
                :data="tableData"
                border
                :highlight-current-row="true"
                :default-sort = "{prop: 'Serial_number', order: 'descending'}">
                <el-table-column
                  prop="Serial_number"
                  type="index"
                  fixd="left"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="name"
                  :show-overflow-tooltip="true"
                  label="设备名称">
                </el-table-column>
                <el-table-column
                  prop="deviceTypeName"
                  :show-overflow-tooltip="true"
                  label="设备类型">
                </el-table-column>
                <el-table-column 
                  prop="status"
                  :show-overflow-tooltip="true"
                  label="状态">
                  <template slot-scope="scope">
                    <el-tag
                      :type="scope.row.status === 1 ? 'green' : 'red'"
                      disable-transitions v-if='scope.row.status==1'>正常</el-tag>
                    <el-tag
                      :type="scope.row.status === 2 ? 'red' : 'green'"
                      disable-transitions v-if='scope.row.status==2'>故障<i class="el-icon-warning font-blue" data-toggle="tooltip" title="开始时间 2018-08-20 16:30:23"></i></el-tag>
                    <el-tag
                      :type="scope.row.status === 2 ? 'red' : 'green'"
                      disable-transitions v-if='scope.row.status==3'>警报<i class="el-icon-warning font-blue" data-toggle="tooltip" title="开始时间 2018-08-20 16:30:23"></i></el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作">
                  <template slot-scope="scope">
                    <button @click="start_plan(scope.row)" data-toggle="modal" data-target="#mymodal"><i class="el-icon-edit-outline" data-toggle="tooltip" title="编辑"></i></button>
                    <button @click="delete_plan(scope.row)" data-toggle="modal" data-target="#mymodal2"><i class="el-icon-delete" data-toggle="tooltip" title="删除"></i></button>
                    <button @click="show3(scope.row)"><i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i></button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
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
                              :page-size="6"
                              layout="prev, pager, next"
                              :total="totalList">
                </el-pagination>
                <span>{{page}}页</span>
                <el-pagination
                              @current-change="handleCurrentChange"
                              :current-page="currentPage4"
                              :page-size="6"
                              layout="total"
                              :total="totalList">
                </el-pagination>
              </div>
            </div>
          </div>
          <!-- 编辑表单Modal -->
          <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title" id="myModalLabel">修改设备</h4>
                </div>
                <div class="modal-body">
                  <div class="main_content">
                    <el-form class="row" ref="form" :label-position="labelPosition" :model="form">
                <el-form-item label="设备名称" class="not-null">
                  <!-- <span class="hint-error">设备名称有误或重复</span> -->
                  <el-input v-model="form.name" class="col-sm-8"></el-input>
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
                  <el-button type="primary" @click.native.prevent="startRow()" icon="el-icon-search" class="primary" data-dismiss="modal">编辑并提交</el-button>
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
                  <el-button type="danger" @click.native.prevent="deleteRow()" icon="el-icon-search" class="danger" data-dismiss="modal">删除</el-button>
                  <el-button class="back" data-dismiss="modal">取消</el-button>
                </div>
              </div>
            </div>
          </div>
      </section>
  </div>
</template>

<script>
  import{ mapState } from "vuex"
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
        device:{
          status:'',
          name:'',
          deviceTypeName:'',
          location:'',
          point:{
            pointX:'',
            pointY:''
          },
          mac:'',
          height:'',
          fheight:'',
          startDate:'',
          timeYear:'',
          lifeMonth:'',
          firm:'',
          productDate:'',
          maintenanceUnit:'',
          maintenancePhone:''
        },
        optionList:[],//全部单位列表
        tableData: [],//设备列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        deviceIndex:'',
        deviceName:''
      };
    },
    methods: {
      back_first(){        
        $('.total').show();
        $('.mapTable').show();
        $('.plan').hide();
        if(this.$route.path == '/Equipment_management/maps'){
          $('.mapTable').show();
          $('.total').show();
        }
        if(this.$route.path == '/Equipment_management/all'){
          $('.mapTable').hide();
          $('.total').show();
        }
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        // $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
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
            this.form.equipment = item.deviceTypeId ;
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
          'deviceTypeId':this.form.equipment,
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
            //console.log('修改成功...'+ JSON.stringify(response));
            this.tableList();
          }
        })
      },
      delete_plan(row){//删除
        this.deviceName = row.name;
        this.deviceIndex = row.id;
      },
      show3(row){//跳转
        //console.log(row.id);
        // this.$store.commit('deviceId',row.id);
        console.log(row.buildingId)
        if(row.buildingId == 0 & row.buildingId == '0'){
          $('.plan').show();        
          $('.total').hide();
          $('.mapTable').hide();
          $('.floorMap').hide();
          $('.map').show();
        }else{
          $('.floorMap').show();
          $('.map').hide();
          this.$store.commit('deviceSimple',row);
        }
        this.tableData.forEach((item,index)=>{
          if(item.id == row.id){
            //console.log(item);
            this.device.status = item.status ;
            this.device.name = item.name ;
            this.device.deviceTypeName = item.deviceTypeName ;
            this.device.location = item.location ;
            this.device.point.pointX = item.pointX ;
            this.device.point.pointY = item.pointY ;
            this.device.mac = item.mac ;
            this.device.height = item.height ;
            this.device.fheight = item.fheight ;
            this.device.startDate = item.startDate ;
            this.device.lifeMonth = item.lifeMonth ;
            this.device.firm = item.firm ;
            this.device.productDate = item.productDate ;
            this.device.maintenanceUnit = item.maintenanceUnit ;
            this.device.maintenancePhone = item.maintenancePhone ;
          }
        })
      },
      deleteRow(){
           //console.log(this.deviceIndex);
          this.$fetch("/api/device/deleteDevice",{
            'deviceId':this.deviceIndex
          }).then(response=>{
            if(response){
              //console.log('删除成功...'+ JSON.stringify(response));
              this.tableData.splice(this.deviceIndex,1);
              this.tableList();
            }
          }).then(err => {
            //console.log(err);
          });
      },
      qrcode(){
        window.open("/api/qrcode/deviceImgs?unitId="+this.Unit+'&buildingId='+this.buildDevice+'&floorId='+this.floorDevice+'&roomId='+this.roomDevice+'&deviceTypeId='+this.equipmentDevice);
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
              // $(' .el-select-dropdown__item').mouseover(function(){
              //   $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              // });
            }
          })
          .then(err => {
            // //console.log(err);
          });
      },
      tableList(){
        this.$fetch(
          "/api/device/deviceList",{
            unitId:this.Unit,
            deviceTypeId:this.equipmentDevice,
            buildingId:this.buildDevice,
            floorId:this.floorDevice,
            roomId:this.roomDevice,
            currentPage:this.currentPage4,
            pageSize:11
          }
        )
          .then(response => {
            //console.log('右侧设备列表'+JSON.stringify(response));
            if (response) {
              // //console.log(response.data.inspectionPlanList);
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              //console.log(this.tableData)
              this.$store.commit('DeviceMap',this.tableData);
              if(this.$route.path == '/Equipment_management/all'){
                $('.plan').show();
                this.tableData.forEach((item,index)=>{
                  if(index == this.tableData.length-1){
                    //console.log(item);
                    this.device.status = item.status ;
                    this.device.name = item.name ;
                    this.device.deviceTypeName = item.deviceTypeName ;
                    this.device.location = item.location ;
                    this.device.point.pointX = item.pointX ;
                    this.device.point.pointY = item.pointY ;
                    this.device.mac = item.mac ;
                    this.device.height = item.height ;
                    this.device.fheight = item.fheight ;
                    this.device.startDate = item.startDate ;
                    this.device.lifeMonth = item.lifeMonth ;
                    this.device.firm = item.firm ;
                    this.device.productDate = item.productDate ;
                    this.device.maintenanceUnit = item.maintenanceUnit ;
                    this.device.maintenancePhone = item.maintenancePhone ;
                  }
                })
              }
              if(this.totalList % 9 == 0){
                this.page = parseInt( this.totalList / 9 )
              }else{
                this.page = parseInt( this.totalList / 9 ) + 1
              }
            }
          })
          .then(err => {
            // //console.log(err);
          });
      },
      formBuildSearch(unitId){
        this.$fetch("/api/building/selectNode",{
          unitId:unitId
        }).then(response=>{
          //console.log('formBuildSearch:'+JSON.stringify(response));
          if (response) {
            this.form.buildList = response.data.list;
            //console.log(this.form.buildList);
          }
        })
      },
      formFloorSearch(buildIngId){
        this.$fetch("/api/building/selectNode",{
          buildIngId:buildIngId
        }).then(response=>{
          //console.log('formFloorSearch:'+response);
          if (response) {
            this.form.floorList = response.data.list;
            //console.log(this.form.floorList);
          }
        })
      },
      formRoomSearch(floorId){
        this.$fetch("/api/building/selectNode",{
          floorId:floorId
        }).then(response=>{
          //console.log('formRoomSearch:'+response);
          if (response) {
            this.form.roomList = response.data.list;
            //console.log(this.form.roomList);
          }
        })
      },
      formEquipmentSearch(roomId){
        this.$fetch("/api/building/selectNode",{
          roomId:roomId
        }).then(response=>{
          //console.log('formEquipmentSearch:'+response);
          if (response) {
            this.form.equipmentList = response.data.list;
            //console.log(this.form.equipmentList);
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
      }
    },
    mounted() {
      if(this.$route.path == '/Equipment_management/maps'){
        $('.mapTable').show();
        $('.total').show();
        $('.plan').hide();
        
      }
      this.tableList();
      this.unitSearch();
    },
    watch:{
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        //console.log(this.currentPage4);
        this.tableList();
        this.$store.commit('currentPageDevice',this.currentPage4)
      },
      unitId(curVal,oldVal){
        this.form.unitId = curVal;
        this.formBuildSearch(this.form.unitId);
      },
      buildingId(curVal,oldVal){
        this.form.buildingId = curVal;
        //console.log(this.form.buildingId)
        if(this.form.buildingId !== 0 && this.form.buildingId !== '0'){
          this.form.floorId = '';
          this.form.roomId = '';
          this.form.equipmentId = '';
          this.formFloorSearch(this.form.buildingId);
        }else{
          this.form.equipmentId = '';
          this.formEquipmentSearch(this.form.buildingId);
        }
      },
      floorId(curVal,oldVal){
        this.form.floorId = curVal;
        if(this.form.floorId !== 0){
          this.formRoomSearch(this.form.floorId);
        }
      },
      roomId(curVal,oldVal){
        this.form.roomId = curVal ;
        if(this.form.roomId !== 0){
          this.formEquipmentSearch(this.form.roomId);
        }
      },
      deviceId(){
        $('.plan').show();
        $('.total').hide();
        if(this.$route.path == '/Equipment_management/maps'){
          $('.mapTable').show();
          $('.total').show();
          
        }
        if(this.$route.path == '/Equipment_management/all'){
          $('.plan').show();
          $('.total').hide();
          $('.mapTable').hide();
          this.tableData.forEach((item,index)=>{
            if(item.id == this.deviceId){
              console.log(item.id,this.deviceId);
              this.device.status = item.status ;
              this.device.name = item.name ;
              this.device.deviceTypeName = item.deviceTypeName ;
              this.device.location = item.location ;
              this.device.point.pointX = item.pointX ;
              this.device.point.pointY = item.pointY ;
              this.device.mac = item.mac ;
              this.device.height = item.height ;
              this.device.fheight = item.fheight ;
              this.device.startDate = item.startDate ;
              this.device.lifeMonth = item.lifeMonth ;
              this.device.firm = item.firm ;
              this.device.productDate = item.productDate ;
              this.device.maintenanceUnit = item.maintenanceUnit ;
              this.device.maintenancePhone = item.maintenancePhone ;
            }
          })
        }
        console.log(this.tableData)
        
        //console.log(this.deviceId);
      },
      Unit(){
        this.tableList();
      },
      buildDevice(){
        this.tableList();
      },
      floorDevice(){
        this.tableList();
      },
      roomDevice(){
        this.tableList();
      },
      equipmentDevice(){
        this.tableList();
      },
      currentPage(){
        this.currentPage4 = this.currentPage;
      }
    },
    computed:mapState([
      'Unit',
      'buildDevice',
      'floorDevice',
      'roomDevice',
      'equipmentDevice',
      'deviceId',
      'currentPage'
    ])
  }
</script>

<style lang="scss" scoped>  
</style>
