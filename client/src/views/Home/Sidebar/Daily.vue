<template>
	<Showbox :typesdata="list"></Showbox>
</template>

<script>
	export default {
		data() {
			return {
				list:{
					title: "日常用品",
					arr: [
						{img: require("@/assets/home/daily1.jpg"),types: "化妆护肤"},
						{img: require("@/assets/home/daily2.jpg"),types: "学习用品"},
						{img: require("@/assets/home/type12.jpg"),types: "其他"},
					]
				}
			}
		},
		components:{
			Showbox:()=>import("./Showbox.vue")
		},
	}
</script>

<style scoped="scoped">
	
</style>
