<template>
	<div class="tab">
		<Navbar></Navbar>
		<router-view></router-view>
		<Bottombar></Bottombar>
	</div>
</template>

<script>
	//导航
	import Navbar from '../components/Navbar.vue'
	import Bottombar from '../components/Bottombar.vue'
	export default{
		name:"Tab",
		components:{
			Navbar,
			Bottombar
		}
	}
</script>

<style>
	.tab div:nth-of-type(2) {
		background-color: #F4F4F4;
		width: 1180px;
		margin: 0 auto;
	}
</style>
