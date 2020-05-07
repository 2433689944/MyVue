<template>
	<div>
		<img src="@/assets/home/blankbox.png">
		<p v-cloak>什么也没有 ~</p>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	div img {
		width: 200px;
		margin: 120px 0 20px 330px;
	}

	div p {
		text-align: center;
		font-weight: bold;
		font-size: 25px;
		color: #737373;
		font-family: 'kaiti';
	}

	[v-cloak] {
		display: none;
	}
</style>
