<template>
  <div class="toolright">
    <!-- 详情 -->
    <div class="plan">
      <section>
        <a @click="back_first" class="btn-back" v-if="this.$route.path == '/Dangerous_goods_management/maps'"><i class="el-icon-arrow-left"></i>返回</a>
      </section>
      <!-- 危险品名称 -->
      <section>        
        <div class="toolcount font-gray-999 size-12 margin-top20 clearfix">
        <!-- 标题 -->
          <div class="personinfo">
              <p>
                <span class="size-20 font-red" v-if="this.trouble.status == 0">
                  <i class="icon iconfont icon-weixianpin-mian- size-20" data-toggle="tooltip" title="危险品"></i>
                  <span>{{ this.trouble.dangerName }}</span>
                </span>
                <span class="size-20 font-blue" v-if="this.trouble.status == 1">
                  <i class="icon iconfont icon-weixianpin-mian- size-20" data-toggle="tooltip" title="危险品"></i>
                  <span>{{ this.trouble.dangerName }}</span>
                </span>
                <span class="float-right font-black size-10">
                  <span class="bgbox-max bg-red" v-if="this.trouble.status == 0">未解决</span>
                  <span class="bgbox-max bg-blue" v-if="this.trouble.status == 1">已解决</span>
                </span>
              </p>
              <p class="col-sm-7 text-left font-gray-999 padding0">
                <span>
                  <i class="fas fa-industry"></i> {{ this.trouble.unitName }}
                </span>
              </p>
              <P class="col-sm-5 text-right padding0">
                <span class="text-right" v-if="this.trouble.status == 0">
                  上报时间：<span class="font-gray-999">{{this.trouble.createTime}}</span>
                </span>
                <span class="text-right" v-if="this.trouble.status == 1">
                  解决时间：<span class="font-gray-999">{{this.trouble.reviewTime}}</span>
                </span>
              </P>
          </div>         
        </div>
      </section>
      <!-- 危险品信息统计 -->
      <section>
          <div class="toolcount margin-top20 font-gray-999 clearfix">
              <div class="col-md-5 padding0">
                  <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                      <li>
                          <h1 class="toolcount-p1 cn-status">
                            <span class="font-red" v-if="this.trouble.status == 0">未解决</span>
                            <span class="font-blue" v-if="this.trouble.status == 1">已解决</span>
                          </h1>
                      </li>
                      <li class="margin-top40">
                          <p class="size-10 ">Dangerous Status</p>
                      </li>
                      <li>
                          <p class="size-16 font-blue">危险品状态</p>
                      </li>
                  </ul>
              </div>
              <div class="col-md-7 padding0">
                  <ul class="row toolcount-right margin-bottom0 size-12">
                      <li>
                          <p class="size-18 font-white">信息概览</p>
                      </li>
                      <li class="margin-bottom5">
                          <p class="size-10 set-scaleright">Dangerous info</p>
                      </li>
                      <li class="margin-top10">
                          <p><i class="el-icon-location"></i> 
                            <span>
                              <strong v-if="this.trouble.buildingName == '室外'">室外</strong>
                              <strong v-else><span v-if="this.trouble.buildingName != '' && this.trouble.buildingName != null">{{ this.trouble.buildingName }} 建筑</span><span v-if="this.trouble.floorNumber != '' && this.trouble.floorNumber != null">{{ this.trouble.floorNumber }} 楼层</span><span v-if="this.trouble.roomNumber != '' && this.trouble.roomNumber != null">{{ this.trouble.roomNumber }} 房间</span></strong>
                            </span>
                          </p>
                      </li>
                      <li class="text-left padding-right16 margin-top15">
                          <div class="col-sm-4 personnel-borderright" v-if="this.trouble.status == 0">
                              <p class="size-16 show font-red">{{this.trouble.nickName}}</p>
                              <p>上报人</p>
                          </div>
                          <div class="col-sm-4 personnel-borderright" v-if="this.trouble.status == 1">
                              <p class="size-16 show font-blue">{{this.trouble.reviewerName}}</p>
                              <p>解决人</p>
                          </div>
                          <div class="col-sm-8" v-if="this.trouble.status == 0">
                              <p class="size-12 show font-white">{{this.trouble.createTime}}</p>
                              <p>上报时间</p>
                          </div>
                          <div class="col-sm-8" v-if="this.trouble.status == 1">
                              <p class="size-12 show font-white">{{ this.trouble.reviewTime}}</p>
                              <p>解决时间</p>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </section>
      <!-- 危险品详情 -->
      <section>        
          <div class="textandimg margin-top20 size-12">
              <h4 class="p-title">
                 <!-- {{ this.trouble.dangerName }} -->上报详情
              </h4>
              <div class="row textandimg-main margin-top20">
                <div class="col-sm-6">
                      <span>名称</span>
                      <strong v-html="this.trouble.dangerName"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>状态</span>
                      <strong class="font-red" v-if="this.trouble.status == 0">未解决</strong>
                      <strong class="font-blue"  v-if="this.trouble.status == 1">已解决</strong>
                  </div>
                  <div class="col-sm-12">
                      <span>所属单位</span>
                      <strong v-html="this.trouble.unitName"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>位置</span>
                      <strong v-if="this.trouble.buildingName == '室外'">室外</strong>
                      <strong v-else><span v-if="this.trouble.buildingName != '' && this.trouble.buildingName != null">{{ this.trouble.buildingName }} 建筑</span><span v-if="this.trouble.floorNumber != '' && this.trouble.floorNumber != null">{{ this.trouble.floorNumber }} 楼层</span><span v-if="this.trouble.roomNumber != '' && this.trouble.roomNumber != null">{{ this.trouble.roomNumber }} 房间</span></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>坐标 </span>
                      <strong v-html="this.trouble.point.pointX"></strong>
                      <strong v-html="this.trouble.point.pointY"></strong>
                  </div>
                  <div class="col-sm-6">
                    <span>上报人</span>
                    <strong v-html="this.trouble.nickName"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>上报时间</span>
                      <strong v-html="this.trouble.createTime"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>简介 </span>
                      <strong v-html="this.trouble.cont"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>图片及视频 </span>
                      <ul class="list-inline margin-top10">
                        <li class="col-sm-3"><img :src="this.trouble.imgUrl" class="img-responsive"/></li>
                      </ul>
                  </div>                  
                </div>
              </div>              
      </section>
      <section>
      <!-- 解决危险品 -->
              <div class="textandimg margin-top20 size-12" v-if="this.trouble.status == 1">
                <h4 class="p-title">
                   <!-- {{ this.trouble.dangerName }} -->处理记录
                </h4>
                <div class="row textandimg-main margin-top20">
                  <div class="col-sm-12">
                      <span>解决人</span>
                      <strong v-html="this.trouble.reviewerName"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>解决时间 </span>
                      <strong v-html="this.trouble.reviewTime"></strong>
                  </div>                  
                  <div class="col-sm-12">
                      <span>解决原因 </span>
                      <strong v-html="this.trouble.treatment"></strong>
                  </div>
              </div>
        </div>
      </section>
    </div>
    <!-- 统计 -->
    <div class="total">
      <section class="mapTable" style="display: none;">
        <!-- 总数统计 -->
        <div class="toolcount clearfix">
          <ul class="toolcount-left padding0">
            <li>
              <p class="size-10 font-gray-666">Dangerous Total</p>
            </li>
            <li>
              <p class="size-18 font-blue">危险品总数</p>
            </li>
            <li>
              <h1 class="toolcount-p1">{{totalList}}</h1>
            </li>
          </ul>
        </div>
        <div class="toolbuildrate bg-black">
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
                prop="dangerName"
                :show-overflow-tooltip="true"
                label="危险品名称">
              </el-table-column>
              <!-- <<el-table-column
                prop="unitName"
                :show-overflow-tooltip="true"
                label="所属单位">
              </el-table-column>
              el-table-column
                prop="cont"
                :show-overflow-tooltip="true"
                label="位置">
              </el-table-column> -->
              <!-- <el-table-column
                prop="cont"
                label="危险品简介">
              </el-table-column> -->
              <el-table-column
                prop="nickName"
                label="上报人">
              </el-table-column>
              <!-- <el-table-column
                prop="createTime"
                :show-overflow-tooltip="true"
                label="上报时间">
              </el-table-column> -->
              <el-table-column 
                prop="status"
                label="状态">
                <template slot-scope="scope">
                <el-tag
                  :type="scope.row.status === 0 ? 'red' : 'green'"
                  disable-transitions v-if='scope.row.status==0'>未解决 
                  <el-tooltip placement="top">
                    <div slot="content" class="text-center">{{scope.row.nickName}}<br/>于{{scope.row.createTime}}上报</div>
                    <i class="fas fa-exclamation-circle font-red"></i>
                  </el-tooltip>
                  </el-tag>
                <el-tag
                  :type="scope.row.status === 1 ? 'green' : 'red'"
                  disable-transitions v-if='scope.row.status==1'>已解决 
                  <el-tooltip placement="top">
                    <div slot="content" class="text-center">{{scope.row.reviewerName}}<br/>于{{ scope.row.reviewTime }}解决</div>
                    <i class="fas fa-check-circle font-blue"></i>
                  </el-tooltip>
                </el-tag>
              </template>
              </el-table-column>
              <!-- <el-table-column
                prop="reviewerName"
                :formatter="formatter"
                label="解决人">
              </el-table-column>
              <el-table-column
                prop="reviewTime"
                label="解决时间">
              </el-table-column>
              <el-table-column
                prop="treatment"
                label="解决原因">
              </el-table-column> -->
              <el-table-column
                fixed="right"
                label="操作">
                <template slot-scope="scope">
                  <button @click="start_plan(scope.row)" v-if='scope.row.status==0' data-toggle="modal" data-target="#mymodal" class="btn-check">处理</button>
                  <!-- <button @click="delete_plan(scope.row)" v-if="scope.row.status==1" class="cursor-no" data-toggle="modal" data-target="#mymodal2"><i class="el-icon-delete" data-toggle="tooltip" title="删除"></i></button> -->
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
              </div>
              <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-size="6"
                            layout="prev, pager, next"
                            :total="totalList">
              </el-pagination>
              <span>{{page}}页</span>
              <el-pagination style="float: right;"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-size="6"
                            layout="total"
                            :total="totalList">
              </el-pagination>
            </div>
          </div>
        </div>
        <!-- 解决Modal -->
        <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">解决</h4>
                <h5 class="modal-p font-blue">{{dangerName}}</h5>
              </div>
              <div class="modal-body">
            <div class="main_content">
            <!--
              class类not-null为必填标识,如需请加在<el-form-item>
              class类hint-error为错误提示
             -->
              <el-form class="row" ref="form" :label-position="labelPosition" :model="form">
                <!-- <el-form-item label="危险品名称" class="not-null col-sm-8">
                  <el-input v-model="form.dangerName" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="所属单位" class="not-null col-sm-4">
                  <el-select v-model="form.unitId" placeholder="选择单位" class="select selectUnit" disabled="true">
                    <el-option label="全部单位" value=""></el-option>
                    <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="位置" class="not-null">
                  <el-select
                    v-model="form.buildingId"
                    disabled="true"
                    placeholder="选择建筑"  class="start float-left col-sm-4">
                    <el-option label="室外" value="0"></el-option>
                    <el-option
                      v-for="item in form.buildList"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                  <el-select
                    v-model="form.floorId"
                    disabled="true"
                    placeholder="选择楼层" class="start col-sm-4">
                    <el-option
                      v-for="item in form.floorList"
                      :label="item.floorName+'层'"
                      :value="item.id">
                    </el-option>
                  </el-select>
                  <el-select
                    v-model="form.roomId"
                    disabled="true"
                    placeholder="选择房间" class="start col-sm-4">
                    <el-option
                      v-for="item in form.roomList"
                      :label="item.roomNumber+'房间'"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="坐标" class="not-null">
                  <el-input v-model="form.point.pointX"  class="col-sm-4" disabled="true"></el-input>
                  <el-input v-model="form.point.pointY"  class="col-sm-4" disabled="true"></el-input>
                </el-form-item>
                <div class="col-sm-12">
                  <div class="row">
                    <el-form-item label="上报人" class="not-null col-sm-4">
                  <el-input v-model="form.nickName" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="上报时间" class="not-null col-sm-4">
                  <el-input v-model="form.createTime" disabled="true"></el-input>
                </el-form-item>                
                  </div>
                </div>
                <el-form-item label="描述" class="not-null col-sm-12">
                  <el-input
                    type="textarea"
                    :rows="2"
                    disabled="true"
                    v-model="form.cont">
                  </el-input>
                </el-form-item>
                <el-form-item label="图片及视频" class="not-null col-sm-12">
                  <ul class="list-line">
                    <li class="col-sm-3"><img :src="this.form.imgUrl" class="img-responsive" /></li>
                  </ul>
                </el-form-item> -->
                <el-form-item label="解决人" class="not-null">
                  <el-input v-model="form.reviewerName" class="not-null col-sm-6"></el-input>
                </el-form-item>
                <el-form-item label="解决时间" class="not-null col-sm-6">
                  <div class="block">
                    <el-date-picker
                      v-model="form.reviewTime"
                      type="date"
                      placeholder="选择日期"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>
                  </div>
                </el-form-item>               
                <el-form-item label="解决原因" class="not-null col-sm-12">
                  <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="form.treatment">
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>
              <div class="modal-footer">
                <el-button type="primary" @click.native.prevent="startRow()" icon="el-icon-search" class="primary" data-dismiss="modal">提交</el-button>
                <el-button class="back" data-dismiss="modal">取消</el-button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
        trouble:{
          dangerName:'',
          status:'',
          unitName:'',
          buildingName:'',
          floorNumber:'',
          roomNumber:'',
          point:{
            pointX:'',
            pointY:''
          },
          nickName:'',
          createTime:'',
          reviewerName:'',
          reviewTime:'',
          imgUrl:[],
          cont:'',
          treatment:''
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
        $('.plan').hide();
        $('.mapTable').show();
        $('.total').show();
        if(this.$route.path == '/Dangerous_goods_management/maps'){
          $('.mapTable').show();
          $('.total').show();
        }
        if(this.$route.path == '/Dangerous_goods_management/all'){
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
            this.form.deviceTypeName = item.deviceTypeName ;
          }
        })
      },
      startRow(){
        this.$fetch("/api/trouble/updateDevice",{
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
          'deviceTypeId':this.form.equipment
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
        this.$store.commit('dangerId',row.id);
        $('.plan').show();
        $('.mapTable').hide();
        $('.total').hide();
      },
      deleteRow(){
           console.log(this.deviceIndex);
          this.$fetch("/api/trouble/deleteDevice",{
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
      findTrouble(troubleId){
        this.$fetch("/api/trouble/troubleDetail",{
          'troubleId':troubleId
        }).then(response=>{
          console.log(response);
          if(response.data.trouble){
            var item = response.data.trouble;
            this.trouble.dangerName = item.dangerName ;
            this.trouble.status = item.status ;
            this.trouble.unitName = item.unitName ;
            this.trouble.buildingName = item.buildingName ;
            this.trouble.floorNumber = item.floorNumber ;
            this.trouble.roomNumber = item.roomNumber ;
            this.trouble.point.pointX = item.pointX ;
            this.trouble.point.pointY = item.pointY ;
            this.trouble.nickName = item.nickName ;
            this.trouble.createTime = item.createTime ;
            this.trouble.reviewerName = item.reviewerName ;
            this.trouble.reviewTime = item.reviewTime ;
            this.trouble.imgUrl = item.imgUrl ;
            this.trouble.cont = item.cont ;
            this.trouble.treatment = item.treatment ;
            console.log(this.trouble.nickName)
          }
        })
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
          "/api/trouble/troubleList",{
            unitId:this.dangerUnit,
            type:5,
            buildingId:this.dangerBuild,
            floorId:this.dangerFloor,
            roomId:this.dangerRoom,
            currentPage:this.currentPage4,
            pageSize:11,
            status:this.dengerStatus
          }
        )
          .then(response => {
            console.log('危险品！！！'+JSON.stringify(response));
            if (response) {
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              if(this.$route.path == '/Dangerous_goods_management/all'){
                console.log(this.tableData)
                this.tableData.forEach((item,index)=>{
                  if(index == this.tableData.length-1){
                    console.log(index);
                    console.log(this.tableData.length-1)
                    console.log(item.id);
                    this.findTrouble(item.id)
                  }
                })
              }
              if(this.totalList % 10 == 0){
                this.page = parseInt( this.totalList / 10 )
              }else{
                this.page = parseInt( this.totalList / 10 ) + 1
              }
            }
          })
          .then(err => {
            // console.log(err);
          });
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
      }
    },
    mounted() {
      if(this.$route.path == '/Dangerous_goods_management/maps'){
        $('.mapTable').show();
        $('.total').show();
        $('.plan').hide();
        
      }
      this.tableList();
      this.unitSearch();
    },
    watch:{
      $route: {
        handler: function(val, oldVal){
          console.log(val);
          if(this.$route.path == '/Dangerous_goods_management/maps'){
            this.tableList();
          }
        },
        // 深度观察监听
        deep: true
      },
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        console.log(this.currentPage4);
        this.tableList();
      },
      unitId(curVal,oldVal){
        this.form.unitId = curVal;
        this.formBuildSearch(this.form.unitId);
      },
      buildingId(curVal,oldVal){
        this.form.buildingId = curVal;
        console.log(this.form.buildingId)
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
      dangerId(){
        $('.plan').show();
        $('.total').hide();
        if(this.$route.path == '/Dangerous_goods_management/maps'){
          $('.mapTable').show();
          $('.total').show();
        }
        if(this.$route.path == '/Dangerous_goods_management/all'){
          $('.plan').show();
          $('.total').hide();
          $('.mapTable').hide();
        }
        console.log(this.dangerId)
        this.findTrouble(this.dangerId);
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
      currentPage(){
        this.currentPage4 = this.currentPage ;
      }
    },
    computed:mapState([
      'Unit',
      'buildDevice',
      'floorDevice',
      'roomDevice',
      'dangerId',
      'currentPage'
    ])
  }
</script>

<style lang="scss" scoped>
</style>
