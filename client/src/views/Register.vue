<template>
	<div class="register">
		<div class="registerbox">
			<p class="title">注册</p>
			<p class="login">已有账号？<span @click="login">直接登录</span></p>
			<Headpic @myclick="getheadpic"></Headpic>
			<div id="errinfo" v-html="errinfo"></div>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm" size="small">
				<el-form-item prop="name">
					<el-input v-model="ruleForm.name" placeholder="请输入您的用户名"></el-input>
				</el-form-item>
				<el-form-item prop="email">
					<el-input v-model="ruleForm.email" placeholder="请输入您的邮箱"></el-input>
				</el-form-item>
				<el-form-item prop="pwd">
					<el-input type="password" v-model="ruleForm.pwd" autocomplete="off" placeholder="请输入您的密码" show-password></el-input>
				</el-form-item>
				<el-form-item prop="checkpwd">
					<el-input type="password" v-model="ruleForm.checkpwd" autocomplete="off" placeholder="请再次输入您的密码" show-password></el-input>
				</el-form-item>
				<el-form-item prop="verif">
					<el-input v-model="ruleForm.verif" placeholder="请输入验证码"></el-input>
					<span v-html="verifdata" @click="restverif" id="verifbtn"></span>
				</el-form-item>
				<el-form-item>
					<el-button round @click="submitForm('ruleForm')" id="registerbtn" :plain="true">注册</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	//注册页面
	export default {
		name: "Register",
		components: {
			Headpic: () => import('./Register/Headpic.vue')
		},
		data() {
			//密码验证规则
			let validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('密码不能为空'));
				} else {
					if (this.ruleForm.checkpwd !== '') {
						this.$refs.ruleForm.validateField('checkpwd');
					}
					callback();
				}
			};
			//确认密码验证规则
			let validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('确认密码不能为空'));
				} else if (value !== this.ruleForm.pwd) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				errinfo: '',
				imageUrl: '',
				headpic: '',
				ruleForm: {
					name: '',
					email: '',
					pwd: '',
					checkpwd: '',
					verif: '',
				},
				verifdata: '',
				rules: {
					name: [{
							required: true,
							message: '用户名不能为空',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 8,
							message: '长度在 2 到 8 个字符',
							trigger: 'blur'
						}
					],
					email: [{
							required: true,
							message: '邮箱不能为空',
							trigger: 'blur'
						},
						{
							pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
							message: '邮箱格式错误',
							trigger: 'blur'
						}
					],
					pwd: {
						validator: validatePass,
						trigger: 'blur'
					},
					checkpwd: {
						validator: validatePass2,
						trigger: 'blur'
					},
					verif: {
						required: true,
						message: '验证码不能为空',
						trigger: 'blur'
					}
				},
			}
		},
		methods: {
			//直接登录
			login() {
				this.$router.push({
					path: "/login"
				})
			},
			//获取从子组件传过来的头像数据
			getheadpic(arg) {
				this.headpic = arg;
			},
			//刷新验证码
			restverif() {
				this.$axios("http://localhost:81/getVerif")
					.then((result) => {
						this.verifdata = result.data;
					})
			},
			//提交表单
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						if (!this.headpic) {
							this.errinfo = "请上传您的头像";
						} else {
							let formdata = new FormData();
							formdata.append("headpic", this.headpic);
							formdata.append("name", this.ruleForm.name);
							formdata.append("email", this.ruleForm.email);
							formdata.append("pwd", this.ruleForm.pwd);
							formdata.append("verif", this.ruleForm.verif);
							let config = {
								headers: {
									"Content-Type": "multipart/form-data"
								}
							}
							this.$axios.post("http://localhost:81/register", formdata, config)
								.then((result) => {
									if (result.data.code == 4001) { //验证码错误
										this.restverif();
										this.errinfo = result.data.info;
									} else if (result.data.code == 4002) { //邮箱已被注册
										this.errinfo = result.data.info;
									} else {
										//本地缓存用户邮箱
										window.localStorage.setItem("email", this.ruleForm.email);
										this.$message({
											message: '注册成功',
											type: 'success',
											duration: 1500
										});
										this.$router.push({ //注册成功
											path: "/login"
										})
									}
								})
						}
					} else {
						return false;
					}
				});
			},

		},
		created() {
			//首次加载自动获取验证码
			this.restverif()
		}
	}
</script>

<style scoped="scoped">
	.register {
		background: url("../assets/background.png");
		background-size: 100% 100%;
		width: 1536px;
		height: 722px;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
	}

	.registerbox {
		width: 320px;
		height: 430px;
		position: absolute;
		top: 150px;
		left: 850px;
	}

	.registerbox .title {
		color: #7F89C6;
		font-size: 35px;
		font-weight: bold;
		font-family: "kaiTi";
	}

	p,
	span {
		display: inline-block;
	}

	.login {
		float: right;
		margin-top: 9px;
		font-size: 13px;
	}

	.login span {
		color: #8C98CC;
		cursor: default;
	}

	#registerbtn {
		width: 100%;
		height: 32px;
		border: 0;
		border-radius: 20px;
		background: linear-gradient(to right, #a6c1ee, #fbc2eb);
		color: #fff;
		font-size: 16px;
	}

	#errinfo {
		color: #F56C6C;
		font-size: 12px;
		line-height: 1;
		margin: 4px 0;
		position: absolute;
		top: 122px;
	}

	.el-form-item:nth-of-type(5) .el-form-item__content>div {
		width: 200px;
	}

	#verifbtn {
		float: right;
		margin-right: 2px;
		height: 33px;
	}
</style>
