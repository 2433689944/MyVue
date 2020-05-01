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
			<el-menu-item index="4" v-if="flag">
				<router-link to="/pcenter">个人中心</router-link>
			</el-menu-item>
			<el-menu-item index="4" v-else>
				<router-link to="/login">请登录</router-link>
			</el-menu-item>
			<el-avatar :src="headpic"></el-avatar>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name: "Navbar",
		data() {
			return {
				activeIndex: '1',
				flag: false,
				headpic:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
			};
		},
		methods: {

		}
	}
</script>

<style>
	.box {
		width: 100%;
		background-color: #545c64;
	}

	.box ul {
		width: 1180px;
		margin: 0 auto;
	}

	.box .el-menu-demo li {
		height: 50px;
		line-height: 50px;
	}
	
	.box .el-menu-demo>span{
		float: right;
		margin-top: 4px;
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
		margin-left: 15px;
	}
</style>
