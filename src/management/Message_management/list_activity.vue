<template>
  <div id="add-new">
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="icon iconfont icon-fasong-xian- size-16"></i>
          <h2>发布活动通知</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Message_management/activity"><span class="btn-back"><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
        </div>
      </div>
      <section class="border-top-solid-333 margin-left15 margin-right15"></section>
      <div class="main_content">
        <!--
          class类not-null为必填标识,如需请加在<el-form-item>
          class类hint-error为错误提示
         -->
        <el-form class="row" ref="form" :label-position="labelPosition" :model="form">
          <el-form-item label="消息类型" class="not-null">
            <el-select name="" v-model="form.property" placeholder="选择类型" class="col-sm-4">
              <el-option label="公告" value="公告"></el-option>
              <el-option label="活动" value="活动"></el-option>
            </el-select>
          </el-form-item> 
          <el-form-item label="所属单位" class="not-null">
            <el-select v-model="form.unitId" placeholder="选择单位" class="select col-sm-4">
              <!-- <el-option label="全部单位" value=""></el-option> -->
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="主题" class="not-null">
            <span class="hint-error">消息主题重复</span>
            <el-input v-model="form.name" class="col-sm-8"></el-input>
          </el-form-item>
          <el-form-item label="活动时间" class="not-null">
            <div class="block col-sm-12">
            <el-date-picker 
              v-model="value5"
              type="datetimerange"
              :picker-options="pickerOptions2"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          </el-form-item>
          <div class="col-sm-12">
            <div class="row">                
                <el-form-item label="重要性" class="not-null col-sm-4">
                  <el-select v-model="form.roleId" placeholder="请选择" class="select">
                    <el-option label="重要" value=""></el-option>
                    <el-option v-for="item in roleList" :label="item.rname" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="预计人数" class="not-null col-sm-4">
                  <el-select v-model="form.roleId" placeholder="请选择" class="select">
                    <el-option label="100" value=""></el-option>
                    <el-option v-for="item in roleList" :label="item.rname" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="危险源" class="not-null col-sm-4">
                  <el-select v-model="form.unitId" placeholder="请选择" class="select">
                    <el-option label="是" value=""></el-option>
                    <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="明火" class="not-null col-sm-4">
                  <el-select v-model="form.roleId" placeholder="请选择" class="select">
                    <el-option label="是" value=""></el-option>
                    <el-option v-for="item in roleList" :label="item.rname" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="禁烟" class="not-null col-sm-4">
                  <el-select v-model="form.roleId" placeholder="请选择" class="select">
                    <el-option label="是" value=""></el-option>
                    <el-option v-for="item in roleList" :label="item.rname" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="场地空旷" class="not-null col-sm-4">
                  <el-select v-model="form.roleId" placeholder="请选择" class="select">
                    <el-option label="是" value=""></el-option>
                    <el-option v-for="item in roleList" :label="item.rname" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
            </div>
          </div>          
          <el-form-item label="内容" class="col-sm-12">
            <el-input
              type="textarea"
              :rows="6"
              placeholder="请输入内容"
              v-model="form.cont">
            </el-input>
          </el-form-item>                 
        </el-form>
      </div>
      <div class="main_footer">
        <a class="btn-ok" data-toggle="modal" data-target="#mymodal"><i class="el-icon-circle-check-outline"></i> 提交</a>
        <router-link to="/Message_management/notice" class="btn-back">返回</router-link>
      </div>
      <!-- 确认Modal -->
      <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel2">提示</h4>
              <h5 class="modal-p">该操作会立即生效并发送通知</h5>
            </div>
            <div class="modal-body text-center container-padding40">
                  <h3 class="font-blue size-14">确认立刻发送该公告吗?</h3>
                  <p class="font-white size-16">显示消息主题</p>
            </div>
            <div class="modal-footer">
              <el-button type="danger" @click="btn" icon="icon iconfont icon-fasong-xian-" class="primary" data-dismiss="modal">发送</el-button>
              <el-button class="back" data-dismiss="modal">取消</el-button>
            </div>
          </div>
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
          isShow:false,
          fileVerification:'',//图片验证
          // 时间区间
          pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value5: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
        }
      },
      methods:{
        file(){
          var x = document.getElementById("file");
          if (!x || !x.value) return;
          var patn = /\.jpg$|\.jpeg$|\.png$/i;
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

              this.$router.push({path:'/Message_management/all'});
            }
          });
        },
        back(){
          this.$router.push({path:'/Message_management/all'});
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
