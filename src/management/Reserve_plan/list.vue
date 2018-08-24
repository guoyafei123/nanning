<template>
  <div id="add-new">
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-plus"></i>
          <h2>新增预案</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Reserve_plan/all"><span class="btn-back"><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
        </div>
      </div>
      <section class="border-top-solid-333 margin-left15 margin-right15"></section>
      <div class="main_content">
        <!--
          class类not-null为必填标识,如需请加在<el-form-item>
          class类hint-error为错误提示
         -->
        <el-form class="row" ref="form" status-icon :rules="rules" :label-position="labelPosition" :model="form">
          <el-form-item label="预案名称" prop="name" class="not-null">
            <el-input v-model="form.name" class="col-sm-8"></el-input>
          </el-form-item>
          <el-form-item label="单位" prop="unitId" class="not-null">
            <el-select v-model="form.unitId" placeholder="请选择单位"  class="col-sm-8">
              <el-option v-for="item in form.optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="建筑">
            <el-select v-model="form.building" placeholder="请选择建筑" class="col-sm-6">
              <el-option
                v-for="item in form.buildList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="预案类型" prop="planId" class="not-null">
            <el-select v-model="form.planId" placeholder="请选择预案类型" class="col-sm-8">
              <el-option v-for="item in form.planList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="预案附件" class="not-null col-sm-12">
            <div class="head-photo">
              <input id="file" name="file" type="file" @change="file"/>
              <div class="bg-gray-222 text-center">
                <i class="el-icon-plus"></i>
              </div>
            </div>
            <img v-show="isShow" src="" id="up_img" class="head-pic" />
            <span class="hint-error" v-show="fileVerification">{{ fileVerification }}</span>
            <!-- <span style="width: 200px;height: 80px;text-align:center;line-height:80px;color:#fff;display:block;float:left;">{{ files }}</span> -->
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
    import { isvalidName } from '../../assets/js/validate';
    export default {
      data() {
        var validName=(rule, value,callback)=>{
            if (!value){
              callback(new Error('请输入预案名称'))
            }else  if (!isvalidName(value)){
              callback(new Error('请输入正确的预案名称'))
            }else {
              callback()
            }
        }
        return {
          labelPosition: 'top',
          form: {
            name:'',
            unitId:'',
            unitName:'',
            building:'',
            buildingName:'',
            planId:'',
            optionList:[],
            buildList:[],
            planList:[
              { id:1, name:'火灾预案' },
              { id:2, name:'管理规定' },
              { id:3, name:'疏散预案' }
            ]
          },
          isShow:false,
          fileVerification:'',//图片验证
          rules:{
            name:[
              { require:true , trigger: 'blur', validator: validName }
            ],
            unitId:[
              { required: true, message: '请选择单位', trigger: 'change' }
            ],
            planId:[
              { required: true, message: '请选择预案类型', trigger: 'change' }
            ]
          }
        }
      },
      methods:{
        file(){
          var x = document.getElementById("file");
          if (!x || !x.value) return;
          // var patn = /\.jpg$|\.jpeg$|\.png$|\.pdf$|\.csv$|\.xls$|\.xlsx$|\.doc$|.txt/i;
          var patn = /\.jpg$|\.jpeg$|\.png$|\.pdf$/i;
          if (!patn.test(x.value)) {
            this.fileVerification="您选择的似乎不是图像文件!!";
            x.value = "";
            this.isShow = false ;
            $("#up_img").attr("src",'');
            return;
          }
          this.isShow = true ;
          $("#up_img").attr("src", this.getObjectURL($("#file")[0]));
          this.fileVerification="";
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
              this.form.optionList.forEach(element => {
                if(this.form.unitId == element.id){
                  this.form.unitName = element.name ;
                }
              });
              this.form.buildList.forEach(element=>{
                if(this.form.building == element.id){
                  this.form.buildingName = element.name ;
                }
              })
              var file = "file";
              var that = this ;
              $.ajaxFileUpload({
                url: '/api/plan/insertPlan', //用于文件上传的服务器端请求地址
                /* secureuri : false, */ //一般设置为false
                fileElementId: file,  //文件上传控件的id属性  <input type="file" id="file" name="file" /> 注意，这里一定要有name值
                data : {
                  'name':this.form.name,
                  'unitId':this.form.unitId,
                  'unitName':this.form.unitName,
                  'buildingId':this.form.building,
                  'buildingName':this.form.buildingName,
                  'type':this.form.planId
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
                  that.$router.push({path:'/Reserve_plan/all'});
                  that.$message({
                    message: '恭喜你，添加预案成功',
                    type: 'success'
                  });
                }
              });
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        back(){
          this.$router.push({path:'/Reserve_plan/all'});
          $('#right').show();
        },
        unitSearch(){
          this.$fetch(
            "/api/unit/queryUnit"
          )
          .then(response => {
            if (response) {
              console.log(response);
              this.form.optionList = response.data.unitList;
              console.log(this.form.optionList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
          .then(err => {
            // console.log(err);
          });
        },
        buildSearch(unitId){
          this.$fetch("/api/building/selectNode",{
            unitId:unitId
          }).then(response=>{
            console.log('buildSearch:'+JSON.stringify(response));
            if (response) {
              this.form.buildList = response.data.list;
              console.log(this.form.buildList);
            }
          })
        }
      },
      mounted(){
        this.unitSearch();
      },
      computed:{
        unitId(){
          return this.form.unitId;
        }
      },
      watch:{
        unitId(curVal,oldVal){
          this.form.unitId = curVal;
          this.form.building = '';
          this.buildSearch(this.form.unitId);
        }
      }
    }
</script>

<style scoped>
</style>
