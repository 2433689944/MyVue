<template>
	<div class="contain">
		<Dynamic></Dynamic>
	</div>
</template>

<script>
	//动态发布页面
	export default {
		name:"Crelease",
		data(){
			return {}
		},
		components:{
			Dynamic:()=>import("@/views/Crelease/Dynamic")
		}
	}
</script>

<style scoped="scoped">
	/* .contain {
		margin-top: 51px;
	} */
</style>
