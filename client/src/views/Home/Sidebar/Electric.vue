<template>
	<Showbox :typesdata="list"></Showbox>
</template>

<script>
	export default {
		data() {
			return {
				list:{
					title: "小型电器",
					arr: [
						{img: require("@/assets/home/electric1.jpg"),types: "风扇"},
						{img: require("@/assets/home/electric2.jpg"),types: "电吹风"},
						{img: require("@/assets/home/electric3.jpg"),types: "音箱"},
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
