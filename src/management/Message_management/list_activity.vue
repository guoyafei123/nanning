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
        <el-form class="row" ref="form" :rules="rules" :label-position="labelPosition" :model="form">
          <el-form-item label="所属单位" prop="unitId" class="not-null">
            <el-select v-model="form.unitId" placeholder="选择单位" class="select col-sm-8">
              <!-- <el-option label="全部单位" value=""></el-option> -->
              <el-option v-for="item in form.optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="建筑" prop="buildingId" class="not-null">
            <el-select v-model="form.buildingId" placeholder="请选择建筑" class="col-sm-8">
              <el-option
                v-for="item in form.buildList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动名称" prop="name" class="not-null">
            <el-input v-model="form.name" class="col-sm-8"></el-input>
          </el-form-item>
          <el-form-item label="举办时间" prop="startTime" class="not-null col-sm-8">
            <el-date-picker
              v-model="form.startTime"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <div class="col-sm-12">
            <div class="row">                
                <el-form-item label="活动重要性" prop="levels" class="not-null col-sm-6">
                  <el-select v-model="form.levels" placeholder="请选择活动重要性" class="select">
                    <el-option v-for="item in form.levelsList" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="参加人数" prop="activeUserNumber" class="not-null col-sm-6">
                  <el-input v-model="form.activeUserNumber" placeholder="请输入参加人数（示例：1~3）"></el-input>
                </el-form-item>
                <el-form-item label="活动是否禁烟" prop="smoking" class="not-null col-sm-6">
                  <el-select v-model="form.smoking" placeholder="请选择" class="select">
                    <el-option v-for="item in form.smokingList" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="是否有明火" prop="fire" class="not-null col-sm-6">
                  <el-select v-model="form.fire" placeholder="请选择" class="select">
                    <el-option v-for="item in form.fireList" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="引入危险源" prop="dangerSource" class="not-null col-sm-6">
                  <el-select v-model="form.dangerSource" placeholder="请选择" class="select">
                    <el-option v-for="item in form.dangerSourceList" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
            </div>
          </div>          
          <el-form-item label="活动内容" prop="content" class="not-null col-sm-12">
            <el-input
              type="textarea"
              :rows="6"
              placeholder="请输入内容"
              v-model="form.content">
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
              <h5 class="modal-p">该操作会立即生效并发送通知</h5>
            </div>
            <div class="modal-body text-center container-padding40">
                  <h3 class="font-blue size-14">确认立刻发送该活动通知吗?</h3>
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
              callback(new Error('请输入活动名称'))
            }else  if (!isvalidName(value)){
              callback(new Error('请输入正确的活动名称'))
            }else {
              callback()
            }
        }
        return {
          labelPosition: 'top',
          form: {
            unitId:'',
            unitName:'',
            optionList:[],
            name:'',
            levels:'',
            levelsList:[
              { id:1,name:'囯事重要活动' },
              { id:2,name:'民事重要活动' },
              { id:3,name:'民事一般活动' }
            ],
            content:'',
            startTime:'',
            buildingId:'',
            buildingName:'',
            buildList:[],
            activeUserNumber:'',
            smoking:'',
            smokingList:[
              { id:1,name:'是' },
              { id:2,name:'否' }
            ],
            fire:'',
            fireList:[
              { id:1,name:'有' },
              { id:2,name:'无' }
            ],
            dangerSource:'',
            dangerSourceList:[
              { id:1,name:'多' },
              { id:2,name:'中' },
              { id:3,name:'少'}
            ]
          },
          rules: {
            unitId:[
              { required: true, message: '请选择单位', trigger: 'change' }
            ],
            buildingId:[
              { required: true, message: '请选择建筑', trigger: 'change' }
            ],
            name:[
              { required: true, trigger: 'blur', validator: validName }
            ],
            startTime:[
              { type: 'date', required: true, message: '选择活动时间', trigger: 'change' }
            ],
            levels:[
              { required: true, message: '请选择活动重要性', trigger: 'change' }
            ],
            activeUserNumber:[
              { required: true, message: '请输入参加人数', trigger: 'blur' }
            ],
            smoking:[
              { required: true, message: '请选择该活动是否禁烟', trigger: 'change' }
            ],
            fire:[
              { required: true, message: '请确认是否有明火', trigger: 'change' }
            ],
            dangerSource:[
              { required: true, message: '请确认引入危险源', trigger: 'change' }
            ],
            content:[
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
          this.form.optionList.forEach((item,index)=>{
            if(item.id == this.form.unitId){
              this.form.unitName = item.name ;
            }
          });
          this.form.buildList.forEach((item,index)=>{
            if(item.id == this.form.buildingId){
              this.form.buildingName = item.name ;
            }
          })
          this.$fetch("/api/event/sendEventMessage",{
            name:this.form.name,
            levels:this.form.levels,
            activeUserNumber:this.form.activeUserNumber,
            startTime:this.form.startTime,
            smoking:this.form.smoking,
            fire:this.form.fire,
            dangerSource:this.form.dangerSource,
            content:this.form.content,
            unitId:this.form.unitId,
            unitName:this.form.unitName,
            buildingId:this.form.buildingId,
            buildingName:this.form.buildingName
          }).then(res=>{
            //console.log(res);
            this.$router.push({path:'/Message_management/activity'});
            this.$message({
              message: '发布系统公告成功！！',
              type: 'success'
            });
          })
        },
        back(){
          this.$router.push({path:'/Message_management/activity'});
          $('#right').show();
        },
        unitSearch(){
          this.$fetch(
            "/api/unit/queryUnit"
          )
          .then(response => {
            if (response) {
              //console.log(response);
              this.form.optionList = response.data.unitList;
              //console.log(this.form.optionList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
          .then(err => {
            // //console.log(err);
          });
        },
         buildSearch(unitId){
          this.$fetch("/api/building/selectNode",{
            unitId:unitId
          }).then(response=>{
            //console.log('buildSearch:'+JSON.stringify(response));
            if (response) {
              this.form.buildList = response.data.list;
              //console.log(this.form.buildList);
            }
          })
        }
      },
      mounted(){
       this.unitSearch();
      }
    }
</script>

<style scoped>
</style>
