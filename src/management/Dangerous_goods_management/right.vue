<template>
  <div class="Inspection_plan toolright">
    <div class="font-white margin-left15 margin-right20 plan">
      <section>
          <span @click="back_first" class="font-gray-666" style="cursor:pointer;" v-if="this.$route.path == '/Dangerous_goods_management/maps'">&lt;返回</span>
        
      </section>
      <section>
           <div class="textandimg">
              <h2 class="size-18 font-gray-ccc margin-bottom20 margin-top10" style="text-align:center;line-height:35px;">
                 {{ this.trouble.dangerName }}<br/>危险品信息详情
              </h2>
              <div class="row textandimg-main">
                  <div class="col-sm-12">
                      <span class="size-16 font-gray-666 span_name">状态</span>
                      <span class="size-14 font-gray-999 span_con" v-if="this.trouble.status == 0">未解决</span>
                      <span class="size-14 font-gray-999 span_con" v-if="this.trouble.status == 1">已解决</span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-16 font-gray-666 span_name">所属单位</span>
                      <span class="size-14 font-gray-999 span_con" v-html="this.trouble.unitName"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-16 font-gray-666 span_name">位置</span>
                      <span class="size-14 font-gray-999 span_con" v-if="this.trouble.buildingName == '室外'">室外</span>
                      <span class="size-14 font-gray-999 span_con" v-else><span v-if="this.trouble.buildingName != '' && this.trouble.buildingName != null">{{ this.trouble.buildingName }} 建筑</span><span v-if="this.trouble.floorNumber != '' && this.trouble.floorNumber != null">{{ this.trouble.floorNumber }} 楼层</span><span v-if="this.trouble.roomNumber != '' && this.trouble.roomNumber != null">{{ this.trouble.roomNumber }} 房间</span></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-16  font-gray-666 span_name">坐标 </span>
                      <span class="size-12 font-gray-999 span_con" style="margin-right:10px;" v-html="this.trouble.point.pointX"></span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.trouble.point.pointY"></span>
                  </div>
                  <div class="col-sm-12">
                    <span class="size-16 font-gray-666 span_name">上报人</span>
                    <span class="size-14 font-gray-999 span_con" v-html="this.trouble.nickName"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">上报时间</span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.trouble.createTime"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">解决人</span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.trouble.reviewerName"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">解决时间 </span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.trouble.reviewTime"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">图片及视频 </span>
                      <ul>
                        <li style="width:100px;"><img style="width:100%;" :src="this.trouble.imgUrl"/></li>
                      </ul>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">简介 </span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.trouble.cont"></span>
                  </div>
                  <div class="col-sm-12">
                      <span class="size-12 font-gray-666 span_name">解决原因 </span>
                      <span class="size-12 font-gray-999 span_con" v-html="this.trouble.treatment"></span>
                  </div>
              </div>
          </div>
      </section>
    </div>
    <div class="font-white margin-left15 margin-right20 total" style="margin-top:120px;">
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
                width="60"
                label="序号">
              </el-table-column>
              <el-table-column
                prop="dangerName"
                width="170"
                :show-overflow-tooltip="true"
                label="危险品名称">
              </el-table-column>
              <el-table-column
                prop="unitName"
                width="160"
                :show-overflow-tooltip="true"
                label="所属单位">
              </el-table-column>
              <el-table-column
                prop="cont"
                width="100"
                :show-overflow-tooltip="true"
                label="位置">
              </el-table-column>
              <el-table-column
                prop="cont"
                width="130"
                label="危险品简介">
              </el-table-column>
              <el-table-column
                prop="nickName"
                width="140"
                label="上报人">
              </el-table-column>
              <el-table-column
                prop="createTime"
                width="100"
                :show-overflow-tooltip="true"
                label="上报时间">
              </el-table-column>
              <el-table-column 
                prop="status"
                width="120"
                label="状态">
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.status === 0 ? 'red' : 'green'"
                    disable-transitions v-if='scope.row.status==0'>未解决<i class="fa fa-th-large font-gray-666"></i></el-tag>
                  <el-tag
                    :type="scope.row.status === 1 ? 'green' : 'red'"
                    disable-transitions v-if='scope.row.status==1'>已解决</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                prop="reviewerName"
                width="130"
                :formatter="formatter"
                label="解决人">
              </el-table-column>
              <el-table-column
                prop="reviewTime"
                width="120"
                label="解决时间">
              </el-table-column>
              <el-table-column
                prop="treatment"
                width="120"
                label="解决原因">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope">
                  <button @click="start_plan(scope.row)" data-toggle="modal" data-target="#mymodal" style="width:40px;height:22px;border:2px solid #bad616;color: #bad616;background-color: #111111;line-height: 19px;margin:0;padding:0;font-size: 12px;text-align: center;margin-right:10px;">处理</button>
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
                <h4 class="modal-title" id="myModalLabel">解决危险品</h4>
              </div>
              <div class="modal-body" style="height:650px;overflow-y:auto;">
                <el-form ref="form" :label-position="labelPosition" :model="form">
                  <el-form-item label="危险品名称">
                    <!-- <span class="font-red" style="position: absolute;top:-45px;right:20px;">建筑名称有误或重复</span> -->
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="所属单位">
                    <el-select v-model="form.unitId" placeholder="选择单位" class="select" style="width:150px;">
                      <el-option label="全部单位" value=""></el-option>
                      <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="设备类型">
                    <el-select
                      v-model="form.equipmentId"
                      placeholder="选择设备类型" class="sbwz_138_32 start" style="margin-left:0px;">
                      <el-option
                        v-for="item in form.equipmentList"
                        :label="item.name"
                        :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="设备位置">
                    <el-select
                      v-model="form.buildingId"
                    placeholder="选择建筑"  class="sbwz_138_32 start float-left" style="margin-left:0px;">
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
                        :label="item.floor+'层'"
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

                  <el-form-item label="物理地址" v-if="form.deviceType == 1">
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
                    <el-input v-model="form.lifeMonth"></el-input>
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
        $('#mymodal2').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
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
            pageSize:10,
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
      }
    },
    computed:mapState([
      'Unit',
      'buildDevice',
      'floorDevice',
      'roomDevice',
      'dangerId'
    ])
  }
</script>

<style lang="scss" scoped>
  .padding-right16 {
    padding-right: 16px;
  }
  .inspection_ul{
    width:75%;
    float: left;
    margin-top:30px;
    li{
      float: left;
      width:33%;
      font-size: 12px;
      color: #999999;
      height: 30px;
      span{

        margin-left:8px;
        color: #cccccc;
      }
      &:nth-child(1){
        span{
          margin-left:20px;
          color: red;
        }
      }
      &:nth-child(2){
        span{
          margin-left:19px;
        }
      }
    }
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
  .danger{
      width: 132px;
      background-color: #f13131;
      color: #000;
      font-size: 14px;
      height: 32px;
      line-height: 32px;
      padding: 0;
  }

  .textandimg{
    // margin-top:130px;
    
    margin-left:60px;
  }

  .span_name{
    font-size: 15px !important;
    width:140px;
    display:inline-block;
    margin-left:-20px;
    line-height: 30px;
  }
  .span_con{
    font-size: 14px !important;
    display:inline-block;
    line-height: 30px;
  }
  
</style>
