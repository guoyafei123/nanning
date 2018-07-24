<template>
  <div>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="fa fa-th-large font-gray-666 float-left"></i>
        <h2 class="float-left font-white size-16">巡检管理</h2>
      </div>
      <div class="main_con_nav float-left">
        <!--<a href="javascript:;" class="link-active"><button><i class="fa fa-th-large font-gray-666 float-left"></i>巡检路线</button></a>-->
        <!--<a href="javascript:;"><button><i class="fa fa-th-large font-gray-666 float-left"></i>巡检任务</button></a>-->
      </div>
      <div class="main_nav float-right">
        <router-link to="/Inspection_plan/list"><button  class="btn_add"><i class="fa fa-th-large font-gray-666 float-left"></i>规划</button></router-link>
      </div>
    </div>
    <div class="main_all_content" style="display: block;">
      <div class="main_content_top">
        <el-form ref="form" :model="form" label-width="80px" class="float-left">
          <el-select v-model="form.region1" @change="" placeholder="全部单位" class="select" style="margin-left:20px;">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.region2" placeholder="巡检类型" class="select">
            <el-option v-for="item in inspectionTypeList" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.region3" placeholder="路线状态" class="select">
            <el-option label="全部" value=""></el-option>
            <el-option label="已激活" value="1"></el-option>
            <el-option label="未激活" value="0"></el-option>
          </el-select>
          <el-button>确定</el-button>
        </el-form>
        <div class="main_nav_two float-right">
          <router-link to="/Inspection_plan/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>列表</button></router-link>
          <router-link to="/Inspection_plan/maps"><button><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link>
        </div>
      </div>
      <div class="main_content_table">
        <el-table
          :data="tableData"
          border
          :default-sort = "{prop: 'Serial_number', order: 'descending'}"
          style="width: 100%;height:570px;">
          <el-table-column
            sortable
            prop="Serial_number"
            type="index"
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
            prop="type"
            label="巡检类型">
          </el-table-column>
          <el-table-column
            prop="activeName"
            label="发布者">
          </el-table-column>
          <el-table-column
            prop="activeTime"
            label="发布日期">
          </el-table-column>
          <el-table-column
            prop="amount"
            label="每次额定次数">
          </el-table-column>
          <el-table-column
            prop="isScan"
            label="是否扫码打卡">
          </el-table-column>
          <el-table-column
            prop="status"
            label="路线状态">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <button @click="show" data-toggle="modal" data-target="#mymodal" style="width:40px;height:22px;border:2px solid #bad616;color: #bad616;background-color: #111111;line-height: 19px;margin:0;padding:0;font-size: 12px;text-align: center;margin-right:10px;">开启</button>
              <i @click="show2" data-toggle="modal" data-target="#mymodal2"  class="fa fa-th-large font-gray-666" style="margin-right: 10px;"></i>
              <i @click="show3(scope.$index, scope.row)" class="fa fa-th-large font-gray-666"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="main_content_bottom">
        <div class="bottom_con">
          <div class="float-left">
            <a href="javascript:;" class="font-gray-666" style="margin-left:5px;">打印</a>
            <a href="javascript:;" class="font-gray-666" style="margin-left:5px;">导出</a>
            <a href="javascrip:;" class="font-gray-666" style="margin-left:5px;">导出标码</a>
          </div>
          <el-pagination style="float: right;background: transparent"
                         @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="10"
                         layout="prev, pager, next"
                         :total="totalList">
          </el-pagination>
          <span style="float: right;margin-top:5px;color: #666;margin-left:5px;margin-right:10px;">{{page}}页</span>
          <el-pagination style="float: right;"
                         @size-change="handleSizeChange"
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
    <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">激活</h4>
            <h5 class="modal-p">巡检装修施工现场A</h5>
          </div>
          <div class="modal-body">
            <el-form ref="form" :label-position="labelPosition" :model="form">
              <el-form-item label="发布日期">
                <el-date-picker
                  v-model="value1"
                  type="datetime"
                  placeholder="选择日期时间">
                </el-date-picker>
              </el-form-item>
              <el-form-item size="small"
                            label="每日额定完成次数"
                            prop="age"
                            :rules="[
              { required: true, message: '年龄不能为空'},
              { type: 'number', message: '年龄必须为数字值'}
            ]"
              >
                <el-input type="age" v-model.number="form.age" auto-complete="off" style="width:190px;"></el-input>
                <el-button type="primary" round icon="el-icon-search" class="resource_btn" style="width:260px;">设定该路线每日额定完成数量，<span class="font-red">激活后不可修改！</span></el-button>
              </el-form-item>
              <div style="clear: both;"></div>
              <el-form-item label="是否开启扫描打卡" style="margin-top:10px;">
                <span class="font-red" style="position: absolute;top:-54px;right:20px;">未选择是否生成图形码</span>
                  <span class='span_show'>是</span>
                  <span class='span_hide' style="margin-left:10px;">否</span>
                <el-button type="primary" round icon="el-icon-search" class="resource_btn" style="width:260px;">巡检节点是否开启扫码打卡，<span class="font-red">激活后不可修改！</span></el-button>
              </el-form-item>
              <el-form-item label="发布人" >
                <el-input v-model="form.name" style="width:190px;"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="modal-footer">
            <el-button type="primary"  icon="el-icon-search" class="primary">激活</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="mymodal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" style="">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel2">提示</h4>
            <h5 class="modal-p">删除操作并不影响之前的统计数据</h5>
          </div>
          <div class="modal-body" style="height:217px;">
            <h2 style="text-align:center;font-size: 16px;color:#f13131;margin-top:30px;font-weight:bold;">是否删除</h2>
            <p style="text-align: center;font-size: 16px; color: #fff;margin-top:20px;">巡检装修施工现场A</p>
          </div>
          <div class="modal-footer">
            <el-button type="danger"  icon="el-icon-search" class="danger">激活</el-button>
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
        value1:'',
        labelPosition: 'top',
        form: {//筛选项
          name:'',
          region1:null,
          region2:null,
          region3:null
        },
        tableData: [],//路线列表
        page:null,//总页数
        totalList:null,//总条数
        currentPage4: 1,//当前页
        optionList:[],//全部单位列表
        inspectionTypeList:[{//巡检类型列表
          name:'全部',id:0
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
        }]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        // console.log(val);
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      SetColor(ele,key,value){
        $(ele).css(key,value);
      },
      show(){
        $('#mymodal').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
      },
      show2(){
        $('#mymodal2').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
      },
      show3(index,row){
        console.log(index,row)       // $('.Inspection_plan').css('display','none')
      },
      tableList(){
        this.$fetch(
          "/api/admin/inspection/queryInspectionPlanList",{
            currentPage:this.currentPage4,
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
    created(){
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
        },
        deep:true
      }
    },
    updated(){
      // console.log(this.form.region2)
      // console.log(this.form.region3)
      // console.log(this.totalList/10)
    },
    mounted(){
      realconsole();
      this.SetColor('.btn-prev','background','transparent');
      this.SetColor('.btn-next','background','transparent');
      this.SetColor('.el-pager li','background','transparent');
      this.SetColor('.el-pager li','color','#666');

      this.tableList();
      this.$fetch("/api/unit/queryUnit").then(response=>{
        console.log(response);
        if (response) {
          // this.optionList = response.data.unitList;
          // console.log(this.optionList);
          $(' .el-select-dropdown__item').mouseover(function(){
            $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
          });
        }
      })
    }
  };
</script>
<style lang="scss" scoped>
  .clearFix:after{
    clear:both;
    content:'';
    display:block;
  }
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
  .main_header button.btn_add{
    width:64px;
    height:28px;
    border:none;
    background: #bad616;
    margin-left: 6px;
    margin-right: 20px;
    color:#000000;
  }
  .main_header button.btn_add i{
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
  .main_con_nav{
    button{
      background-color: #222222;
    }
    margin-left:30%;
    a:nth-last-child(1) button{
      border-left:none;
    }
    .link-active button{
      color: #191d03;
      background-color: #bad616;
    }
    .link-active i{
      color: #191d03;
      background-color: #bad616;
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
  .main_all_content{
    display: none;
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

  .span_show{
    width:40px;
    height:32px;
    border:2px solid #bad616;
    box-sizing: border-box;
    display: inline-block;
    line-height: 31px !important;
    text-align:center;
    color: #bad616;
    background-color: #111111;
  }
  .span_hide{
    width:40px;
    height:32px;
    border:2px solid #333333;
    box-sizing: border-box;
    display: inline-block;
    line-height: 31px !important;
    text-align:center;
    color: #5e5e5e;
    background-color: #111111;
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
