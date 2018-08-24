<template>
  <div class="toolright z-index-20">
    <!-- 路线详情 -->
    <div class="plan" style="display:none;">
      <section>
        <a @click="back_first" class="btn-back"><i class="el-icon-arrow-left"></i>返回</a>
        <!-- 路线标题 -->
        <section>            
          <div class="personinfo margin-top20">
            <p>
              <span class="size-20 font-blue" v-html="this.inspectionPlan.name"></span>
              <span class="bgbox-min bg-gray-666 font-black size-10">{{ this.inspectionPlan.type == 1 ? '举报检查': this.inspectionPlan.type == 2 ? '活动检查':this.inspectionPlan.type == 3 ? '例行检查':this.inspectionPlan.type == 4 ? '复查':this.inspectionPlan.type == 5 ? '施工检查':this.inspectionPlan.type == 6 ? '解除临时查封':this.inspectionPlan.type == 7 ? '恢复工作检查':this.inspectionPlan.type == 8 ? '其他检查':'全部'}}</span>
              <span class="float-right">
                  <span class="bgbox-max bg-blue font-black size-10" v-if="this.inspectionPlan.status == 1">已激活</span>
                  <span class="bgbox-max bg-red font-black size-10" v-if="this.inspectionPlan.status == 2">未激活</span>
              </span>
            </p>
            <p class="col-sm-7 text-left padding0">
              <span><i class="fas fa-industry"></i> {{ inspectionPlan.unitName }}</span>
            </p>
            <p class="col-sm-5 text-right padding0">
              最后更新:<strong class="font-gray-999">{{inspectionPlan.createTime}}</strong>            
            </p>
          </div>
        </section>
      </section>
      <!-- 路线信息 -->
        <section>
          <div class="row toolcount margin-top10">
            <div class="col-sm-4 font-gray-999 padding0">
              <ul class="toolcount-left margin-bottom0 padding-left15">
                <li>
                  <h1 class="toolcount-p1 font-white" v-html="this.inspectionPlan.amount">17</h1>
                </li>
                <li class="margin-top30">
                  <p class="size-10">Rated Counts</p>
                </li>
                <li>
                  <p class="size-16 font-blue">每日额定完成数</p>
                </li>
              </ul>
            </div>
            <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
              <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
                <li>
                  <p class="size-18 font-white">路线信息</p>
                </li>
                <li>
                  <p class="size-10 set-scaleright">Inspection Info</p>
                </li>
                <li class="margin-top10">
                  发布人&#x3000;&#x3000;<span class="font-gray-ccc" v-html="this.inspectionPlan.createUserName"></span>
                </li>
                <li>
                  发布时间 &#x3000;<span class="font-gray-ccc" v-html="this.inspectionPlan.createTime"></span>
                </li>
                <li class="row text-center padding-right16 margin-top10">
                  <div class="col-sm-4 container-padding0 personnel-borderright">
                    <p class="size-16 show font-red" v-html="this.inspectionPlan.isScan == 1 ? '是':'否'"></p>
                    <p>扫码打卡</p>
                  </div>
                  <div class="col-sm-4 container-padding0 personnel-borderright">
                    <p class="size-16 show font-white" v-html="this.inspectionPlan.nodeCount == null ? 0 : this.inspectionPlan.nodeCount"></p>
                    <p>节点总数</p>
                  </div>
                  <div class="col-sm-4 container-padding0">
                    <p class="size-16 show font-blue">20</p>
                    <p>巡检人数</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <!-- 节点信息 -->
        <section>
          <div class="toolbuildrate margin-top20">
            <h4 class="p-title">路线详情 </h4>
            <div class="container-padding20 clearfix">
              <div class="panel-group tablist-item position-relative" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default bg-none border-none border-radiusnone">
                  <div class="panel-heading bg-gray-222 font-gray-999 tablist-itemtitle" role="tab" id="headingOne">
                    <span class="itemtitle-rect"><i class="fas fa-angle-double-down font-black"></i></span>
                    <h4 class="panel-title">
                      <a v-for="item in startInspection" role="button" class="size-12 font-gray-ccc" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {{ item.buildingName }}{{ item.floorNumber }}<span v-if="item.floorNumber">层</span>{{ item.roomNumber }}<span v-if="item.roomNumber">房间</span>
                        <!-- 安全评分 -->
                        <span class="badge itemtitle-value display-inline-block margin-left10 bg-red font-black" v-html="item.deviceId"></span>
                      </a>
                    </h4>
                  </div>
                  <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div class="panel-body padding0">
                      <ul class="size-12 font-gray-999 tablist-itemul">
                        <li v-for="item in nodeInspection">
                            <span>{{ item.buildingName }}{{ item.floorNumber }}<span v-if="item.floorNumber">层</span>{{ item.roomNumber }}<span v-if="item.roomNumber">房间</span>
                              <span class="float-right">
                                <i class="icon iconfont icon-yinhuan-xian- font-yellow size-14 text-left"></i>
                                <span class="font-blue" v-html="item.floorId"></span>/<span class="font-yellow" v-html="item.roomId"></span>
                              </span>
                            </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="toolbuildrate-forter" role="tab" id="footerone">
                    <span class="itemtitle-rect"><i class="fas fa-flag-checkered font-black"></i></span>
                    <h4 class="panel-title">
                      <a v-for="item in endInspection" role="button" class="size-12 font-gray-ccc" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {{ item.buildingName }}{{ item.floorNumber }}<span v-if="item.floorNumber">层</span>{{ item.roomNumber }}<span v-if="item.roomNumber">房间</span>
                        <!-- 安全评分 -->
                        <span class="badge itemtitle-value display-inline-block margin-left10 bg-red font-black" v-html="item.deviceId"></span>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- 路线日志 -->
        <section class="bg-black">
          <div class="table-responsive">
            <h4 class="p-title">操作日志</h4>
            <div class="main_content_table margin-top10">
              <el-table
                :data="tableData"
                border
                :highlight-current-row="true"
                style="max-height:235px;">
                <el-table-column
                  sortable
                  type="index"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="createTime"
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
                               :page-size="4"
                               layout="prev, pager, next"
                               :total="totalList">
                </el-pagination>
                <span>{{page}}页</span>
                <el-pagination
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
    </div>
    <!-- 小列表 -->
    <div class="total" style="display: none;">
        <!-- 总数统计 -->
        <section class="toolcount clearfix">
          <ul class="toolcount-left padding0 col-sm-5 col-md-4">
            <li>
              <p class="size-10 font-gray-666">Inspection Total</p>
            </li>
            <li>
              <p class="size-18 font-blue">当前线路总数</p>
            </li>
            <li>
              <h1 class="toolcount-p1">{{countInspectionPlanRelevant.countTotal}}</h1>
            </li>
          </ul>
          <ul class="list-inline col-sm-7 col-md-8 text-left margin-top60 font-gray-666 size-12">
            <li>
              未激活 <span class="font-red">{{countInspectionPlanRelevant.countDisableTotal}}</span>
            </li>
            <li>
              已激活 <span class="font-white">{{countInspectionPlanRelevant.countEnableTotal}}</span>
            </li>
            <li>
              已删除 <span class="font-gray-ccc">{{countInspectionPlanRelevant.countDelete}}</span>
            </li>
            <li>
              扫码打卡 <span class="font-blue">{{countInspectionPlanRelevant.countIssanCount}}</span>
            </li>
          </ul>
        </section> 
        <!-- 主体 -->
        <section class="mapTable"> 
          <div class="toolbuildrate">
            <!-- 表格 -->
            <div class="main_content_table">
              <el-table
                :data="tableDataList"
                border
                :default-sort = "{prop: 'Serial_number', order: 'descending'}">
                <el-table-column
                  type="index"
                  fixed="left"
                  sortable
                  prop="Serial_number"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="路线名称">
                </el-table-column>
                <el-table-column
                  prop="nodeCount"
                  label="节点数">
                </el-table-column>
                <el-table-column
                  prop="isScan" :formatter="formatScan"
                  label="扫码打卡">
                </el-table-column>
                <el-table-column :formatter="formatStatus"
                  prop="status"
                  label="路线状态">
                  <template slot-scope="scope" :formatter="formatStatus">
                    <el-tag
                      :type="scope.row.status === 1 ? 'green' : 'red'"
                      disable-transitions v-if='scope.row.status==1'>已激活 <i class="el-icon-warning font-blue" data-toggle="tooltip" title="段亚伟 2018-08-20 16:30:23"></i></el-tag>
                    <el-tag
                      :type="scope.row.status === 2 ? 'red' : 'green'"
                      disable-transitions v-if='scope.row.status==2'>未激活</el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                  fixed="right"
                  width="120"
                  label="操作">
                  <template slot-scope="scope">
                    <button @click="start_plan(scope.row)" data-toggle="modal" data-target="#mymodal" v-if="scope.row.status==2" class="btn-on">开启</button>
                    <button @click="stop_plan(scope.row)" data-toggle="modal" data-target="#mymodal3" v-if="scope.row.status==1" class="btn-off">关闭</button>
                    <button @click="delete_plan(scope.row)" data-toggle="modal" data-target="#mymodal2" v-if="scope.row.status==2"><i  class="el-icon-delete" data-toggle="tooltip" title="删除"></i></button>
                    <button @click="delete_plan(scope.row)" v-if="scope.row.status==1" class="cursor-no"><i class="el-icon-delete font-gray-666" data-toggle="tooltip" title="删除"></i></button>
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
                  <a href="javascrip:;">导出二维码</a>
                </div>
                <el-pagination
                               @current-change="handleCurrent"
                               :current-page="currentPage"
                               :page-size="5"
                               layout="prev, pager, next"
                               :total="totalCount">
                </el-pagination>
                <span>{{pageCount}}页</span>
                <el-pagination
                               @current-change="handleCurrent"
                               :current-page="currentPage"
                               :page-size="5"
                               layout="total"
                               :total="totalCount">
                </el-pagination>
              </div>
            </div>
          </div>
        <!-- 开启Modal -->
        <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">激活</h4>
                <h5 class="modal-p">{{ inspectionName }}</h5>
                <!-- 错误提示 -->
                  <div class="text-center">
                    <span class="font-red size-12"><i class="el-icon-warning"></i> 未选择是否生成图形码</span>
                  </div>
              </div>
              <div class="modal-body text-left container-padding40">            
                <el-form ref="form" :label-position="labelPosition" :model="form">              
                  <el-form-item size="small"
                      label="每日额定完成次数"
                      prop="age">
                    <el-input type="age" v-model.number="amountNumber" auto-complete="off" style="width:160px;"></el-input>
                    <el-button type="primary" round icon="el-icon-question" class="badge-tip size-10" style="width:300px;">设定该路线每日额定完成数量，<span class="font-red">激活后不可修改！</span></el-button>
                  </el-form-item>
                  <el-form-item label="是否开启扫描打卡"class="margin-top10">                
                    <el-radio-group v-model="isScan">
                      <el-radio-button label="1">是</el-radio-button>
                      <el-radio-button label="0">否</el-radio-button>
                    </el-radio-group>
                    <el-button type="primary" round icon="el-icon-question" class="badge-tip size-10" style="width:300px;">巡检节点是否开启扫码打卡，<span class="font-red">激活后不可修改！</span></el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div class="modal-footer">
                <el-button type="primary" @click.native.prevent="startRow()" icon="el-icon-circle-check-outline" class="primary" data-dismiss="modal">激活</el-button>
                <el-button class="back" data-dismiss="modal">取消</el-button>
              </div>
            </div>
          </div>
        </div>
        <!-- 删除Modal -->
        <div class="modal fade" id="mymodal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" style="">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel2">提示</h4>
                <h5 class="modal-p">删除操作并不影响之前的统计数据</h5>
              </div>
              <div class="modal-body text-center container-padding40">
                    <h3 class="font-red size-14">是否删除</h3>
                    <p class="font-white size-16">{{ inspectionName }}</p>
              </div>
              <div class="modal-footer">
                <el-button type="danger" @click.native.prevent="deleteRow()" icon="el-icon-delete" class="danger" data-dismiss="modal">删除</el-button>
                <el-button class="back" data-dismiss="modal">取消</el-button>
              </div>
            </div>
          </div>
        </div>
        <!-- 关闭Modal -->
        <div class="modal fade" id="mymodal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel3" style="">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel3">提示</h4>
                <h5 class="modal-p">关闭操作并不影响之前的统计数据</h5>
              </div>
              <div class="modal-body text-center container-padding40">
                <h3 class="font-red size-14">是否关闭</h3>
                <p class="font-white size-16">{{ inspectionName }}</p>
              </div>
              <div class="modal-footer">
                <el-button type="danger" @click.native.prevent="StopRow()" icon="el-icon-circle-close-outline" class="danger" data-dismiss="modal">关闭</el-button>
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
        // $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      handleCurrent(val) {
        this.currentPage = val;
        // $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      start_plan(row){//启用
        this.inspectionIndex = row.id ;
      },
      startRow(){
          this.$fetch("/api/inspection/start_plan",{
            id:this.inspectionIndex,
            amount:this.amountNumber,
            isScan:this.isScan
          }).then(response=>{
            if(response){
              //console.log('开启线路成功...'+ JSON.stringify(response));
              this.tableList2();
            }
          })

      },
      delete_plan(row){//删除
        this.inspectionName = row.name;
      },
      show3(row){//跳转
        //console.log(row.id);
        this.$store.commit('inspectionPlanId',row.id);
        $('.plan').show();
        $('.mapTable').hide();
        $('.total').hide();
        this.$fetch("/api/admin/inspection/queryInspectionNodeByPlanId",{
          planId:this.inspectionId
        }).then(response=>{
          if(response.data.inspectionPlan){
            this.inspectionPlan = response.data.inspectionPlan;
            //console.log(this.inspectionPlan);
            this.startInspection = this.inspectionPlan.inspectionNodes.slice(0,1);
            //console.log(this.startInspection);
            this.nodeInspection = this.inspectionPlan.inspectionNodes.slice(1,-1);
            //console.log(this.nodeInspection);
            this.endInspection = this.inspectionPlan.inspectionNodes.slice(-1);
            //console.log(this.endInspection);
          }
        }).then(err=>{
          // //console.log(err)
        })
      },
      stop_plan(row){//停用
        this.inspectionName = row.name;
        this.inspectionIndex = row.id ;
      },
      StopRow(){//停用的接口
          //console.log(this.inspectionIndex);
          this.$fetch("/api/inspection/stop_plan",{
            id:this.inspectionIndex
          }).then(response=>{
            if(response){
              //console.log('关闭线路成功...'+ JSON.stringify(response));
              this.tableList2();
            }
          })

      },
      deleteRow(){
          //console.log(this.inspectionIndex);
          this.$fetch("/api/admin/inspection/deleteInspectiopnPlan",{
            inspectionPlanId:this.inspectionIndex
          }).then(response=>{
            if(response){
              //console.log('删除线路成功...'+ JSON.stringify(response));
              this.tableData.splice(this.inspectionIndex,1);
              this.tableList2();
            }
          }).then(err => {
            //console.log(err);
          });
      },
      tableList2(){
        this.$fetch(
          "/api/admin/inspection/queryInspectionPlanList",{
            currentPage:this.currentPage,
            pageSize:11,
            unitId:this.form.region1,
            type:this.form.region2,
            status:this.form.region3
          }
        )
          .then(response => {
            //console.log(response);
            if (response) {
              // //console.log(response.data.inspectionPlanList);
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
            // //console.log(err);
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
            //console.log(response);
            if (response) {
              //console.log(response.data.pager.result);
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
            // //console.log(err);
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
          //console.log(response.data.map);
          this.countInspectionPlanRelevant.countTotal = response.data.map.TOTAL;
          this.countInspectionPlanRelevant.countDisableTotal = response.data.map.DISABLETOTAL;
          this.countInspectionPlanRelevant.countEnableTotal = response.data.map.ENABLETOTAL;
          this.countInspectionPlanRelevant.countDelete = response.data.map.DELETED;
          this.countInspectionPlanRelevant.countIssanCount = response.data.map.ISSANCOUNT;
        }
      }).then(err=>{
        //console.log(err)
      })
    },
    watch:{
      $route: {
        handler: function(val, oldVal){
          //console.log(val);
          if(this.$route.path == '/Inspection_plan/maps'){
            this.tableList2();
            this.$store.commit('InspectionMap',this.tableData);
          }
        },
        // 深度观察监听
        deep: true
      },
      currentPage(val, oldVal){
        this.currentPage = val;
        //console.log(this.currentPage);
        this.tableList2();
      },
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        //console.log(this.currentPage4);
        this.tableList();
      },
      currentPage(){
        this.currentPage4 = this.currentPage ;
      },
      form:{
      
        handler(curVal,oldVal){
          // //console.log(curVal);
          this.form = curVal;
          //console.log(this.form);
          this.tableList2();
        },
        deep:true
      },
      region(){
        //console.log(this.region);
        this.$fetch("/api/admin/inspection/countInspectionPlanRelevant",{
          unitId:this.region
        }).then(response=>{
          if(response.data.map){
            //console.log(response.data.map);
            this.countInspectionPlanRelevant.countTotal = response.data.map.TOTAL;
            this.countInspectionPlanRelevant.countDisableTotal = response.data.map.DISABLETOTAL;
            this.countInspectionPlanRelevant.countEnableTotal = response.data.map.ENABLETOTAL;
            this.countInspectionPlanRelevant.countDelete = response.data.map.DELETED;
            this.countInspectionPlanRelevant.countIssanCount = response.data.map.ISSANCOUNT;
          }
        }).then(err=>{
          // //console.log(err)
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
        //console.log(this.inspectionId);
        this.$fetch("/api/admin/inspection/queryInspectionNodeByPlanId",{
          planId:this.inspectionId
        }).then(response=>{
          if(response.data.inspectionPlan){
            this.inspectionPlan = response.data.inspectionPlan;
            //console.log(this.inspectionPlan);
            this.startInspection = this.inspectionPlan.inspectionNodes.slice(0,1);
            //console.log(this.startInspection);
            this.nodeInspection = this.inspectionPlan.inspectionNodes.slice(1,-1);
            //console.log(this.nodeInspection);
            this.endInspection = this.inspectionPlan.inspectionNodes.slice(-1);
            //console.log(this.endInspection);
          }
        }).then(err=>{
          // //console.log(err)
        })
        this.tableList();
      }
    },
    computed:mapState([
      'form',
      'region',
      'inspectionId',
      'currentPage'
    ])
  }
</script>

<style lang="scss" scoped>

</style>
