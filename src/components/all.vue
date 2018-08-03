<template>
  <div>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="fa fa-th-large font-gray-666 float-left"></i>
        <h2 class="float-left font-white size-16">设备管理</h2>
      </div>
      <div class="main_nav float-right">
        <router-link to="/Equipment_management/list"><button class="btn_add"><i class="fa fa-th-large font-gray-666 float-left"></i>新增</button></router-link>
      </div>
    </div>
    <div class="main_all_content">
      <div class="main_content_top">
        <el-form ref="form" :model="form" label-width="80px" class="float-left">
          <el-select v-model="form.unit" placeholder="选择单位" class="select">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-select
              v-model="building"
            placeholder="选择建筑"  class="sbwz_138_32 start" :disabled="isdisabled">
              <el-option label="室外" value="0"></el-option>
              <el-option
                v-for="item in buildList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="floor"
              placeholder="选择楼层" class="sbwz_90_32 start startFloor" style="display: none;" :disabled="isdisabled">
              <el-option
                v-for="item in floorList"
                :label="item.floor+'层'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="room"
              placeholder="选择房间" class="sbwz_90_32 start startRoom"  style="display: none;" :disabled="isdisabled">
              <el-option
                v-for="item in roomList"
                :label="item.roomNumber+'房间'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="equipment"
              placeholder="选择设备" class="sbwz_120_32 start startDevice" style="display: none;" :disabled="isdisabled">
              <el-option
                v-for="item in equipmentList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          <el-form-item label="" class="float-left">
            <el-input v-model="form.name" placeholder="设备名称、设备编号"></el-input>
          </el-form-item>
          <el-button  icon="el-icon-search">搜索</el-button>
        </el-form>
        <div class="main_nav_two float-right">
          <router-link to="/Equipment_management/maps"><button><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link>
          <router-link to="/Equipment_management/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>完整</button></router-link>
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
            label="序号">
          </el-table-column>
          <el-table-column
            prop="Device_name"
            label="设备名称">
          </el-table-column>
          <el-table-column
            prop="Equipment_type"
            label="设备类型">
          </el-table-column>
          <el-table-column
            prop="Architectural_name"
            label="建筑名称">
          </el-table-column>
          <el-table-column
            prop="Unit_name"
            label="单位名称">
          </el-table-column>
          <el-table-column
            prop="Off_ground"
            label="离地">
          </el-table-column>
          <el-table-column
            prop="Apex"
            label="距顶">
          </el-table-column>
          <el-table-column
            prop="Call_the_police"
            label="报警">
          </el-table-column>
          <el-table-column
            prop="Fault"
            label="故障">
          </el-table-column>
          <el-table-column
            prop="Maintenance_unit"
            label="维保单位">
          </el-table-column>
          <el-table-column
            prop="Invest_time"
            label="投入时间">
          </el-table-column>
          <el-table-column
            prop="Replacement_period"
            label="更换周期">
          </el-table-column>
          <el-table-column
            prop="Add_time"
            label="添加时间">
          </el-table-column>
          <el-table-column
            prop="State"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="Position"
            label="位置">
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
  import { realconsole } from '../assets/js/management.js'
  export default {
    data() {
      return {
        form: {//筛选项
          unit:null,//选择单位
          region2:null,//设备类型
          region3:null//路线状态
        },
        building:'',//选择建筑
        floor:'',
        room:'',
        equipment:'',
        roomList:[],
        floorList:[],
        buildingList:[],
        equipmentList:[],
        optionList:[],//全部单位列表
        tableData: [],//设备列表
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
      region1(){

      }
    },
    updated(){
      // console.log($('.el-form > div:nth-child(1) >div  > input').attr('placeholder'))
    },
    mounted(){
      realconsole();
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
    background-color: #333333;
  }
  .router-link-active i{
    color: #b8b8b8;
    background-color: #333333;
  }
</style>
