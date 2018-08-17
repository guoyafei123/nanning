<template>
  <section>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-weixianpin-mian-"></i>
        <h2>危险品管理</h2>
      </div>
      <div class="main_nav float-right">
        <router-link to="/Dangerous_goods_management/list"><span class="btn_add" @click="btn_add"><i class="fa fa-plus"></i>新增</span></router-link>
      </div>
    </div>
    <!-- 主体 -->
    <div class="main_all_content">
      <!-- 筛选 -->
      <div class="main_content_top">
        <el-form ref="form" :model="form" class="float-left">
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
              <el-option
                v-for="item in equipmentList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
        </el-form>
        <div class="main_nav_two float-right">
          <router-link to="/Dangerous_goods_management/all"><span><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
          <router-link to="/Dangerous_goods_management/maps"><span @click="btn_map"><i class="icon iconfont icon-liebiaoditu-xian-"></i>地图</span></router-link>
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
            fixd="left"
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
      <!-- 分页 -->
      <div class="main_content_bottom">
        <div class="bottom_con">
          <div class="float-left btn-system">
            <a href="javascript:;">打印</a>
            <a href="javascript:;">导出</a>
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
            <h4 class="modal-title" id="myModalLabel">解决危险品</h4>
          </div>
          <div class="modal-body" style="height:650px;overflow-y:auto;">
            <el-form ref="form" :label-position="labelPosition" :model="form">
              <el-form-item label="危险品名称">
                <!-- <span class="font-red" style="position: absolute;top:-45px;right:20px;">建筑名称有误或重复</span> -->
                <el-input v-model="form.dangerName" disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="所属单位">
                <el-select v-model="form.unitId" placeholder="选择单位" class="select selectUnit" style="width:auto;" disabled="true">
                  <el-option label="全部单位" value=""></el-option>
                  <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="位置">
                <el-select
                  v-model="form.buildingId"
                  disabled="true"
                  placeholder="选择建筑"  class="start float-left" style="margin-left:0px;width:auto;">
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
                  placeholder="选择楼层" class="start">
                  <el-option
                    v-for="item in form.floorList"
                    :label="item.floorName+'层'"
                    :value="item.id">
                  </el-option>
                </el-select>
                <el-select
                  v-model="form.roomId"
                  disabled="true"
                  placeholder="选择房间" class="start">
                  <el-option
                    v-for="item in form.roomList"
                    :label="item.roomNumber+'房间'"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="坐标">
                <el-input v-model="form.point.pointX" style="display:inline-block;width:200px;" disabled="true"></el-input>
                <el-input v-model="form.point.pointY" style="display:inline-block;width:200px;" disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="上报人">
                <el-input v-model="form.nickName" disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="上报时间">
                <el-input v-model="form.createTime" disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="解决人">
                <el-input v-model="form.reviewerName" disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="解决时间">
                <el-input v-model="form.reviewTime" disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="图片及视频">
                <ul>
                  <li style="width:100px;"><img style="width:100%;" :src="this.form.imgUrl"/></li>
                </ul>
              </el-form-item>
              <el-form-item label="简介">
                <el-input
                  type="textarea"
                  :rows="2"
                  disabled="true"
                  v-model="form.cont">
                </el-input>
              </el-form-item>
              <el-form-item label="简介">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="form.treatment">
                </el-input>
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
            <h5 class="modal-p">该操作并不影响之前的统计数据</h5>
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
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
        labelPosition: 'top',

        form:{
          id:'',
          dangerName:'',
          unitId:null,
          unitName:'',
          buildingId:'',
          buildingName:'',
          floorId:'',
          floorNumber:'',
          roomId:'',
          roomNumber:'',
          roomList:[],
          floorList:[],
          buildList:[],
          point:{
            pointX:'',
            pointY:'',
            xRate:'',
            yRate:''
          },
          nickName:'',
          createTime:'',
          reviewerName:'',
          reviewTime:'',
          imgUrl:[],
          cont:'',
          treatment:''
        },


        
        unit:null,//选择单位
        building:'',//选择建筑
        floor:'',
        room:'',
        status:'',
        roomList:[],
        floorList:[],
        buildList:[],
        statusList:[
          { name: '全部' , id:'' },
          { name:'未解决', id:0 },
          { name:'已解决', id:1 }
        ],
        optionList:[],//全部单位列表
        tableData: [],//危险品列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        deviceIndex:'',
        deviceName:''
      }
    },
    methods: {
      btn_map(){
        $('.plan').hide();
        $('.mapTable').show();
        $('.total').show();
      },
      btn_add(){
        $('#right').hide();
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      start_plan(row){//处理
        $('#mymodal').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
        this.deviceIndex = row.id ;
        this.tableData.forEach((item,index)=>{
          if(item.id == row.id){
            this.form.id = item.id ;
            this.form.dangerName = item.dangerName ;
            this.form.unitId = item.unitId ;
            this.form.unitName = item.unitName ;
            this.form.buildingId = item.buildingId ;
            if( this.form.buildingId == '0' &&  this.form.buildingId == 0){
              this.form.buildingName = '室外' ;
            }else{
              this.form.buildingName = item.buildingName ;
            }
            this.form.floorId = item.floorId ;
            this.form.floorNumber = item.floorNumber ;
            this.form.roomId = item.roomId ;
            this.form.roomNumber = item.roomNumber ;
            this.form.point.pointX = item.pointX ;
            this.form.point.pointY = item.pointY ;
            this.form.nickName = item.nickName ;
            this.form.createTime = item.createTime ;
            this.form.reviewerName = item.reviewerName ;
            this.form.reviewTime = item.reviewTime ;
            this.form.imgUrl = item.imgUrl ;
            this.form.cont = item.cont ;
            this.form.treatment = item.treatment ;
          }
        })
      },
      startRow(){
        this.$fetch("/api/trouble/solveTrouble",{
          'troubleId':this.form.id,
          'dangerName':this.form.dangerName,
          'treatment':this.form.treatment
        }).then(response=>{
          if(response){
            console.log('处理成功...'+ JSON.stringify(response));
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
            unitId:this.unit,
            type:5,
            buildingId:this.building,
            floorId:this.floor,
            roomId:this.room,
            currentPage:this.currentPage4,
            pageSize:10,
            status:this.status
          }
        )
          .then(response => {
            console.log('危险品！！！'+JSON.stringify(response));
            if (response) {
              // console.log(response.data.inspectionPlanList);
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              if(this.tableData){
                this.tableData.forEach((item,index)=>{
                  if(index == this.tableData.length-1){
                    this.$store.commit('dangerId',item.id);
                    console.log(item.id)
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
    watch:{
      status(curVal,oldVal){
        this.status = curVal ;
        this.tableList();
      },
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
      }
    },
    mounted(){
      realconsole();
      this.tableList();
      this.unitSearch();
      $('#right').show();
      if(this.$route.path == '/Dangerous_goods_management/all'){
        $('.mapTable').hide();
      }
    }
  };
</script>
<style lang="scss" scoped>
</style>
