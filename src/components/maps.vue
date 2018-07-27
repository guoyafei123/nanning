<template>
  <div>
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-th-large font-gray-666 float-left"></i>
          <h2 class="float-left font-white size-16">巡检管理</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Equipment_management/list"><button @click="btn_add" class="btn_add"><i class="fa fa-th-large font-gray-666 float-left"></i>规划</button></router-link>
        </div>
      </div>
      <div class="main_all_content">
        <div class="main_content_top">
          <el-form label-width="80px"  class="float-left">
            <el-select v-model="unit" placeholder="选择单位" class="select">
              <el-option label="全部单位" value=""></el-option>
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
            <el-select
              v-model="building"
            placeholder="选择建筑"  class="sbwz_138_32 start float-left">
              <el-option label="室外" value="0"></el-option>
              <el-option
                v-for="item in buildList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="floor"
              placeholder="选择楼层" class="sbwz_90_32 start startFloor">
              <el-option
                v-for="item in floorList"
                :label="item.floor+'层'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="room"
              placeholder="选择房间" class="sbwz_90_32 start startRoom">
              <el-option
                v-for="item in roomList"
                :label="item.roomNumber+'房间'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="equipment"
              placeholder="选择设备" class="sbwz_120_32 start startDevice">
              <el-option
                v-for="item in equipmentList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form>
          <div class="main_nav_two float-right">
            <router-link to="/Equipment_management/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>列表</button></router-link>
            <router-link to="/Equipment_management/maps"><button><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link>
          </div>
        </div>
      </div>
    </aside>
  </div>

</template>

<script>
  import { realconsole } from '../assets/js/management.js'
  export default {
    data() {
      return {
      
        unit:null,//选择单位
        building:'',//选择建筑
        floor:'',
        room:'',
        equipment:'',
        roomList:[],
        floorList:[],
        buildList:[],
        equipmentList:[],
        optionList:[]//全部单位列表
      
      }
    },
    methods: {
      btn_add(){
        // console.log($('#right'));
        $('#right').hide();
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
    watch:{
      unit(curVal,oldVal){
        this.unit = curVal;
        console.log(this.unit);
        this.$store.commit('Unit',this.unit);
      }
    },
    mounted(){
      realconsole();
      this.unitSearch();
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
  /* aside{
    width:50%;
    min-width: 450px;
  } */
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
 .start{
    margin-top:4px;
    margin-left:10px;
  }
</style>
