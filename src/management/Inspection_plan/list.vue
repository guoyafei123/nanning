<template>
  <div style="height:100%;">
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-th-large font-gray-666 float-left"></i>
          <h2 class="float-left font-white size-16">路线规划</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Inspection_plan/maps"><button><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link>
          <router-link to="/Inspection_plan/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>完整</button></router-link>
          <router-link to="/Inspection_plan/list"><button style="margin-right:20px;border-right:2px solid #333333;"><i class="fa fa-th-large font-gray-666 float-left"></i>列表</button></router-link>
        </div>
      </div>
      <div class="main_content">
        <el-form ref="form" :label-position="labelPosition" :model="form">
          <el-form-item label="路线名称" >
            <span class="font-red" style="position: absolute;top:-45px;right:20px;">路线名称重复，请重新输入</span>
            <el-input v-model="form.name" style="width:190px;"></el-input>
          </el-form-item>
          <el-form-item label="巡检类型">
            <el-select v-model="form.region" placeholder="日常巡检">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择单位">
            <el-select v-model="form.region1" @change="" placeholder="选择单位" class="select">
              <el-option label="全部单位" value=""></el-option>
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="起点">
            <el-select
              v-model="building"
            placeholder="选择建筑"  class="sbwz_138_32">
            <el-option
              v-for="item in buildList"
              :label="item.value"
              :value="item.id">
            </el-option>
            </el-select>
            <el-select
              v-model="floor"
              placeholder="选择楼层" class="sbwz_90_32">
              <el-option
                v-for="item in floorList"
                :label="item.value"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="room"
              placeholder="选择房间" class="sbwz_90_32">
              <el-option
                v-for="item in roomList"
                :label="item.value"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="equipment"
              placeholder="选择设备" class="sbwz_120_32">
              <el-option
                v-for="item in equipmentList"
                :label="item.value"
                :value="item.id">
              </el-option>
            </el-select>
            <div class="float-right" style="width:32px;height:32px;border:1px solid #333333;margin-top:5px;margin-right:5px;display:flex;justify-content: center;align-items: center;">
              <i class="fa fa-th-large font-gray-666 float-right"></i>
            </div>
          </el-form-item>
          <el-form-item label="节点">
            <el-select v-model="form.region2" placeholder="良庆区中心小学" class="sbwz_138_32">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="form.region3" placeholder="实验教学楼22号" class="sbwz_138_32">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="form.region4" placeholder="十二层" class="sbwz_90_32">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="form.region5" placeholder="1203房间">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="form.region6" placeholder="烟雾感应器" size="small">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <div style="width:485px;margin:0 auto 25px;border-top:1px solid #222222;"></div>
          <el-form-item style="margin-bottom: 20px;">
            <el-button type="primary"  icon="el-icon-search" class="primary">保存并提交</el-button>
            <el-button class="back">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </aside>

  </div>
</template>

<script>
    export default {
      data() {
        return {
          labelPosition: 'top',
          form: {
            name: '',//路线名称
            region: '',//巡检类型
            region1: ''//选择单位
          },
          building:'',//选择建筑
          floor:'',//选择楼层
          room:'',//选择房间
          equipment:'',//选择设备
          optionList:[],//选择单位列表
          buildList:[],//选择建筑列表
          floorList:[],//选择楼层列表
          roomList:[],//选择房间列表
          equipmentList:[]//选择设备列表
        }
      },
      methods:{
        unitSearch(){
          this.$fetch('/api/unit/queryUnit').then(response=>{
            console.log('unitSearch:'+response);
            if (response) {
              this.optionList = response.data.unitList;
              console.log(this.optionList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        buildSearch(unitId){
          this.$fetch('/api/building/selectNode',{
            unitId:unitId
          }).then(response=>{
            console.log('buildSearch:'+response);
            if (response) {
              // this.buildList = response.data.list;
              // console.log(this.buildList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        floorSearch(buildIngId){
          this.$fetch('/api/building/selectNode',{
            buildIngId:buildIngId
          }).then(response=>{
            console.log('floorSearch:'+response);
            if (response) {
              // this.floorList = response.data.list;
              // console.log(this.floorList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        roomSearch(floorId){
          this.$fetch('/api/building/selectNode',{
            floorId:floorId
          }).then(response=>{
            console.log('roomSearch:'+response);
            if (response) {
              // this.roomList = response.data.list;
              // console.log(this.roomList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        },
        equipmentSearch(roomId){
          this.$fetch('/api/building/selectNode',{
            roomId:roomId
          }).then(response=>{
            console.log('equipmentSearch:'+response);
            if (response) {
              // this.equipmentList = response.data.list;
              // console.log(this.equipmentList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
        }
      },
      mounted(){
        $('.el-scrollbar').css({
            'background':'#000'
        });
        $('.el-select-dropdown').css('border-color','#333');
        $('.el-select-dropdown__item').css('color','#999');
        $(' .el-select-dropdown__item').mouseover(function(){
          $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
        });
        $('.modal-body .el-input__inner').css({'background-color':'#111','border-color':'#282828','border-radius':'0'});

      },
      watch:{
        form:{
          //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
          handler(curVal,oldVal){
            // console.log(curVal);
            this.form = curVal;
            console.log(this.form);
            this.buildSearch(this.form.region1);
          },
          deep:true
        }
      }
    }
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

  @media (min-width: 768px) and (max-width:1600px){
    aside{
      width:525px;
      max-height:740px;
      background:#111111;
      overflow: hidden;
    }
    .main_content{
      width:500px;
      height:672px;
      margin:0 auto;
      overflow-y: scroll;
      border-top:1px solid #222222;

    }
  }
  @media (min-width: 1600px){
    aside{
      width:525px;
      max-height:740px;
      background:#111111;
      overflow: hidden;
    }
    .main_content{
      width:500px;
      height:672px;
      margin:0 auto;
      overflow-y: scroll;
      border-top:1px solid #222222;

    }
  }
  .main_header{
    width:100%;
    height:68px;
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
  .main_header a:nth-child(1) button{
    border-right:none;
  }
  .main_header a:nth-child(3) button{
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
