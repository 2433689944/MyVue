<template>
	<Showbox :typesdata="list"></Showbox>
</template>

<script>
	export default {
		data() {
			return {
				list:{
					title: "书籍教材",
					arr: [
						{img: require("@/assets/home/book1.jpg"),types: "教科书"},
						{img: require("@/assets/home/book2.jpg"),types: "文学"},
						{img: require("@/assets/home/book3.jpg"),types: "小说"},
						{img: require("@/assets/home/book4.jpg"),types: "电子书"},
						{img: require("@/assets/home/book5.jpg"),types: "教育考试"},
						{img: require("@/assets/home/book6.jpg"),types: "动漫"},
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
