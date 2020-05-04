<template>
	<div class="contain">
	<Comshow :mycommInfo="commInfo"></Comshow>
	</div>
</template>

<script>
	//社区页面
	export default {
		name:"Community",
		data(){
			return {
				commInfo:[]
			}
		},
		components:{
			Comshow:()=>import("@/views/Community/Comshow.vue")
		},
		mounted() {
			this.$axios("http://localhost:81/community")
			.then((result)=>{
				console.log(result)
				this.commInfo=result.data
			})
		}
	}
</script>

<style scoped="scoped">
	.contain {
		margin-top: 51px;
	}
</style>
