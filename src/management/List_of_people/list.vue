<template>
  <div id="add-new">
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-plus"></i>
          <h2>新增人员</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/List_of_people/all"><span class="btn-back"><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
        </div>
      </div>
      <section class="border-top-solid-333 margin-left15 margin-right15"></section>
      <div class="main_content">
        <!--
          class类not-null为必填标识,如需请加在<el-form-item>
          class类hint-error为错误提示
         -->
        <el-form class="row" :rules="rules" ref="form" :label-position="labelPosition" :model="form">
          <el-form-item label="姓名" class="not-null">
            <span class="hint-error">单位名称有误或重复</span>
            <el-input v-model="form.nickName" class="col-sm-4"></el-input>
          </el-form-item>          
          <el-form-item label="账号/手机号" prop="cellPhone" class="not-null col-sm-4">
            <el-input v-model.number="form.cellPhone" class=""></el-input>
          </el-form-item>
          <div class="col-sm-12">
            <div class="row">
                <el-form-item label="所属单位" class="not-null col-sm-4">
                  <el-select v-model="form.unitId" placeholder="选择单位" class="select">
                    <!-- <el-option label="全部单位" value=""></el-option> -->
                    <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="角色" class="not-null col-sm-4">
                  <el-select v-model="form.roleId" placeholder="选择角色" class="select">
                    <el-option label="全部角色" value=""></el-option>
                    <el-option v-for="item in roleList" :label="item.rname" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
            </div>
          </div>
          <el-form-item label="职位" class="col-sm-4">
              <el-input v-model="form.position"></el-input>
          </el-form-item>
          <el-form-item label="头像" class="not-null col-sm-12">
            <div class="head-photo">
              <input id="file" name="file" type="file" @change="file"/>
              <div>
                <i class="el-icon-plus"></i>
              </div>
            </div>
            <img v-show="isShow" src="" id="up_img" class="head-pic"/>
          </el-form-item> 
        </el-form>
      </div>
      <div class="main_footer">
        <a class="btn-ok" @click="btn('form')"><i class="el-icon-circle-check-outline"></i> 保存并提交</a>
        <a class="btn-back" @click="back">返回</a>
      </div>
    </aside>
  </div>
</template>

<script>
import {isvalidPhone} from '../../assets/js/validate';
    export default {
      data() {
        var validPhone=(rule, value,callback)=>{
            if (!value){
                callback(new Error('请输入电话号码'))
            }else  if (!isvalidPhone(value)){
              callback(new Error('请输入正确的11位手机号码'))
            }else {
                callback()
            }
        }
        return {
          labelPosition: 'top',
          form: {
            nickName:'',
            username:'',
            position:'',
            unitId:'',
            cellPhone:'',
            roleId:''
          },
          optionList:[],//单位列表
          roleList:[],//角色列表
          isShow:false,
          rules: {
            cellPhone: [
              { required: true, trigger: 'blur', validator: validPhone }//这里需要用到全局变量
            ]
          }
        }
      },
      methods:{
        file(){
          this.isShow = true ;
          $("#up_img").attr("src",this.getObjectURL(document.getElementById('file')));
        },
        getObjectURL(node) {
            var imgURL = "";
            try {
                var file = null;
                if (node.files && node.files[0]) {
                    file = node.files[0];
                } else if (node.files && node.files.item(0)) {
                    file = node.files.item(0);
                }
                //Firefox 因安全性问题已无法直接通过input[file].value 获取完整的文件路径
                try {
                    //Firefox7.0
                    imgURL = file.getAsDataURL();
                    //alert("//Firefox7.0"+imgRUL);
                } catch (e) {
                    //Firefox8.0以上
                    imgURL = window.URL.createObjectURL(file);
                    //alert("//Firefox8.0以上"+imgRUL);
                }
            } catch (e) {      //这里不知道怎么处理了，如果是遨游的话会报这个异常
                //支持html5的浏览器,比如高版本的firefox、chrome、ie10
                if (node.files && node.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        imgURL = e.target.result;
                    };
                    reader.readAsDataURL(node.files[0]);
                }
            }
            return imgURL;
        },
        btn(formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
                var file = "file";
                var that = this;
                $.ajaxFileUpload({
                    url: '/api/user/addOrUpdateUser', //用于文件上传的服务器端请求地址
                    /* secureuri : false, */ //一般设置为false
                    fileElementId: file,  //文件上传控件的id属性  <input type="file" id="file" name="file" /> 注意，这里一定要有name值
                    data : {
                      'nickName':this.form.nickName,
                      'username':this.form.cellPhone,
                      'position':this.form.position,
                      'unitId':this.form.unitId,
                      'cellPhone':this.form.cellPhone,
                      'roleId':this.form.roleId
                    },
                    type: 'POST',
                    dataType: "plain",
                    success: function (data, status) { //服务器成功响应处理函数 //服务器成功响应处理函数
                    
                
                    },
                    error: function (e) { //服务器响应失败处理函数
                      $.messager.alert('警告', "系统错误", "warning");
                    },
                    complete: function (e) {//只要完成即执行，最后执行
                      // console.log(e) 
                      that.$router.push({path:'/List_of_people/all'});
                      
                    }
                });

            } else {
              console.log('error submit!!');
              return false;
            }
          });
          
          
        },
        back(){
          this.$router.push({path:'/List_of_people/all'});
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
        roleSearch(){
          this.$fetch(
            "/api/user/queryRoleListByUser"
          )
          .then(response => {
            if (response) {
              console.log(response);
              this.roleList = response.data.roleList;
              console.log(this.roleList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
          .then(err => {
            // console.log(err);
          });
        },
      },
      mounted(){
        this.unitSearch();
        this.roleSearch();
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