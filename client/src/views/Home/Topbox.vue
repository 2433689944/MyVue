<template>
	<div class="top">
		<div class="topbox">
			<h1 class="title">简 沐</h1>
			<div class="cent">
				<form class="search-list">
					<input type="text" id="searchtext" placeholder="笔记本" v-model="setext">
					<input type="button" id="search" value="搜索" @click="searchgoods">
				</form>
				<ul class="hotsearch">
					<li v-for="(item,index) in arr" :key="index">{{item}}</li>
				</ul>
			</div>
			<el-button type="info" plain icon="el-icon-shopping-cart-2" @click="findmycar">购物车</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				setext: '',
				arr: ["热搜词汇 :", "手机", "平板", "笔记本", "单反相机", "充电宝", "耳机", "路由器"]
			}
		},
		methods: {
			//搜索商品
			searchgoods() {
				if (this.setext != "") {
					this.$axios("http://localhost:81/searchgoods", {
							params: {
								setext: this.setext
							}
						})
						.then((result) => {
							this.$store.commit('getAllGoods', result.data.info)
						})
				}
			},
			//查看购物车
			findmycar() {
				this.$router.push({
					path: "/car"
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.top {
		height: 120px;
		width: 100%;
		background-color: white;
		position: absolute;
		top: 51px;
		left: 0;
	}

	.topbox {
		width: 1180px;
		margin: 0 auto;
		position: relative;
	}

	.topbox .title {
		width: 200px;
		color: #FF6700;
		font-size: 40px;
		font-family: "kaiTi";
		font-weight: normal;
		position: absolute;
		top: 40px;
		left: 5px;
	}


	.topbox .cent {
		width: 772px;
		height: 120px;
		position: absolute;
		left: 204px;
		top: 0;
	}

	.search-list {
		height: 34px;
		width: 722px;
		position: absolute;
		left: 80px;
		top: 45px;
	}

	#searchtext {
		height: 26px;
		width: 430px;
		border: 2px solid #FF6700;
		border-radius: 20px 0 0 20px;
		padding: 2px 44px 2px 17px;
		font-size: 12px;
	}

	#search {
		position: absolute;
		width: 60px;
		height: 34px;
		border: 2px solid #FF6700;
		border-radius: 0 20px 20px 0;
		background-color: #FF6700;
		color: white;
	}

	#search:hover {
		cursor: pointer;
	}

	input:focus {
		outline: none;
	}

	.hotsearch {
		position: absolute;
		left: 95px;
		top: 80px;
	}

	.hotsearch li {
		padding: 0 3px;
		font-size: 13px;
		color: #ACACAC;
	}

	.hotsearch li:first-of-type {
		color: #FF6700;
	}

	.el-button {
		border-radius: 0;
		font-size: 15px;
		width: 120px;
		color: #E1251B;
		position: absolute;
		right: 70px;
		top: 46px;
		height: 35px;
		padding: 0;
		line-height: 35px;
	}
</style>
