<template>
  <div>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="fa fa-th-large font-gray-666 float-left"></i>
        <h2 class="float-left font-white size-16">设备管理</h2>
      </div>
      <div class="main_nav float-right">
        <router-link to="/setting/maps"><button><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link>
        <router-link to="/setting/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>完整</button></router-link>
        <router-link to="/setting/list"><button class="btn_add"><i class="fa fa-th-large font-gray-666 float-left"></i>新增</button></router-link>
      </div>
    </div>
    <div class="main_all_content">
      <div class="main_content_top">
        <el-form ref="form" :model="form" label-width="80px">
          <el-select v-model="form.region1" placeholder="全部单位" class="select" style="margin-left:20px;">
            <el-option label="区域一" value="ssd"></el-option>
            <el-option label="区域二" value="www2"></el-option>
          </el-select>
          <el-select v-model="form.region2" placeholder="全部建筑" class="select">
            <el-option label="区域一" value="wq"></el-option>
            <el-option label="区域二" value="ww"></el-option>
          </el-select>
          <el-select v-model="form.region3" placeholder="灭火设备" class="select">
            <el-option label="区域一" value="ss"></el-option>
            <el-option label="区域二" value="gf"></el-option>
          </el-select>
          <el-form-item label="" class="float-left">
            <el-input v-model="form.name" placeholder="设备名称、设备编号"></el-input>
          </el-form-item>
          <el-button  icon="el-icon-search">搜索</el-button>
        </el-form>
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
            label="设备名称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Equipment_type"
            label="设备类型"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Architectural_name"
            label="建筑名称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Unit_name"
            label="单位名称"
            width="300">
          </el-table-column>
          <el-table-column
            prop="Off_ground"
            label="离地"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Apex"
            label="距顶"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Call_the_police"
            label="报警"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Fault"
            label="故障"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Maintenance_unit"
            label="维保单位"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Invest_time"
            label="投入时间"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Replacement_period"
            label="更换周期"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Add_time"
            label="添加时间"
            width="120">
          </el-table-column>
          <el-table-column
            prop="State"
            label="状态"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Position"
            label="位置"
            width="120">
            <template slot-scope="scope">
              <i class="fa fa-th-large font-gray-666"></i>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <i class="fa fa-th-large font-gray-666"></i>
              <i class="fa fa-th-large font-gray-666"></i>
              <i class="fa fa-th-large font-gray-666"></i>
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
                         :page-sizes="[100, 200, 300, 400]"
                         :page-size="100"
                         layout="total"
                         :total="400">
          </el-pagination>
          <span style="float: left;margin-top:5px;color: #666;margin-left:-5px;">{{page}}页</span>
          <el-pagination style="float: right;background: transparent"
                         @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-sizes="[100, 200, 300, 400]"
                         :page-size="100"
                         layout="prev, pager, next"
                         :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        form: {
          name:'',
          region1:'',
          region2:'',
          region3:''
        },
        tableData: [{
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
        },{
          Serial_number: '2',
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
      }
    },
    mounted(){
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
  .main_header button{
    width:64px;
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
  .main_header button:nth-child(2){
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
</style>
