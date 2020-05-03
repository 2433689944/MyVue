<template>
	<div class="login">
		<div class="loginbox">
			<Logintitle :errinfo="errinfo"></LoginTitle>
			<Logininp @mylogin="login"></Logininp>
			<Loginbtn></Loginbtn>
		</div>
	</div>
</template>

<script>
	//登录页面
	export default {
		name: "Login",
		components: {
			Logintitle: () => import("./Login/Logintitle"),
			Logininp: () => import("./Login/Logininp"),
			Loginbtn: () => import("./Login/Loginbtn")
		},
		data() {
			return {
				errinfo: ""
			}
		},
		methods: {
			login(arg) {
				this.errinfo = arg;
			}
		}
	}
</script>

<style scoped="scoped">
	.login {
		background: url("../assets/background.png");
		background-size: 100% 100%;
		width: 1536px;
		height: 722px;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
	}

	.loginbox {
		width: 320px;
		height: 430px;
		position: absolute;
		top: 150px;
		left: 850px;
	}
</style>
