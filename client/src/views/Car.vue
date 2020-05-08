<template>
	<div class="car">
		<h2>我的购物车</h2>
		<div class="itemlist">
			<div class="listtit">
				<div id="goods" v-cloak>商品名称</div>
				<div id="oldgprice" v-cloak>原价</div>
				<div id="gprice" v-cloak>定价</div>
				<div id="operate" v-cloak>操作</div>
			</div>
			<div class="listcon">
				<div v-if="tableData.length!=0">
					<div class="boxcontent" v-for="(item,index) in tableData" :key="index">
						<img :src="item.img|imgtool">
						<span class="gtitle" v-html="item.title"></span>
						<span class="gintro" v-html="item.intro"></span>
						<div class="price1" v-cloak>￥{{item.oldprice}}.00</div>
						<div class="price2" v-cloak>￥{{item.price}}.00</div>
						<div class="opera" v-cloak @click="deleteRow(index,item.goodsid)">删除</div>
					</div>
				</div>
				<div v-else>
					<div id="emptycar" style="display: block;">
						<img src="@/assets/shopcar.png" alt="">
						<p>您的购物车还是空的，赶快去挑选商品吧！</p>
					</div>
				</div>
			</div>
			<div class="listbom">
				<span v-cloak>
					<i class="el-icon-back"></i>
					<span @click="goback">继续挑选</span>
				</span>
				<button @click="payfor" v-cloak>结算</button>
				<span v-cloak>应付金额 :<span id="totalpri" v-cloak>{{price}}.00</span></span>
			</div>
		</div>
	</div>
</template>

<script>
	//购物车页面
	export default {
		name: "Car",
		data() {
			return {
				tableData: []
			}
		},
		methods: {
			//删除商品
			deleteRow(index, goodsid) {
				this.$confirm('确认删除该商品吗？删除了无法恢复哦！', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.tableData.splice(index, 1);
					this.$axios.get("http://localhost:81/removegood", {
							params: {
								goodsid: goodsid
							}
						})
						.then((result) => {
							this.$message({
								message: '删除成功！',
								type: 'success',
								center: true,
								duration: 1500
							});
						})
				}).catch(() => {
					this.$message({
						message: '已取消删除',
						type: 'info',
						center: true,
						duration: 1500
					});
				});
			},
			//结算购物车
			payfor() {
				if (this.tableData.length == 0) {
					this.$message({
						message: '购物车为空，快去挑选几件商品吧！',
						type: 'warning',
						center: true,
						duration: 1500
					});
				} else {
					this.$router.push("/Settlement");
				}
			},
			//继续挑选
			goback() {
				this.$router.push({
					path: "/"
				})
			}
		},
		mounted() {
			this.$axios.get("http://localhost:81/getfromcar")
				.then((result) => {
					console.log(result.data);
					this.tableData = result.data;
				})
		},
		filters: {
			//过滤图片地址，只要第一张图片
			imgtool(arg) {
				let imgArray = arg.split("-");
				return imgArray[0]
			}
		},
		computed: {
			//计算总价
			price: function() {
				let sum = 0;
				for (let value of this.tableData) {
					sum += value.price;
				}
				return sum;
			}
		}


		// 	goBack() {
		// 		this.$router.go(-1);
		// 	},
	}
</script>

<style scoped="scoped">
	[v-cloak] {
		display: none;
	}

	h2 {
		margin: 80px 0 10px 5px;
		font-weight: normal;
		color: #5A5555;
	}

	.itemlist {
		margin-bottom: 50px;
		background-color: #fff;
		box-sizing: border-box;
		border-radius: 5px 5px 0 0;
	}

	.listtit {
		height: 40px;
		border-bottom: 1px solid #EBEEF5;
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
		margin-left: 46px;
		width: 600px;
	}

	.listtit #gprice,
	#oldgprice,
	#operate {
		width: 175px;
		text-align: center;
	}

	#operate {
		width: 155px;
	}

	.boxcontent {
		height: 100px;
		margin: 0px 20px;
		padding: 15px 0 15px 15px;
		border-bottom: 1px solid #EBEEF5;
		display: flex;
		position: relative;
	}

	.boxcontent:last-of-type {
		border-bottom: 0;
	}

	.boxcontent img {
		height: 100px;
		width: 90px;
		margin-left: 10px;
	}

	.boxcontent .gtitle {
		display: inline-block;
		width: 526px;
		padding-left: 20px;
		box-sizing: border-box;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 15px;
		font-weight: bold;
		color: #555;
		margin-top: 10px;
	}

	.gintro {
		position: absolute;
		top: 55px;
		left: 135px;
		width: 526px;
		font-size: 14px;
		color: #666;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.price1,
	.price2,
	.opera {
		width: 175px;
		height: 100px;
		line-height: 100px;
		text-align: center;
	}

	.price1 {
		color: #999999;
		font-size: 14px;
		text-decoration: line-through;
		cursor: default;
	}

	.opera {
		font-size: 14px;
		-moz-user-select: none;
		/*火狐*/
		-webkit-user-select: none;
		/*webkit浏览器*/
		-ms-user-select: none;
		/*IE10*/
		-khtml-user-select: none;
		/*早期浏览器*/
		user-select: none;
	}

	.opera:hover {
		color: red;
		cursor: default;
		text-decoration: underline;
	}

	.listbom {
		border-top: 1px solid #EBEEF5;
		border-bottom: 0;
		height: 50px;
		line-height: 50px;
		background-color: #fff;
	}

	.listbom i {
		border: 1px solid #737373;
		font-size: 20px;
		margin-left: 30px;
		color: #737373;
		border-radius: 50%;
	}

	.listbom span {
		color: #737373;
	}

	.listbom>span:first-of-type {
		color: #737373;
		font-size: 15px;
		position: relative;
		display: inline-block;
		width: 150px;
		cursor: pointer;
	}

	.listbom>span:first-of-type span {
		position: absolute;
		top: -2px;
		left: 60px;
	}

	.listbom>span:first-of-type:hover span {
		color: red;
	}

	.listbom>span:first-of-type:hover i {
		color: red;
		border-color: red;
	}

	.listbom button {
		float: right;
		width: 150px;
		border: 0;
		height: 100%;
		background-color: #F42424;
		color: #fff;
		line-height: 50px;
		font-size: 20px;
		text-align: center;
		cursor: pointer;
		outline: none;
	}

	.listbom>span:last-of-type {
		float: right;
		font-size: 14px;
	}

	#totalpri {
		height: 50px;
		padding: 0 20px 0 4px;
		font-size: 20px;
		color: #F42424;
	}

	#emptycar {
		height: 200px;
		display: none;
		position: relative;
	}

	#emptycar img {
		position: absolute;
		top: 50%;
		margin-top: -47px;
		left: 310px;
	}

	#emptycar p {
		position: absolute;
		margin-top: 82px;
		left: 440px;
		color: #777;
		font-size: 22px;
	}
</style>
