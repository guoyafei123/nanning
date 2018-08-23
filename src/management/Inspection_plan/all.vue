<template>
  <section>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-xunjianguihua-mian-"></i>
        <h2>巡检管理</h2>
      </div>
      <div class="main_nav float-right">
        <router-link to="/Inspection_plan/list"><span class="btn_add" @click="btn_add"><i class="fa fa-plus"></i>规划</span></router-link>
      </div>
    </div>
    <div class="main_all_content">
      <!-- 筛选 -->
      <div class="main_content_top">
        <el-form ref="form" :model="form" class="float-left">
          <el-select v-model="form.region1" placeholder="选择单位" class="select">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.region2" placeholder="巡检类型" class="select">
            <el-option v-for="item in inspectionTypeList" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.region3" placeholder="路线状态" class="select">
            <el-option label="全部" value=""></el-option>
            <el-option label="已激活" value="1"></el-option>
            <el-option label="未激活" value="2"></el-option>
          </el-select>
        </el-form>
        <div class="main_nav_two float-right">
          <router-link to="/Inspection_plan/all"><span><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
          <router-link to="/Inspection_plan/maps"><span @click="btn_map"><i class="icon iconfont icon-liebiaoditu-xian-"></i>地图</span></router-link>
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
            sortable
            prop="Serial_number"
            type="index"
            fixed="left"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="路线名称">
          </el-table-column>
          <el-table-column
            prop="unitName"
            label="巡检单位">
          </el-table-column>
          <el-table-column
            prop="type" :formatter="formatType"
            label="巡检类型">
          </el-table-column>
          <el-table-column
            prop="createUserName"
            label="发布者">
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="发布日期">
          </el-table-column>
          <el-table-column
                prop="nodeCount"
                label="节点数">
              </el-table-column>
          <el-table-column
            prop="amount"
            label="额定次数/日">
          </el-table-column>
          <el-table-column
            prop="isScan" :formatter="formatScan"
            label="是否扫码打卡">
          </el-table-column>
          <el-table-column 
            prop="status"
            label="路线状态">
            <template slot-scope="scope" >
              <el-tag
                :type="scope.row.status === 1 ? 'green' : 'red'"
                disable-transitions v-if='scope.row.status==1'>已激活</el-tag>
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

</template>

<script>
  import FileSaver from 'file-saver'
  import XLSX from 'xlsx'
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
        isScan:'',//是否扫码打卡
        amountNumber:'',//每日额定次数
        labelPosition: 'top',
        form: {//筛选项
          region1:null,//选择单位
          region2:null,//巡检类型
          region3:null//路线状态
        },
        tableData: [],//路线列表
        page:null,//总页数
        totalList:null,//总条数
        currentPage4: 1,//当前页
        optionList:[],//全部单位列表
        inspectionTypeList:[{//巡检类型列表
          name:'全部',id:''
        },{
          name:'举报检查',id:1
        },{
          name:'活动检查',id:2
        },{
          name:'例行检查',id:3
        },{
          name:'复查',id:4
        },{
          name:'施工检查',id:5
        },{
          name:'解除临时查封',id:6
        },{
          name:'恢复工作检查',id:7
        }, {
          name: '其他检查', id: 8
        }],
        inspectionIndex:'',
        inspectionName:''
      }
    },
    methods: {
      btn_map(){
        $('.plan').hide();
        $('.mapTable').show();
        $('.total').show();
      },
      btn_add(){
        // console.log($('#right'));
        $('#right').css('display','none');
      },
      formatType(row){
        return row.type == 1 ? '举报检查': row.type == 2 ? '活动检查':row.type == 3 ? '例行检查':row.type == 4 ? '复查':row.type == 5 ? '施工检查':row.type == 6 ? '解除临时查封':row.type == 7 ? '恢复工作检查':row.type == 8 ? '其他检查':'全部';
      },
      formatScan(row){
        return row.isScan == 1 ?  '是' : '否';
      },
      handleCurrentChange(val) {
        // console.log(val);
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
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
              console.log('开启线路成功...'+ JSON.stringify(response));
              this.tableList();
            }
          })

      },
      delete_plan(row){//删除
        this.inspectionIndex = row.id ;
        this.inspectionName = row.name;
      },
      show3(row){//跳转
        console.log(row.id);
        this.$store.commit('currentPage',this.currentPage4);
        this.$store.commit('inspectionPlanId',row.id);
        $('.plan').show();
        $('.mapTable').hide();
        $('.total').hide();
      },
      stop_plan(row){//停用
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
              this.tableList();
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
            console.log(err);
          });
      },
      tableList(){
        this.$fetch(
          "/api/admin/inspection/queryInspectionPlanList",{
            currentPage:this.currentPage4,
            pageSize:14,
            unitId:this.form.region1,
            type:this.form.region2,
            status:this.form.region3
          }
        )
          .then(response => {
            console.log(response);
            if (response) {
              // console.log(response.data.inspectionPlanList);
              this.totalList = response.data.total;
              this.tableData = response.data.inspectionPlanList;
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
    watch:{
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        console.log(this.currentPage4);
        this.tableList();
      },
      form:{
        //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
        handler(curVal,oldVal){
          // console.log(curVal);
          this.form = curVal;
          console.log(this.form);
          this.tableList();
          this.$store.commit('region',this.form.region1);
        },
        deep:true
      }
    },
    mounted(){
      realconsole();
      this.tableList();
      this.unitSearch();
      $('#right').show();
      this.$store.commit('region',this.form.region1);
      if(this.$route.path == '/Inspection_plan/all'){
        $('.mapTable').hide();
        $('.total').show();
      }
      
    }
  };
</script>
<style lang="scss" scoped>
</style>
