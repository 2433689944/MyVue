<template>
	<div class="goodsbox">
		<h2>好货广场</h2>
		<div class="goodslist">
			<div class="goods" @click="fn(item.id)" v-for="(item) in goods" :key="item.id">
				<img :src="item.img" class="goodsimg" />
				<p v-html="item.price"></p>
			</div>
		</div>
	</div>
</template>
	
<script>
	export default{
		data() {
			return {
				goods: [{
						id: 0,
						img: 'http://47.93.89.196/public/img/flower1.png',
						price: 111
					},
					{
						id: 1,
						img: 'http://47.93.89.196/public/img/flower26.png',
						price: 333
					},
					{
						id: 2,
						img: 'http://47.93.89.196/public/img/flower2.png',
						price: 444
					},
					{
						id: 3,
						img: 'http://47.93.89.196/public/img/flower2.png',
						price: 444
					},
					{
						id: 4,
						img: 'http://47.93.89.196/public/img/flower2.png',
						price: 444
					},
					{
						id: 5,
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
	.goodsbox{
		margin: 10px 0 50px;
	}
	.goodsbox h2{
		text-align: center;
		margin: 25px 0 15px;
		font-size: 28px;
	}
	.goodslist{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	
	.goods {
		width: 200px;
		height: 400px;
		background-color: sandybrown;
	}
	
	.goodsimg {
		width: 100%;
	}
</style>
