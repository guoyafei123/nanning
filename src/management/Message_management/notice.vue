<template>
  <section>
    <!-- 标题 -->
      <div class="main_header position-relative clearFix">
        <!-- 标题 -->
          <div class="main_title float-left clearfix">
            <i class="icon iconfont icon-tongzhi-xian-"></i>
            <h2>公告管理</h2>
          </div>
          <!-- 切换 -->
          <div class="main_nav_tab position-absolute-top">
            <router-link to="/Message_management/notice" class="active"><i class="icon iconfont icon-tongzhi-xian-"></i>系统公告</router-link>
            <router-link to="/Message_management/activity"><i class="icon iconfont icon-huodong-xian-"></i>活动通知</router-link>
          </div>
          <!-- 发布 -->
          <div class="main_nav float-right">
            <router-link to="/Message_management/list_notice"><span class="btn_add" @click="btn_add"><i class="icon iconfont icon-fabu"></i>发布</span></router-link>
          </div>
      </div>
    <!-- 公告 -->
    <div class="main_all_content">
      <div class="main_content_top">
        <!-- 筛选 -->
        <el-form ref="form" :model="form" class="float-left">
          <el-select v-model="unit" placeholder="选择单位" class="select">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <div class="block">
            <el-date-picker
              v-model="value4"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
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
            fixed="left"
            type="index"
            sortable
            label="序号">
          </el-table-column>
          <el-table-column
            prop="title"
            :show-overflow-tooltip="true"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="senderUnitName"
            label="所属单位">
          </el-table-column>
          <el-table-column
            prop="senderName"
            label="发布人">
          </el-table-column>
          <el-table-column
            prop="sendTime"
            label="发布时间">
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
      <!-- 分页 -->
      <div class="main_content_bottom">
        <div class="bottom_con">
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
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
        unit:'',
        labelPosition: 'top',
        value4: '',
        tableData: [],//单位列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        deviceIndex:'',
        deviceName:'',
        optionList:[]
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
      show3(row){//跳转
        console.log(row.id);
        this.$store.commit('noticeId',row.id);
      },
      tableList(){
        this.$fetch(
          "/api/event/querySystemMessage",{
            currentPage:this.currentPage4,
            pageSize:14,
            unitId:this.unit,
            startTime:this.value4[0],
            endTime:this.value4[1]
          }
        )
          .then(response => {
            console.log(response);
            if (response.data.pager) {
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              this.tableData.forEach((item,index)=>{
                if(index == this.tableData.length-1){
                  this.$store.commit('noticeId',item.id);
                  console.log(item.id)
                }
                if(item.id == this.deviceIndex){
                  this.$store.commit('peopleTableData',item);
                  // console.log(item)
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
            // console.log(err);
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
        console.log(this.currentPage4);
        this.tableList();
      },
      unit(val,oldVal){
        this.unit = val ;
        this.tableList();
      },
      value4(val,oldVal){
        this.value4 = val ;
        this.tableList();
      }
    }
  };
</script>
<style lang="scss" scoped>  

</style>
