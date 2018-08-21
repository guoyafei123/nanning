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
        <el-form class="row" ref="form" :label-position="labelPosition" :model="form">
          <el-form-item label="危险品名称" class="not-null">
            <span class="hint-error">设备名称有误或重复</span>
            <el-input v-model="form.name" class="col-sm-4"></el-input>
          </el-form-item>
          <el-form-item label="所属单位" class="not-null">
            <el-select v-model="form.unitId" placeholder="选择单位" class="select selectUnit col-sm-4">
              <el-option label="全部单位" value=""></el-option>
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="位置" class="not-null">
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
            <el-input v-model="form.point.pointX" class="col-sm-4"></el-input>
            <el-input v-model="form.point.pointY" class="col-sm-4"></el-input>
          </el-form-item>

          <el-form-item label="上报人" class="not-null col-sm-4">
            <el-input v-model="form.nickName"></el-input>
          </el-form-item>

          <el-form-item label="上报时间" class="not-null col-sm-8">
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
          </el-form-item>
          <div class="col-sm-12">
            <div class="row">
              <el-form-item label="图片和视频">
                <div>
                  <div class="mainmenuone cf">
                      <ul class="cf">
                        <li><input id="file" type="file" name="img"/></li>
                        <!-- <li><input id="file2" type="file" name="img"/></li> -->
                      </ul>
                  </div>
                </div>
                <!-- <img :src="'http://img.nanninglq.51play.com/xf/api/unit_img/'+ this.form.id +'.jpg'" :id="'up_img'+ this.form.id" style="width:80px;height:80px;"/>  -->
                <!-- <span @click="add11" style="float:right;margin-top:10px;margin-right:30px;width:30px;height:30px;border:none;outline:none;background:#bad616;color:#000;font-size:25px;text-align:center;line-height:30px;">+</span>  -->
              </el-form-item>
            </div>
          </div>          
          <el-form-item label="描述" class="col-sm-12">
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
        <a class="btn-ok" @click="btn"><i class="el-icon-circle-check-outline"></i> 保存并提交</a>
        <a class="btn-back" @click="back">返回</a>
      </div>
    </aside>
    <!-- 地图 -->
    <aside>      
        <div class="maps">
          <div class="text-center padding-top120">
            <h1 class="size-80 font-white">地图</h1>
          </div>
        </div>
    </aside>
  </div>
</template>

<script>
    export default {
      data() {
        return {
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
            point:{
              pointX:'',
              pointY:'',
              xRate:'',
              yRate:''
            },
            nickName:'',
            createTime:'',
            cont:''
          },
          optionList:[],//全部单位列表
          files:["file"]
        }
      },
      methods:{
        add11(){
          this.index++;
          console.log(this.index)
          this.files.push('file'+this.index);
          
          $(".mainmenuone ul").append("<li style='margin-bottom:10px;'><input type='file' name='file"+this.index+"'/></li>");
          console.log(this.files)
        },
        btn(){
          console.log(111)
          var files =this.files;
          var that = this ;
          // console.log(files)
          $.ajaxFileUpload({
            url: '/api/trouble/insertTrouble',
            // secureuri: false,
            fileElementId:files,
            data : {
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
              'pointX':this.form.point.pointX,
              'pointY':this.form.point.pointY,
              'nickName':this.form.nickName,
              'createTime':this.form.createTime,
              'cont':this.form.cont
            },
            type: 'POST',
            dataType: "json",
            success: function (data, status) { //服务器成功响应处理函数 //服务器成功响应处理函数
            
        
            },
            error: function (e) { //服务器响应失败处理函数
              $.messager.alert('警告', "系统错误", "warning");
            },
            complete: function (e) {//只要完成即执行，最后执行
              // console.log(e) 
                // $("#file").replaceWith('<input id="file" name="file" type="file"/>');  
                
              // });
              that.$router.push({path:'/Dangerous_goods_management/all'});
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
        this.unitSearch();
      }
    }
</script>

<style lang="scss" scoped>
</style>
