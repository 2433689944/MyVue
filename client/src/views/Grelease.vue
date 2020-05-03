<template>
	<div class="w">
	<Myform></Myform>
	</div>
</template>

<script>
	//发布商品
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			
			},
	components:{
		//发布商品表单组件
		Myform:()=>import("@/views/Grelease/Myform.vue")
	}
		}
</script>

<style>
	
</style>
