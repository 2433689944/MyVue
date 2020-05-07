<template>
	<div class="mygoods">
		<h3 class="boxtitle">我的商品</h3>
		<div class="itemlist">
			<div class="listtit">
				<div id="goods">已发布商品</div>
				<div id="gprice">定价</div>
			</div>
			<div class="listcon">
				<div v-if="goodsArray.length!=0">
					<div class="boxcontent" v-for="(item,index) in goodsArray" :key="index">
						<img :src="item.img|imgtool">
						<div class="gtitle" v-html="item.title"></div>
						<div class="goodprice" v-cloak>￥{{item.price}}.00</div>
					</div>
				</div>
				<div v-else>
					<Empty></Empty>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				goodsArray: []
			}
		},
		components:{
			Empty:()=>import("./Empty.vue")
		},
		mounted() {
			this.$axios("http://localhost:81/getmygoods")
				.then((result) => {
					this.goodsArray = result.data;
				})
		},
		filters: {
			//过滤图片地址，只要第一张图片
			imgtool(arg) {
				let imgArray = arg.split("-");
				return imgArray[0]
			}
		},
	}
</script>

<style scoped="scoped">
	.mygoods {
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		padding: 30px 30px;
	}

	.boxtitle {
		font-size: 22px;
		font-weight: normal;
		padding: 10px;
		border-bottom: 1px solid #E0E0E0;
	}

	.itemlist {
		margin-top: 20px;
		height: 480px;
		border: 1px solid #DFDFDF;
		box-sizing: border-box;
	}

	.listtit {
		height: 40px;
		background-color: #EBEBEB;
		display: flex;
	}

	.listtit div {
		height: 40px;
		line-height: 40px;
		font-weight: bold;
		font-size: 14px;
		color: #737373;
	}

	.listtit #goods {
		margin-left: 36px;
		width: 600px;
	}

	.listtit #gprice {
		width: 175px;
		text-align: center;
	}

	.listcon {
		height: 440px;
		overflow-y: scroll;
	}

	.boxcontent {
		height: 80px;
		margin: 0px 20px;
		padding: 15px 15px;
		border-bottom: 1px solid #d9d9d9;
		display: flex;
		position: relative;
	}

	.boxcontent img {
		height: 80px;
		width: 74px;
	}

	.boxcontent>div {
		color: #333;
	}

	.boxcontent .gtitle {
		width: 525px;
		line-height: 80px;
		padding: 0px 20px;
		box-sizing: border-box;
		white-space: normal;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.boxcontent .goodprice {
		width: 175px;
		height: 80px;
		line-height: 80px;
		text-align: center;
		color: red;
		font-size: 17px;
	}
</style>
