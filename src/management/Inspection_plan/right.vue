<template>
  <div class="Inspection_plan z-index-20">
    <div class="font-white plan">
      <section>
          <span @click="back_first" class="font-gray-666" style="cursor:pointer;">&lt;返回</span>
          <div class="personinfo">
            <p>
              <span class="size-20 font-blue" v-html="this.inspectionPlan.name"></span>
              <span class="bgbox-min bg-gray-666 font-black">{{ this.inspectionPlan.type == 1 ? '举报检查': this.inspectionPlan.type == 2 ? '活动检查':this.inspectionPlan.type == 3 ? '例行检查':this.inspectionPlan.type == 4 ? '复查':this.inspectionPlan.type == 5 ? '施工检查':this.inspectionPlan.type == 6 ? '解除临时查封':this.inspectionPlan.type == 7 ? '恢复工作检查':this.inspectionPlan.type == 8 ? '其他检查':'全部'}}</span>
              <span class="float-right">
                        <span class="font-black size-12 bg-blue" style="padding:2px 5px;" v-if="this.inspectionPlan.status == 1">激活</span>
                        <span class="font-black size-12 bg-red" style="padding:2px 5px;" v-if="this.inspectionPlan.status == 2">未激活</span>
                    </span>
            </p>
            <p>
              <span class="size-12 font-gray-666"><i class="fa fa-th-large"></i> {{ this.inspectionPlan.unitName }}</span>
              <span class="size-12 font-gray-666 float-right set-positiontop2">激活时间<span class="font-gray-999 margin-left5" v-html="this.inspectionPlan.createTime"></span></span>
            </p>
          </div>
        </section>
      <section class="inspection-iteminfo " >
        <section>
          <div class="row toolcount margin-top40">
            <div class="col-sm-4  font-gray-999 padding-right0">
              <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                <li>
                  <p class="size-70 font-blue" style="line-height:90px;" v-html="this.inspectionPlan.amount"></p>
                </li>
                <li>
                  <p class="size-10 text-center">Running Counts</p>
                </li>
                <li>
                  <p class="size-16 font-blue">每日额定完成数</p>
                </li>
              </ul>
            </div>
            <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
              <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15">
                <li>
                  <p class="size-16 font-gray-ccc">路线信息</p>
                </li>
                <li>
                  <p class="size-10 set-scaleright">Inspection Info</p>
                </li>
                <li>
                  <p class="size-12">添加人&#x3000;&#x3000;<span class="font-gray-ccc" v-html="this.inspectionPlan.createUserName"></span></p>
                </li>
                <li>
                  <p class="size-12">添加时间 &#x3000;<span class="font-gray-ccc" v-html="this.inspectionPlan.createTime"></span></p>
                </li>
                <li class="row text-center padding-right16 margin-top5">
                  <div class="col-sm-4 container-padding0 personnel-borderright">
                    <p class="size-16 font-white" style="width:100%;line-height: 10px;" v-html="this.inspectionPlan.isScan == 1 ? '是':'否'"></p>
                    <p class="size-12 margin-bottom0">扫码打卡</p>
                  </div>
                  <div class="col-sm-4 container-padding0 personnel-borderright">
                    <p class="size-16 font-white" style="width:100%;line-height: 10px;" v-html="this.inspectionPlan.nodeCount == null ? 0 : this.inspectionPlan.nodeCount"></p>
                    <p class="size-12 margin-bottom0">节点总数</p>
                  </div>
                  <div class="col-sm-4 container-padding0">
                    <p class="size-16 font-white" style="width:100%;line-height: 10px;">-</p>
                    <p class="size-12 margin-bottom0">巡检人数</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div class="toolbuildrate margin-top30">
            <h2 class="size-14 font-gray-ccc">
              <span class="tool-rect bg-blue"></span>路线详情 </h2>
            <div class="panel-group tablist-item margin-left15" id="accordion" role="tablist" aria-multiselectable="true">
              <div class="panel panel-default bg-none border-none border-radiusnone">
                <div class="panel-heading bg-gray-222 font-gray-999 tablist-itemtitle" role="tab" id="headingOne">
                  <span class="itemtitle-rect"><i class="fa fa-th-large font-gray-333"></i></span>
                  <h4 class="panel-title">
                    <a v-for="item in startInspection" role="button" class="size-12" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      {{ item.buildingName }}{{ item.floorNumber }}<span v-if="item.floorNumber">层</span>{{ item.roomNumber }}<span v-if="item.roomNumber">房间</span><span class="itemtitle-value display-inline-block margin-left10 bg-red font-black" v-html="item.deviceId"></span>
                    </a>
                  </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div class="panel-body padding3">
                    <ul class="size-12 font-gray-999 tablist-itemul">
                      <li v-for="item in nodeInspection">
                          <span>{{ item.buildingName }}{{ item.floorNumber }}<span v-if="item.floorNumber">层</span>{{ item.roomNumber }}<span v-if="item.roomNumber">房间</span>
                            <span class="float-right">
                              <i class="fa fa-th-large font-yellow"></i>
                              <span class="font-blue" v-html="item.floorId"></span>/<span class="font-yellow" v-html="item.roomId"></span>
                            </span>
                          </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="panel-heading bg-gray-222 font-gray-999 tablist-itemtitle" role="tab" id="footerone">
                  <span class="itemtitle-rect"><i class="fa fa-th-large font-gray-333"></i></span>
                  <h4 class="panel-title">
                    <a v-for="item in endInspection" role="button" class="size-12" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      {{ item.buildingName }}{{ item.floorNumber }}<span v-if="item.floorNumber">层</span>{{ item.roomNumber }}<span v-if="item.roomNumber">房间</span><span class="itemtitle-value display-inline-block margin-left10 bg-red font-black" v-html="item.deviceId"></span>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="toolbuildrate margin-top30">
            <h2 class="size-14 font-gray-ccc"><span class="tool-rect bg-blue"></span>操作日志</h2>
            <div class="main_content_table">
              <el-table
                :data="tableData"
                border
                style="width: 100%;height:235px;">
                <el-table-column
                  sortable
                  type="index"
                  width="60"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="createTime"
                  width="140"
                  label="操作时间">
                </el-table-column>
                <el-table-column
                  prop="operatorName"
                  label="操作人">
                </el-table-column>
                <el-table-column
                  prop="operation"
                  label="动作">
                </el-table-column>
              </el-table>
            </div>
            <div class="main_content_bottom">
              <div class="bottom_con">
                <div class="float-left" style="margin-top:5px;">
                  <a href="javascript:;" class="font-gray-666" style="margin-left:5px;">打印</a>
                  <a href="javascript:;" class="font-gray-666" style="margin-left:5px;">导出</a>
                </div>
                <el-pagination style="float: right;background: transparent"
                               @current-change="handleCurrentChange"
                               :current-page="currentPage4"
                               :page-size="4"
                               layout="prev, pager, next"
                               :total="totalList">
                </el-pagination>
                <span style="float: right;margin-top:5px;color: #666;margin-left:5px;margin-right:10px;">{{page}}页</span>
                <el-pagination style="float: right;"
                               @current-change="handleCurrentChange"
                               :current-page="currentPage4"
                               :page-size="4"
                               layout="total"
                               :total="totalList">
                </el-pagination>

              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
    <div class="font-white margin-left15 margin-right20 total" style="margin-top:120px;">
      <h2 style="font-size: 12px;line-height:10px;margin-bottom:10px;" class="font-gray-999">Inspection Total</h2>
      <h3 style="font-size:18px;" class="font-blue">当前线路总数</h3>
      <div style="width:100%;overflow: hidden;">
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
      </div>
      <section style="display: none;" class="mapTable">
        <div class="toolbuildrate margin-top30">
          <div class="main_content_table">
            <el-table
              :data="tableDataList"
              border
              :default-sort = "{prop: 'Serial_number', order: 'descending'}"
              style="width: 100%;height:570px;">
              <el-table-column
                type="index"
                sortable
                prop="Serial_number"
                width="60"
                label="序号">
              </el-table-column>
              <el-table-column
                prop="name"
                width="100"
                label="路线名称">
              </el-table-column>
              <el-table-column
                prop="nodeCount"
                width="60"
                label="节点">
              </el-table-column>
              <el-table-column
                prop="isScan" :formatter="formatScan"
                width="100"
                label="扫码打卡">
              </el-table-column>
              <el-table-column :formatter="formatStatus"
                prop="status"
                width="100"
                label="路线状态">
                <template slot-scope="scope" :formatter="formatStatus">
                  <el-tag
                    :type="scope.row.status === 1 ? 'green' : 'red'"
                    disable-transitions v-if='scope.row.status==1'>已激活<i class="fa fa-th-large font-gray-666"></i></el-tag>
                  <el-tag
                    :type="scope.row.status === 2 ? 'red' : 'green'"
                    disable-transitions v-if='scope.row.status==2'>未激活</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope">
                  <button @click="start_plan(scope.row)" data-toggle="modal" data-target="#mymodal" style="width:40px;height:22px;border:2px solid #bad616;color: #bad616;background-color: #111111;line-height: 19px;margin:0;padding:0;font-size: 12px;text-align: center;margin-right:10px;" v-if="scope.row.status==2">开启</button>
                  <button @click="stop_plan(scope.row)" data-toggle="modal" data-target="#mymodal3" style="width:40px;height:22px;border:2px solid #999999;color: #999;background-color: #111111;line-height: 19px;margin:0;padding:0;font-size: 12px;text-align: center;margin-right:10px;" v-if="scope.row.status==1">关闭</button>
                  <i @click="delete_plan(scope.row)" data-toggle="modal" data-target="#mymodal2"  class="fa fa-th-large font-gray-666" style="margin-right: 10px;" v-if="scope.row.status==2"></i>
                  <i class="fa fa-th-large" style="margin-right: 10px;color: #2c2c2c;" v-if="scope.row.status==1"></i>
                  <i @click="show3(scope.row)" class="fa fa-th-large font-gray-666"></i>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="main_content_bottom">
            <div class="bottom_con">
              <div class="float-left" style="margin-top:5px;">
                <a href="javascript:;" class="font-gray-666" style="margin-left:5px;">打印</a>
                <a href="javascript:;" class="font-gray-666" style="margin-left:5px;">导出</a>
              </div>
              <el-pagination style="float: right;background: transparent"
                             @current-change="handleCurrent"
                             :current-page="currentPage"
                             :page-size="10"
                             layout="prev, pager, next"
                             :total="totalCount">
              </el-pagination>
              <span style="float: right;margin-top:5px;color: #666;margin-left:5px;margin-right:10px;">{{pageCount}}页</span>
              <el-pagination style="float: right;"
                             @current-change="handleCurrent"
                             :current-page="currentPage"
                             :page-size="10"
                             layout="total"
                             :total="totalCount">
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
            <h4 class="modal-title" id="myModalLabel">激活</h4>
            <h5 class="modal-p">{{ inspectionName }}</h5>
          </div>
          <div class="modal-body">
            <el-form ref="form" :label-position="labelPosition" :model="form">

              <el-form-item size="small"
                  label="每日额定完成次数"
                  prop="age">
                <el-input type="age" v-model.number="amountNumber" auto-complete="off" style="width:190px;"></el-input>
                <el-button type="primary" round icon="el-icon-search" class="resource_btn" style="width:260px;">设定该路线每日额定完成数量，<span class="font-red">激活后不可修改！</span></el-button>
              </el-form-item>
              <div style="clear: both;"></div>
              <el-form-item label="是否开启扫描打卡" style="margin-top:10px;">
                <span class="font-red" style="position: absolute;top:-54px;right:20px;">未选择是否生成图形码</span>
                <el-radio-group v-model="isScan">
                  <el-radio-button label="1">是</el-radio-button>
                  <el-radio-button label="0">否</el-radio-button>
                </el-radio-group>
                <el-button type="primary" round icon="el-icon-search" class="resource_btn" style="width:260px;">巡检节点是否开启扫码打卡，<span class="font-red">激活后不可修改！</span></el-button>

              </el-form-item>
            </el-form>
          </div>
          <div class="modal-footer">
            <el-button type="primary" @click.native.prevent="startRow()" icon="el-icon-search" class="primary" data-dismiss="modal">激活</el-button>
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
            <p style="text-align: center;font-size: 16px; color: #fff;margin-top:20px;">{{ inspectionName }}</p>
          </div>
          <div class="modal-footer">
            <el-button type="danger" @click.native.prevent="deleteRow()" icon="el-icon-search" class="danger" data-dismiss="modal">删除</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="mymodal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel3">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel3">提示</h4>
            <h5 class="modal-p">关闭操作并不影响之前的统计数据</h5>
          </div>
          <div class="modal-body" style="height:217px;">
            <h2 style="text-align:center;font-size: 16px;color:#f13131;margin-top:30px;font-weight:bold;">是否关闭</h2>
            <p style="text-align: center;font-size: 16px; color: #fff;margin-top:20px;">{{ inspectionName }}</p>
          </div>
          <div class="modal-footer">
            <el-button type="danger" @click.native.prevent="StopRow()" icon="el-icon-search" class="danger" data-dismiss="modal">关闭</el-button>
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
        isScan:'',//是否扫码打卡
        labelPosition: 'top',
        amountNumber:'',//每日额定次数
        tableData: [],//路线列表
        page:0,//总页数
        totalList:0,//总条数
        currentPage4: 1,//当前页
        tableDataList:[],
        pageCount:0,
        totalCount:0,
        currentPage:1,
        countInspectionPlanRelevant:{
          countTotal:0,
          countDelete:0,
          countDisableTotal:0,
          countEnableTotal:0,
          countIssanCount:0
        },
        inspectionPlan:{

        },
        startInspection:[],
        nodeInspection:[],
        endInspection:[],
        inspectionIndex:'',
        inspectionName:''
      };
    },
    methods: {
      back_first(){
        $('.plan').hide();
        $('.mapTable').show();
        $('.total').show();
        if(this.$route.path == '/Inspection_plan/maps'){
          $('.mapTable').show();
          $('.total').show();
        }
        if(this.$route.path == '/Inspection_plan/all'){
          $('.mapTable').hide();
          $('.total').show();
        }
      },
      formatType(row){
        return row.type == 1 ? '举报检查': row.type == 2 ? '活动检查':row.type == 3 ? '例行检查':row.type == 4 ? '复查':row.type == 5 ? '施工检查':row.type == 6 ? '解除临时查封':row.type == 7 ? '恢复工作检查':row.type == 8 ? '其他检查':'全部';
      },
      formatScan(row){
        return row.isScan == 1 ?  '是' : '否';
      },
      formatStatus(row){
        return row.status == 1 ? '已激活' : '未激活';
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      handleCurrent(val) {
        this.currentPage = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      start_plan(row){//启用
        $('#mymodal').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
        this.inspectionIndex = row.id ;
      },
      startRow(){
          this.$fetch("/api/inspection/start_plan",{
            id:this.inspectionIndex,
            amount:this.amountNumber,
            isScan:this.isScan
          }).then(response=>{
            if(response){
              console.log('开启线路成功...'+ JSON.stringify(response));
              this.tableList2();
            }
          })

      },
      delete_plan(row){//删除
        $('#mymodal2').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
        this.inspectionName = row.name;
      },
      show3(row){//跳转
        console.log(row.id);
        this.$store.commit('inspectionPlanId',row.id);
        $('.plan').show();
        $('.mapTable').hide();
        $('.total').hide();
        this.$fetch("/api/admin/inspection/queryInspectionNodeByPlanId",{
          planId:this.inspectionId
        }).then(response=>{
          if(response.data.inspectionPlan){
            this.inspectionPlan = response.data.inspectionPlan;
            console.log(this.inspectionPlan);
            this.startInspection = this.inspectionPlan.inspectionNodes.slice(0,1);
            console.log(this.startInspection);
            this.nodeInspection = this.inspectionPlan.inspectionNodes.slice(1,-1);
            console.log(this.nodeInspection);
            this.endInspection = this.inspectionPlan.inspectionNodes.slice(-1);
            console.log(this.endInspection);
          }
        }).then(err=>{
          // console.log(err)
        })
      },
      stop_plan(row){//停用
        $('#mymodal3').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
        this.inspectionName = row.name;
        this.inspectionIndex = row.id ;
      },
      StopRow(){//停用的接口
          console.log(this.inspectionIndex);
          this.$fetch("/api/inspection/stop_plan",{
            id:this.inspectionIndex
          }).then(response=>{
            if(response){
              console.log('关闭线路成功...'+ JSON.stringify(response));
              this.tableList2();
            }
          })

      },
      deleteRow(){
          console.log(this.inspectionIndex);
          this.$fetch("/api/admin/inspection/deleteInspectiopnPlan",{
            inspectionPlanId:this.inspectionIndex
          }).then(response=>{
            if(response){
              console.log('删除线路成功...'+ JSON.stringify(response));
              this.tableData.splice(this.inspectionIndex,1);
              this.tableList2();
            }
          }).then(err => {
            console.log(err);
          });
      },
      tableList2(){
        this.$fetch(
          "/api/admin/inspection/queryInspectionPlanList",{
            currentPage:this.currentPage,
            pageSize:10,
            unitId:this.form.region1,
            type:this.form.region2,
            status:this.form.region3
          }
        )
          .then(response => {
            console.log(response);
            if (response) {
              // console.log(response.data.inspectionPlanList);
              this.totalCount = response.data.total;
              this.tableDataList = response.data.inspectionPlanList;
              if(this.totalCount % 10 == 0){
                this.pageCount = parseInt( this.totalCount / 10 )
              }else{
                this.pageCount = parseInt( this.totalCount / 10 ) + 1
              }
            }
          })
          .then(err => {
            // console.log(err);
          });
      },
      tableList(){
        this.$fetch(
          "/api/admin/inspection/queryLogByInspectionPlanId",{
            currentPage:this.currentPage4,
            pageSize:4,
            planId:this.inspectionId
          }
        )
          .then(response => {
            console.log(response);
            if (response) {
              console.log(response.data.pager.result);
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              if(this.totalList % 4 == 0){
                this.page = parseInt( this.totalList / 4 )
              }else{
                this.page = parseInt( this.totalList / 4 ) + 1
              }
            }
          })
          .then(err => {
            // console.log(err);
          });
      }
    },
    mounted() {
      if(this.$route.path == '/Inspection_plan/maps'){
        $('.mapTable').show();
        $('.total').show();
      }
      this.tableList2();
      this.$fetch("/api/admin/inspection/countInspectionPlanRelevant",{
        unitId:''
      }).then(response=>{
        if(response.data.map){
          console.log(response.data.map);
          this.countInspectionPlanRelevant.countTotal = response.data.map.TOTAL;
          this.countInspectionPlanRelevant.countDisableTotal = response.data.map.DISABLETOTAL;
          this.countInspectionPlanRelevant.countEnableTotal = response.data.map.ENABLETOTAL;
          this.countInspectionPlanRelevant.countDelete = response.data.map.DELETED;
          this.countInspectionPlanRelevant.countIssanCount = response.data.map.ISSANCOUNT;
        }
      }).then(err=>{
        console.log(err)
      })
    },
    watch:{
      $route: {
        handler: function(val, oldVal){
          console.log(val);
          if(this.$route.path == '/Inspection_plan/maps'){
            this.tableList2();
          }
        },
        // 深度观察监听
        deep: true
      },
      currentPage(val, oldVal){
        this.currentPage = val;
        console.log(this.currentPage);
        this.tableList2();
      },
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        console.log(this.currentPage4);
        this.tableList();
      },
      form:{
      
        handler(curVal,oldVal){
          // console.log(curVal);
          this.form = curVal;
          console.log(this.form);
          this.tableList2();
        },
        deep:true
      },
      region(){
        console.log(this.region);
        this.$fetch("/api/admin/inspection/countInspectionPlanRelevant",{
          unitId:this.region
        }).then(response=>{
          if(response.data.map){
            console.log(response.data.map);
            this.countInspectionPlanRelevant.countTotal = response.data.map.TOTAL;
            this.countInspectionPlanRelevant.countDisableTotal = response.data.map.DISABLETOTAL;
            this.countInspectionPlanRelevant.countEnableTotal = response.data.map.ENABLETOTAL;
            this.countInspectionPlanRelevant.countDelete = response.data.map.DELETED;
            this.countInspectionPlanRelevant.countIssanCount = response.data.map.ISSANCOUNT;
          }
        }).then(err=>{
          // console.log(err)
        })
      },
      inspectionId(){
        $('.plan').show();
        $('.total').hide();
        if(this.$route.path == '/Inspection_plan/maps'){
          $('.mapTable').show();
          $('.total').show();
        }
        if(this.$route.path == '/Inspection_plan/all'){
          $('.plan').show();
          $('.total').hide();
          $('.mapTable').hide();
        }
        console.log(this.inspectionId);
        this.$fetch("/api/admin/inspection/queryInspectionNodeByPlanId",{
          planId:this.inspectionId
        }).then(response=>{
          if(response.data.inspectionPlan){
            this.inspectionPlan = response.data.inspectionPlan;
            console.log(this.inspectionPlan);
            this.startInspection = this.inspectionPlan.inspectionNodes.slice(0,1);
            console.log(this.startInspection);
            this.nodeInspection = this.inspectionPlan.inspectionNodes.slice(1,-1);
            console.log(this.nodeInspection);
            this.endInspection = this.inspectionPlan.inspectionNodes.slice(-1);
            console.log(this.endInspection);
          }
        }).then(err=>{
          // console.log(err)
        })
        this.tableList();
      }
    },
    computed:mapState([
      'form',
      'region',
      'inspectionId'
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

</style>
