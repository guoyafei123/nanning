<template>
  <div id="add-new" class="add-map">
    <!-- 表单 -->
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
        <el-form class="row" ref="form" status-icon :rules="rules" :label-position="labelPosition" :model="form">
          <el-form-item label="设备名称" prop="name" class="not-null">
            <!-- <span class="hint-error">设备名称有误或重复</span> -->
            <el-input v-model="form.name" class="col-sm-8"></el-input>
          </el-form-item>
          <el-form-item label="设备类型" prop="equipmentId" class="not-null">
            <el-select
              v-model="form.equipmentId"
              placeholder="请选择" class="start col-sm-4">
              <el-option
                v-for="item in equipmentList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属单位" prop="unitId" class="not-null">
            <el-select v-model="form.unitId" placeholder="请选择" class="select selectUnit col-sm-4">
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>          
          <el-form-item label="设备位置" prop="buildingId" class="not-null">
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
          <el-form-item v-if="this.form.buildingId==0"  label="地图坐标" prop="point">
            <el-input placeholder="经度,纬度" v-model="form.point" class="col-sm-8"></el-input>
            <el-tooltip class="item icon-help font-blue pull-right" content="右侧地图添加位置" placement="top">
              <i class="el-icon-question size-16"></i>
            </el-tooltip>
          </el-form-item>
          <el-form-item v-if="this.form.buildingId!=0" label="平面图坐标" prop="Rate">
            <el-input placeholder="X,Y" v-model="form.Rate" class="col-sm-8"></el-input>
            <el-tooltip class="item icon-help font-blue pull-right" content="右侧地图添加位置" placement="top">
              <i class="el-icon-question size-16"></i>
            </el-tooltip>
          </el-form-item>
          <div class="col-sm-12">
            <div class="row">
              <el-form-item label="物理地址" prop="PhysicalAddress" class="col-sm-4">
                <el-input v-model="form.PhysicalAddress"></el-input>
              </el-form-item>
              <el-form-item label="控制器ID" prop="controlId" class="not-null col-sm-4">
                <el-input v-model="form.controlId"></el-input>
              </el-form-item>
            </div>
          </div>          
          <el-form-item label="相对房顶高度 (cm)" prop="RoofHeight" class="col-sm-4">
            <el-input v-model.number="form.RoofHeight"></el-input>
          </el-form-item>
          <el-form-item label="相对地板高度 (cm)" prop="floorHeight" class="col-sm-4">
            <el-input v-model.number="form.floorHeight"></el-input>
          </el-form-item>
          <div class="col-sm-12">
              <div class="row">
                <el-form-item label="生产商" prop="Bike" class="col-sm-4">
                  <el-input v-model="form.Bike"></el-input>
                </el-form-item>
                <el-form-item label="生产日期" prop="ProductionDay" class="col-sm-4">
                  <div class="block">
                    <el-date-picker
                      v-model="form.ProductionDay"
                      type="date"
                      placeholder="选择日期"
                      format="yyyy-MM-dd"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>
                  </div>
                </el-form-item>
                <el-form-item label="投入使用日期" prop="startDate" class="col-sm-4">
                  <div class="block">
                    <el-date-picker
                      v-model="form.startDate"
                      type="date"
                      placeholder="选择日期"
                      format="yyyy-MM-dd"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>
                    </div>
                  </el-form-item>
                </div>
              </div>
            <div class="col-sm-12">
              <div class="row">
                <el-form-item label="维保单位" prop="Refundable" class="col-sm-4">
                  <el-input v-model="form.Refundable"></el-input>
                </el-form-item>
                <el-form-item label="维保人员" prop="linkname" class="col-sm-4">
                  <el-input v-model="form.linkname"></el-input>
                </el-form-item>
                <el-form-item label="维保电话" prop="phone" class="col-sm-4">
                  <el-input v-model.number="form.phone"></el-input>
                </el-form-item>
              </div>
          </div>
          <div class="col-sm-12 margin-bottom20">
            <div class="row">
              <el-form-item label="更换周期 (天)" prop="Retroperiod" class="not-null col-sm-4">
                <el-input v-model.number="form.Retroperiod"></el-input>
              </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
      <div class="main_footer">
        <a class="btn-ok" @click="btn('form')"><i class="el-icon-circle-check-outline"></i> 保存并提交</a>
        <a class="btn-back" @click="back()">返回</a>
      </div>
    </aside>
    <!-- 地图 -->
    <aside class="position:relative;" >
      <div class="maps map">
          <managementMap-vue></managementMap-vue>
      </div>
        <div  class="floorMap maps" style="display:none;overflow: hidden;">
          <ul class="list-unstyled floor-item" style="top: 120px">
            <li v-for="(item,index) in table_list" @click="floor_btn(item.id)">{{ item.floorName }}</li>
          </ul>
          <div id="floorImg" style="width: 100%;height: 100%;position:relative;left:0;top:0;">
            <img  id="imgPic" :src="this.svgUrl" class="img-responsive" style="position:relative;" @click="addDevice('GETMOUSEPOSINPIC',$event)">
          </div>
      </div>

    </aside>
  </div>
</template>

<script>
import panzoom from 'panzoom';
import{ mapState } from "vuex";
import managementMapVue from '../managementMap';
import { isvalidPhone,isName,isvalidName,isLng } from '../../assets/js/validate';
import { vControl,setPoint } from '../../assets/js/pointDevice';
    export default {
      data() {

 
        var validPhone=(rule, value,callback)=>{
            if (!value){
              callback(new Error('请输入手机号码'))
            }else  if (!isvalidPhone(value)){
              callback(new Error('请输入正确的11位手机号码'))
            }else {
              callback()
            }
        }
        var Name=(rule, value,callback)=>{
            if (!value){
              callback(new Error('请输入生产商的姓名'))
            }else  if (!isName(value)){
              callback(new Error('请输入正确的姓名'))
            }else {
              callback()
            }
        }
        var validName=(rule, value,callback)=>{
            if (!value){
              callback(new Error('请输入设备名称'))
            }else  if (!isvalidName(value)){
              callback(new Error('请输入正确的设备名称'))
            }else {
              callback()
            }
        }
        var linkName=(rule, value,callback)=>{
            if (!value){
              callback(new Error('请输入维保人员姓名'))
            }else  if (!isName(value)){
              callback(new Error('请输入正确的维保人员姓名'))
            }else {
              callback()
            }
        }
        var Lng=(rule, value,callback)=>{
            if (!value){
              callback(new Error('请输入坐标'))
            }else  if (!isLng(value)){
              callback(new Error('请输入正确的坐标点'))
            }else {
              callback()
            }
        }
        return {
          // imgIndex: 0,
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
            point:'',
            Rate:'',
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
          svgUrl:'',
          table_list:[],
          optionList:[],//全部单位列表
          equipmentList:[],
          rules: {
            name:[
              { required: true, trigger: 'blur', validator: validName }
            ],
            unitId:[
              { required: true, message: '请选择单位', trigger: 'change' }
            ],
            equipmentId:[
              { required: true, message: '请选择设备类型', trigger: 'change' }
            ],
            buildingId: [
              { required: true, message: '请选择设备位置', trigger: 'change' }
            ],
            PhysicalAddress:[
              { required: true, message: '请填写物理地址', trigger: 'blur' }
            ],
            controlId:[
              { required: true, trigger: 'blur', message: '请输入控制器ID' }
            ],
            RoofHeight:[
              { required: true, trigger: 'blur', message: '相对房顶高度' },
              { type: 'number', message: '必须为数字值'}
            ],
            floorHeight:[
              { required: true, trigger: 'blur', message: '请输入相对地板高度' },
              { type: 'number', message: '必须为数字值'}
            ],
            Bike:[
              { required: true, trigger: 'blur', validator: Name }
            ],
            ProductionDay:[
              { required: true, trigger: 'change', message: '请选择生产日期' }
            ],
            startDate:[
              { required: true, trigger: 'change', message: '请选择投入使用日期' }
            ],
            Refundable:[
              { required: true, trigger: 'blur', message: '请填写维保单位' }
            ],
            linkname:[
              { required: true, trigger: 'blur', validator: linkName }
            ],
            phone:[
              { required: true, trigger: 'blur', validator: validPhone }
            ],
            Retroperiod:[
              { required: true, trigger: 'blur', message: '请输入更换周期' },
              { type: 'number', message: '必须为数字值'}
            ],
            point:[
              { required: true, trigger: 'blur', validator: Lng }
            ],
            Rate:[
              { required: true, trigger: 'blur', message: '请填写平面图坐标' }
            ]
          }
        }
      },
      components:{
        'managementMap-vue': managementMapVue,
      },
      methods:{
        floor_btn(id){
          this.table_list.forEach((item)=>{
            if(item.id == id){
              this.svgUrl = item.svgUrl ;
              this.form.floorId = item.floor ;
              this.form.floorNumber = item.floorName ;
              var area = document.getElementById('floorImg');
              panzoom((area),{
                maxZoom:1,
                minZoom:1
              });
            }
          })
        },
        findPageBuildIngFloor(){
          this.$fetch("/api/building/findPageBuildIngFloor",{
            pageIndex:1,
            pageSize:1000,
            buildingId:this.form.buildingId
          }).then(response=>{
            console.log(response.data.pageBuildIng.result);
            this.table_list = response.data.pageBuildIng.result;
          })
        },
        btn(formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
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
                'pointX':this.form.point[0],
                'pointY':this.form.point[1],
                'xRate':this.form.Rate[0],
                'yRate':this.form.Rate[1],
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
                  //console.log('新增成功...'+ JSON.stringify(response));
                  this.$router.push({path:'/Equipment_management/all'});
                }
              })
            } else {
              //console.log('error submit!!');
              return false;
            }
          });
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
                //console.log(response);
                this.optionList = response.data.unitList;
                //console.log(this.optionList);
                $(' .el-select-dropdown__item').mouseover(function(){
                  $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
                });
              }
            })
            .then(err => {
              // //console.log(err);
            });
        },
        equipmentSearch(){
          this.$fetch("/api/device/deviceTypeEnumList").then(response=>{
            //console.log('equipmentSearch:'+response);
            if (response) {
              this.equipmentList = response.data.deviceTypeEnum;
              //console.log(this.equipmentList);
            }
          })
        },
        formBuildSearch(unitId){
          this.$fetch("/api/building/selectNode",{
            unitId:unitId
          }).then(response=>{
            //console.log('formBuildSearch:'+JSON.stringify(response));
            if (response) {
              this.form.buildList = response.data.list;
              //console.log(this.form.buildList);
            }
          })
        },
        formFloorSearch(buildIngId){
          this.$fetch("/api/building/selectNode",{
            buildIngId:buildIngId
          }).then(response=>{
            //console.log('formFloorSearch:'+response);
            if (response) {
              this.form.floorList = response.data.list;
              //console.log(this.form.floorList);
            }
          })
        },
        formRoomSearch(floorId){
          this.$fetch("/api/building/selectNode",{
            floorId:floorId
          }).then(response=>{
            //console.log('formRoomSearch:'+response);
            if (response) {
              this.form.roomList = response.data.list;
              //console.log(this.form.roomList);
            }
          })
        },
        addDevice(pChoice,event){
        
          // alert(getTopLeftRate().leftRate + '============>' + getTopLeftRate().topRate);
          vControl(pChoice,event);
          // console.log(window.leftRate)
          let xRate = window.leftRate;
          let yRate = window.topRate;
          this.form.Rate = [xRate,yRate];
          $('#alarmDiv').remove();
          $('#floorImg').append('<div id="alarmDiv"></div>');

          setPoint(this.iconByType[this.form.equipmentId],'alarmDiv');
        }
      },
      computed:{
        ...mapState([
          'buildPoint',
          'iconByType'
        ]),
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
              //console.log(this.form.unitName);
            }
          })
        },
        buildingId(curVal,oldVal){
          this.form.buildingId = curVal;
          console.log(this.form.buildingId);
          this.findPageBuildIngFloor();
          this.form.point = '' ;
          this.form.Rate = '' ;
          if(this.form.buildingId == '0' && this.form.buildingId == 0){
            $('.map').show();
            $('.floorMap').hide();
          }else{
            $('.map').hide();
            $('.floorMap').show();
            // $("#imgPic").on("load",function(){
            //   var winwidth = $('.floorMap').width;
            //   var winheight =$('.floorMap').height;
            //   var fjwidth = $('#imgPic').width();
            //   var fjheight = $('#imgPic').height();
            //   if(fjwidth>winwidth || fjheight>winheight){
            //     var ratewid = fjwidth/winwidth;
            //     var ratehei = fjheight/winheight;
            //     if(ratewid>ratehei){
            //       $("#imgPic").width(winwidth);
            //       $("#imgPic").height(winheight/ratewid);
            //     }else{
            //       $("#imgPic").height(winheight);
            //       $("#imgPic").width(winwidth/ratehei);
            //     }
            //   }
            // });
          }
          this.form.floorId = '';
          this.form.roomId = '';
          this.form.floorNumber = '';
          this.form.roomNumber = '';
          this.formFloorSearch(this.form.buildingId);
          this.form.buildList.forEach((item,index)=>{
            if(item.id == this.form.buildingId){
              this.form.buildingName = item.name ;
              //console.log(this.form.buildingName);
            }else if(this.form.buildingId == '0' && this.form.buildingId == 0){
              this.form.buildingName = '室外';
            }
          })
         
        },
        floorId(curVal,oldVal){
          this.form.floorId = curVal;
          this.floor_btn(this.form.floorId);
          if(this.form.floorId !== 0){
            this.formRoomSearch(this.form.floorId);
          }
          this.form.floorList.forEach((item,index)=>{
            if(item.id == this.form.floorId){
              this.form.floorNumber = item.floorName ;
              //console.log(this.form.floorNumber);
            }
          })
        },
        roomId(curVal,oldVal){
          this.form.roomId = curVal ;
          this.form.roomList.forEach((item,index)=>{
            if(item.id == this.form.roomId){
              this.form.roomNumber = item.roomNumber ;
              //console.log(this.form.roomNumber);
            }
          })
        },
        equipmentId(curVal,oldVal){
          this.form.equipmentId = curVal ;
          this.$store.commit('DeviceList',this.form.equipmentId);
          this.equipmentList.forEach((item,index)=>{
            if(item.id == this.form.equipmentId){
              this.form.deviceTypeName = item.name ;
              //console.log(this.form.deviceTypeName);
            }
          })
        },
        buildPoint(){
          this.form.point = this.buildPoint;
        }
      },
      mounted(){
        this.equipmentSearch();
        this.unitSearch();
        $("#right").hide();
      }
    }
</script>

<style lang="scss" scoped>
</style>
