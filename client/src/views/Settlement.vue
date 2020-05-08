<template>
	<div id="Settlement">
		<success v-if="out"></success>
		<el-page-header @back="goBack" content="填写订单信息" v-if="!out">
		</el-page-header>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" v-if="!out">
			<el-form-item label="邮箱" prop="email">
				<el-input v-model="ruleForm.email"></el-input>
			</el-form-item>
			<el-form-item label="地址" prop="address">
				<el-input type="text" v-model="ruleForm.address"></el-input>
			</el-form-item>
			<el-form-item label="电话" prop="phone">
				<el-input type="text" v-model="ruleForm.phone"></el-input>
			</el-form-item>
		</el-form>



		<!-- <el-table   v-if="!out"
		     :data="tableData"
		     style="width: 50% margin-left='200px'">
		     <el-table-column
		       fixed
		       prop="title"
		       label="商品清单"
		       width="300px"
			   >
				
				<template slot-scope="scope">
				        <img :src="scope.row.img.split('-')[0]" class="head_pic" style="width: 150px; height: 150px;"/>
				    </template>
		     </el-table-column>
		     <el-table-column
		       prop="oldprice"
		       label=""
		       width="300px"
			   class="oldprice"
			   >
		     </el-table-column>
		     <el-table-column
		       prop="price"
		       label=""
		       width="300px">
		     </el-table-column>
		   </el-table>
		   
		   <div v-if="!out"  class="foot" >
		   	<span class="price">总价:{{price}}</span> <el-button @click="payfor" class="pay">支付</el-button>
		   </div> -->


		<div class="carbox checkbox" v-if="!out">
			<div class="boxheader">核对物品清单</div>
			<div v-for="(item,index) in tableData">
				<div id="gimg">
					<img src="item.img.split('-')[0]" />
				</div>
				<div id="gtitle">{{item.title}}</div>
				<div id="gprice">￥{{item.price}}</div>
			</div>
		</div>
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
					email: "",
					address: "",
					phone: "",
				},
				rules: {
					email: [{
						required: true,
						message: '邮箱不能为空',
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
		components: {
			success: () => import("@/views/Settlement/success.vue"),
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
