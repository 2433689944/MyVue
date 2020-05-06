<template>
	<Showbox :typesdata="list"></Showbox>
</template>

<script>
	export default {
		data() {
			return {
				list:{
					title: "数码产品",
					arr: [
						{img: require("@/assets/home/type1.jpg"),types: "手机"},
						{img: require("@/assets/home/type2.jpg"),types: "平板"},
						{img: require("@/assets/home/type3.jpg"),types: "笔记本"},
						{img: require("@/assets/home/type4.jpg"),types: "台式机"},
						{img: require("@/assets/home/type5.jpg"),types: "手表手环"},
						{img: require("@/assets/home/type6.jpg"),types: "单反相机"},
						{img: require("@/assets/home/type7.jpg"),types: "充电宝"},
						{img: require("@/assets/home/type8.jpg"),types: "耳机"},
						{img: require("@/assets/home/type9.jpg"),types: "手机配件"},
						{img: require("@/assets/home/type10.jpg"),types: "电脑配件"},
						{img: require("@/assets/home/type11.jpg"),types: "路由器"},
						{img: require("@/assets/home/type12.jpg"),types: "其他"}
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
