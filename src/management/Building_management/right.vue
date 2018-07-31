<template>
  <div class="Inspection_plan z-index-20  ">
    <div class="font-white margin-left15 margin-right20 plan" style="margin-top:110px;display: none;">
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
      </section>
    </div>
    <div class="font-white margin-left15 margin-right20 total" style="margin-top:120px;">
      <h2 style="font-size: 12px;line-height:10px;margin-bottom:-10px;" class="font-gray-999">Inspection Total</h2>
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
              :data="tableData"
              border
              :default-sort = "{prop: 'Serial_number', order: 'descending'}"
              style="width: 100%;height:570px;">
              <el-table-column
                prop="Serial_number"
                type="index"
                sortable  
                width="80"
                label="序号">
              </el-table-column>
              <el-table-column
                prop="name"
                width="130"
                label="建筑名称">
              </el-table-column>
              <el-table-column
                prop="unitName"
                width="130"
                label="所属单位">
              </el-table-column>
              <el-table-column
                prop="location"
                width="130"
                label="地址">
              </el-table-column>
              <el-table-column
                prop="area"
                width="130"
                label="占地面积（m^2）">
              </el-table-column>
              <el-table-column
                prop="heightOfBuilding"
                width="100"
                label="高度（m）">
              </el-table-column>
              <el-table-column
                prop="floors"
                width="100"
                label="楼层数">
              </el-table-column>
              <el-table-column
                prop="structure"
                width="100"
                label="建筑结构">
              </el-table-column>
              <el-table-column
                prop="buildYear"
                width="140"
                label="建成年份">
              </el-table-column>
              <el-table-column
                prop="property"
                width="120"
                label="建筑性质">
              </el-table-column>
              <el-table-column 
                prop="linkname"
                width="120"
                label="消防负责人">
              </el-table-column>
              <el-table-column 
                prop="phone"
                width="120"
                label="消防负责人电话">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="120">
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
        <div class="modal modal_form fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">修改建筑</h4>
              </div>
              <div class="modal-body">
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
  </div>

</template>

<script>
  import{ mapState } from "vuex"
  export default {
    data() {
      return {
        countInspectionPlanRelevant:{
          countTotal:0,
          countDelete:0,
          countDisableTotal:0,
          countEnableTotal:0,
          countIssanCount:0
        },
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
          phone:''
        },
        unit:null,//选择单位
        optionList:[],//全部单位列表
        tableData: [],//设备列表
        page:4,//总页数
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
        if(this.$route.path == '/Building_management/maps'){
          $('.mapTable').show();
          $('.total').show();
        }
        if(this.$route.path == '/Building_management/all'){
          $('.mapTable').hide();
          $('.total').show();
        }
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
      },
      startRow(){
        this.optionList.forEach((item,index)=>{
          if(item.id == this.form.unitId){
            console.log(item.name);
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
        // this.$store.commit('inspectionPlanId',row.id);
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
            console.log(response);
            if (response.data.pageBuildIng) {
              this.totalList = response.data.pageBuildIng.totalRow;
              this.tableData = response.data.pageBuildIng.result;
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
      if(this.$route.path == '/Building_management/maps'){
        $('.mapTable').show();
        $('.total').show();
      }
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
          if(this.$route.path == '/Building_management/maps'){
            
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
      Unit(){
        console.log(this.Unit);
        this.$fetch("/api/admin/inspection/countInspectionPlanRelevant",{
          unitId:this.Unit
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
      }
      // deviceId(){
      //   $('.plan').show();
      //   $('.total').hide();
      //   if(this.$route.path == '/Building_management/maps'){
      //     $('.mapTable').show();
      //     $('.total').show();
      //   }
      //   if(this.$route.path == '/Building_management/all'){
      //     $('.plan').show();
      //     $('.total').hide();
      //     $('.mapTable').hide();
      //   }
      //   console.log(this.deviceId);
      // }
    },
    computed:mapState([
      'Unit',
      'deviceId'
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
