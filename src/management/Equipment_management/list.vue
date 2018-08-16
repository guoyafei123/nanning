<template>
  <div id="add-new">
    <aside>
      <!-- 标题 -->
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-plus"></i>
          <h2>新增设备</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Equipment_management/all"><span class="btn-back"><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
        </div>
      </div>
      <!-- 分割线 -->
      <section class="border-top-solid-333 margin-left15 margin-right15"></section>
      <!-- 表单 -->
      <div class="main_content">
        <!--
          class类not-null为必填标识,如需请加在<el-form-item>
          class类hint-error为错误提示
         -->
        <el-form class="row" ref="form" :label-position="labelPosition" :model="form">
          <el-form-item label="设备名称" class="not-null">
            <span class="hint-error">设备名称有误或重复</span>
            <el-input v-model="form.name" class="col-sm-4"></el-input>
          </el-form-item>
          <el-form-item label="所属单位" class="not-null">
            <el-select v-model="form.unitId" placeholder="选择单位" class="select selectUnit col-sm-4">
              <el-option label="全部单位" value=""></el-option>
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备类型" class="not-null">
            <el-select
              v-model="form.equipmentId"
              placeholder="选择设备类型" class="start col-sm-4">
              <el-option
                v-for="item in equipmentList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备位置" class="not-null">
            <el-select
              v-model="form.buildingId"
            placeholder="选择建筑"  class="start col-sm-4">
              <el-option label="室外" value="0"></el-option>
              <el-option
                v-for="item in form.buildList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="form.floorId"
              placeholder="选择楼层" class="start col-sm-4">
              <el-option
                v-for="item in form.floorList"
                :label="item.floorName+'层'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="form.roomId"
              placeholder="选择房间" class="start col-sm-4">
              <el-option
                v-for="item in form.roomList"
                :label="item.roomNumber+'房间'"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="坐标">
            <el-input placeholder="X" v-model="form.point.pointX" class="col-sm-4"></el-input>
            <el-input placeholder="Y" v-model="form.point.pointY" class="col-sm-4"></el-input>
          </el-form-item>

          <el-form-item label="物理地址">
            <el-input v-model="form.PhysicalAddress" class="col-sm-8"></el-input>
          </el-form-item>          
          <el-form-item label="相对房顶高度 (cm)" class="col-sm-4">
            <el-input v-model="form.RoofHeight"></el-input>
          </el-form-item>
          <el-form-item label="相对地板高度 (cm)" class="col-sm-4">
            <el-input v-model="form.floorHeight"></el-input>
          </el-form-item>
          <div class="col-sm-12">
              <div class="row">
                <el-form-item label="生产商" class="col-sm-4">
                  <el-input v-model="form.Bike"></el-input>
                </el-form-item>
                <el-form-item label="生产日期" class="col-sm-4">
                  <div class="block">
                    <el-date-picker
                      v-model="form.ProductionDay"
                      type="date"
                      placeholder="选择日期"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>
                  </div>
                </el-form-item>
                <el-form-item label="投入使用日期" class="col-sm-4">
                  <div class="block">
                    <el-date-picker
                      v-model="form.startDate"
                      type="date"
                      placeholder="选择日期"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>
                    </div>
                  </el-form-item>
                </div>
              </div>
            <div class="col-sm-12">
              <div class="row">
                <el-form-item label="维保单位" class="col-sm-4">
                  <el-input v-model="form.Refundable"></el-input>
                </el-form-item>
                <el-form-item label="维保人员" class="col-sm-4">
                  <el-input v-model="form.linkname"></el-input>
                </el-form-item>
                <el-form-item label="维保电话" class="col-sm-4">
                  <el-input v-model="form.phone"></el-input>
                </el-form-item>
              </div>
          </div>
          <div class="col-sm-12 margin-bottom20">
            <div class="row">
              <el-form-item label="更换周期 (天)" class="not-null col-sm-4">
                <el-input v-model="form.Retroperiod"></el-input>
              </el-form-item>
            </div>
          </div> 
          <el-form-item label="控制器ID" class="not-null col-sm-4">
            <el-input v-model="form.controlId"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="main_footer">
        <a class="btn-ok" @click="btn"><i class="el-icon-circle-check-outline"></i> 保存并提交</a>
        <a class="btn-back" @click="back">返回</a>
      </div>
    </aside>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          labelPosition: 'top',
          form:{
            id:'',
            name:'',
            unitId:null,
            unitName:'',
            buildingId:'',
            buildingName:'',
            floorId:'',
            floorNumber:'',
            roomId:'',
            roomNumber:'',
            equipmentId:'',
            deviceTypeName:'',
            roomList:[],
            floorList:[],
            buildList:[],
            point:{
              pointX:'',
              pointY:'',
              xRate:'',
              yRate:''
            },
            PhysicalAddress:'',
            startDate:'',
            lifeMonth:'',
            RoofHeight:'',
            floorHeight:'',
            Retroperiod:'',
            Bike:'',
            ProductionDay:'',
            Refundable:'',
            linkname:'',
            phone:'',
            controlId:''
          },
          unit:null,//选择单位
          optionList:[],//全部单位列表
          equipmentList:[]
        }
      },
      methods:{
        btn(){
          this.$fetch("/api/device/addDevice",{
            'name':this.form.name,
            'unitId':this.form.unitId,
            'unitName':this.form.unitName,
            'buildingId':this.form.buildingId,
            'buildingName':this.form.buildingName,
            'floorId':this.form.floorId,
            'floorNumber':this.form.floorNumber,
            'roomId':this.form.roomId,
            'roomNumber':this.form.roomNumber,
            'deviceTypeId':this.form.equipmentId,
            'deviceTypeName':this.form.deviceTypeName,
            'pointX':this.form.point.pointX,
            'pointY':this.form.point.pointY,
            'xRate':this.form.point.xRate,
            'yRate':this.form.point.yRate,
            'mac':this.form.PhysicalAddress,
            'startDate':this.form.startDate,
            'height':this.form.RoofHeight,
            'fheight':this.form.floorHeight,
            'lifeMonth':this.form.Retroperiod,
            'firm':this.form.Bike,
            'productDate':this.form.ProductionDay,
            'maintenanceUnit':this.form.Refundable,
            'maintenanceUser':this.form.linkname,
            'maintenancePhone':this.form.phone,
            'controlId':this.form.controlId
          }).then(response=>{
            if(response){
              console.log('新增成功...'+ JSON.stringify(response));
            }
          })
          this.$router.push({path:'/Equipment_management/all'});
        },
        back(){
          this.$router.push({path:'/Equipment_management/all'});
          $('#right').show();
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
        },
        equipmentSearch(){
          this.$fetch("/api/device/deviceTypeEnumList").then(response=>{
            console.log('equipmentSearch:'+response);
            if (response) {
              this.equipmentList = response.data.deviceTypeEnum;
              console.log(this.equipmentList);
            }
          })
        },
        formBuildSearch(unitId){
          this.$fetch("/api/building/selectNode",{
            unitId:unitId
          }).then(response=>{
            console.log('formBuildSearch:'+JSON.stringify(response));
            if (response) {
              this.form.buildList = response.data.list;
              console.log(this.form.buildList);
            }
          })
        },
        formFloorSearch(buildIngId){
          this.$fetch("/api/building/selectNode",{
            buildIngId:buildIngId
          }).then(response=>{
            console.log('formFloorSearch:'+response);
            if (response) {
              this.form.floorList = response.data.list;
              console.log(this.form.floorList);
            }
          })
        },
        formRoomSearch(floorId){
          this.$fetch("/api/building/selectNode",{
            floorId:floorId
          }).then(response=>{
            console.log('formRoomSearch:'+response);
            if (response) {
              this.form.roomList = response.data.list;
              console.log(this.form.roomList);
            }
          })
        }
      },
      computed:{
        unitId(){
          return this.form.unitId;
        },
        buildingId(){
          return this.form.buildingId;
        },
        floorId(){
          return this.form.floorId;
        },
        roomId(){
          return this.form.roomId;
        },
        equipmentId(){
          return this.form.equipmentId;
        }
      },
      watch:{
        unitId(curVal,oldVal){
          this.form.unitId = curVal;
          this.formBuildSearch(this.form.unitId);
          this.optionList.forEach((item,index)=>{
            if(item.id == this.form.unitId){
              this.form.unitName = item.name ;
              console.log(this.form.unitName);
            }
          })
        },
        buildingId(curVal,oldVal){
          this.form.buildingId = curVal;
          console.log(this.form.buildingId)
          this.form.floorId = '';
          this.form.roomId = '';
          this.form.floorNumber = '';
          this.form.roomNumber = '';
          this.formFloorSearch(this.form.buildingId);
          this.form.buildList.forEach((item,index)=>{
            if(item.id == this.form.buildingId){
              this.form.buildingName = item.name ;
              console.log(this.form.buildingName);
            }else if(this.form.buildingId == '0' && this.form.buildingId == 0){
              this.form.buildingName = '室外';
            }
          })
        },
        floorId(curVal,oldVal){
          this.form.floorId = curVal;
          if(this.form.floorId !== 0){
            this.formRoomSearch(this.form.floorId);
          }
          this.form.floorList.forEach((item,index)=>{
            if(item.id == this.form.floorId){
              this.form.floorNumber = item.floorName ;
              console.log(this.form.floorNumber);
            }
          })
        },
        roomId(curVal,oldVal){
          this.form.roomId = curVal ;
          this.form.roomList.forEach((item,index)=>{
            if(item.id == this.form.roomId){
              this.form.roomNumber = item.roomNumber ;
              console.log(this.form.roomNumber);
            }
          })
        },
        equipmentId(curVal,oldVal){
          this.form.equipmentId = curVal ;
          this.equipmentList.forEach((item,index)=>{
            if(item.id == this.form.equipmentId){
              this.form.deviceTypeName = item.name ;
              console.log(this.form.deviceTypeName);
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
        this.equipmentSearch();
        this.unitSearch();
      }
    }
</script>

<style lang="scss" scoped>
</style>
