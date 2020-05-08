<template>
	<div>
		<input type="text" placeholder="请输入您的邮箱" v-model="email"><br>
		<input type="password" placeholder="请输入您的密码" v-model="pwd"><br>
		<button type="button" @click="login" :plain="true">登录</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				email: "",
				pwd: ""
			}
		},
		methods: {
			login() {
				//提交用户邮箱和密码进行登录
				if (!this.email) {
					this.$emit("mylogin", "账号不能为空")
				} else if (!this.pwd) {
					this.$emit("mylogin", "密码不能为空")
				} else {
					this.$axios.post("http://localhost:81/login", {
							email: this.email,
							pwd: this.pwd
						})
						.then((result) => {
							window.localStorage.setItem("email", this.email);
							if (result.data.code == 2000) {
								//跳转到首页
								this.$router.push({
									path: "/"
								})
								this.$message({
									message: '登录成功',
									type: 'success',
									center: true,
									duration: 1500
								});
							} else {
								this.$emit("mylogin", result.data.info);
							}
						})
				}
			}
		},
		created() {
			//获取用户在服务器缓存的邮箱和密码
			this.$axios.post("http://localhost:81/getUserEmailpwd")
				.then((result) => {
					if (result.data.code == 2000) {
						this.email = result.data.email;
						this.pwd = result.data.pwd;
					}
				})
		}
	}
</script>

<style scoped="scoped">
	input::-webkit-input-placeholder {
		color: #D2D2D2;
	}

	input {
		display: block;
		height: 27px;
		width: 200px;
		text-align: center;
		margin: 0 auto;
		border: 0px;
		border-bottom: 1px solid #D2D2D2;
		background-color: #F7F7F7;
		padding: 2px 17px 0px 17px;
		font-size: 12px;
		color: #686767;
	}

	input:focus {
		outline: none;
	}

	button {
		display: block;
		width: 234px;
		border-width: 0;
		border-radius: 20px;
		height: 31px;
		background: linear-gradient(to right, #a6c1ee, #fbc2eb);
		color: white;
		font-size: 16px;
		margin: 10px auto 0;
		outline: none;
	}
</style>
