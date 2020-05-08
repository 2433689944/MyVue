<template>
	<div id="details">
		<Rotation></Rotation>
		<goodsComment></goodsComment>
	</div>
</template>

<script>
	//详情页面
	export default {
		name: "Details",
		components: {
			Rotation: () => import("@/views/Details/Rotation.vue"),
				goodsComment:()=>import("@/views/Details/goodsComment.vue"),
		},
	}
</script>

<style scoped="scoped">
	#details {
		margin: 101px auto 50px;
	}
</style>
