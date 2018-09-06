<template>
  <section>
    <div class="main_header">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-jiankong"></i>
        <h2>控制室日常</h2>
      </div>
    </div>
    <div class="main_all_content">
      <div class="main_content_top">
        <el-form class="float-left">
          <el-select v-model="operator" placeholder="选择单位">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-date-picker
              v-model="timeValue"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions2"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form>
      </div>
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
            sortable
            label="序号">
          </el-table-column>
          <el-table-column
            prop="punchUserNickname"
            label="打卡人姓名">
          </el-table-column>
          <el-table-column
            prop="punchRoleName"
            label="打卡人角色">
          </el-table-column>
          <el-table-column
            prop="punchUserPhone"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="loginUserNickname"
            label="登录人姓名">
          </el-table-column>
          <el-table-column
            prop="loginUnitName"
            label="所属单位">
          </el-table-column>
          <el-table-column
            prop="loginRoleName"
            label="登录人角色">
          </el-table-column>
          <el-table-column
            prop="loginUserPhone"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="status"
            :formatter="statusFormat"
            label="打卡状态">
          </el-table-column>
          <el-table-column
            prop="punchTime"
            width="160px"
            label="打卡时间">
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
                         :page-size="14"
                         layout="prev, pager, next"
                         :total="totalList">
          </el-pagination>
          <span>{{page}}页</span>
          <el-pagination
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="14"
                         layout="total"
                         :total="totalList">
          </el-pagination>
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
        operator:'',//操作人
        optionList:[],//单位列表
        tableData: [],//人员信息列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        // 时间筛选
        pickerOptions2:{
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        timeValue: ''
      }
    },
    methods: {
      btn_add(){
        $('#right').hide();
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      operatorSearch(){
        this.$fetch(
          "/api/unit/queryUnit"
        )
        .then(response => {
          if (response) {
            //console.log(response);
            this.optionList = response.data.unitList;
            //console.log(this.optionList);
            $(' .el-select-dropdown__item').mouseover(function(){
              $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
            });
          }
        })
        .then(err => {
          // //console.log(err);
        });
      },
      tableList(){
        this.$fetch(
          "/api/workPunch/queryPunch",{
            currentPage:this.currentPage4,
            pageSize:14,
            unitId:this.operator,
            startTime:this.timeValue[0],
            endTime:this.timeValue[1]
          }
        )
          .then(response => {
            //console.log(response);
            if (response.data.pager) {
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              if(this.totalList % 14 == 0){
                this.page = parseInt( this.totalList / 14 )
              }else{
                this.page = parseInt( this.totalList / 14 ) + 1
              }
            }
          })
          .then(err => {
            // //console.log(err);
          });
      },
      statusFormat(row, column) {
        //console.log(row.status)
        if (row.status === 1) {
          return '未打卡'
        } else if (row.status === 2) {
          return '已打卡'
        }
      }
    },
    mounted(){
      realconsole();
      this.tableList();
      this.operatorSearch() ;
    },
    watch:{
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        //console.log(this.currentPage4);
        this.tableList();
      },
      operator(val,oldVal){
        this.operator = val ;
        //console.log(this.operator);
        this.tableList();
      },
      timeValue(val,oldVal){
        this.timeValue = val ;
        this.tableList();
      }
    }
  };
</script>
<style lang="scss" scoped>
</style>
