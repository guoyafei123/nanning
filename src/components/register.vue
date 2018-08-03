<template>
  <div class="row login register">
    <div class="col-sm-12 login-right">
      <div class="loginbox registerbox">
        <P class="font-white size-18">欢迎注册数雨如歌智慧消防系统</P>
        
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm registerfrom" :label-position="labelPosition">
          <el-form-item label="单 位" prop="unitId">
            <el-select v-model="ruleForm.unitId" style="width:100%">
              <el-option v-for="item in unitlist" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="职 位" prop="position">
            <el-input type="Input" v-model="ruleForm.position" auto-complete="off" ></el-input>
          </el-form-item>
          <el-form-item label="姓 名" prop="nickName">
            <el-input type="Input" v-model="ruleForm.nickName" auto-complete="off" ></el-input>
          </el-form-item>
          <el-form-item label="手 机 号 码" prop="username">
            <el-input type="Input" v-model="ruleForm.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="验 证 码" prop="code" class="vercode">
            <el-input type="Input" v-model="ruleForm.code" auto-complete="off" ></el-input>
            <span class="getvercode" :class="varphoneb==false || vercodeb==false ? 'getvercodenone' :''"  @click="getvercode()">{{vercodetext}}</span>
          </el-form-item>

        </el-form>
        <span class="loginbtn registerbtn" type="primary" @click="submitForm('ruleForm')">注册</span>
        <router-link to="/login"><p class="tologin" :class="tologinstyle==true ? 'tologinstyle' :''">{{tologin}}</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      var validateTel = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else if(value.length==11){
          this.phone_parameter.cellPhone=this.ruleForm.username;
          this.$fetch(
            "/cas/reg/check/phone",
            this.phone_parameter
          )
          .then(response => {
            if (response) {
              console.log(response);
              if(response.field=='11'){
                this.varphoneb=true;
                callback();
              }else{
                this.varphoneb=false;
                return callback(new Error('该手机号已注册,等前往登录'));
              }
            }
          })
          .then(err => {
            console.log(err);
          });
        }else {
          const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            this.varphoneb=true;
            callback();
          } else {
            this.varphoneb=false;
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
      var validateVercode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else if(value.length==6){
          this.phone_parameter.cellPhone=this.ruleForm.username;
          this.$fetch(
            "/cas/reg/check/code",
            this.ruleForm
          )
          .then(response => {
            if (response) {
              console.log(response);
              if(response.field=='3'){
                return callback(new Error('验证码错误,请重新输入'));
              }else if(response.field=='2'){
                return callback(new Error('验证码已过期,请重新获取'));
              }else if(response.field=='ok'){
                callback();
              }
            }
          })
          .then(err => {
            console.log(err);
          });
        }else {
          const reg = /^\d{6}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的6位数验证码'));
          }
        }
      };
      var validatename=(rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'));
        }else{
          callback();
        }
      };
      var validateposition=(rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入职位'));
        }else{
          callback();
        }
      };
      // var validateunit=(rule, value, callback) => {
      //   console.log(value);
      //   if (value === '') {
      //     callback(new Error('请选择单位'));
      //   }else{
      //     callback();
      //   }
      // };
      return {
        labelPosition:'left',
        vercodetext:'获取验证码',
        vercodeb:true,
        varphoneb:false,
        code_error:true,
        tologin:'已有账号?点我登录',
        tologinstyle:false,
        ruleForm: {
          unitId: '',
          position: '',
          nickName:'',
          username:'',
          code:'',
        },
        unitlist: Object,
        phone_parameter:{
            cellPhone:''
        },
        rules: {
          username: [
            { required: true,validator: validateTel, trigger: 'blur' }
          ],
          code:[
            { required: true,validator:validateVercode,trigger:'blur'}
          ],
          nickName:[
            { required: true,validator:validatename,trigger:'blur'}
          ],
          position:[
            { required: true,validator:validateposition,trigger:'blur'}
          ],
          unitId:[
            { required: true, message: '请选择单位', trigger: 'change' }
          ]
        },
        code_parameter:{
          username:'',
          code:''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.register();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      getvercode(){
        if(this.vercodeb==true && this.varphoneb==true){
            this.$fetch(
              "/cas/reg/code",
              this.ruleForm
            )
            .then(response => {
              if (response) {
                let num=60;
                let intver=setInterval(()=>{
                  num--;
                  this.vercodetext=num+'秒后重新获取';
                  this.vercodeb=false;
                  if(num==0){
                    clearInterval(intver);
                    this.vercodetext='获取验证码';
                    this.vercodeb=true;
                  }
                },1000)
              }
            })
            .then(err => {
              console.log(err);
            });
          
        }
      },
      register(){
        this.$fetch(
            "/cas/reg/register",
            this.ruleForm
          )
        .then(response => {
          if (response) {
            console.log(response);
            if(response.status==1){
              var num=4;
              let interval=setInterval(()=>{
                num--;
                this.tologinstyle=true;
                this.tologin='注册成功!'+num+'秒后跳转登录...'
                this.$store.commit('loginusername',this.ruleForm.username);
                if(num==0){
                  clearInterval(interval)
                  this.$router.push("/login");
                }
              },1000)
              
            }else{
              this.tologinstyle=false;
              this.tologin='注册失败!请联系管理员'
            }
          }
        })
        .then(err => {
          console.log(err);
        });
      },
      getunit(){
        // unit/getUnitAndInspectionCount
        this.$fetch(
            "/api/unit/getUnitAndInspectionCount"
          )
        .then(response => {
          if (response) {
            this.unitlist=response.data.unitList;

          }
        })
        .then(err => {
          console.log(err);
        });
      }

    },

    mounted() {
        this.$store.commit('route_path',this.$route.path);
        this.getunit();
    }
  }
</script>

<style scoped>

</style>
