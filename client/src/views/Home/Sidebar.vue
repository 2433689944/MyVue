<template>
	<div class="sidebar" @mouseleave="out" @mouseenter="enter">
		<div class="left">
			<div @mouseenter="digital">数码产品<i class="el-icon-arrow-right"></i></div>
			<div @mouseenter="book">书籍教材<i class="el-icon-arrow-right"></i></div>
			<div @mouseenter="clothes">衣鞋帽伞<i class="el-icon-arrow-right"></i></div>
			<div @mouseenter="walktool">代步工具<i class="el-icon-arrow-right"></i></div>
			<div @mouseenter="sports">体育健身<i class="el-icon-arrow-right"></i></div>
			<div @mouseenter="electric">小型电器<i class="el-icon-arrow-right"></i></div>
			<div @mouseenter="daily">日常用品<i class="el-icon-arrow-right"></i></div>
			<div @mouseenter="virtual">虚拟产品<i class="el-icon-arrow-right"></i></div>
		</div>
		<div class="right" v-if="flag">
			<component :is="com"></component>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: false, //控制右侧详情的展示
				com: "",
			}
		},
		components: {
			Digital: () => import("./Sidebar/Digital.vue"),
			Book: () => import("./Sidebar/Book.vue"),
			Clothes: () => import("./Sidebar/Clothes.vue"),
			Walktool: () => import("./Sidebar/Walktool.vue"),
			Sports: () => import("./Sidebar/Sports.vue"),
			Electric: () => import("./Sidebar/Electric.vue"),
			Daily: () => import("./Sidebar/Daily.vue"),
			Virtual: () => import("./Sidebar/Virtual.vue"),
		},
		methods: {
			enter() {
				this.flag = true;
			},
			out() {
				this.flag = false;
			},
			//切换右侧动态组件
			digital() {
				this.com = "Digital";
			},
			book() {
				this.com = "Book";
			},
			clothes() {
				this.com = "Clothes";
			},
			walktool() {
				this.com = "Walktool";
			},
			sports() {
				this.com = "sports";
			},
			electric() {
				this.com = "Electric";
			},
			daily() {
				this.com = "Daily";
			},
			virtual() {
				this.com = "Virtual";
			}
		}
	}
</script>

<style scoped="scoped">
	.sidebar {
		box-sizing: border-box;
		width: 200px;
		height: 400px;
		background: rgba(105, 101, 101, 0.7);
		float: left;
		border-radius: 7px 0 0 7px;
		padding: 20px 0;
		position: relative;
	}

	.left {
		height: 360px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.left>div {
		height: 40px;
		line-height: 40px;
		padding: 0 30px;
		color: #fff;
		font-size: 14px;
	}

	.left>div i {
		margin-left: 70px;
	}

	.left>div:hover {
		background-color: #FF6700;
	}

	.right {
		position: absolute;
		top: 0;
		left: 200px;
		z-index: 20;
		height: 400px;
		width: 640px;
		background-color: #fff;
	}
</style>
