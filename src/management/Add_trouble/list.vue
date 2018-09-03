<template>
  <div id="add-new" class="add-map">
    <!-- 表单 -->
    <aside class="em-tab">
        <el-tabs>
          <!-- 添加警报 -->
          <!-- 添加隐患 -->
          <el-tab-pane>
            <span slot="label"><i class="icon iconfont icon-yinhuan-xian-"></i>添加隐患</span>
            <!-- 表单 -->
            <div class="main_content">
              <!--
                class类not-null为必填标识,如需请加在<el-form-item>
                class类hint-error为错误提示
               -->
              <el-form class="row" ref="form" status-icon :rules="rules" :label-position="labelPosition" :model="form">
                <el-form-item label="隐患名称" prop="name" class="not-null">
                  <!-- <span class="hint-error">设备名称有误或重复</span> -->
                  <el-input v-model="form.name" class="col-sm-8"></el-input>
                </el-form-item>
                <el-form-item label="隐患类别" class="col-sm-12">
                  <el-radio-group v-model="form.type">
                    <el-radio v-model="radio" label="0">损坏</el-radio>
                    <el-radio v-model="radio" label="1">缺失</el-radio>
                    <el-radio v-model="radio" label="2">人为因素</el-radio>
                    <el-radio v-model="radio" label="3">非人为因素</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="隐患类别" class="col-sm-12">
                  <el-radio-group v-model="form.levels">
                    <el-radio v-model="radio" label="1">低</el-radio>
                    <el-radio v-model="radio" label="2">中</el-radio>
                    <el-radio v-model="radio" label="3">高</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="所属单位" prop="unitId" class="not-null">
                  <el-select v-model="form.unitId" placeholder="请选择" class="select selectUnit col-sm-4">
                    <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="位置" prop="buildingId" class="not-null">
                  <el-select v-model="form.buildingId" placeholder="选择建筑"  class="start col-sm-4">
                    <el-option label="室外" value="0"></el-option>
                    <el-option v-for="item in form.buildList" :label="item.name"  :value="item.id"> </el-option>
                  </el-select>
                  <el-select v-model="form.floorId" placeholder="选择楼层" class="start col-sm-4">
                    <el-option v-for="item in form.floorList" :label="item.floorName+'层'" :value="item.id"></el-option>
                  </el-select>
                  <el-select v-model="form.roomId" placeholder="选择房间" class="start col-sm-4">
                    <el-option v-for="item in form.roomList" :label="item.roomNumber+'房间'" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-if="this.form.buildingId==0"  label="地图坐标" prop="point">
                  <el-input placeholder="经度,纬度" v-model="form.point" class="col-sm-8"></el-input>
                  <el-tooltip class="item icon-help font-blue pull-right" aria-hidden="false" content="右侧地图添加位置" placement="top">
                      <i class="el-icon-question size-16"></i>
                    </el-tooltip>
                </el-form-item>
                <el-form-item v-if="this.form.buildingId!=0" label="平面图坐标" prop="Rate">
                  <el-input placeholder="X,Y" v-model="form.Rate" class="col-sm-8"></el-input>                  
                  <el-tooltip class="item icon-help font-blue pull-right" content="右侧地图添加位置" placement="top">
                    <i class="el-icon-question size-16"></i>
                  </el-tooltip>
                </el-form-item>
                <el-form-item label="图片和视频" :label-width="formLabelWidth" class="col-sm-12">
                  <el-upload 
                          list-type="picture-card" 
                          id="file"
                          :name="file"
                          :http-request="uploadTroubleFile"
                          :file-list="playUrls"
                          :multiple="true"
                          :auto-upload="true"
                          :on-success="uploadSuccess"
                          :on-preview="handlePictureCardPreview" 
                          :on-remove="handleRemove">
                          <i class="el-icon-upload"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible"><img width="100%" :src="dialogImageUrl" alt></el-dialog>
                </el-form-item>
                <el-form-item label="描述" prop="cont" class="col-sm-12">
                  <el-input type="textarea"  :rows="3"  placeholder="请输入内容" v-model="form.cont">
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
            <div class="main_footer">
              <a class="btn-ok" @click="addTroubleBtn('form')"><i class="el-icon-circle-check-outline"></i> 保存并提交</a>
              <a class="btn-back" @click="back">返回</a>
              <el-tooltip class="item icon-help font-red pull-right" aria-hidden="false" content="提交后不可修改" placement="top">
                    <i class="el-icon-warning size-14"></i>
                  </el-tooltip>
            </div>
          </el-tab-pane>
        </el-tabs>     
    </aside>
    <!-- 地图 -->
    <aside>      
      <div class="maps map">
          <managementMap-vue></managementMap-vue>
      </div>
      <div class="floorMap maps" style="display:none;position:relative;left:0;top:0;overflow:hidden;">
        <ul class="list-unstyled floor-item" style="top: 120px">
            <li v-for="(item,index) in table_list" @click="floor_btn(item.id)">{{ item.floorName }}</li>
        </ul> 
        <div id="floorImg" style="width: 100%;height: 100%;position:relative;left:0;top:0;">
          <img id="imgPic" :src="this.svgUrl" class="img-responsive" style="position:relative;" @click="addDevice('GETMOUSEPOSINPIC',$event)">
        </div>
      </div>
    </aside>
  </div>
</template>
<script>

import panzoom from 'panzoom';
import{ mapState } from "vuex";
import managementMapVue from '../managementMap';
import { isName,isvalidName,isLng } from '../../assets/js/validate';
import { getTopLeftRate } from '../../assets/js/imgPoint';
import { vControl,setPoint } from '../../assets/js/pointDevice';
    export default {
      data() {
        var Name=(rule, value,callback)=>{
            if (!value){
              callback(new Error('请输入上报人姓名'))
            }else  if (!isName(value)){
              callback(new Error('请输入正确的上报人姓名'))
            }else {
              callback()
            }
        }
        var validName=(rule, value,callback)=>{
            if (!value){
              callback(new Error('请输入危险品名称'))
            }else  if (!isvalidName(value)){
              callback(new Error('请输入正确的危险品名称'))
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
          labelPosition: 'top',
          index:1,
          form:{
            name:'',
            type:null,
            levels:null,
            unitId:null,
            unitName:'',
            buildingId:'',
            buildingName:'',
            floorId:'',
            floorNumber:'',
            roomId:'',
            roomNumber:'',
            roomList:[],
            floorList:[],
            buildList:[],
            point:'',
            Rate:'',
            cont:'',
          },
          optionList:[],//全部单位列表
          //上传图片相关
          files:[],
          imgUrls:[],
          mapkeys:[],    
          mapdata:Object,  
          dialogImageUrl: '',
          dialogVisible: false,
          count:0,
          rules: {
            name:[
              { required: true, trigger: 'blur', validator: validName }
            ],
            unitId:[
              { required: true, message: '请选择单位', trigger: 'change' }
            ],
            buildingId: [
              { required: true, message: '请选择设备位置', trigger: 'change' }
            ],
            nickName:[
              { required: true, trigger: 'blur', validator: Name }
            ],
            createTime:[
              { required: true, trigger: 'change', message: '请选择上报时间' }
            ],
            cont:[
              { required: true, trigger: 'blur', message: '请填写内容' }
            ],
            point:[
              { required: true, trigger: 'blur', validator: Lng }
            ],
            Rate:[
              { required: true, trigger: 'blur', message: '请填写平面图坐标' }
            ]
          },
          svgUrl:'',
          table_list:[]
        }
      },
      components:{
        'managementMap-vue': managementMapVue,
      },
      methods:{
        uploadTroubleFile: function (param){
            var that=this;
            var fileObj = param.file;
            var FileController = "/api/upload/uploadImg";
            var form = new FormData();
            form.append("file", fileObj);
            form.append("type",2);
            var xhr = new XMLHttpRequest();
            xhr.open("post", FileController, true);
            xhr.onload = (()=>{
                var data = JSON.parse(xhr.response);
                var status = data.status;
                if(status == 1){
                    var listUrl = data.data.src;
                    this.files.push(listUrl);     
                    this.imgUrls.push(fileObj);
                    if(this.mapdata[fileObj.uid] == null){
                      this.mapkeys.push(fileObj.uid);     
                    }
                    this.mapdata[fileObj.uid] = this.imgUrls.length-1;
                }else{
                    //上传失败，删除预览图片
                    this.handleRemove(fileObj);
                }
            });
            xhr.send(form);
        },
        handleFileEnlarge(file){//放大图片
        },
        handleRemove(file, fileList) { //删除预览图片
          var index = this.mapdata[file.uid];  
          this.imgUrls.splice(index,1);
          this.files.splice(index,1);
        },
        handlePictureCardPreview(file) { //预览图片墙
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        uploadSuccess(response, file, fileList){ //上传成功
          if(this.count==fileList.length){
            this.count=0;
            this.$refs.upload.uploadFiles=[];
          }
          this.$nextTick(()=>{
            if(this.count===0){
              this.loading=false;
            }
          })
        },
        addTroubleBtn(formName){
          this.$refs[formName].validate((valid) => {
            var files = this.files.join("=");
            if (valid) {
              var that = this ;
              this.$fetch("/api/trouble/userAddPCTrouble",{
                      'type':this.form.type,
                      'levels':this.form.levels,
                      'dangerName':this.form.name,
                      'unitId':this.form.unitId,
                      'unitName':this.form.unitName,
                      'buildingId':this.form.buildingId,
                      'buildingName':this.form.buildingName,
                      'floorId':this.form.floorId,
                      'floorNumber':this.form.floorNumber,
                      'roomId':this.form.roomId,
                      'roomNumber':this.form.roomNumber,
                      'pointX':this.form.point[0] == undefined ? 0 : this.form.point[0],
                      'pointY':this.form.point[1] == undefined ? 0 : this.form.point[1],
                      'xRate':this.form.Rate[0] == undefined ? 0 : this.form.Rate[0] ,
                      'yRate':this.form.Rate[1] == undefined ? 0 : this.form.Rate[1],
                      'nickName':this.form.nickName,
                      'createTime':this.form.createTime,
                      'cont':this.form.cont,
                      'files':files,
                    }   
                  ).then(response => {
                    if(response.status==1) {
                      that.$router.push({path:'/Add_trouble/all'});
                    }else{
                       console.log("添加隐患：失败!!!");
                    }
                });
           } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        back(){
          this.$router.push({path:'/Add_trouble/all'});
          $('#right').show();
        },
        floor_btn(id){
          this.table_list.forEach((item)=>{
            if(item.id == id){
              this.svgUrl = item.svgUrl ;
              this.form.floorId = item.floor ;
              this.form.floorNumber = item.floorName ;
            }
          })
          var area = document.getElementById('floorImg');
          panzoom((area),{
            maxZoom:1,
            minZoom:1
          });
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
        unitSearch(){
          this.$fetch(
            "/api/unit/queryUnit"
          )
            .then(response => {
              if (response) {
                this.optionList = response.data.unitList;
                $(' .el-select-dropdown__item').mouseover(function(){
                  $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
                });
              }
            })
            .then(err => {
              // //console.log(err);
            });
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
          let zoom = $('#floorImg').css('transform').split(',')[3];
          let moveX = $('#floorImg').css('transform').split(',')[4];
          let moveY= $('#floorImg').css('transform').split(',')[5];
          moveY = moveY.substr(0,moveY.length -1);
          // alert(getTopLeftRate().leftRate + '============>' + getTopLeftRate().topRate);
          vControl(pChoice,event);
          // console.log(window.leftRate)
          let xRate = window.leftRate;
          let yRate = window.topRate;
          this.form.Rate = [xRate,yRate];
          $('#alarmDiv').remove();
          $('#floorImg').append('<div id="alarmDiv"></div>');

          setPoint('icon-weixianpin-xian-','alarmDiv');
        }
      },
      computed:{
        ...mapState([
          'buildPoint'
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
          this.findPageBuildIngFloor();
          this.form.floorId = '';
          this.form.roomId = '';
          this.form.floorNumber = '';
          this.form.roomNumber = '';
          this.formFloorSearch(this.form.buildingId);
          if(this.form.buildingId == '0' && this.form.buildingId == 0){
            $('.map').show();
            $('.floorMap').hide();
          }else{
            $('.map').hide();
            $('.floorMap').show();
            $("#imgPic").on("load",function(){
              var winwidth = window.screen.width;
              var winheight = window.screen.height;
              var fjwidth = $('#imgPic').width();
              var fjheight = $('#imgPic').height();
              var newwidth=0;
              var newheight=0;
              if(fjwidth>winwidth || fjheight>winheight){
                var ratewid = fjwidth/winwidth;
                var ratehei = fjheight/winheight;
                if(ratewid>ratehei){
                  $("#imgPic").width(winwidth);
                  $("#imgPic").height(winheight/ratewid);
                }else{
                  $("#imgPic").height(winheight);
                  $("#imgPic").width(winwidth/ratehei);
                }
              }
            });
          }
          this.form.buildList.forEach((item,index)=>{
            if(item.id == this.form.buildingId){
              this.form.buildingName = item.name ;
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
              this.floor_btn(this.form.floorId);
            }
          })
        },
        roomId(curVal,oldVal){
          this.form.roomId = curVal ;
          this.form.roomList.forEach((item,index)=>{
            if(item.id == this.form.roomId){
              this.form.roomNumber = item.roomNumber ;
            }
          })
        },
        buildPoint(){
          this.form.point = this.buildPoint;
        }
      },
      mounted(){
        this.unitSearch();
        $("#right").hide();
      }
    }
</script>
<style lang="scss" scoped>
</style>
