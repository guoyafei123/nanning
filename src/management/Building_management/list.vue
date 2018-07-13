<template>
  <div style="height:100%;">
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-th-large font-gray-666 float-left"></i>
          <h2 class="float-left font-white size-16">建筑管理</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Building_management/maps"><button><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link>
          <router-link to="/Building_management/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>完整</button></router-link>
          <router-link to="/Building_management/list"><button class="btn_add"><i class="fa fa-th-large font-gray-666 float-left"></i>新增</button></router-link>
        </div>
      </div>
      <div class="main_content">
        <el-form ref="form" :label-position="labelPosition" :model="form">
          <el-form-item label="建筑名称">
            <span class="font-red" style="position: absolute;top:-45px;right:20px;">建筑名称有误或重复</span>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="所属单位">
            <span class="font-red" style="position: absolute;top:-45px;right:20px;">所属单位有误或重复</span>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="建筑地址">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="占地面积">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="总楼层">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="建筑类型">
            <el-select v-model="form.region" placeholder="建筑类型">
              <el-option label="低层（1~3）" value="shanghai"></el-option>
              <el-option label="多层（4~6）" value="beijing"></el-option>
            </el-select>
          </el-form-item>




          <div style="clear: both;"></div>
          <el-form-item label="是否生成二维码" style="margin-top:55px;">
            <span class="font-red" style="position: absolute;top:-45px;right:20px;">未选择是否生成图形码</span>
            <el-radio-group v-model="form.resource">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
            <el-button type="primary" round icon="el-icon-search" class="resource_btn">用于巡检打卡功能，设备信息快速查看等</el-button>
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
            name: '',
            address:'',
            region: '',
            region1: '',
            Height: '',
            Top: '',
            PhysicalAddress: '',
            Maintenance_unit:'',
            Maintenance_phone:'',
            Replacement_cycle:'',
            resource: ''
          }
        }
      },
      methods:{

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

</style>
