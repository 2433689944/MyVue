<template>
	<Showbox :typesdata="list"></Showbox>
</template>

<script>
	export default {
		data() {
			return {
				list:{
					title: "代步工具",
					arr: [
						{img: require("@/assets/home/walktool1.jpg"),types: "自行车"},
						{img: require("@/assets/home/walktool2.jpg"),types: "旱冰鞋"},
						{img: require("@/assets/home/walktool3.jpg"),types: "平衡车"},
						{img: require("@/assets/home/walktool4.jpg"),types: "滑板"},
						{img: require("@/assets/home/walktool5.jpg"),types: "油车"},
						{img: require("@/assets/home/walktool6.jpg"),types: "电动车"},
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
