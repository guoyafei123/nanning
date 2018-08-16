<template>
  <div class="toolright">
    <div class="font-white plan">
      <section>
        <a @click="back_first" class="btn-back" v-if="this.$route.path == '/Dangerous_goods_management/maps'"><i class="el-icon-arrow-left"></i>返回</a>
      </section>
      <!-- 危险品详情 -->
      <section>
           <div class="textandimg margin-top20">
              <h4 class="p-title">
                 <!-- {{ this.trouble.dangerName }} -->危险品详情
              </h4>
              <div class="row textandimg-main">
                <div class="col-sm-12">
                      <span>名称</span>
                      <strong v-html="this.trouble.dangerName"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>状态</span>
                      <span v-if="this.trouble.status == 0">未解决</span>
                      <strong v-if="this.trouble.status == 1">已解决</strong>
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
                  <div class="col-sm-12">
                    <span>上报人</span>
                    <strong v-html="this.trouble.nickName"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>上报时间</span>
                      <strong v-html="this.trouble.createTime"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>解决人</span>
                      <strong v-html="this.trouble.reviewerName"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>解决时间 </span>
                      <strong v-html="this.trouble.reviewTime"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>图片及视频 </span>
                      <ul>
                        <li style="width:100px;"><img style="width:100%;" :src="this.trouble.imgUrl"/></li>
                      </ul>
                  </div>
                  <div class="col-sm-12">
                      <span>简介 </span>
                      <strong v-html="this.trouble.cont"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>解决原因 </span>
                      <strong v-html="this.trouble.treatment"></strong>
                  </div>
              </div>
          </div>
      </section>
    </div>
    <div class="font-white total">
      <section class="mapTable" style="display: none;">
        <!-- 总数统计 -->
        <div class="toolcount clearfix">
          <ul class="toolcount-left padding0 col-sm-3">
            <li>
              <p class="size-10 font-gray-666">Dangerous Total</p>
            </li>
            <li>
              <p class="size-18 font-blue">危险品总数</p>
            </li>
            <li>
              <h1 class="toolcount-p1">569</h1>
            </li>
          </ul>
        </div>
        <div class="toolbuildrate">
          <div class="main_content_table bg-black">
            <el-table
              :data="tableData"
              border
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
              <el-table-column
                prop="unitName"
                :show-overflow-tooltip="true"
                label="所属单位">
              </el-table-column>
              <el-table-column
                prop="cont"
                :show-overflow-tooltip="true"
                label="位置">
              </el-table-column>
              <el-table-column
                prop="cont"
                label="危险品简介">
              </el-table-column>
              <el-table-column
                prop="nickName"
                label="上报人">
              </el-table-column>
              <el-table-column
                prop="createTime"
                :show-overflow-tooltip="true"
                label="上报时间">
              </el-table-column>
              <el-table-column 
                prop="status"
                label="状态">
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.status === 0 ? 'red' : 'green'"
                    disable-transitions v-if='scope.row.status==0'>未解决</el-tag>
                  <el-tag
                    :type="scope.row.status === 1 ? 'green' : 'red'"
                    disable-transitions v-if='scope.row.status==1'>已解决 <i class="el-icon-warning font-blue" data-toggle="tooltip" title="段亚伟 2018-08-20 16:30:23"></i></el-tag>
                </template>
              </el-table-column>
              <el-table-column
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
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作">
                <template slot-scope="scope">
                  <button @click="start_plan(scope.row)" data-toggle="modal" data-target="#mymodal" class="btn-on">处理</button>
                  <button @click="delete_plan(scope.row)" v-if="scope.row.status==1" class="cursor-no" data-toggle="modal" data-target="#mymodal2"><i class="el-icon-delete" data-toggle="tooltip" title="删除"></i></button>
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
        <!-- 编辑Modal -->
        <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">解决危险品</h4>
              </div>
              <div class="modal-body">
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
        <!-- 删除Modal -->
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
</style>
