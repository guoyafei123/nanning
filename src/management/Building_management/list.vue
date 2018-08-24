<template>
    <div id="add-new" class="add-map">
      <aside>
        <div class="main_header clearFix">
          <div class="main_title float-left clearFix">
            <i class="fa fa-plus"></i>
            <h2>新增建筑</h2>
          </div>
          <div class="main_nav float-right">
            <router-link to="/Building_management/all"><span class="btn-back"><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
          </div>
        </div>
        <section class="border-top-solid-333 margin-left15 margin-right15"></section>
        <div class="main_content">
          <!--
          class类not-null为必填标识,如需请加在<el-form-item>
          class类hint-error为错误提示
         -->
          <el-form class="row" ref="form" status-icon :rules="rules" :label-position="labelPosition" :model="form">
            <el-form-item label="建筑名称" prop="BuildName" class="not-null">
              <!-- <span class="hint-error">建筑名称有误或重复</span> -->
              <el-input v-model="form.BuildName" class="col-sm-8"></el-input>
            </el-form-item>
            <el-form-item label="所属单位" prop="unitId" class="not-null">
              <el-select v-model="form.unitId" placeholder="请选择" class="select col-sm-4">
                <!-- <el-option label="全部单位" value=""></el-option> -->
                <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="建筑结构" prop="structure" class="not-null col-sm-4">
              <el-select name="" v-model="form.structure" placeholder="请选择">
                <el-option label="砖混" value="砖混"></el-option>
                <el-option label="钢结构" value="钢结构"></el-option>
                <el-option label="木质结构" value="木质结构"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="建筑性质" prop="property" class="not-null col-sm-4">
              <el-select v-model="form.property" placeholder="请选择">
                <el-option label="居住" value="居住"></el-option>
                <el-option label="公共" value="公共"></el-option>
                <el-option label="工业" value="工业"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="建成年份" prop="timeYear" class="not-null col-sm-4">
              <div class="block">
                <el-date-picker
                  v-model="form.timeYear"
                  type="year"
                  placeholder="选择年份"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
            </el-form-item>
            <el-form-item label="占地面积 (㎡)" prop="area" class="not-null col-sm-4">
              <el-input v-model.number="form.area"></el-input>
            </el-form-item>
            <el-form-item label="高度 (m)" prop="height" class="not-null col-sm-4">
              <el-input v-model.number="form.height"></el-input>
            </el-form-item>
            <el-form-item label="总楼层" prop="floor" class="not-null col-sm-4">
              <el-input v-model.number="form.floor"></el-input>
            </el-form-item>
            <el-form-item label="建筑地址" prop="address" class="not-null">
              <el-input v-model="form.address" class="col-sm-8"></el-input>
            </el-form-item>
            <el-form-item label="经纬度" class="not-null">
              <el-input v-model="form.point.pointX" class="col-sm-4"></el-input>
              <el-input v-model="form.point.pointY" class="col-sm-4"></el-input>
            </el-form-item>          
            <el-form-item label="消防负责人" prop="name" class="not-null col-sm-4">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="消防负责人电话" prop="phone" class="not-null col-sm-4">
              <el-input v-model.number="form.phone"></el-input>
            </el-form-item>          
          </el-form>        
        </div>
        <div class="main_footer">
          <a class="btn-ok" @click="btn('form')"><i class="el-icon-circle-check-outline"></i> 保存并提交</a>
          <a class="btn-back" @click="back">返回</a>
        </div>
      </aside>
      <!-- 地图 -->
      <aside>      
          <div class="maps">
              <managementMap-vue></managementMap-vue>
          </div>
      </aside>
    </div>
</template>

<script>
import{ mapState } from "vuex"
import managementMapVue from '../managementMap';
import { isvalidPhone,isName,isvalidName } from '../../assets/js/validate';
    export default {
      data() {
        var validPhone=(rule, value,callback)=>{
            if (!value){
              callback(new Error('请输入手机号码'))
            }else  if (!isvalidPhone(value)){
              callback(new Error('请输入正确的11位手机号码'))
            }else {
              callback()
            }
        }
        var Name=(rule, value,callback)=>{
            if (!value){
              callback(new Error('请输入您的姓名'))
            }else  if (!isName(value)){
              callback(new Error('请输入正确的姓名'))
            }else {
              callback()
            }
        }
        var validName=(rule, value,callback)=>{
            if (!value){
              callback(new Error('请输入建筑名称'))
            }else  if (!isvalidName(value)){
              callback(new Error('请输入正确的建筑名称'))
            }else {
              callback()
            }
        }
        return {
          value5:'2018',
          labelPosition: 'top',
          form: {
            unitId:'',
            UnitName:'',
            BuildName:'',
            height:'',
            floor:'',
            structure:'',
            property:'',          
            timeYear:'',
            name:'',
            phone:'',
            point:{
              pointX:'',
              pointY:''
            }
          },
          unit:null,//选择单位
          optionList:[],//全部单位列表
          rules: {
            BuildName:[
              { required: true, trigger: 'blur', validator: validName }
            ],
            unitId:[
              { required: true, message: '请选择单位', trigger: 'change' }
            ],
            structure:[
              { required: true, message: '请选择建筑结构', trigger: 'change' }
            ],
            property: [
              { required: true, message: '请选择建筑性质', trigger: 'change' }
            ],
            timeYear:[
              { required: true, message: '请选择时间', trigger: 'change' }
            ],
            area:[
              { required: true, trigger: 'blur', message: '请输入占地面积' },
              { type: 'number', message: '必须为数字值'}
            ],
            height:[
              { required: true, trigger: 'blur', message: '请输入高度' },
              { type: 'number', message: '必须为数字值'}
            ],
            floor:[
              { required: true, trigger: 'blur', message: '请输入总楼层' },
              { type: 'number', message: '必须为数字值'}
            ],
            address:[
              { required: true, trigger: 'blur', message: '请填写建筑地址' }
            ],
            name:[
              { required: true, trigger: 'blur', validator: Name }
            ],
            phone:[
              { required: true, trigger: 'blur', validator: validPhone }
            ]
          }
        }
      },
      components:{
        'managementMap-vue': managementMapVue,
      },
      methods:{
        btn(){
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.optionList.forEach((item,index)=>{
                if(item.id == this.form.unitId){
                  console.log(item.name);
                  this.form.UnitName = item.name;
                }
              })
              this.$fetch("/api/building/addBuilding",{
                'name':this.form.BuildName,
                'unitId':this.form.unitId,
                'unitName':this.form.UnitName,
                'location':this.form.address,
                'area':this.form.area,
                'heightOfBuilding':this.form.height,
                'floors':this.form.floor,
                'structure':this.form.structure,
                'buildYear':this.form.timeYear,
                'property':this.form.property,
                'linkname':this.form.name,
                'phone':this.form.phone,
                'pointX':this.form.point.pointX,
                'pointY':this.form.point.pointY,
                headers: {'Content-Type': 'application/json'}
              }
              ).then(response=>{
                if(response){
                  console.log('新增建筑成功...'+ JSON.stringify(response));
                  this.$router.push({path:'/Building_management/all'});
                }
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        back(){
          this.$router.push({path:'/Building_management/all'});
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
      },
      watch:{
        buildPoint(){
          this.form.point.pointX = this.buildPoint[0];
          this.form.point.pointY = this.buildPoint[1];
          console.log(this.form.point.pointX)
        }
      },
      computed:mapState([
        'buildPoint'
      ])
    }
</script>

<style lang="scss" scoped>
</style>
