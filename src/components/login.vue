<template>
  <div class="row login">
    <div class="col-sm-8 login-left">
      <div>
        <img src="../assets/images/logotext.png">
        <p class="font-gray-ccc size-12 margin-top40">北京数雨如歌智能科技有限公司，成功研发了世界领先的智慧型消防防控预警系统、VR全景消防预警系统、消防综治全景监控系统和VR模拟消防培训逃生系统四大系统，并在消防行业成功打造了众多经典案例并得到高度认可。 此VR防控预警方案可以普遍应用于公安、消防、安监生产、石油石化等重点单位、重点部位，适用范围极广。</p>
      </div>
      <img class="loginbac" src="../assets/images/loginbc.png">
    </div>
    <div class="col-sm-4 login-right">
      <div class="loginbox">
        <P class="font-white size-18">数雨如歌智慧消防大数据监控平台</P>
        <p class="font-white size-18">政府版 <span class="size-10">beta3.0</span></p>
        <p class="font-white size-50">登 录</p>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :label-position="labelPosition">
          <el-form-item label="手机号" prop="tel">
            <el-input type="Input" v-model="ruleForm.tel" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="vercode1">
            <el-input type="Input" v-model="ruleForm.vercode" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <!-- <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button> -->
            <span class="loginbtn" type="primary" @click="submitForm('ruleForm')">登录</span>
          </el-form-item>
        </el-form>
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
        } else {
          const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
      var validateVercode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
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
      return {
        labelPosition:'top',
        ruleForm: {
          tel: '',
          vercode: '',
        },
        rules: {
          tel: [
            { validator: validateTel, trigger: 'blur' }
          ],
          vercode:[
            { validator:validateVercode,trigger:'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    mounted() {
        this.$store.commit('route_path',this.$route.path);
    }
  }
</script>

<style scoped>

</style>
