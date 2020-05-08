<template>
	<div class="home">
		<Topbox></Topbox>
		<div class="adsbox">
			<Sidebar></Sidebar>
			<Carousel></Carousel>
		</div>
		<GoodsList></GoodsList>
		<el-backtop :bottom="100" :visibility-height="600"></el-backtop>
	</div>
</template>

<script>
	//首页页面
	import Topbox from './Home/Topbox.vue'
	import Sidebar from './Home/Sidebar.vue'
	import Carousel from './Home/Carousel.vue'
	import GoodsList from './Home/GoodsList.vue'
	export default {
		name: 'Home',
		components: {
			Topbox,
			Sidebar,
			Carousel,
			GoodsList,
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
	.adsbox {
		box-shadow: 0 0 10px 1px #D3D1D1;
		border-radius: 7px;
		margin-top: 190px;
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

	.el-backtop {
		background-color: #36302C;
	}

	.el-backtop,
	.el-calendar-table td.is-today {
		color: #fff;
	}
</style>
