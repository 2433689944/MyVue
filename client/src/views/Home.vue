<template>
	<div class="home">
		<h1>首页</h1>
		<div class="goods" @click="fn(item.id)" v-for="(item) in goods" :key="item.id">
			<img :src="item.img" class="goodsimg" />
			<p>价格:{{item.price}}</p>
			<h2>{{this.$store.state.headpic}}</h2>
		</div>
	</div>
</template>

<script>
	//首页页面
	export default {
		name: 'Home',
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
				})
			}
		},
	}
</script>

<style scoped="scoped">
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
