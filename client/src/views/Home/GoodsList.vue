<template>
	<div class="goodsbox">
		<h2>好货广场</h2>
		<div class="goodslist">
			<div class="goods" @click="fn(item.id)" v-for="(item) in this.$store.state.goodslist" :key="item.id">
				<div class="imgbox">
					<img :src="item.img|imgtool" class="goodsimg" />
				</div>
				<p class="title" v-html="item.title"></p>
				<p class="intro" v-html="item.intro"></p>
				<div class="pricebox">
					<span class="price" v-cloak>￥{{item.price}}.00</span>
					<span class="oldprice" v-cloak>￥{{item.oldprice}}.00</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		created() {
			this.$axios("http://localhost:81/getAllGoods")
				.then((result) => {
					this.$store.commit('getAllGoods', result.data)
				})
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
		filters: {
			//过滤图片地址，只要第一张图片
			imgtool(arg) {
				let imgArray = arg.split("-");
				return imgArray[0]
			}
		}
	}
</script>

<style scoped="scoped">
	.goodsbox {
		margin: 10px 0 40px;
	}

	.goodsbox h2 {
		text-align: center;
		margin: 25px 0 15px;
		font-size: 28px;
	}

	.goodslist {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.goods {
		width: 218px;
		height: 380px;
		border-radius: 5px;
		margin-bottom: 20px;
		margin-right: 20px;
		border: 1px solid #EEEEEE;
		transition: all 0.5s;
		background-color: #fff;
		position: relative;
	}

	.goods:nth-of-type(5n) {
		margin-right: 0;
	}

	.goods:hover {
		box-shadow: 0 0 10px 2px rgba(205, 205, 205, 0.9);
	}

	.goods .imgbox {
		overflow: hidden;
		width: 218px;
		height: 220px;
		border-radius: 5px 5px 0 0;
	}

	.goods .imgbox img {
		width: 218px;
		height: 220px;
		border-radius: 5px 5px 0 0;
		transition: all 0.5s;
	}

	.goods .imgbox:hover img {
		transform: scale(1.1);
	}

	.goods .title {
		font-weight: bold;
		margin: 20px 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.goods .intro {
		position: absolute;
		top: 290px;
		margin: 0 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		font-size: 12px;
		color: #93999f;
		transition: all 0.5s;
	}

	.goods .intro:hover {
		color: #F8A40E;
	}

	.goods .pricebox {
		position: absolute;
		bottom: 10px;
		left: 10px;
		width: 200px;

	}

	.pricebox .price {
		color: red;
		font-weight: bold;
		font-size: 14px;
	}

	.pricebox .oldprice {
		font-size: 11px;
		text-decoration: line-through;
		margin-left: 15px;
		color: #9F9D9C;
	}

	[v-cloak] {
		display: none;
	}
</style>
