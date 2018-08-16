<template>
  <div id="add-new">
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-plus"></i>
          <h2>添加预案</h2>
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
        <el-form class="row" ref="form" :label-position="labelPosition" :model="form">
          <el-form-item label="单位名称">
            <span class="hint-error">单位名称有误或重复</span>
            <el-input v-model="form.name" class="col-sm-4"></el-input>
          </el-form-item>
          <el-form-item label="单位性质">
            <el-select name="" v-model="form.property" placeholder="请选择结构" class="col-sm-4">
              <el-option label="事业单位" value="事业单位"></el-option>
              <el-option label="国家行政机关" value="国家行政机关"></el-option>
              <el-option label="政府" value="政府"></el-option>
              <el-option label="国有企业" value="国有企业"></el-option>
              <el-option label="国有控股企业" value="国有控股企业"></el-option>
              <el-option label="外资企业" value="外资企业"></el-option>
              <el-option label="合资企业" value="合资企业"></el-option>
              <el-option label="私营企业" value="私营企业"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="单位人数" class="col-sm-4">
            <el-input v-model="form.staffNum"></el-input>
          </el-form-item>
          <el-form-item label="法人代表" class="col-sm-4">
            <el-input v-model="form.corporation"></el-input>
          </el-form-item>
          <el-form-item label="部门电话" class="col-sm-4">
            <el-input v-model="form.telephone"></el-input>
          </el-form-item>
          <el-form-item label="单位地址">
            <el-input v-model="form.location" class="col-sm-8"></el-input>
          </el-form-item>
          <el-form-item label="消防负责人" class="col-sm-4">
            <el-input v-model="form.firemenName"></el-input>
          </el-form-item>
          <el-form-item label="消防负责人电话" class="col-sm-4">
            <el-input v-model="form.firemenTel"></el-input>
          </el-form-item> 
          <el-form-item label="单位图片" class="col-sm-12">
            <div style="position:relative; width: 80px;height: 80px;overflow:hidden;float:left;">
              <input id="file" name="file" type="file" @change="file" style="width:80px;height:80px;opacity: 0;filter: alpha(opacity=0);position: absolute;right:0;top:0;"/>
              <div class="bg-gray-222 text-center margin-top5">
                <i class="el-icon-plus size-60 font-gray-999" style="line-height: 80px"></i>
              </div>
            </div>
            <img v-show="isShow" src="" id="up_img" style="width:80px;height:80px;"/>
            <!-- <span style="width: 200px;height: 80px;text-align:center;line-height:80px;color:#fff;display:block;float:left;">{{ files }}</span> -->
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
          form: {
            name:'',
            property:'',
            staffNum:'',
            location:'',
            telephone:'',
            firemenName:'',
            firemenTel:'',          
            corporation:'',
            point:{
              pointX:'',
              pointY:''
            }
          },
          isShow:false
        }
      },
      methods:{
        file(){
          this.isShow = true ;
          $("#up_img").attr("src", this.getObjectURL($("#file")[0]));
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
        btn(){
          var file = "file";
          $.ajaxFileUpload({
            url: '/api/unit/addUnit', //用于文件上传的服务器端请求地址
            /* secureuri : false, */ //一般设置为false
            fileElementId: file,  //文件上传控件的id属性  <input type="file" id="file" name="file" /> 注意，这里一定要有name值
            data : {
              'name':this.form.name,
              'property':this.form.property,
              'staffNum':this.form.staffNum,
              'location':this.form.location,
              'telephone':this.form.telephone,
              'firemenName':this.form.firemenName,
              'firemenTel':this.form.firemenTel,
              'corporation':this.form.corporation,
              'pointX':this.form.point.pointX,
              'pointY':this.form.point.pointY
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

            }
          });
          this.$router.push({path:'/Reserve_plan/all'});
        },
        back(){
          this.$router.push({path:'/Reserve_plan/all'});
          $('#right').show();
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
      }
    }
</script>

<style scoped>
</style>
