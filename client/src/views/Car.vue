<template>
	<div class="car">
		<h2>我的购物车</h2>
		<div class="itemlist">
			<Carlist :tableData="tableData"></Carlist>
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
		components: {
			Carlist: () => import('./Car/Carlist.vue')
		},
		data() {
			return {
				tableData: []
			}
		},
		mounted() {
			this.$axios.get("http://localhost:81/getfromcar")
				.then((result) => {
					this.tableData = result.data;
				})
		},
		methods: {
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
</style>
