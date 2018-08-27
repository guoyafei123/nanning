<template>
	<div class="row login" id="login">
		<div class="col-sm-8 login-left">
			<div>
				<img src="../../assets/images/logotext.png">
				<!-- <p class="font-gray-ccc size-12 margin-top40">智慧消防大数据监控平台，是世界领先的智慧型消防防控预警系统、VR全景消防预警系统、消防综治全景监控系统和VR模拟消防培训逃生系统四大系统，并在消防行业成功打造了众多经典案例并得到高度认可。 此VR防控预警方案可以普遍应用于公安、消防、安监生产、石油石化等重点单位、重点部位，适用范围极广。</p> -->
			</div>
			<img class="loginbac" src="../../assets/images/loginbc.png">
		</div>
		<div class="col-sm-4 login-right">
			<div class="loginbox">
				<P class="font-white size-18">
					<!-- 数雨如歌 -->智慧消防大数据监控平台 政府版 <span class="size-10">beta3.0</span></P>
				<!-- <p class="font-white size-18"></p> -->
				<p class="font-white size-50 margin-bottom40">登 录</p>
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :label-position="labelPosition">
					<el-form-item label="手机号" prop="username">
						<el-input class="autofocus" type="Input" v-model="ruleForm.username" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="验证码" prop="code" class="vercode">
						<el-input type="Input" v-model="ruleForm.code" auto-complete="off"></el-input>
						<span class="getvercode" :class="varphoneb==false || vercodeb==false ? 'getvercodenone' :''" @click="getvercode()">{{vercodetext}}</span>
					</el-form-item>
					<el-form-item>
						<!-- <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button> -->
						<span class="loginbtn" type="primary" @click="submitForm('ruleForm')">登录</span>
					</el-form-item>
				</el-form>
				<router-link to="/register"><span class="toregister font-white">您还没有账号?点我注册</span></router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex"
	export default {
		directives: {
			focus: {
				// 指令的定义
				inserted: function(el) {
					el.focus()
				}
			}
		},
		data() {
			var validateTel = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入手机号'));
				} else if(value.length == 11) {
					this.phone_parameter.cellPhone = this.ruleForm.username;
					this.$fetch(
							"/cas/reg/check/phone",
							this.phone_parameter
						)
						.then(response => {
							if(response) {
								if(response.errorCode == '20023') {
									this.varphoneb = false;
									return callback(new Error('该手机号未注册,等前往注册'));
								} else if(response.errorCode == '20024') {
									this.varphoneb = false;
									return callback(new Error('此账号已被删除,如有问题请联系管理员!'));
								} else if(response.errorCode == '20025') {
									this.varphoneb = false;
									return callback(new Error('此账号审核未通过,如有问题请联系管理员!'));
								} else if(response.errorCode == '20026') {
									this.varphoneb = false;
									return callback(new Error('此账号审核中,请稍后再试!'));
								} else if(response.errorCode == '20027') {
									this.varphoneb = false;
									return callback(new Error('此账号被禁用'));
								} else if(response.field == 'ok') {
									this.varphoneb = true;
									callback();
								}
							}
						})
						.then(err => {
							//console.log(err);
						});
				} else {
					const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
					//console.log(reg.test(value));
					if(reg.test(value)) {
						this.varphoneb = true;
						callback();
					} else {
						this.varphoneb = false;
						return callback(new Error('请输入正确的手机号'));
					}
				}
			};
			var validateVercode = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入验证码'));
				} else if(value.length == 6) {
					this.phone_parameter.cellPhone = this.ruleForm.username;
					this.$fetch(
							"/cas/check/code",
							this.ruleForm
						)
						.then(response => {
							if(response) {
								//console.log(response);
								if(response.field == '20034') {
									return callback(new Error('验证码错误,请重新输入'));
								} else if(response.field == '20044') {
									return callback(new Error('验证码已过期,请重新获取'));
								} else if(response.field == 'ok') {
									callback();
								}
							}
						})
						.then(err => {
							//console.log(err);
						});
				} else {
					const reg = /^\d{6}$/
					//console.log(reg.test(value));
					if(reg.test(value)) {
						callback();
					} else {
						return callback(new Error('请输入正确的6位数验证码'));
					}
				}
			};
			return {
				labelPosition: 'top',
				vercodetext: '获取验证码',
				vercodeb: true,
				varphoneb: false,
				autofocus: true,
				ruleForm: {
					username: '',
					code: '',
				},
				rules: {
					username: [{
						validator: validateTel,
						trigger: 'blur'
					}],
					code: [{
						validator: validateVercode,
						trigger: 'blur'
					}]
				},
				phone_parameter: {
					cellPhone: ''
				},

			};
		},
		computed: mapState([
			'loginusername',
		]),
		watch: {
			// 监听注册过来的手机号
			loginusername() {
				this.ruleForm.username = this.loginusername;
			},
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						// alert(this.ruleForm.username);
						this.login();
					} else {
						//console.log('error submit!!');
						return false;
					}
				});
			},
			getvercode() {
				if(this.vercodeb == true && this.varphoneb == true) {
					let num = 59;
					this.vercodeb = false;
					this.vercodetext = num + '秒后重新获取';
					let intver = setInterval(() => {
						num--;
						this.vercodetext = num + '秒后重新获取';

						if(num == 0) {
							clearInterval(intver);
							this.vercodetext = '获取验证码';
							this.vercodeb = true;
						}
					}, 1000)
					this.$fetch(
							"/cas/login/code",
							this.ruleForm
						)
						.then(response => {
							if(response) {

							}
						})
						.then(err => {
							//console.log(err);
						});

				}
			},
			login() {
				this.$fetch(
						"/cas/login/phone",
						this.ruleForm
					)
					.then(response => {
						if(response) {
							//console.log(response);
							if(response.status == 1) {
								this.$router.push("/index");
								localStorage.login = 1;
								localStorage.name = response.data.user.nickName;
								this.$store.commit('userinfo', response.data);
							} else {
								this.tologin = '登录失败!请联系管理员'
							}
						}
					})
					.then(err => {
						//console.log(err);
					});
			},
		},
		mounted() {
			// if(localStorage.login==1){
			//   this.$router.push("/index");
			// }else{
			//   this.$router.push("/login");
			// }
			// this.ruleForm.username=this.loginusername;
			this.$store.commit('route_path', "/login");
		}
	}
</script>

<style scoped>

</style>
