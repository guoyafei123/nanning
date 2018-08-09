<template>
  <div style="height:100%;">
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-th-large font-gray-666 float-left"></i>
          <h2 class="float-left font-white size-16">人员管理</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/List_of_people/list"><button class="btn_add"><i class="fa fa-th-large font-gray-666 float-left"></i>新增</button></router-link>
        </div>
      </div>
      <div class="main_content">
        <el-form ref="form" :label-position="labelPosition" :model="form">
          <el-form-item label="姓名">
            <el-input v-model="form.nickName"></el-input>
          </el-form-item>
          <el-form-item label="账号">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <div style="position:relative; width: 80px;height: 80px;overflow:hidden;float:left;">
              <input id="file" name="file" type="file" @change="file" style="width:80px;height:80px;opacity: 0;filter: alpha(opacity=0);position: absolute;right:0;top:0;"/>
              <div style="width:80px;height:80px;background:#222;border:1px solid #222;">
                <span style="display:block;width:50px;height:6px;background:#999;position:absolute;top:50%;left:50%;margin-left:-25px;margin-top:-3px;"></span>
                <span style="display:block;width:6px;height:50px;background:#999;position:absolute;top:50%;left:50%;margin-left:-3px;margin-top:-25px;"></span>
              </div>
            </div>
            <img v-show="isShow" src="" id="up_img" style="width:80px;height:80px;"/>
          </el-form-item>
          <el-form-item label="职位">
            <el-input v-model="form.position"></el-input>
          </el-form-item>
          <el-form-item label="所属单位">
            <el-select v-model="form.unitId" placeholder="选择单位" class="select">
              <el-option label="全部单位" value=""></el-option>
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.cellPhone"></el-input>
          </el-form-item>
          <el-form-item label="角色">
            <el-select v-model="form.roleId" placeholder="选择角色" class="select">
              <el-option label="全部角色" value=""></el-option>
              <el-option v-for="item in roleList" :label="item.rname" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <div style="clear: both;margin-top:50px;"></div>
          <el-form-item style="margin-bottom: 20px;">
            <el-button type="primary"  icon="el-icon-search" class="primary" @click="btn">保存并提交</el-button>
            <el-button class="back" @click="back">返回</el-button>
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
            nickName:'',
            username:'',
            position:'',
            unitId:'',
            cellPhone:'',
            roleId:''
          },
          optionList:[],//单位列表
          roleList:[],//角色列表
          isShow:false
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
        btn(){
          var file = "file";
          var that = this;
          $.ajaxFileUpload({
              url: '/api/user/addOrUpdateUser', //用于文件上传的服务器端请求地址
              /* secureuri : false, */ //一般设置为false
              fileElementId: file,  //文件上传控件的id属性  <input type="file" id="file" name="file" /> 注意，这里一定要有name值
              data : {
                'nickName':this.form.nickName,
                'username':this.form.username,
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
                that.tableList()
              }
          });
          this.$router.push({path:'/List_of_people/all'});
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
