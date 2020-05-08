<template>
	<div class="successbox">
		<img src="@/assets/paysuccess.png" />
		<p id="success">支付成功</p>
		<p id="tips">你可能需要进行下列操作</p>
		<el-button type="info" plain @click="toorder">查看订单</el-button>
		<el-button type="info" plain @click="toindex">返回首页</el-button>
	</div>
</template>

<script>
	export default {
		methods: {
			toorder() {
				this.$router.push("/pcenter")
			},
			toindex() {
				this.$router.push("/")
			}
		}
	}
</script>

<style>
	.successbox {
		height: 500px;
		margin: 101px auto 50px !important;
		background-color: #fff;
		text-align: center;
	}

	.successbox img {
		width: 100px;
		height: 100px;
		margin-top: 100px;
	}

	.successbox #success {
		color: #292929;
		font-size: 22px;
		margin-top: 20px;
		font-weight: bold;
	}

	.successbox #tips {
		color: #A9A9A9;
		font-size: 16px;
		margin-top: 10px;
	}

	.successbox button {
		display: inline-block;
		margin: 20px 40px;
	}
</style>
