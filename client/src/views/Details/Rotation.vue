<template>
	<div class="magnify">
		<Picshow :pictureList="pictureList" :middleImg="middleImg"></Picshow>
		<!-- 	<div class="goodsinfo">
			<ul>
				<li class="title" v-html="goodsinfo.title"></li>
				<li v-html="goodsinfo.intro"></li>
				<li>
					<span v-for="(item,index) in label" class="labels" v-html="item"></span>
				</li>
				<li>
					<span class="oldprice" v-cloak>原价:{{goodsinfo.oldprice}}</span>
					<span class="price" v-cloak>现价:{{goodsinfo.price}}</span>
				</li>
				<li>
					<button v-for="(item,index) in types" class="type" v-html="item"></button>
				</li>
				<li v-cloak>qq:{{goodsinfo.qq}}</li>
				<li v-cloak>微信:{{goodsinfo.wechat}}</li>
				<li v-cloak>电话:{{goodsinfo.phone}}</li>
			</ul>
			<button class="car" @click="intocar">查看购物车</button>
			<button class="car" @click="putintocar">加入购物车</button>
		</div> -->


	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				goodsinfo: {},
				label: [],
				types: [],
				pictureList: [],
				middleImg: '', // 选中图片
			}
		},
		mounted() {
			this.$axios("http://localhost:81/getgood", {
					params: {
						goodsid: this.$route.query.goodsid
					}
				})
				.then((result) => {
					this.goodsinfo = result.data[0];
					this.pictureList = result.data[0].img.split("-");
					this.label = result.data[0].label.split("-");
					this.types = result.data[0].types.split("-");
					this.middleImg = this.pictureList[0];
				})
		},	
		components:{
			Picshow:()=>import("./Picshow.vue")
		}
	}
</script>

<style scoped="scoped">
	.magnify {
		position: relative;
		width: 1180px;
		padding: 30px;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 7px;
	}





	.goodsinfo {
		background-color: #F0F0F0;
		width: 400px;
		height: 400px;
		display: inline-block;
		position: absolute;
		top: 20px;
		left: 319px;
	}


	.goodsinfo li {
		background-color: #F4F4F4;
		display: block;
		height: 30px;
		margin-top: 20px;
	}

	.goodsinfo li img {
		height: 20px;
		width: 20px;
		margin-top: 5px;
	}

	.goodsinfo li span {
		line-height: 30px;
	}

	.title {
		font-size: 15px;
		text-align: center;
		font-weight: bold;
	}

	.labels {
		margin-right: 5px;
	}

	.type {
		background-color: #00D6B2;
		border-radius: 1px;
		margin-right: 20px;
	}

	.oldprice {
		margin-right: 10px;
		text-decoration: line-through;
	}

	.price {
		color: red;
	}

	.car {
		width: 200px;
		height: 50px;
		background-color: orangered;
	}

	[v-cloak] {
		display: none
	}
</style>
