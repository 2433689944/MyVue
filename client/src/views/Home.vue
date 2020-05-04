<template>
	<div class="home">
		<div class="topbox">123131</div>
		<div class="adsbox">
			<Sidebar></Sidebar>
			<Carousel></Carousel>
		</div>
		<h1>首页</h1>
		<div class="goods" @click="fn(item.id)" v-for="(item) in goods" :key="item.id">
			<img :src="item.img" class="goodsimg" />
			<p v-html="item.price"></p>
		</div>
	</div>
</template>

<script>
	//首页页面
	import Sidebar from './Home/Sidebar.vue'
	import Carousel from './Home/Carousel.vue'
	export default {
		name: 'Home',
		components: {
			Sidebar,
			Carousel
		},
		data() {
			return {
				goods: [{
						id: 0,
						img: 'http://47.93.89.196/public/img/flower1.png',
						price: 111
					},
					{
						id: 4,
						img: 'http://47.93.89.196/public/img/flower26.png',
						price: 333
					},
					{
						id: 2,
						img: 'http://47.93.89.196/public/img/flower2.png',
						price: 444
					}
				]
			}
		},
		methods: {
			fn(goodsid) {
				this.$router.push({
					path: "/details",
					query: {
						goodsid: goodsid
					}
				}).catch(err => {})
			}
		},
	}
</script>

<style scoped="scoped">
	.topbox{
		height: 150px;
		width: 100%;
		background-color: white;
		position: absolute;
		top: 51px;
		left: 0;
	}
	.adsbox {
		box-shadow: 0 0 10px 1px #D3D1D1;
		border-radius: 7px;
		margin-top: 220px;
	}

	.goods {
		width: 260px;
		height: 400px;
		background-color: sandybrown;
		display: inline-block;
	}

	.goodsimg {
		width: 100%;
	}
</style>
