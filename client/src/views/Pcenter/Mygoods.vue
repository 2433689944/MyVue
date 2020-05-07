<template>
	<div class="mygoods">
		<h3 class="boxtitle">我的商品</h3>
		<div class="itemlist">
			<div class="listtit"></div>
			<div class="listcon"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {

		}
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
	.listtit{
		height: 40px;
		background-color: #EBEBEB;
	}
	.listcon{
		height: 440px;
		/* background-color: seashell; */
	}
</style>
