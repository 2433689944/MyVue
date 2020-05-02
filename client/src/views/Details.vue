<template>
	<div>
		<p>详情页面</p>
	</div>
</template>

<script>
	//详情页面
	export default {
		name:"Details",
		data(){
			return {}
		},
		mounted(){
			//从首页传过来的数据,格式为{goodsid: 2},2就是商品id,你自己去数据库根据这个id取商品详细信息
			console.log(this.$route.query.goodsid)
		}
	}
</script>

<style scoped="scoped">
	
</style>
