<template>
	<div class="contain">
	<Comshow></Comshow>
	</div>
</template>

<script>
	//社区页面
	export default {
		name:"Community",
		data(){
			return {}
		},
		components:{
			Comshow:()=>import("@/views/Community/Comshow.vue")
		}
	}
</script>

<style scoped="scoped">
	.contain {
		margin-top: 51px;
	}
</style>
