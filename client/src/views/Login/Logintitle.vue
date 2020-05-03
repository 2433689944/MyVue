<template>
	<div>
		<h1 class="title">简 沐</h1>
		<p>Welcome ！</p>
		<div id="errinfo" v-html="errinfo"></div>
	</div>
</template>

<script>
	export default {
		props: ["errinfo"]
	}
</script>

<style scoped="">
	.title {
		color: #7F89C6;
		font-size: 35px;
		font-family: "kaiTi";
		font-weight: normal;
		margin-top: 80px;
		text-align: center;
	}

	p {
		color: #D4D4D4;
		font-size: 13px;
		text-align: center;
		padding-left: 17px;
	}

	#errinfo {
		height: 20px;
		color: #F56C6C;
		font-size: 13px;
		margin-top: 25px;
		margin-left: 45px;
	}
</style>
