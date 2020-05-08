<template>
	<div class="car">
		<div class="itemlist">
			<div class="listtit">
				<div id="goods">商品名称</div>
				<div id="oldgprice">原价</div>
				<div id="gprice">定价</div>
				<div id="operate">操作</div>
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
				<!-- <div v-else> -->
				<!-- <Empty></Empty> -->
				<!-- </div> -->
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
		components: {
			// Empty:()=>import("./Empty.vue")
		},
		methods: {
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

		// methods: {
		// 	deleteRow(index, rows) {
		// 		this.$axios.get("http://localhost:81/removegood?goodsid=" + rows[index].id).then(res => {

		// 		})
		// 		rows.splice(index, 1);
		// 	},
		// 	goBack() {
		// 		this.$router.go(-1);
		// 	},
		// 	payfor() {
		// 		if (this.tableData.length != 0) {
		// 			this.$router.push("/Settlement")
		// 		} else {
		// 			this.$message({
		// 				message: "购物车为空",
		// 				type: "warning",
		// 				center: true,
		// 				duration: 1500
		// 			});
		// 		}
		// 	}
		// },
		// computed: {
		// 	price: function() {
		// 		let sum = 0;
		// 		for (let value of this.tableData) {
		// 			sum += value.price;
		// 		}
		// 		return sum;
		// 	}
		// }
	}
</script>

<style scoped="scoped">
	.itemlist {
		margin: 101px 0 50px;
		background-color: #fff;
		box-sizing: border-box;
		border-radius: 5px;
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
</style>
