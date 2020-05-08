<template>
	<div class="contain">
		<div class="contain1">
	<Comshow v-if="commInfo.length!=0" v-for="(item,index) in commInfo" :mycommInfo="item" :key="index"></Comshow>
	</div>
	</div>
</template>

<script>
	//社区页面
	import Comshow from "@/views/Community/Comshow.vue"
	export default {
		name:"Community",
		data(){
			return {
				commInfo:[]
			}
		},
		components:{
			Comshow
		},
		mounted() {
			this.$axios("http://localhost:81/community")
			.then((result)=>{
				this.commInfo=result.data
			})
		}
	}
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	.contain {
		width: 100%;
		background-color:#A7DBF1;
	}
	.contain1{
		width: 660px;
		margin: 50px auto 0;
		padding-top: 15px;
	}
</style>
