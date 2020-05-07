<template>
	<div class="contain">
	<Comshow v-for="(item,index) in commInfo" :mycommInfo="item" :mycomidInfo="comidInfo" :key="index"></Comshow>
	</div>
</template>

<script>
	//社区页面
	export default {
		name:"Community",
		data(){
			return {
				commInfo:[],
				comidInfo:[]
			}
		},
		components:{
			Comshow:()=>import("@/views/Community/Comshow.vue")
		},
		mounted() {
			this.$axios("http://localhost:81/community")
			.then((result)=>{
				console.log(result)
				this.commInfo=result.data.data
				this.comidInfo=result.data.data1
			})
		}
	}
</script>

<style scoped="scoped">
	.contain {
		margin-top: 51px;
	}
</style>
