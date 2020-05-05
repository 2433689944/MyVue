<template>
	<Showbox :typesdata="list"></Showbox>
</template>

<script>
	export default {
		data() {
			return {
				list:{
					title: "体育健身",
					arr: [
						{img: require("@/assets/home/sports1.jpg"),types: "球类"},
						{img: require("@/assets/home/sports2.jpg"),types: "球拍"},
						{img: require("@/assets/home/sports3.jpg"),types: "运动鞋"},
						{img: require("@/assets/home/sports4.jpg"),types: "运动装备"},
						{img: require("@/assets/home/sports5.jpg"),types: "健身器材"},
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
