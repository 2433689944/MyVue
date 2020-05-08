<template>
	<div class="pcenter">
		<div class="pleft">
			<h2>个人中心</h2>
			<div class="titlebox">
				<div @click="myinfo" :class="ind==1?'active':''"><i class="el-icon-s-custom"></i>我的资料</div>
				<div @click="mymessage" :class="ind==2?'active':''">
					<i class="el-icon-s-comment"></i>
					<el-badge :is-dot="this.$store.state.unreadmsg.length!=0" class="badges">动态消息</el-badge>
				</div>
				<div @click="mymsgcom" :class="ind==3?'active':''">
					<i class="el-icon-s-comment"></i>
					<el-badge :is-dot="this.$store.state.unreadcom.length!=0" class="badges">评论消息</el-badge>
				</div>
				<div @click="mygoods" :class="ind==4?'active':''"><i class="el-icon-s-goods"></i>我的商品</div>
				<div @click="myorders" :class="ind==5?'active':''"><i class="el-icon-s-shop"></i>我的订单</div>
				<div @click="mydynamic" :class="ind==6?'active':''"><i class="el-icon-picture"></i>我的动态</div>
			</div>
		</div>
		<div class="pright">
			<component :is="com"></component>
		</div>
	</div>
</template>

<script>
	//个人中心页面
	export default {
		name: "Pcenter",
		components: {
			Myinfo: () => import("./Pcenter/Myinfo.vue"),
			Mygoods: () => import("./Pcenter/Mygoods.vue"),
			Mymessage: () => import("./Pcenter/Mymessage.vue"),
			Mymsgcom: () => import("./Pcenter/Mymsgcom.vue"),
			Mydynamic: () => import("./Pcenter/Mydynamic.vue"),
			Myorders: () => import("./Pcenter/Myorders.vue"),
		},
		data() {
			return {
				ind: 1, //切换右侧选中状态
				com: "Myinfo",
			}
		},
		methods: {
			myinfo() {
				this.com = "Myinfo";
				this.ind = 1;
			},
			mymessage() {
				this.com = "Mymessage";
				this.ind = 2;
			},
			mymsgcom() {
				this.com = "Mymsgcom";
				this.ind = 3;
			},
			mygoods() {
				this.com = "Mygoods";
				this.ind = 4;
			},
			myorders() {
				this.com = "Myorders";
				this.ind = 5;
			},
			mydynamic() {
				this.com = "Mydynamic";
				this.ind = 6;
			},
		}
	}
</script>

<style scoped="scoped">
	.titlebox div:nth-of-type(2) {
		position: relative;
	}

	.titlebox div:nth-of-type(3) {
		position: relative;
	}

	.el-badge {
		position: absolute;
		top: 0;
		left: 27px;
	}

	.pcenter {
		background-color: #fff;
		height: 600px;
		margin: 101px auto 50px !important;
		border-radius: 2px;
	}

	.pcenter .pleft {
		height: 100%;
		width: 230px;
		float: left;
		box-sizing: border-box;
		border-right: 1px solid #DCDEE2;
	}

	.pcenter .pright {
		width: 950px;
		height: 100%;
		float: right;
	}

	.pcenter .pleft h2 {
		font-weight: normal;
		margin: 15px 20px;
		font-size: 20px;
		color: #515a6e;
	}

	.pleft .titlebox div {
		height: 50px;
		line-height: 50px;
		padding-left: 35px;
		font-size: 17px;
		color: #515a6e;
		cursor: pointer;
	}

	.pleft .titlebox i {
		margin-right: 10px;
	}

	.active {
		color: #2d8cf0 !important;
		background: #f0faff;
		border-right: 3px solid #2D8CF0;
	}
</style>
