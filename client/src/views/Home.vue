<template>
	<div class="home">
		<div class="topbox">123</div>
		<div class="adsbox">
			<Sidebar></Sidebar>
			<Carousel></Carousel>
		</div>
		<GoodsList></GoodsList>
	</div>
</template>

<script>
	//首页页面
	import Sidebar from './Home/Sidebar.vue'
	import Carousel from './Home/Carousel.vue'
	import GoodsList from './Home/GoodsList.vue'
	export default {
		name: 'Home',
		components: {
			Sidebar,
			Carousel,
			GoodsList
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
	.topbox {
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
