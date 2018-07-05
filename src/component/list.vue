<template>
  <div style="height:100%;">
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-th-large font-gray-666 float-left"></i>
          <h2 class="float-left font-white size-16">新增设备</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/setting/maps"><button><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link>
          <router-link to="/setting/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>完整</button></router-link>
          <router-link to="/setting/list"><button class="btn_add"><i class="fa fa-th-large font-gray-666 float-left"></i>列表</button></router-link>
        </div>
      </div>
      <div class="main_content">
        <el-form ref="form" :label-position="labelPosition" :model="form">
          <el-form-item label="设备名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="选择类别">
            <el-select v-model="form.region" placeholder="消防灭火设施">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="form.region1" placeholder="手提式干粉灭火器">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备位置">
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
            <el-select v-model="form.region5" placeholder="1203房间" class="sbwz_90_32">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="位置坐标">
            <el-input v-model="form.address" class="wzzb"></el-input>
            <el-button type="primary" round icon="el-icon-search" class="wzzb_btn">地图选点</el-button>
          </el-form-item>

          <el-form-item label="离地高度（m）" style="float: left;">
            <el-input v-model="form.Height"></el-input>
          </el-form-item>
          <el-form-item label="距离顶部（m）" style="float: left;margin-left:10px;">
            <el-input v-model="form.Top"></el-input>
          </el-form-item>
          <div style="clear: both;"></div>
          <el-form-item label="设备物理地址">
            <el-input v-model="form.PhysicalAddress"></el-input>
          </el-form-item>

          <el-form-item label="维保单位" class="sbwz_138_32" style="float: left;">
            <el-input v-model="form.Maintenance_unit"></el-input>
          </el-form-item>
          <el-form-item label="维保电话" class="sbwz_138_32" style="float: left;margin-left:10px;">
            <el-input v-model="form.Maintenance_phone"></el-input>
          </el-form-item>
          <el-form-item label="更换周期" class="sbwz_138_32" style="float: left;margin-left:10px;">
            <el-input v-model="form.Replacement_cycle"></el-input>
          </el-form-item>
          <div style="clear: both;"></div>
          <el-form-item label="是否生成图形码" style="margin-top:55px;">
            <el-radio-group v-model="form.resource">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
            <el-button type="primary" round icon="el-icon-search" class="resource_btn">用于巡检打卡功能，设备信息快速查看等</el-button>
          </el-form-item>
          <div style="width:485px;margin:0 auto 25px;border-top:1px solid #222222;"></div>
          <el-form-item style="margin-bottom: 20px;">
            <el-button type="primary" @click="onSubmit" icon="el-icon-search" class="primary">保存并提交</el-button>
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
      }
    }
</script>

<style scoped>
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


</style>
