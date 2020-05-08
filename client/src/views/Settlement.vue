<template>
	<div id="Settlement">
		<success v-if="out"></success>
		<div class="itemlist">
			<div class="listtit">
				<div id="goods">订单信息</div>
			</div>
			<div class="orderinfo">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="170px" class="demo-ruleForm" v-if="!out" size="small">
					<el-form-item label="收货人姓名:" prop="name">
						<el-input v-model="ruleForm.name"></el-input>
					</el-form-item>
					<el-form-item label="收货人电话:" prop="address">
						<el-input type="text" v-model="ruleForm.phone"></el-input>
					</el-form-item>
					<el-form-item label="收货人地址:" prop="phone">
						<el-input type="text" v-model="ruleForm.address"></el-input>
					</el-form-item>
				</el-form>

			</div>
		</div>
		<Car></Car>
		<div class="pricebox" v-if="!out">
			<div>
				<span>总商品金额：</span>
				<span class="totalprice">{{price}}</span>
			</div>
			<div>
				<span>发表税点：</span>
				<span>0.00元</span>
			</div>
			<div>
				<span>优惠券抵扣：</span>
				<span>-0.00元</span>
			</div>
			<div class="paybox">
				<span>应付总额：</span>
				<span id="totalpay">{{price}}</span>
			</div>

			<div id="subbtn" @click="payfor">提交订单</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Settlement",
		data() {
			return {
				out: false,
				tableData: "",
				ruleForm: {
					name: "",
					address: "",
					phone: "",
				},
				rules: {
					name: [{
						required: true,
						message: '姓名不能为空',
						trigger: 'blur'
					}, ],
					address: [{
						required: true,
						message: '地址不能为空',
						trigger: 'blur'
					}],
					phone: [{
						required: true,
						message: '电话不能为空',
						trigger: 'blur'
					}]
				}
			};
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
				let ids = "";
				let formdata = new FormData();
				formdata.append("email", this.ruleForm.email);
				formdata.append("address", this.ruleForm.address);
				formdata.append("phone", this.ruleForm.phone);
				for (let index in this.tableData) {
					if (index == this.tableData.length - 1) {
						ids += this.tableData[index].id
					} else {
						ids = this.tableData[index].id + "-" + ids;
					}

				}
				formdata.append("id", ids);

				this.$axios.post("http://localhost:81/addtoorder", formdata).then(res => {
					console.log("支付成功");
					this.out = true;
				})
			},
			goBack() {
				this.$router.go(-1);
			}
		},
		mounted() {
			let that = this;
			this.$axios.get("http://localhost:81/getfromcar").then((res) => {
				console.log(res.data);
				that.tableData = res.data;
			})
		},
		computed: {
			price: function() {
				let sum = 0;
				for (let value of this.tableData) {
					sum += value.price;
				}
				return sum;
			}
		},
		filters: {
			//过滤图片地址，只要第一张图片
			imgtool(arg) {
				let imgArray = arg.split("-");
				return imgArray[0]
			}
		},
		components: {
			success: () => import("@/views/Settlement/success.vue"),
			Car:()=>import("./Car.vue")
		}
	}
</script>

<style scoped="scoped">
	#Settlement {
		margin-top: 101px;
	}

	.demo-ruleForm {
		margin-top: 20px;
		margin-left: -50px;
	}

	.w {
		width: 1180px;
		margin: 0 auto;
	}

	.fl {
		float: left;
	}

	.fr {
		float: right;
	}

	ul {
		list-style: none;
	}

	li {
		display: inline-block;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		color: #E61414;
	}

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

	.orderinfo {
		height: 160px;
	}

	.orderinfo .el-form .el-form-item .el-input{
		width: 300px;
	}
	.orderinfo .el-form .el-form-item:last-child .el-input{
		width: 600px;
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

	.carbox {
		width: 1180px;
		border: 1px solid #d9d9d9;
		border-collapse: collapse;
	}

	.carbox .boxheader {
		height: 40px;
		background-color: #EBEBEB;
		display: flex;
	}

	.boxheader {
		height: 40px;
		line-height: 40px;
		font-weight: bold;
		font-size: 14px;
		color: #737373;
		padding-left: 20px;
	}


	.checkbox {
		margin-top: 30px;
		background-color: #FAFAFA;
	}


	.boxcontent {
		height: 80px;
		width: 1140px;
		margin: 0px 20px;
		padding: 15px 0;
		border-bottom: 1px solid #d9d9d9;
		display: flex;
		position: relative;
	}

	.checkbox .boxcontent:last-of-type {
		border-bottom: 0;
	}

	.boxcontent #gimg {
		width: 74px;
		height: 100%;
		margin-left: 30px;
		display: inline-block;
	}

	.boxcontent #gimg img {
		width: 100%;
		height: 100%;
	}

	.boxcontent #gtitle {
		width: 200px;
		color: #737373;
		line-height: 80px;
		box-sizing: border-box;
		padding-left: 10px;
		font-family: "kaiti";
		font-size: 15px;
		display: inline-block;
	}

	.boxcontent #gprice {
		width: 100px;
		color: #F42424;
		font-size: 15px;
		text-align: center;
		line-height: 80px;
		display: inline-block;
	}

	.boxcontent .goodscount {
		height: 100%;
		width: 100px;
		color: #737373;
		font-size: 15px;
		text-align: center;
		line-height: 80px;
	}

	.pricebox {
		margin-top: 30px;
		margin-bottom: 100px;
	}

	.pricebox>div {
		height: 28px;
		position: relative;
	}

	.pricebox span {
		color: #777;
		font-size: 13px;
		font-family: Verdana;
	}

	.pricebox>div>span:first-of-type {
		width: 100px;
		position: absolute;
		right: 115px;
		text-align: right;
	}

	.pricebox>div>span:last-of-type {
		width: 120px;
		position: absolute;
		right: 15px;
		text-align: right;
	}

	.pricebox>div:nth-of-type(3) {
		border-bottom: 1px solid #A9A9A9;
	}

	.paybox {
		line-height: 28px;
	}

	.paybox span:first-of-type {
		color: #333;
		font-size: 16px;
		font-weight: bold;
	}

	.paybox #totalpay {
		color: #f42424;
		font-size: 16px;
		font-weight: bold;
	}

	.paymode {
		position: relative;
		height: 46px;
		margin-bottom: 40px;
	}

	.paymode #zfbpay1 {
		border: 1px solid #D2D2D2;
		position: absolute;
		right: 0;
		box-sizing: border-box;
		cursor: pointer;
	}

	.paymode #vxpay1 {
		border: 1px solid #D2D2D2;
		position: absolute;
		right: 160px;
		box-sizing: border-box;
		cursor: pointer;
	}

	#subbtn {
		width: 240px;
		height: 50px;
		color: white;
		font-weight: bold;
		text-align: center;
		line-height: 50px;
		font-size: 24px;
		background-color: #f42424;
		margin-bottom: 40px;
		float: right;
		cursor: pointer;
	}
</style>
