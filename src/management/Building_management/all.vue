<template>
  <div>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="fa fa-th-large font-gray-666 float-left"></i>
        <h2 class="float-left font-white size-16">建筑管理</h2>
      </div>
      <div class="main_con_nav float-left">
        <a href="javascript:;" class="link-active"><button><i class="fa fa-th-large font-gray-666 float-left"></i>建筑</button></a>
        <a href="javascript:;"><button><i class="fa fa-th-large font-gray-666 float-left"></i>楼层</button></a>
        <a href="javascript:;"><button><i class="fa fa-th-large font-gray-666 float-left"></i>房间</button></a>
      </div>
      <div class="main_nav float-right">
       <a href="javascript:;"><button class="btn_add" @click="show()"><i class="fa fa-th-large font-gray-666 float-left"></i>新增
          <div class="main_nav_show" style="display: none;">
            <ul>
              <li><router-link to="/Building_management/list"><button><i class="fa fa-th-large font-gray-666 float-left"></i>建筑</button></router-link></li>
              <li><router-link to="/Building_management/list"><button><i class="fa fa-th-large font-gray-666 float-left"></i>楼层</button></router-link></li>
              <li><router-link to="/Building_management/list"><button><i class="fa fa-th-large font-gray-666 float-left"></i>房间</button></router-link></li>
            </ul>
          </div>
        </button>
        </a>
      </div>
    </div>
    <div class="main_all_content" style="display: block;">
      <div class="main_content_top">
        <el-form ref="form" :model="form" label-width="80px" class="float-left">
          <el-select v-model="form.region1" @change="" placeholder="全部单位" class="select" style="margin-left:20px;">
            <el-option label="区域一" value="ssd"></el-option>
            <el-option label="区域二" value="www2"></el-option>
          </el-select>
          <el-select v-model="form.region2" placeholder="全部建筑" class="select">
            <el-option label="区域一" value="wq"></el-option>
            <el-option label="区域二" value="ww"></el-option>
          </el-select>
          <el-select v-model="form.region3" placeholder="全部楼层" class="select">
            <el-option label="区域一" value="ss"></el-option>
            <el-option label="区域二" value="gf"></el-option>
          </el-select>
          <el-select v-model="form.region3" placeholder="全部房间" class="select">
            <el-option label="区域一" value="ss"></el-option>
            <el-option label="区域二" value="gf"></el-option>
          </el-select>
          <el-form-item label="" class="float-left">
            <el-input v-model="form.name" placeholder="设备名称、设备编号"></el-input>
          </el-form-item>
          <el-button  icon="el-icon-search">搜索</el-button>
        </el-form>
        <div class="main_nav_two float-right">
          <router-link to="/Building_management/maps"><button><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link>
          <router-link to="/Building_management/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>完整</button></router-link>
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
            label="序号">
          </el-table-column>
          <el-table-column
            prop="Device_name"
            label="建筑名称">
          </el-table-column>
          <el-table-column
            prop="Equipment_type"
            label="所属单位">
          </el-table-column>
          <el-table-column
            prop="Architectural_name"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="Unit_name"
            label="占地面积（m^2）">
          </el-table-column>
          <el-table-column
            prop="Off_ground"
            label="总楼层">
          </el-table-column>
          <el-table-column
            prop="Apex"
            label="建筑结构">
          </el-table-column>
          <el-table-column
            prop="Call_the_police"
            label="建成年份">
          </el-table-column>
          <el-table-column
            prop="Fault"
            label="建筑性质">
          </el-table-column>
          <el-table-column
            prop="Maintenance_unit"
            label="消防负责人">
          </el-table-column>
          <el-table-column
            prop="Invest_time"
            label="消防负责人电话"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <i class="fa fa-th-large font-gray-666"></i>
              <i class="fa fa-th-large font-gray-666"></i>
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
            <a href="javascrip:;" class="font-gray-666" style="margin-left:5px;">导出二维码</a>
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
    <div class="main_all_content">
      <div class="main_content_top">
        <el-form ref="form" :model="form" label-width="80px" class="float-left">
          <el-select v-model="form.region1" @change="" placeholder="全部单位" class="select" style="margin-left:20px;">
            <el-option label="区域一" value="ssd"></el-option>
            <el-option label="区域二" value="www2"></el-option>
          </el-select>
          <el-select v-model="form.region2" placeholder="全部建筑" class="select">
            <el-option label="区域一" value="wq"></el-option>
            <el-option label="区域二" value="ww"></el-option>
          </el-select>
          <el-select v-model="form.region3" placeholder="全部楼层" class="select">
            <el-option label="区域一" value="ss"></el-option>
            <el-option label="区域二" value="gf"></el-option>
          </el-select>
          <el-select v-model="form.region3" placeholder="全部房间" class="select">
            <el-option label="区域一" value="ss"></el-option>
            <el-option label="区域二" value="gf"></el-option>
          </el-select>
          <el-form-item label="" class="float-left">
            <el-input v-model="form.name" placeholder="设备名称、设备编号"></el-input>
          </el-form-item>
          <el-button  icon="el-icon-search">搜索</el-button>
        </el-form>
        <div class="main_nav_two float-right">
          <router-link to="/Building_management/maps"><button><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link>
          <router-link to="/Building_management/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>完整</button></router-link>
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
            label="序号">
          </el-table-column>
          <el-table-column
            prop="Device_name"
            label="建筑名称">
          </el-table-column>
          <el-table-column
            prop="Equipment_type"
            label="所属单位">
          </el-table-column>
          <el-table-column
            prop="Architectural_name"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="Unit_name"
            label="占地面积（m^2）">
          </el-table-column>
          <el-table-column
            prop="Off_ground"
            label="总楼层">
          </el-table-column>
          <el-table-column
            prop="Apex"
            label="建筑结构">
          </el-table-column>
          <el-table-column
            prop="Call_the_police"
            label="建成年份">
          </el-table-column>
          <el-table-column
            prop="Fault"
            label="建筑性质">
          </el-table-column>
          <el-table-column
            prop="Maintenance_unit"
            label="消防负责人">
          </el-table-column>
          <el-table-column
            prop="Invest_time"
            label="消防负责人电话"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <i class="fa fa-th-large font-gray-666"></i>
              <i class="fa fa-th-large font-gray-666"></i>
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
            <a href="javascrip:;" class="font-gray-666" style="margin-left:5px;">导出二维码</a>
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
    <div class="main_all_content">
      <div class="main_content_top">
        <el-form ref="form" :model="form" label-width="80px" class="float-left">
          <el-select v-model="form.region1" @change="" placeholder="全部单位" class="select" style="margin-left:20px;">
            <el-option label="区域一" value="ssd"></el-option>
            <el-option label="区域二" value="www2"></el-option>
          </el-select>
          <el-select v-model="form.region2" placeholder="全部建筑" class="select">
            <el-option label="区域一" value="wq"></el-option>
            <el-option label="区域二" value="ww"></el-option>
          </el-select>
          <el-select v-model="form.region3" placeholder="全部楼层" class="select">
            <el-option label="区域一" value="ss"></el-option>
            <el-option label="区域二" value="gf"></el-option>
          </el-select>
          <el-select v-model="form.region3" placeholder="全部房间" class="select">
            <el-option label="区域一" value="ss"></el-option>
            <el-option label="区域二" value="gf"></el-option>
          </el-select>
          <el-form-item label="" class="float-left">
            <el-input v-model="form.name" placeholder="设备名称、设备编号"></el-input>
          </el-form-item>
          <el-button  icon="el-icon-search">搜索</el-button>
        </el-form>
        <div class="main_nav_two float-right">
          <router-link to="/Building_management/maps"><button><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link>
          <router-link to="/Building_management/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>完整</button></router-link>
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
            label="序号">
          </el-table-column>
          <el-table-column
            prop="Device_name"
            label="建筑名称">
          </el-table-column>
          <el-table-column
            prop="Equipment_type"
            label="所属单位">
          </el-table-column>
          <el-table-column
            prop="Architectural_name"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="Unit_name"
            label="占地面积（m^2）">
          </el-table-column>
          <el-table-column
            prop="Off_ground"
            label="总楼层">
          </el-table-column>
          <el-table-column
            prop="Apex"
            label="建筑结构">
          </el-table-column>
          <el-table-column
            prop="Call_the_police"
            label="建成年份">
          </el-table-column>
          <el-table-column
            prop="Fault"
            label="建筑性质">
          </el-table-column>
          <el-table-column
            prop="Maintenance_unit"
            label="消防负责人">
          </el-table-column>
          <el-table-column
            prop="Invest_time"
            label="消防负责人电话"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <i class="fa fa-th-large font-gray-666"></i>
              <i class="fa fa-th-large font-gray-666"></i>
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
            <a href="javascrip:;" class="font-gray-666" style="margin-left:5px;">导出二维码</a>
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
  </div>

</template>

<script>
  import { realconsole } from '../../assets/js/management.js'
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
      },
      show(){
        $('.main_nav_show').show()
      }
    },
    mounted(){
      realconsole();
      this.SetColor('.btn-prev','background','transparent');
      this.SetColor('.btn-next','background','transparent');
      this.SetColor('.el-pager li','background','transparent');
      this.SetColor('.el-pager li.active','color','#fff');
      $('.main_con_nav').on('click','a',function(){
        $(this).addClass('link-active').siblings().removeClass('link-active');
        $(".main_all_content").hide().eq($(this).index()).show();
      });
      $('.main_nav_show ul').on('click','li',function(){
        $(this).addClass('btn_active').siblings().removeClass('btn_active');
        $('.main_nav_show').hide()
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
  .main_header button{
    width:64px;
    height:28px;
    float: left;
    outline:none;
    display: flex;
    align-items: center;
    justify-content: center;
    border:2px solid transparent;
    background: #222222;
    font-size: 12px;
    color: #999;
    margin-top: 21px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .main_nav_two button{
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
    margin-left:25%;
    a:nth-last-child(1) button{
      border-left:none;
    }
    .link-active button{
      color: #000;
      background-color: #bad616;
    }
    .link-active i{
      color: #000;
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
</style>
