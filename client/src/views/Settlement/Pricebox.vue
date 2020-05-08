<template>
	<div class="pricebox">
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
		<div class="paymode">
		                <img src="@/assets/paypic1.png" alt="" id="vxpay1" onclick="vxpay()">
		                <img src="@/assets/paypic2.png" alt="" id="zfbpay1" onclick="zfbpay()">
		            </div>
		<div id="subbtn" @click="payfor">提交订单</div>
	</div>
</template>

<script>
	export default{
		props:["tableData","orderInfo"],
		methods:{
			//提交订单
				payfor() {
					if(this.orderInfo){
					let ids = "";
					let formdata = new FormData();
					formdata.append("name", this.orderInfo.name);
					formdata.append("address", this.orderInfo.address);
					formdata.append("phone", this.orderInfo.phone);
					for (let index in this.tableData) {
						if (index == this.tableData.length - 1) {
							ids += this.tableData[index].id
						} else {
							ids = this.tableData[index].id + "-" + ids;
						}
			
					}
					formdata.append("id", ids);
			
					this.$axios.post("http://localhost:81/addtoorder", formdata).then((res) => {
						this.$router.push({path:"/success"})
					})
				}else {
					this.$message({
						message: '请填写订单信息',
						type: 'warning',
						center: true,
						duration: 1500
					})
				}
				}
				
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
	}
</script>

<style scoped="scoped">
	.pricebox {
		margin-top: 10px;
		margin-bottom: 150px;
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
		margin-top: 20px;
	}
	.paymode #vxpay1 {
	    border: 1px solid #D2D2D2;
	    position: absolute;
	    right: 160px;
	    box-sizing: border-box;
	    cursor: pointer;
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
