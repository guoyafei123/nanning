<template>
  <div>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="fa fa-th-large font-gray-666 float-left"></i>
        <h2 class="float-left font-white size-16">人员审核</h2>
      </div>
    </div>
    <div class="main_all_content">
      <div class="main_content_top">
        <el-form label-width="80px" class="float-left">
          <el-select v-model="unitId" placeholder="选择单位" style="width:auto;margin-left:10px;">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-select v-model="reviewId" placeholder="选择审核状态" style="width:auto;margin-left:10px;">
            <el-option label="全部状态" value=""></el-option>
            <el-option v-for="item in reviewList" :label="item.review" :value="item.id"></el-option>
          </el-select>
        </el-form>
      </div>
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
            prop="nickName"
            width="130"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="username"
            width="130"
            label="账号">
          </el-table-column>
          <el-table-column
            prop="unitName"
            width="130"
            label="所属单位">
          </el-table-column>
          <el-table-column
            prop="position"
            width="130"
            label="职位">
          </el-table-column>
          <el-table-column
            prop="cellPhone"
            width="130"
            label="电话">
          </el-table-column>
          <el-table-column
            prop="roleName"
            width="100"
            label="角色">
          </el-table-column>
          <el-table-column
            prop="review"
            width="100"
            :formatter="formatter"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="reviewName"
            width="100"
            label="审核人">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <button @click="start_plan(scope.row,scope.$index)" data-toggle="modal" data-target="#mymodal" style="width:40px;height:22px;border:2px solid #bad616;color: #bad616;background-color: #111111;line-height: 19px;margin:0;padding:0;font-size: 12px;text-align: center;margin-right:10px;">修改</button>
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
            <h4 class="modal-title" id="myModalLabel">人员审核</h4>
          </div>
          <div class="modal-body">
            <el-form ref="form" :label-position="labelPosition" :inline="true" :model="form">
              <el-form-item label="姓名">
                <el-input v-model="form.nickName" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="职位">
                <el-input v-model="form.position" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="form.cellPhone" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="审核意见">
                <el-radio v-model="review" label="1">通过</el-radio>
                <el-radio v-model="review" label="2">未通过</el-radio>
              </el-form-item>
              <el-form-item v-if="this.review == 1" label="角色">
                <el-select v-model="form.roleId" placeholder="选择角色" class="select">
                  <el-option label="全部角色" value=""></el-option>
                  <el-option v-for="item in roleList" :label="item.rname" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item v-if="this.review == 1" label="所属单位">
                <el-select v-model="form.unitId" placeholder="选择单位" class="select">
                  <el-option label="全部单位" value=""></el-option>
                  <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item v-if="this.review == 2" label="审核说明">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="reviewContent">
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
  </div>
</template>

<script>
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
        labelPosition: 'left',
        unitId:'',
        reviewId:'',
        form: {
          id:'',
          nickName:'',
          username:'',
          position:'',
          unitId:'',
          cellPhone:'',
          reviewId:'',
          roleId:''
        },
        optionList:[],//单位列表
        reviewList:[
          {'id':0,'review':'非审核账号'},
          {'id':1,'review':'审核通过'},
          {'id':2,'review':'审核未通过'},
          {'id':3,'review':'待审核'}
        ],//角色列表
        tableData: [],//人员信息列表
        roleList:[],//角色列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        deviceIndex:'',
        reviewContent:'',
        review:''
      }
    },
    methods: {
      formatter(row){
        return row.review == 0 ? '非审核账号' : row.review == 1 ? '审核通过' : row.review == 2 ? '审核未通过' : '待审核' ;
      },
      btn_add(){
        $('#right').hide();
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      start_plan(row){//修改人员信息
        $('#mymodal').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
        this.deviceIndex = row.id ;
        this.tableData.forEach((item,index)=>{
          if(item.id == this.deviceIndex){
            this.form.nickName = item.nickName ;
            this.form.username = item.username ;
            this.form.position = item.position ;
            this.form.unitId = item.unitId ;
            this.form.cellPhone = item.cellPhone ;
            this.form.reviewId = item.reviewId ;
            this.form.id = item.id ;
          }
        })
      },
      startRow(){
        this.$fetch("/api/user/addOrUpdateUser",{
          'reviewContent':this.reviewContent,
          'review':this.review,
          'roleId':this.form.roleId,
          'unitId':this.form.unitId,
          'id':this.deviceIndex
        }).then(response=>{
          console.log(response)
        })
      },
      show3(row){//跳转
        console.log(row.id);
        this.$store.commit('unitNumber',row.id);
      },
      roleSearch(){
        this.$fetch(
          "/api/user/queryRoleListByUser"
        )
        .then(response => {
          if (response) {
            console.log(response);
            this.roleList = response.data.roleList;
            console.log(this.roleList);
            $(' .el-select-dropdown__item').mouseover(function(){
              $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
            });
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
      },
      tableList(){
        this.$fetch(
          "/api/user/queryPagerUserList",{
            currentPager:this.currentPage4,
            pagerSize:10,
            unitId:this.unitId,
            reviewId:this.reviewId
          }
        )
          .then(response => {
            console.log(response);
            if (response.data.pager) {
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              this.tableData.forEach((item,index)=>{
                if(index == this.tableData.length-1){
                  this.$store.commit('unitNumber',item.id);
                  console.log(item.id)
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
      }
    },
    mounted(){
      realconsole();
      this.unitSearch();
      this.roleSearch();
      this.tableList();
      $('#right').show();
    },
    watch:{
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        console.log(this.currentPage4);
        this.tableList();
      },
      unitId(val,oldVal){
        this.unitId = val ;
        console.log(this.unitId);
        this.tableList();
      },
      reviewId(val,oldVal){
        this.reviewId = val ;
        console.log( this.reviewId );
        this.tableList();
      }
    }
  };
</script>
<style lang="scss" scoped>
  h2{
    margin: 0;
    padding: 0;
  }
  main{
    height: 100%;
  }
  @media (min-width: 768px) and (max-width:1600px){
    main {
      padding-left:295px;
      padding-right:400px;
    }
  }
  @media (min-width: 1600px){
    main {
      margin-left:17.58%;
      margin-right: 24%;
    }
  }
  .main_header{
    width:100%;
    height:68px;
    background: #111111;
  }
  .main_title{
    display: flex;
    align-items: center;
  }
  .main_title i{
    margin-left:20px;
    margin-right:10px;
  }
  .main_title h2{
    line-height: 68px;
  }
  .main_header button,.main_nav_two button{
    width:64px;
    height:28px;
    float: left;
    outline:none;
    display: flex;
    align-items: center;
    justify-content: center;
    border:2px solid transparent;
    background: #111111;
    font-size: 12px;
    color: #999;
    margin-top: 21px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .main_header a:nth-child(2) button{
    border-left:none;
  }
  .main_header button i{
    margin-right: 3px;
  }
  .main_header button.btn_add i{
    color: #000;
  }
  .main_header button.btn_add{
    width:64px;
    height:28px;
    border:none;
    background: #bad616;
    margin-left: 6px;
    margin-right: 20px;
    color: #000;
  }
  .main_nav_two{
    margin-top:6px;
    margin-right:20px;
  }
  .main_nav_two button{
    margin-top:0;
  }
  .main_nav_two i{
    margin-right: 3px;
  }
  .main_content_top{
    height:40px;
    background: #222222;
  }
  .main_content_table{
    width:100%;
    background: #111111;
  }
  .main_content_bottom{
    width:100%;
    height:60px;
    padding-top:10px;
    background: #111111;
    .bottom_con{
      margin:0 20px;
      padding-top:10px;
      border-top:1px solid #222222;
    }
  }

  .router-link-active button{
    color: #b8b8b8;
    background-color: #000000;
  }
  .router-link-active i{
    color: #b8b8b8;
    background-color: #333333;
  }
 
  .main_nav_show{
    width:64px;
    position: absolute;
    top:159px;
    z-index: 33;
    border:2px solid #bad616;
    ul{
      width:100%;
      li{
        float: none;
        width:100%;
        a{
          button{
            margin:0;
            border-top:2px;
            border-bottom:2px;
            margin-left:-42px;
            border-color:#bad616;
          }
        }
      }
    }
  }
  .btn_active button{
    background-color: #bad616;
    color: #0c0e01;
  }
  .btn_active i{
    color: #0c0e01;
    background-color: transparent;
  }
.danger{
    width:132px;
    background-color: #f13131;
    color: #000;
    font-size: 14px;
    height:32px;
    line-height: 32px;
    padding:0;
  }
</style>
