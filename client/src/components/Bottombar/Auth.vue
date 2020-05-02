<template>
	<div class="mod-auth">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.mod-auth {
		width: 100%;
		height: 32px;
		margin: 20px 0 40px;
		display: flex;
		justify-content: center;
	}
	
	.mod-auth div {
		height: 100%;
		width: 103px;
		margin: 0 10px;
		background-repeat: no-repeat;
		background-image: url(../../assets/bottombar/sprite.footer.png);
		cursor: pointer;
	}
	
	.mod-auth div:first-of-type {
		background-position: right top;
	}
	
	.mod-auth div:nth-of-type(2) {
		background-position: right -37px;
	}
	
	.mod-auth div:nth-of-type(3) {
		background-position: right -74px;
	}
	
	.mod-auth div:nth-of-type(4) {
		background-position: right -111px;
	}
	
	.mod-auth div:nth-of-type(5) {
		background-position: right -148px;
	}
</style>
