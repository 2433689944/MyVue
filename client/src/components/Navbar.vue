<template>
	<div class="box">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff"
		 active-text-color="#ffd04b">
			<el-menu-item index="1">
				<router-link to="/">首页</router-link>
			</el-menu-item>
			<el-menu-item index="2">
				<router-link to="/community">校园动态</router-link>
			</el-menu-item>
			<el-submenu index="3">
				<template slot="title">发布</template>
				<el-menu-item index="3-1" text-color="yellow">
					<router-link to="/grelease"><i class="el-icon-s-promotion"></i>发布商品</router-link>
				</el-menu-item>
				<el-menu-item index="3-2">
					<router-link to="/crelease"><i class="el-icon-plus"></i>发布动态</router-link>
				</el-menu-item>
			</el-submenu>
			<el-submenu index="4" v-if="flag">
				<template slot="title">
					<router-link to="/pcenter">个人中心</router-link>
				</template>
				<el-menu-item index="4-1" @click="loginout">
					<router-link to="/">退出登录</router-link>
				</el-menu-item>
			</el-submenu>
			<el-menu-item index="4" v-else>
				<router-link to="/login">请登录</router-link>
			</el-menu-item>
			<el-badge :is-dot="this.$store.state.unreadmsg.length!=0" class="badges">
				<el-avatar :src="this.$store.state.headpic"></el-avatar>
			</el-badge>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name: "Navbar",
		data() {
			return {
				activeIndex: '1',
				flag: '',
			}
		},
		methods: {
			//退出登录
			loginout() {
				this.flag = false;
				this.$axios("http://localhost:81/loginout"); //清除服务器session缓存
				window.localStorage.clear(); //清除本地缓存
				this.$store.commit('loginout'); //清除仓库在用户名和头像
			}
		},
		mounted() {
			let email = window.localStorage.getItem("email");
			if (email) {
				this.flag = true;
				this.$axios("http://localhost:81/getUserInfo")
					.then((result) => {
						//将用户名和头像存入仓库
						this.$store.commit('getuserInfo', result.data.info[0]);

					})
				this.$axios("http://localhost:81/getmymsg")
					.then((result) => {
						//将用户消息存入仓库
						this.$store.commit('updatamsg', result.data)
					})
			} else {
				this.flag = false;
			}
console.log(this.$store.state.unreadmsg.length)
		}
	}
</script>

<style>
	.box {
		width: 100%;
		background-color: #545c64;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}

	.box ul {
		width: 1180px;
		margin: 0 auto;
	}

	.box .el-menu-demo li {
		height: 50px;
		line-height: 50px;
	}
	
	.badges{
		float: right;
		position: absolute;
		top: 10px;
	}

	.box .el-menu-demo .el-avatar {
		/* float: right; */
		margin-top: 4px;
		position: absolute;
		top: -9px;
		right: 0;
	}

	.box .el-menu-demo>li:nth-of-type(4) {
		float: right;
	}

	.headpic {
		height: 40px;
		width: 40px;
		border-radius: 50%;
	}
	.el-menu-demo>.el-submenu .el-submenu__title {
		height: 50px !important;
		line-height: 54px !important;
	}

	.el-menu--collapse .el-menu .el-submenu,
	.el-menu--popup {
		min-width: 116px !important;
	}

	.el-menu--horizontal .el-menu-item a {
		color: #fff;
	}

	.el-menu--horizontal .el-menu-item i {
		color: #fff;
		height: 30px;
		width: 30px;
		border-radius: 50%;
		text-align: center;
		line-height: 30px;
		display: block;
		margin-left: 13px;
		background-color: #9E9E9E;
	}

	.el-menu--horizontal .el-menu-item {
		margin: 4px 10px;
	}

	.el-submenu .el-submenu__title a {
		color: #fff;
	}

	.el-menu--horizontal .el-menu {
		margin-top: 5px;
	}
</style>
