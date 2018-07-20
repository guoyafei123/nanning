<template>
  <div>
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-th-large font-gray-666 float-left"></i>
          <h2 class="float-left font-white size-16">巡检管理</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Inspection_plan/list"><button  class="btn_add"><i class="fa fa-th-large font-gray-666 float-left"></i>规划</button></router-link>
        </div>
      </div>
      <div class="main_all_content">
        <div class="main_content_top">
          <el-form ref="form" :model="form" label-width="80px"  class="float-left">
            <el-select v-model="form.region1" @change="" placeholder="全部单位" class="select" style="margin-left:20px;">
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
            <el-select v-model="form.region2" placeholder="巡检类型" class="select">
              <el-option label="全部" value="0"></el-option>
              <el-option label="举报检查" value="1"></el-option>
              <el-option label="活动检查" value="2"></el-option>
              <el-option label="例行检查" value="3"></el-option>
              <el-option label="复查" value="4"></el-option>
              <el-option label="施工检查" value="5"></el-option>
              <el-option label="解除临时查封" value="6"></el-option>
              <el-option label="恢复工作检查" value="7"></el-option>
              <el-option label="其他检查" value="8"></el-option>
            </el-select>
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
              prop="Serial_number"
              type="index"
              label="序号">
            </el-table-column>
            <el-table-column
              prop="name"
              label="路线名称">
            </el-table-column>
            <el-table-column
              prop="isScan"
              label="扫码打卡">
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
                <button @click="show" data-toggle="modal" data-target="#myModal" style="width:40px;height:22px;border:2px solid #bad616;color: #bad616;background-color: #111111;line-height: 19px;margin:0;padding:0;font-size: 12px;text-align: center;margin-right:10px;">激活</button>
                <i class="fa fa-th-large font-gray-666" style="margin-right: 10px;"></i>
                <i class="fa fa-th-large font-gray-666"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="main_content_bottom">
          <div class="bottom_con">
            <el-pagination style="float: left;"
                           @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page="currentPage4"
                           :page-size="10"
                           layout="total"
                           :total="totalList">
            </el-pagination>
            <span style="float: left;margin-top:5px;color: #666;margin-left:-5px;">{{page}}页</span>
            <el-pagination style="float: right;background: transparent"
                           @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page="currentPage4"
                           :page-size="10"
                           layout="prev, pager, next"
                           :total="totalList">
            </el-pagination>
          </div>
        </div>
      </div>
    </aside>
    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">激活</h4>
            <h5 class="modal-p">巡检装修施工现场A</h5>
          </div>
          <div class="modal-body">
            <el-form ref="form" :label-position="labelPosition" :model="form">
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
                <el-radio-group v-model="form.resource">
                  <el-radio label="是"></el-radio>
                  <el-radio label="否"></el-radio>
                </el-radio-group>
                <el-button type="primary" round icon="el-icon-search" class="resource_btn" style="width:260px;">巡检节点是否开启扫码打卡，<span class="font-red">激活后不可修改！</span></el-button>
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
  </div>

</template>

<script>
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
        labelPosition: 'top',
        form: {
          name:'',
          region1:'',
          region2:'',
          region3:''
        },
        tableData: [],
        page:null,
        totalList:null,
        currentPage4: 1,
        optionList:[]
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      SetColor(ele,key,value){
        $(ele).css(key,value);
      },
      show(){
        $('.modal').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
      },
      tableList(){
        this.$fetch(
          "/api/inspection/queryInspectionPlanList",{
            currentPage:this.currentPage4,
            pageSize:10,
            unitId:this.form.region1,
            type:this.form.region2,
            planName:'',
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
        },
        deep:true
      }
    },
    updated(){
      // console.log(this.form.region2)
      // console.log(this.form.region3)
    },
    mounted(){
      realconsole();

      this.SetColor('.btn-prev','background','transparent');
      this.SetColor('.btn-next','background','transparent');
      this.SetColor('.el-pager li','background','transparent');
      this.SetColor('.el-pager li.active','color','#fff');
      this.SetColor('.el-form-item__content','margin-left','10px');
      this.tableList();
      this.$fetch("/api/unit/queryUnit").then(response=>{
        console.log(response);
        if (response) {
          this.optionList = response.data.unitList;
          console.log(this.optionList);
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
  aside{
    width:50%;
    min-width: 450px;
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
    width:64px !important;
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
    background-color: transparent;
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
  .select{
    background-color: #111111;
  }
  //模态框
  .modal-content{
    background-color: #111111 !important;
  }
  .modal-title{
    font-size:24px;
    color: #ffffff;
    text-align: center;
    letter-spacing: 15px;
    text-indent: 15px;
  }
  .modal-p{
    color: #666666;
    text-align: center;
    font-size: 12px;
  }
  .modal-header{
    border-bottom:1px solid #222222;
  }
  .modal-footer{
    border-top:1px solid #222222;
  }

</style>
