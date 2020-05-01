<template>
	<div class="mod-service">
		<div>
			<div class="mod-service-item">
				<div class="pic-many"></div>
				<p>品类齐全，轻松购物</p>
			</div>
			<div class="mod-service-item">
				<div class="pic-fast"></div>
				<p>多仓直发，极速配送</p>
			</div>
			<div class="mod-service-item">
				<div class="pic-good"></div>
				<p>正品行货，精致服务</p>
			</div>
			<div class="mod-service-item">
				<div class="pic-save"></div>
				<p>天天低价，畅选无忧</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.mod-service {
		border-bottom: 1px solid #DEDEDE;
	}

	.mod-service>div {
		width: 1180px;
		display: flex;
		justify-content: space-between;
		margin: 30px auto;
	}

	.mod-service-item {
		width: 100%;
		height: 42px;
		position: relative;
	}

	.mod-service-item div {
		display: inline-block;
		width: 36px;
		height: 42px;
		background-repeat: no-repeat;
		background-image: url(../../assets/bottombar/sprite.footer.png);
		position: absolute;
		left: 30px;
	}

	.pic-many {
		background-position: left bottom;
	}

	.pic-fast {
		background-position: -41px bottom;
	}

	.pic-good {
		background-position: -82px bottom;
	}

	.pic-save {
		background-position: -123px bottom;
	}

	.mod-service-item p {
		display: inline-block;
		height: 42px;
		line-height: 42px;
		font-size: 18px;
		font-weight: bold;
		color: #E8EBEF;
		position: absolute;
		left: 76px;
	}
</style>
