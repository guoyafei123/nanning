<template>
  <div>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="fa fa-th-large font-gray-666 float-left"></i>
        <h2 class="float-left font-white size-16">巡检管理</h2>
      </div>
      <div class="main_con_nav float-left">
        <a href="javascript:;" class="link-active"><button><i class="fa fa-th-large font-gray-666 float-left"></i>巡检路线</button></a>
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
            <el-option label="区域一" value="ssd"></el-option>
            <el-option label="区域二" value="www2"></el-option>
          </el-select>
          <el-select v-model="form.region2" placeholder="举报检查" class="select">
            <el-option label="区域一" value="wq"></el-option>
            <el-option label="区域二" value="ww"></el-option>
          </el-select>
          <el-select v-model="form.region3" placeholder="已删除" class="select">
            <el-option label="区域一" value="ss"></el-option>
            <el-option label="区域二" value="gf"></el-option>
          </el-select>
          <el-button>确定</el-button>
        </el-form>
        <div class="main_nav_two float-right">
          <router-link to="/Inspection_plan/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>完整</button></router-link>
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
            fixed
            sortable
            prop="Serial_number"
            label="序号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="Device_name"
            label="路线名称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Equipment_type"
            label="巡检单位"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Architectural_name"
            label="巡检类型"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Unit_name"
            label="发布者"
            width="300">
          </el-table-column>
          <el-table-column
            prop="Off_ground"
            label="发布日期"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Apex"
            label="每次额定次数"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Call_the_police"
            label="是否扫码打卡"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Fault"
            label="路线状态"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
              <button @click="show" data-toggle="modal" data-target="#mymodal" style="width:40px;height:22px;border:2px solid #bad616;color: #bad616;background-color: #111111;line-height: 19px;margin:0;padding:0;font-size: 12px;text-align: center;margin-right:10px;">激活</button>
              <i class="fa fa-th-large font-gray-666" style="margin-right: 10px;"></i>
              <i class="fa fa-th-large font-gray-666"></i>
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
                         :page-sizes="[100, 200, 300, 400]"
                         :page-size="100"
                         layout="prev, pager, next"
                         :total="400">
          </el-pagination>
          <span style="float: right;margin-top:5px;color: #666;margin-left:5px;margin-right:10px;">{{page}}页</span>
          <el-pagination style="float: right;"
                         @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-sizes="[100, 200, 300, 400]"
                         :page-size="100"
                         layout="total"
                         :total="400">
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
  export default {
    data() {
      return {
        labelPosition: 'top',
        form: {
          name:'',
          region1:'',
          region2:'22',
          region3:'33'
        },
        tableData: [{
          id:'myModal1',
          Serial_number: '1',
          Device_name: '王小虎',
          Equipment_type: '上海',
          Architectural_name: '普陀区',
          Unit_name: '上海市普陀区金沙江路 1518 弄',
          Off_ground: 200333,
          Apex:'',
          Call_the_police:'',
          Fault:'',
          Maintenance_unit:'',
          Invest_time:'',
          Replacement_period:'',
          Add_time:'',
          State:'',
          Position:''
        }],
        page:4,
        currentPage4: 1
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
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      SetColor(ele,key,value){
        $(ele).css(key,value);
      },
      show(){
        $('.modal').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
      }
    },
    mounted(){
      // console.log($('.el-form > div:nth-child(1) >div  > input').attr('value'))
      $('.el-table__body-wrapper').css('height','520px');
      $('.el-scrollbar').css({
        'background':'#000'
      });
      $('.el-select-dropdown').css({'border-color':'#333','border-radius':'0px'});
      $('.el-select-dropdown__item').css('color','#999');
      $(' .el-select-dropdown__item').mouseover(function(){
        $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
      });
      $('.el-table__row').mouseover(function(){
        $(this).css({'color':'#fff','background':'#000'})
      }).mouseout(function(){
        $(this).css({'color':'#999','background':'#111'})
      });
      this.SetColor('.btn-prev','background','transparent');
      this.SetColor('.btn-next','background','transparent');
      this.SetColor('.el-pager li','background','transparent');
      this.SetColor('.el-pager li.active','color','#fff');
      $('.modal-body .el-input__inner').css({'background-color':'#111','border-color':'#282828','border-radius':'0'});

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
    /*width:64px;*/
    height:28px;
    float: left;
    outline:none;
    display: flex;
    align-items: center;
    justify-content: center;
    border:2px solid #333333;
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
    background-color: #333333;
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
