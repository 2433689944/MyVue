<template>
	<Showbox :typesdata="list"></Showbox>
</template>

<script>
	export default {
		data() {
			return {
				list:{
					title: "衣鞋帽伞",
					arr: [
						{img: require("@/assets/home/clothes1.jpg"),types: "裙子"},
						{img: require("@/assets/home/clothes2.jpg"),types: "裤子"},
						{img: require("@/assets/home/clothes3.jpg"),types: "衣服"},
						{img: require("@/assets/home/clothes4.jpg"),types: "帽子"},
						{img: require("@/assets/home/clothes5.jpg"),types: "鞋子"},
						{img: require("@/assets/home/clothes6.jpg"),types: "箱子"},
						{img: require("@/assets/home/clothes7.jpg"),types: "包包"},
						{img: require("@/assets/home/clothes8.jpg"),types: "雨伞"},
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
