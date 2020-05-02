<template>
	<div class="register">
		<div class="registerbox">
			<p class="title">注册</p>
			<p class="login">已有账号？<span>直接登录</span></p>
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
				</el-form-item>
				<el-form-item>
					<el-button round @click="submitForm('ruleForm')">注册</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	//注册页面
	export default {
		name: "Register",
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
				ruleForm: {
					name: '',
					email: '',
					pwd: '',
					checkpwd: '',
					verif: ''
				},
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
				}
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						console.log(this.ruleForm)
					} else {
						return false;
					}
				});
			},
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
		/* margin-bottom: 5px; */
		margin-bottom: 70px;
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

	button {
		width: 100%;
		height: 32px;
		border: 0;
		border-radius: 20px;
		background: linear-gradient(to right, #a6c1ee, #fbc2eb);
		color: #fff;
		font-size: 16px;
	}

	.el-button:hover span {
		color: red !important;
	}
</style>
