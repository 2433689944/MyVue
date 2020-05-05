<template>
	<Showbox :typesdata="list"></Showbox>
</template>

<script>
	export default {
		data() {
			return {
				list:{
					title: "虚拟产品",
					arr: [
						{img: require("@/assets/home/virtual1.jpg"),types: "游戏周边"},
						{img: require("@/assets/home/virtual2.jpg"),types: "充值卡"},
						{img: require("@/assets/home/virtual3.jpg"),types: "各类账号"},
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
