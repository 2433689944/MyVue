<template>
	<div class="magnify">
		<span @click="goback" class="goback"><i class="el-icon-arrow-left"></i><span v-cloak>返回</span></span>
		<Picshow :pictureL="pictureList" :middleI="middleImg" v-if="this.pictureList.length!=0"></Picshow>
		<GoodsInfo :goodsinfo="goodsinfo" :label="label" :types="types" :userinfo="userinfo"></GoodsInfo>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				goodsinfo: {},
				userinfo: {},
				label: [],
				types: [],
				pictureList: [],
				middleImg: '', // 选中图片
			}
		},
		components: {
			Picshow: () => import("./Picshow.vue"),
			GoodsInfo: () => import("./GoodsInfo.vue")
		},
		mounted() {
			this.$axios("http://localhost:81/getgood", {
					params: {
						goodsid: this.$route.query.goodsid
					}
				})
				.then((result) => {
					this.goodsinfo = result.data.info[0];
					this.userinfo = result.data.info2[0];
					this.pictureList = result.data.info[0].img.split("-");
					this.label = result.data.info[0].label.split("-");
					this.types = result.data.info[0].types.split("-");
					this.middleImg = this.pictureList[0];
				})
		},
		methods: {
			//返回首页
			goback() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	.magnify {
		position: relative;
		width: 1100px;
		height: 530px;
		margin-left: auto;
		margin-right: auto;
		padding: 40px;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 7px;
		position: relative;
	}

	.goback {
		position: absolute;
		right: 50px;
		top: 20px;
		cursor: pointer;
		font-size: 18px;
		font-weight: bold;
	}

	.goback:hover {
		color: red;
	}

	[v-cloak] {
		display: none
	}
</style>
