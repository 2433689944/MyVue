<template>
	<div class="bottombar">
		<Service></Service>
		<Help></Help>
		<Copyright></Copyright>
		<Auth></Auth>
	</div>
</template>

<script>
	import Service from "./Bottombar/Service.vue"
	import Help from "./Bottombar/Help.vue"
	import Copyright from "./Bottombar/Copyright.vue"
	import Auth from "./Bottombar/Auth.vue"
	export default {
		name: "Bottombar",
		components:{
			Service,
			Help,
			Copyright,
			Auth
		}
	}
</script>

<style scoped="scoped">
	.bottombar {
		width: 100%;
		height: 500px;
		background-color: #545c64;
		border-top: 1px solid #545c64;
	}
</style>
