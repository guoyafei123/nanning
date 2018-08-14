<template>
  <div class="toolright z-index-20">
    <div class="font-white plan">
      <!-- <span @click="back_first" class="font-gray-666" style="cursor:pointer;" v-if="this.$route.path == '/Building_management/maps'">&lt;返回</span> -->
      <a @click="back_first" class="btn-back" v-if="this.$route.path == '/Building_management/maps'"><i class="el-icon-arrow-left"></i>返回</a>
      <!-- 建筑详情 -->
      <section>
        <div class="textandimg margin-top20">
              <h4 class="p-title">
                 {{ this.form.BuildName }}建筑详情
              </h4>
              <div class="row textandimg-main margin-top20 size-12">
                  <div class="col-sm-6">
                      <span>建筑名称 </span>
                      <strong v-html="this.form.BuildName"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>所属单位 </span>
                      <strong v-html="this.form.UnitName"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>建筑结构 </span>
                      <strong v-html="this.form.structure"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>建筑性质 </span>
                      <strong v-html="this.form.property"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>建筑地址 </span>
                      <strong v-html="this.form.address"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>经纬度 </span>
                      <strong v-html="this.form.point.pointX"></strong>
                      <strong v-html="this.form.point.pointY"></strong>
                  </div>
                  
                  <div class="col-sm-6">
                      <span>占地面积 </span>
                      <strong v-html="this.form.area"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>高 度 </span>
                      <strong v-html="this.form.height"></strong>
                  </div>

                  <div class="col-sm-6">
                      <span>总楼层 </span>
                      <strong v-html="this.form.floor"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>建筑年份 </span>
                      <strong v-html="this.form.timeYear"></strong>
                  </div>
                  
                  <div class="col-sm-6">
                      <span>消防负责人 </span>
                      <strong v-html="this.form.name"> </strong>
                  </div>
                  <div class="col-sm-6">
                      <span>消防负责人电话 </span>
                      <strong v-html="this.form.phone"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>建筑二维码 </span>
                      <strong>
                        <a href="" data-toggle="tooltip" title="预览二维码" class="font-blue display-inline-block">预览</a>
                        <a href="" data-toggle="tooltip" title="下载二维码" class="font-blue display-inline-block">下载</a>
                      </strong>
                  </div>
              </div>
        </div>
      </section>
    </div>
    <!-- 简单统计 -->
    <div class="font-white total" style="margin-top:120px;margin-right:10px;">
      <!-- <h2 style="font-size: 12px;line-height:10px;margin-bottom:10px;" class="font-gray-999">Inspection Total</h2>
      <h3 style="font-size:18px;" class="font-blue">当前线路总数</h3> -->
      <!-- <div style="width:100%;overflow: hidden;">
        <p style="width:15%;font-size: 70px;margin-left:20px;float: left" v-html="this.countInspectionPlanRelevant.countTotal"></p>
        <ul class="inspection_ul">
          <li>
            未激活<span v-html="this.countInspectionPlanRelevant.countDisableTotal"></span>
          </li>
          <li>
            已激活<span v-html="this.countInspectionPlanRelevant.countEnableTotal"></span>
          </li>
          <li>
            已删除<span v-html="this.countInspectionPlanRelevant.countDelete"></span>
          </li>
          <li>
            扫码打卡<span v-html="this.countInspectionPlanRelevant.countIssanCount"></span>
          </li>
        </ul>
      </div> -->
      <section style="display: none;" class="mapTable">
        <div class="toolbuildrate margin-top30">
          <div class="main_content_table">
            <el-table
              :data="tableData"
              border
              :default-sort = "{prop: 'Serial_number', order: 'descending'}"
              style="width: 100%;height:570px;">
              <el-table-column
                prop="Serial_number"
                type="index"
                sortable  
                width="60"
                label="序号">
              </el-table-column>
              <el-table-column
                prop="name"
                width="110"
                :show-overflow-tooltip="true"
                label="建筑名称">
              </el-table-column>
              <el-table-column
                prop="location"
                width="100"
                :show-overflow-tooltip="true"
                label="地址">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="115">
                <template slot-scope="scope">
                  <button @click="start_plan(scope.row)" data-toggle="modal" data-target="#mymodal" style="width:40px;height:22px;border:2px solid #bad616;color: #bad616;background-color: #111111;line-height: 19px;margin:0;padding:0;font-size: 12px;text-align: center;margin-right:10px;">编辑</button>
                  <i @click="delete_plan(scope.row)" data-toggle="modal" data-target="#mymodal2"  class="fa fa-th-large font-gray-666" style="margin-right: 10px;"></i>
                  <i @click="show3(scope.row)" class="fa fa-th-large font-gray-666"></i>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="main_content_bottom">
            <div class="bottom_con">
              <div class="float-left" style="margin-top:6px;">
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
        <div class="modal modal_form fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">修改建筑</h4>
              </div>
              <div class="modal-body" style="height:550px;overflow-y:auto;">
                <el-form ref="form" :label-position="labelPosition" :inline="true" :model="form">
                  <el-form-item label="建筑名称">
                    <!-- <span class="font-red" style="position: absolute;top:-45px;right:20px;">建筑名称有误或重复</span> -->
                    <el-input v-model="form.BuildName"></el-input>
                  </el-form-item>
                  <el-form-item label="所属单位">
                    <el-select v-model="form.unitId" placeholder="选择单位" class="select" style="width:150px;">
                      <el-option label="全部单位" value=""></el-option>
                      <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="建筑地址">
                    <el-input v-model="form.address"></el-input>
                  </el-form-item>
                  <el-form-item label="占地面积（m^2）">
                    <el-input v-model="form.area"></el-input>
                  </el-form-item>
                  <el-form-item label="高度">
                    <el-input v-model="form.height"></el-input>
                  </el-form-item>
                  <el-form-item label="总楼层">
                    <el-input v-model="form.floor"></el-input>
                  </el-form-item>
                  <el-form-item label="建成结构">
                    <el-select name="" v-model="form.structure" placeholder="请选择结构">
                      <el-option label="砖混" value="砖混"></el-option>
                      <el-option label="钢结构" value="钢结构"></el-option>
                      <el-option label="玻璃" value="玻璃"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="建成年份">
                    <div class="block">
                      <el-date-picker
                        v-model="form.timeYear"
                        type="year"
                        placeholder="选择年">
                      </el-date-picker>
                    </div>
                  </el-form-item>
                  <el-form-item label="建筑性质">
                    <el-select v-model="form.property" placeholder="建筑性质">
                      <el-option label="居住" value="居住"></el-option>
                      <el-option label="公共" value="公共"></el-option>
                      <el-option label="工业" value="工业"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="消防负责人">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="消防负责人电话">
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
        <div class="modal fade" id="mymodal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
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
      </section>
    </div>

    <!-- 楼层管理 -->
    <div class="floor_wrap" style="display:none;">
      <div class="floor_header clearFix">
        <h2>楼层管理</h2>
        <span @click="floor_back">返回</span>
      </div>
      <div class="floor_title">
        <h3>{{ this.form.UnitName }}{{ this.form.BuildName }}</h3>
        <button class="btn_add" @click="add"><i class="fa fa-th-large font-gray-666 float-left"></i>新增</button>
      </div>
      <table class="table table-bordered ">
        <thead>
          <tr>
            <td>序号</td>
            <td>楼层</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in table_list">
              <td>{{ index+1 }}</td>
              <td class="weixiugai">{{ item.floorName }}</td>
              <td class="xiugai" style="display:none;">
                <input type="number" v-model="item.floorName" style="text-align:center;"/>
              </td>
              <td class="weixiugai_edit">
                <img src="../../assets/images/u237.png"/>
                <i @click="xiugai(index)" class="fa fa-th-large font-gray-666" style="margin-right: 10px;"></i>
                <i @click="floor_delete(item,index)" class="fa fa-th-large font-gray-666" style="margin-right: 10px;"></i>
                <button @click="room_build(item)" style="width:50px;height:22px;border:1px solid transparent;border-radius:5px;color: #ffffff;background-color: #0798db;line-height: 19px;margin:0;padding:0;font-size: 11px;text-align: center;margin-right:10px;">房间管理</button>
              </td>
              <td class="xiugai_edit" style="display:none;">
                <input id="file" name="file" type="file" />
                <button @click="xiugai_sure(index)" style="margin-left:15px;background: #6dff02d1;border-color: #6dff02d1;color: #000;" >确定</button>
                <button @click="xiugai_cancel(index)" style="background: #f13131;border-color: #f13131;color: #ffffff;margin-left: 2px;">取消</button>
              </td>
            </tr>
            <tr class="add"  style="display:none;">
              <td>{{ this.index+1 }}</td>
              <td style="width:120px;">
                <input type="number" v-model="number" style="text-align:center;"/>
              </td>
              <td>
                <input id="file" name="file"  type="file"/>
                <button @click="sure" style="margin-left:15px;background: #6dff02d1;border-color: #6dff02d1;color: #000;">确定</button>
                <button @click="cancel" style="background: #f13131;border-color: #f13131;color: #ffffff;margin-left: 2px;">取消</button>
              </td>
            </tr>          
        </tbody>
      </table>
    </div>

    <!-- 房间管理 -->
    <div class="room_wrap" style="display:none;">
      <div class="room_header clearFix">
        <h2>房间管理</h2>
        <span @click="room_back">返回</span>
      </div>
      <div class="room_title">
        <h3>{{ this.form.UnitName }}{{ this.form.BuildName }}{{ this.floorName }}层</h3>
        <button class="btn_add" @click="addUnit"><i class="fa fa-th-large font-gray-666 float-left"></i>新增</button>
      </div>
      <table class="table table-bordered ">
        <tbody style="height:500px!important;overflow-y:auto;">
            <tr v-for="(item,index) in floorRoomList">
              <td style="min-width:100px;" class="col-md-4">
                <input type="text" v-model="item.unitBuilding" style="width:100px;height:30px;text-align:center;" maxlength="6"/>
              </td>
              <td class="col-md-8">
                <ul class="table_ul">
                  <li v-for="(key,indexs) in item.roomList">
                    <i class="fa fa-th-large font-gray-666 float-left"></i>
                    <input type="text" v-model="key.roomNumber"/>
                    <button @click="deleteRoom(floorRoomList[index].roomList, indexs)" style="width:30px;height:30px;">X</button>
                  </li>
                  <li><button @click="addRoom(item,index)">添加房间</button></li>
                </ul>
              </td>
            </tr>
        </tbody>
      </table>
      <el-button @click="submitFloorRoomList" type="success" style="width:120px;margin:0 auto;display: flex;justify-content: center;font-size:16px;height:35px;line-height:35px;padding:0;">提交</el-button>
    </div>
  </div>

</template>

<script>
  import{ mapState } from "vuex"
  export default {
    data() {
      return {
        // countInspectionPlanRelevant:{
        //   countTotal:0,
        //   countDelete:0,
        //   countDisableTotal:0,
        //   countEnableTotal:0,
        //   countIssanCount:0
        // },
        labelPosition: 'left',
        form: {
          unitId:'',
          UnitName:'',
          BuildName:'',
          height:'',
          floor:'',
          structure:'',
          property:'',          
          timeYear:'',
          name:'',
          phone:'',
          point:{
            pointX:'',
            pointY:''
          }
        },
        unit:null,//选择单位
        optionList:[],//全部单位列表
        tableData: [],//设备列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        deviceIndex:'',
        deviceName:'',
        index:1,
        table_list:[],
        number:0,
        floor_index:0,
        floorName:'',
        floorRoomList:[],
        roomList:[]
      };
    },
    
    methods: {
//楼层
      add(){
        $('.add').show();
        this.index = this.table_list.length;
      },
      sure(){
        this.index++;
        $('.add').hide();
        this.floor_index = this.index;
        console.log(this.floor_index)
        var file = "file";
        let array={ 'buildingId': this.buildingId, 'floor': this.floor_index, 'floorName': this.number}
              
              this.table_list.push(array);
              console.log(this.table_list);
        $.ajaxFileUpload({
            url: '/api/building/addBuildingFloor', //用于文件上传的服务器端请求地址
            /* secureuri : false, */ //一般设置为false
            fileElementId: file,  //文件上传控件的id属性  <input type="file" id="file" name="file" /> 注意，这里一定要有name值
            data : {
              'buildingId':this.buildingId,
              'floor':this.floor_index,
              'floorName':this.number
            },
            type: 'POST',
            dataType: "plain",
            success: function (data, status) { //服务器成功响应处理函数 //服务器成功响应处理函数
            },
            error: function (e) { //服务器响应失败处理函数
              $.messager.alert('警告', "系统错误", "warning");
            },
            complete: function (e) {//只要完成即执行，最后执行
              console.log(e) 
            }
        });
        this.number = '' ;
        var file = document.getElementById('file');
        file.outerHTML = file.outerHTML;
        
      },
      cancel(){
        $('.add').hide();
        this.number = '' ;
      },
      xiugai(indexs){
        this.table_list.forEach((item,index)=>{
          if(indexs == index){
            $('.weixiugai:eq('+indexs+')').hide();
            $('.xiugai:eq('+indexs+')').show();
            $('.weixiugai_edit:eq('+indexs+')').hide();
            $('.xiugai_edit:eq('+indexs+')').show();
          }
        })
      },
      xiugai_sure(indexs){
        // console.log(indexs);
        this.table_list.forEach((item,index)=>{
          // console.log(item.floorName)
          if(indexs == index){
            console.log(item.buildingId)
            $('.weixiugai:eq('+indexs+')').show();
            $('.xiugai:eq('+indexs+')').hide();
            $('.weixiugai_edit:eq('+indexs+')').show();
            $('.xiugai_edit:eq('+indexs+')').hide();
            var file = "file";
            $.ajaxFileUpload({
                url: '/api/building/updateBuildingFloor', //用于文件上传的服务器端请求地址
                /* secureuri : false, */ //一般设置为false
                fileElementId: file,  //文件上传控件的id属性  <input type="file" id="file" name="file" /> 注意，这里一定要有name值
                data : {
                  'id' : item.id,
                  'buildingId':item.buildingId,
                  'floor':item.floor,
                  'floorName':item.floorName,
                  'svgUrl':item.svgUrl
                },
                type: 'POST',
                dataType: "plain",
                success: function (data, status) { //服务器成功响应处理函数 //服务器成功响应处理函数
                  // alert(2);
                },
                error: function (e) { //服务器响应失败处理函数
                  $.messager.alert('警告', "系统错误", "warning");
                },
                complete: function () {//只要完成即执行，最后执行
                }
            });
          }
        })
      },
      xiugai_cancel(indexs){
        this.table_list.forEach((item,index)=>{
          if(indexs == index){
            $('.weixiugai:eq('+indexs+')').show();
            $('.xiugai:eq('+indexs+')').hide();
            $('.weixiugai_edit:eq('+indexs+')').show();
            $('.xiugai_edit:eq('+indexs+')').hide();
          }
        })
      },
      floor_delete(item,indexs){
        this.$fetch("/api/building/deleteBuildingFloor",{
          floorId:item.id
        }).then(response=>{
          // console.log(response.data);
          this.table_list.splice(indexs,1);
          this.findPageBuildIngFloor();
        })
      },
      room_build(item){
        $('.build').hide();
        $('.floor').hide();
        $('.main_content_table').hide();
        $('.main_content_bottom').hide();
        $('.plan').hide();
        $('.total').hide();
        $('.floor_wrap').hide();
        $('.room_wrap').show();
        this.floorName = item.floorName ;
        this.$store.commit('floorAdd',3);
        this.$store.commit('floorId',item.id);
        console.log(item.id);
        this.floorRoomListShow();
      },
      findPageBuildIngFloor(){
        // console.log(this.buildingId)
        this.$fetch("/api/building/findPageBuildIngFloor",{
          pageIndex:1,
          pageSize:1000,
          buildingId:this.buildingId
        }).then(response=>{
          console.log(response.data.pageBuildIng.result);
          this.table_list = response.data.pageBuildIng.result;
        })
      },

// 房间
      addUnit(){
        this.floorRoomList.push({unitBuilding:'',roomList:[]})
      },
      addRoom(item,index){
        item.roomList.push({floorId:this.floorId,roomNumber:'',roomId:'',imgKey:''})
      },
      deleteRoom(key, index){
        console.info(key);
        this.$fetch("/api/building/deleteBuildingFloorRoom",{
          roomId:key.roomId
        }).then(response=>{
          console.log(response);
          key.splice(index,1);
        })
      },
      submitFloorRoomList(){
        console.log(this.floorRoomList);
        var floorRoomList = JSON.stringify( this.floorRoomList );
        this.$fetch("/api/building/addBuildingFloorRoom",{
          floorRoomList:floorRoomList
        }).then(response=>{
          console.log(response);
          this.room_back()
        })
      },
      floorRoomListShow(){
        this.$fetch("/api/building/findPageBuildIngFloorRoom",{
          pageIndex:1,
          pageSize:1000,
          floorId:this.floorId
        }).then(response=>{
          console.log(JSON.stringify(response));
          var pageBuildIng = response.data.pageBuildIng.result;
          console.log(this.floorRoomList);
          pageBuildIng.forEach((item,index)=>{
            console.log(item.floorUnit)
          })
        })
      },


      back_first(){
        $('.plan').hide();
        $('.mapTable').show();
        $('.total').show();
        if(this.$route.path == '/Building_management/maps'){
          $('.mapTable').show();
          $('.total').show();
        }
        if(this.$route.path == '/Building_management/all'){
          $('.mapTable').hide();
          $('.total').show();
          // if(this.floorAdd == 1){
          //   $('.plan').hide();
          //   $('.total').hide();
          //   $('.floor_wrap').show();
          // }else if(this.floorAdd ==2){
          //   $('.plan').show();
          //   $('.total').hide();
          // }
        }
      },
      floor_back(){
        $('.build').show();
        $('.floor').hide();
        $('.main_content_table').show();
        $('.main_content_bottom').show();
        $('.plan').show();
        $('.total').hide();
        $('.floor_wrap').hide();
        $('.room_wrap').hide();
      },
      room_back(){
        $('.build').hide();
        $('.floor').hide();
        $('.main_content_table').hide();
        $('.main_content_bottom').hide();
        $('.plan').hide();
        $('.total').hide();
        $('.floor_wrap').show();
        $('.room_wrap').hide();
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      start_plan(row){//修改建筑
        $('#mymodal').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
        this.deviceIndex = row.id ;
        this.tableData.forEach((item,index)=>{
          if(item.id == this.deviceIndex){
            // console.log(item);
            this.form.point.pointX = item.pointX;
            this.form.point.pointY = item.pointY;
            this.form.BuildName = item.name ;
            this.form.unitId = item.unitId ;
            this.form.UnitName = item.unitName ;
            this.form.address = item.location ;
            this.form.area = item.area ;
            this.form.height = item.heightOfBuilding ;
            this.form.floor = item.floors ;
            this.form.structure = item.structure ;
            this.form.timeYear = item.buildYear ;
            this.form.property = item.property ;
            this.form.name = item.linkname ;
            this.form.phone = item.phone ;
          }
        })
      },
      startRow(){
        this.optionList.forEach((item,index)=>{
          if(item.id == this.form.unitId){
            // console.log(item.name);
            this.form.UnitName = item.name;
          }
        })
        this.$fetch("/api/building/addBuilding",{
          'name':this.form.BuildName,
          'unitId':this.form.unitId,
          'unitName':this.form.UnitName,
          'location':this.form.address,
          'area':this.form.area,
          'heightOfBuilding':this.form.height,
          'floors':this.form.floor,
          'structure':this.form.structure,
          'buildYear':this.form.timeYear,
          'property':this.form.property,
          'linkname':this.form.name,
          'phone':this.form.phone,
          headers: {'Content-Type': 'application/json'}
        },
      
        ).then(response=>{
          if(response){
            if(response.status == 1){
              console.log('修改建筑成功...'+ JSON.stringify(response));
              this.tableList();
            }else{
              console.log('修改建筑失败...'+ JSON.stringify(response));
            }
          }
        })
      },
      delete_plan(row){//删除
        $('#mymodal2').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
        this.deviceIndex = row.id;
        this.deviceName = row.name;
      },
      show3(row){//跳转
        console.log(row.id);
        this.$store.commit('buildingId',row.id);
        $('.plan').show();
        $('.mapTable').hide();
        $('.total').hide();
      },
      deleteRow(){
        console.log(this.deviceIndex);
        this.$fetch("/api/building/deleteBuilding",{
          buildingId:this.deviceIndex
        }).then(response=>{
          if(response){
            if(response.status == 1){
              console.log('删除建筑成功...'+ JSON.stringify(response));
            }else{
              console.log('删除建筑失败...'+ JSON.stringify(response));
            }
            this.tableData.splice(this.deviceIndex,1);
            this.tableList();
          }
        }).then(err => {
          console.log(err);
        });
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
          "/api/building/queryPageBuildingList",{
            currentPage:this.currentPage4,
            pageSize:10,
            unitId:this.unit
          }
        )
          .then(response => {
            // console.log(response);
            if (response.data.pageBuildIng) {
              this.totalList = response.data.pageBuildIng.totalRow;
              this.tableData = response.data.pageBuildIng.result;
              console.log(this.tableData)
              if(this.$route.path == '/Building_management/all'){
                this.tableData.forEach((item,index)=>{
                  if(index == this.tableData.length-1){
                    console.log(item);
                    this.form.point.pointX = item.pointX;
                    this.form.point.pointY = item.pointY;
                    this.form.BuildName = item.name ;
                    this.form.unitId = item.unitId ;
                    this.form.UnitName = item.unitName ;
                    this.form.address = item.location ;
                    this.form.area = item.area ;
                    this.form.height = item.heightOfBuilding ;
                    this.form.floor = item.floors ;
                    this.form.structure = item.structure ;
                    this.form.timeYear = item.buildYear ;
                    this.form.property = item.property ;
                    this.form.name = item.linkname ;
                    this.form.phone = item.phone ;
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
      }
    },
    mounted() {
      this.tableList();
      if(this.$route.path == '/Building_management/maps'){
        $('.mapTable').show();
        $('.total').show();
        this.tableList();
      }
      if(this.$route.path == '/Building_management/all'){
        // $('.floor_wrap').show();
        $('.plan').show();
        $('.total').hide();
      }
      // this.$fetch("/api/admin/inspection/countInspectionPlanRelevant",{
      //   unitId:''
      // }).then(response=>{
      //   if(response.data.map){
      //     console.log(response.data.map);
      //     this.countInspectionPlanRelevant.countTotal = response.data.map.TOTAL;
      //     this.countInspectionPlanRelevant.countDisableTotal = response.data.map.DISABLETOTAL;
      //     this.countInspectionPlanRelevant.countEnableTotal = response.data.map.ENABLETOTAL;
      //     this.countInspectionPlanRelevant.countDelete = response.data.map.DELETED;
      //     this.countInspectionPlanRelevant.countIssanCount = response.data.map.ISSANCOUNT;
      //   }
      // }).then(err=>{
      //   console.log(err)
      // })
    },
    watch:{
      $route: {
        handler: function(val, oldVal){
          // console.log(val);
          if(this.$route.path == '/Building_management/maps'){
            $('.plan').hide();
            $('.mapTable').show();
            $('.total').show();
            this.tableList();
            this.$store.commit('tableData',this.tableData);
          }
          if(this.$route.path == '/Building_management/all'){
            $('.total').hide();
            $('.plan').show();
          }
        },
        // 深度观察监听
        deep: true
      },
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        // console.log(this.currentPage4);
        this.tableList();
      },
      buildUnit(){
        // console.log(this.buildUnit);
         this.tableList();
        // this.$fetch("/api/admin/inspection/countInspectionPlanRelevant",{
        //   unitId:this.Unit
        // }).then(response=>{
        //   if(response.data.map){
        //     console.log(response.data.map);
        //     this.countInspectionPlanRelevant.countTotal = response.data.map.TOTAL;
        //     this.countInspectionPlanRelevant.countDisableTotal = response.data.map.DISABLETOTAL;
        //     this.countInspectionPlanRelevant.countEnableTotal = response.data.map.ENABLETOTAL;
        //     this.countInspectionPlanRelevant.countDelete = response.data.map.DELETED;
        //     this.countInspectionPlanRelevant.countIssanCount = response.data.map.ISSANCOUNT;
        //   }
        // }).then(err=>{
        //   // console.log(err)
        // })
      },
      buildingId(){
        if(this.$route.path == '/Building_management/maps'){
          $('.mapTable').show();
          $('.total').show();
          this.tableData.forEach((item,index)=>{
            if(item.id == this.buildingId){
              console.log(item);
              this.form.BuildName = item.name ;
              this.form.unitId = item.unitId ;
              this.form.UnitName = item.unitName ;
              this.form.address = item.location ;
              this.form.area = item.area ;
              this.form.height = item.heightOfBuilding ;
              this.form.floor = item.floors ;
              this.form.structure = item.structure ;
              this.form.timeYear = item.buildYear ;
              this.form.property = item.property ;
              this.form.name = item.linkname ;
              this.form.phone = item.phone ;
            }
          })
        }
        if(this.$route.path == '/Building_management/all'){
          if(this.floorAdd == 1){
            // console.log(this.buildingId)
            this.findPageBuildIngFloor();
            $('.plan').hide();
            $('.total').hide();
            $('.floor_wrap').show();
            this.tableData.forEach((item,index)=>{
              if(item.id == this.buildingId){
                // console.log(item);
                this.form.BuildName = item.name ;
                this.form.unitId = item.unitId ;
                this.form.UnitName = item.unitName ;
              }
            })
          }else if(this.floorAdd ==2){
            $('.plan').show();
            $('.total').hide();
            this.tableData.forEach((item,index)=>{
              if(item.id == this.buildingId){
                // console.log(item);
                this.form.BuildName = item.name ;
                this.form.unitId = item.unitId ;
                this.form.UnitName = item.unitName ;
                this.form.address = item.location ;
                this.form.area = item.area ;
                this.form.height = item.heightOfBuilding ;
                this.form.floor = item.floors ;
                this.form.structure = item.structure ;
                this.form.timeYear = item.buildYear ;
                this.form.property = item.property ;
                this.form.name = item.linkname ;
                this.form.phone = item.phone ;
              }
            })
          }
        }
        // console.log(this.buildingId);
      },
      floorId(){
        if(this.$route.path == '/Building_management/all'){
          if(this.floorAdd == 3){
            $('.plan').hide();
            $('.total').hide();
            $('.floor_wrap').hide();
            $('.room-wrap').show();
          }
          // console.log(this.floorId);
          this.floorRoomListShow()
        }
      }
    },
    computed:mapState([
      'buildUnit',
      'buildingId',
      'floorAdd',
      'floorId'
    ])
  }
</script>

<style lang="scss" scoped>

</style>
