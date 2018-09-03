<template>
  <div id="add-new" class="add-map">
    <!-- 表单 -->
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-plus"></i>
          <h2>添加危险品</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Dangerous_goods_management/all"><span class="btn-back"><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
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
          <el-form-item label="危险品名称" prop="name" class="not-null">
            <!-- <span class="hint-error">设备名称有误或重复</span> -->
            <el-input v-model="form.name" class="col-sm-8"></el-input>
          </el-form-item>
          <el-form-item label="所属单位" prop="unitId" class="not-null">
            <el-select v-model="form.unitId" placeholder="请选择" class="select selectUnit col-sm-4">
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="位置" prop="buildingId" class="not-null">
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
              placeholder="选择楼层" class="start col-sm-4"  v-show="seeFloor">
              <el-option
                v-for="item in form.floorList"
                :label="item.floorName+'层'"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="form.roomId"
              placeholder="选择房间" class="start col-sm-4" v-show="seeRoom" >
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
            <el-input placeholder="X,Y" :disabled="true" v-model="form.Rate" class="col-sm-8"></el-input>
            <el-tooltip class="item icon-help font-blue pull-right" content="右侧地图添加位置" placement="top">
              <i class="el-icon-question size-16"></i>
            </el-tooltip>
          </el-form-item>

          <!-- <el-form-item label="上报人" prop="nickName" class="not-null col-sm-4">
            <el-input v-model="form.nickName"></el-input>
          </el-form-item>

          <el-form-item label="上报时间" prop="createTime" class="not-null col-sm-8">
            <div class="block">
              <el-date-picker
                v-model="form.createTime"
                type="datetime"
                placeholder="选择时间"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                clearable>
              </el-date-picker>
            </div>
          </el-form-item> -->
          <div class="col-sm-12">
            <div class="row">
              <el-form-item label="图片和视频" :label-width="formLabelWidth">
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
            </div>
          </div>          
          <el-form-item label="描述" prop="cont" class="col-sm-12">
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请输入内容"
              v-model="form.cont">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="main_footer">
        <a class="btn-ok" @click="btn('form')"><i class="el-icon-circle-check-outline"></i> 保存并提交</a>
        <a class="btn-back" @click="back">返回</a>
        <el-tooltip class="item icon-help font-red pull-right" content="提交后不可修改" placement="top">
              <i class="el-icon-warning size-14"></i>
            </el-tooltip>
      </div>
    </aside>
    <!-- 地图 -->
    <aside>      
      <div class="maps map">
          <managementMap-vue :pointD="this.form.point"></managementMap-vue>
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
          seeFloor: false,
          seeRoom :false ,
          labelPosition: 'top',
          index:1,
          form:{
            name:'',
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
            nickName:'',
            createTime:'',
            cont:''
          },
          optionList:[],//全部单位列表
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
            // nickName:[
            //   { required: true, trigger: 'blur', validator: Name }
            // ],
            // createTime:[
            //   { required: true, trigger: 'change', message: '请选择上报时间' }
            // ],
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
          table_list:[],
          //上传图片相关
          files:[],
          imgUrls:[],
          mapkeys:[],    
          mapdata:Object,  
          dialogImageUrl: '',
          dialogVisible: false,
          count:0,
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
          console.log(file)
        },
        handleRemove(file, fileList) { //删除预览图片
          console.log("删除图片===============》");
          var index = this.mapdata[file.uid];  
          this.imgUrls.splice(index,1);
          this.files.splice(index,1);
          console.log(this.imgUrls);
          console.log(this.files);
        },
        handlePictureCardPreview(file) { //预览图片墙
          console.log("预览图片墙===============》");
          console.log(file);
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        uploadSuccess(response, file, fileList){ //上传成功
          console.log("上传成功===============》");
          console.log(this.files);
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
        floor_btn(id){
          this.table_list.forEach((item)=>{
            if(item.id == id){
              this.svgUrl = item.svgUrl ;
              this.form.floorId = item.id ;
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
        add11(){
          this.index++;
          //console.log(this.index)
          this.files.push('file'+this.index);
          
          $(".mainmenuone ul").append("<li style='margin-bottom:10px;'><input type='file' name='file"+this.index+"'/></li>");
          //console.log(this.files)
        },
        btn(formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
                var files = this.files.join("=");
                var that = this ;
                var point = this.form.point;
                if(typeof(point) == 'string'){var pointList = point.split(",");}else{var pointList = this.form.point;}
                var Rate = this.form.Rate;
                if(typeof(Rate) == 'string'){ var RateList = Rate.split(",");}else{var RateList = this.form.Rate;}
                this.$fetch("/api/trouble/userAddPCTrouble",{
                  'type':5,
                  'levels':3,
                  'dangerName':this.form.name,
                  'unitId':this.form.unitId,
                  'unitName':this.form.unitName,
                  'buildingId':this.form.buildingId,
                  'buildingName':this.form.buildingName,
                  'floorId':this.form.floorId,
                  'floorNumber':this.form.floorNumber,
                  'roomId':this.form.roomId,
                  'roomNumber':this.form.roomNumber,
                  'pointX':pointList[0] == undefined ? 0 : pointList[0],
                  'pointY':pointList[1] == undefined ? 0 : pointList[1],
                  'xRate':RateList[0] == undefined ? 0 : RateList[0] ,
                  'yRate':RateList[1] == undefined ? 0 : RateList[1],
                  'nickName':this.form.nickName,
                  'createTime':this.form.createTime,
                  'cont':this.form.cont,
                  'files':files
                }).then(res=>{
                  that.$router.push({path:'/Dangerous_goods_management/all'});
                  this.$message({
                    dangerouslyUseHTMLString: true,
                    message: '<strong>'+ this.form.name +'添加成功</strong>',
                    center: true,
                    showClose: true,
                    iconClass:'el-icon-circle-check',
                    customClass:'edit-ok-notification'
                  });
                })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        back(){
          this.$router.push({path:'/Dangerous_goods_management/all'});
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
          console.log(zoom);
          console.log(moveX);
          console.log(moveY);
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
          if(curVal !== oldVal){
            this.seeFloor = false ;
            this.seeRoom = false ;
          }
          this.form.buildingId = '';
          this.form.buildingName = '';
          this.form.floorId = '';
          this.form.roomId = '';
          this.form.floorNumber = '';
          this.form.roomNumber = '';
        },
        buildingId(curVal,oldVal){
          this.form.buildingId = curVal;
          console.log(this.form.buildingId);
          this.findPageBuildIngFloor();
          this.form.floorId = '';
          this.form.roomId = '';
          this.form.floorNumber = '';
          this.form.roomNumber = '';
          this.form.point = '' ;
          this.form.Rate = '' ;
          this.formFloorSearch(this.form.buildingId);
          if(this.form.buildingId == '0' && this.form.buildingId == 0){
            this.seeFloor = false ;
            this.seeRoom = false ;
          }
          if(this.form.buildingId !== '' && this.form.buildingId !== 0){
            this.seeRoom = true ;
          }
          this.form.buildList.forEach((item,index)=>{
            if(item.id == this.form.buildingId){
              this.form.buildingName = item.name ;
              //console.log(this.form.buildingName);
            }
          })
        },
        floorId(curVal,oldVal){
          this.form.floorId = curVal;
          if(this.form.buildingId == '0' && this.form.buildingId == 0){
            $('.map').show();
            $('.floorMap').hide();
          }else{
            this.seeRoom = true ;
            $('.map').hide();
            $('.floorMap').show();
          }
          if(this.form.floorId !== 0){
            this.formRoomSearch(this.form.floorId);
          }
          this.floor_btn(this.form.floorId);
          this.form.floorList.forEach((item,index)=>{
            if(item.id == this.form.floorId){
              this.form.floorNumber = item.floorName ;
              console.log(this.form.floorNumber);
              
              // this.floor_btn(this.form.floorId);
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
