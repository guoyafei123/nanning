<template>
  <div id="add-new">
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="icon iconfont icon-fasong-xian- size-20"></i>
          <h2>发布系统公告</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Message_management/notice"><span class="btn-back"><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
        </div>
      </div>
      <section class="border-top-solid-333 margin-left15 margin-right15"></section>
      <div class="main_content">
        <!--
          class类not-null为必填标识,如需请加在<el-form-item>
          class类hint-error为错误提示
         -->
        <el-form class="row" ref="form" :rules="rules" :label-position="labelPosition" :model="form">
          <el-form-item label="所属单位" prop="unitId" class="not-null">
            <el-select v-model="form.unitId" placeholder="选择单位" class="select col-sm-8">
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="标题" prop="title" class="not-null">
            <el-input v-model="form.title" class="col-sm-8"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="cont" class="not-null col-sm-12">
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
        <a class="btn-ok" @click="btn_ok('form')"><i class="el-icon-circle-check-outline"></i> 提交</a>
        <router-link to="/Message_management/notice" class="btn-back">返回</router-link>
      </div>
      <!-- 确认Modal -->
      <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel2">提示</h4>
              <h5 class="modal-p">该操作会立即生效并发送公告</h5>
            </div>
            <div class="modal-body text-center container-padding40">
                  <h3 class="font-blue size-14">确认立刻发送该公告吗?</h3>
                  <p class="font-white size-16">{{ this.form.title }}</p>
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
import { isvalidName } from '../../assets/js/validate';
    export default {
      data() {
        var validName=(rule, value,callback)=>{
            if (!value){
              callback(new Error('请输入公告标题'))
            }else  if (!isvalidName(value)){
              callback(new Error('请输入正确的公告标题'))
            }else {
              callback()
            }
        }
        return {
          labelPosition: 'top',
          form: {
            unitId:'',
            unitName:'',
            title:'',
            cont:''
          },
          optionList:[],
          rules: {
            unitId:[
              { required: true, message: '请选择单位', trigger: 'change' }
            ],
            title:[
              { required: true, trigger: 'blur', validator: validName }
            ],
            cont:[
              { required: true, message: '请填写公告内容', trigger: 'blur' }
            ]
          }
        }
      },
      methods:{
        btn_ok(formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
              $('.btn-ok').attr('data-toggle','modal');
              $('.btn-ok').attr('data-target','#mymodal')
            } else {
              this.$message.error('请把信息填写完整！！');
              return false;
            }
          });
        },
        btn(){
          this.optionList.forEach((item,index)=>{
            if(item.id == this.form.unitId){
              this.form.unitName = item.name ;
            }
          });
          this.$fetch("/api/event/sendSystemMessage",{
            senderUnitId:this.form.unitId,
            senderUnitName:this.form.unitName,
            title:this.form.title,
            content:this.form.cont
          }).then(res=>{
            console.log(res);
            this.$router.push({path:'/Message_management/notice'});
            this.$message({
              message: '发布系统公告成功！！',
              type: 'success'
            });
          })
        },
        back(){
          this.$router.push({path:'/Message_management/notice'});
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
        }
      },
      mounted(){
       this.unitSearch();
      }
    }
</script>

<style scoped>
</style>
