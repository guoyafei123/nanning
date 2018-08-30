<template>
  <section>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-renyuanliebiao-mian-"></i>
        <h2>巡检打卡</h2>
      </div>
    </div>
    <div class="main_all_content">
      <!-- 筛选 -->
      <div class="main_content_top">
        <el-form class="float-left">
          <el-select v-model="unitId" placeholder="选择单位">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <section class="my-filter padding5 bg-gray-222 clearfix">
            <!-- 日期筛选 -->
            <div class="col-sm-12 padding0">
              <div class="upd-elmdate">
                <el-date-picker
                  v-model="dateValue"
                  size="mini"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions2"
                  @change="chooseTimeRange">
                </el-date-picker>
              </div>
            </div>
          </section>
        </el-form>
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
            fixed="left"
            sortable
            label="序号">
          </el-table-column>
          <el-table-column
            prop="userName"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="unitName"
            label="所属单位">
          </el-table-column>
          <el-table-column
            prop="cellphone"
            label="电话">
          </el-table-column>
          <el-table-column
            prop="inspectionName"
            label="路线名称">
          </el-table-column>
          <el-table-column
            prop="inspectionName"
            label="打卡节点数">
          </el-table-column>
          <el-table-column
            prop="inspectionName"
            label="未打卡节点数">
          </el-table-column>
          <el-table-column
            prop="receiveTime"
            show-overflow-tooltip
            label="路线领取时间">
          </el-table-column>
          <el-table-column
            prop="finishedTime"
            show-overflow-tooltip
            label="路线完成时间">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <button @click="show3(scope.row)"><i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i></button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="main_content_bottom">
        <div class="bottom_con">
          <div class="float-left btn-system">
            <a href="javascript:;">打印</a>
            <a href="javascript:;">导出</a>·
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
  </section>
</template>

<script>
  import moment from "moment";
  import { realconsole } from '../../assets/js/management.js';
  export default {
    data() {
      return {
        // 时间筛选
        pickerOptions2: {
          shortcuts: [
            {
              text: "最近一周",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近一个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近三个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit("pick", [start, end]);
              }
            }
          ]
        },
        labelPosition: 'left',
        unitId:null,
        optionList:[],//单位列表
        tableData: [],//打卡列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        startTime:null,
        endTime:null,
        dateValue: null,
      }
    },
    methods: {
      chooseTimeRange(t) {
        this.dateValue = t;
        let st = moment(this.dateValue[0]).format('YYYY-MM-DD');
        let et = moment(this.dateValue[1]).format('YYYY-MM-DD');
        this.startTime = st;
        this.endTime = et;
        this.tableList();
      },
      //获取当前时间：
      getNowFormatDate(){
        let date = new Date();
        // var date_s = date.getTime();//转化为时间戳毫秒数
        // date.setTime(date_s + days * 1000 * 60 * 60 * 24);//设置新时间比旧时间多一天
        let seperator1 = "-";
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        let currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
      },
      btn_add(){
        $('#right').hide();
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      show3(row){//跳转
        console.log(row.id);
        this.$store.commit('inspectionPlanUserId',row.id);
      },
      unitSearch(){
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
          "/api/inspection/inspectionPlanUserListWithNode",{
            currentPager:this.currentPage4,
            pageSize:10,
            unitId:this.unitId,
            beginTime:this.startTime,
            endTime:this.endTime
          }
        )
          .then(response => {
            if (response.data.pager) {
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              this.tableData.forEach((item,index)=>{
                if(index == this.tableData.length-1){
                  this.$store.commit('unitNumber',item.id);
                }
              })
              if(this.totalList % 10 == 0){
                this.page = parseInt( this.totalList / 10 )
              }else{
                this.page = parseInt( this.totalList / 10 ) + 1
              }
            }
          })
          .then(err => {
            // //console.log(err);
          });
      }
    },
    mounted(){
      realconsole();
      this.unitSearch();
      this.tableList();
      $('#right').show();
    },
    watch:{
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        //console.log(this.currentPage4);
        this.tableList();
      },
      unitId(val,oldVal){
        this.unitId = val ;
        //console.log(this.unitId);
        this.tableList();
      },
    }
  };
</script>
<style lang="scss" scoped>
</style>
