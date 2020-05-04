<template>
	<div class="block">
		<el-carousel height="400px">
			<el-carousel-item v-for="(item,index) in arr" :key="index">
				<!-- <h3 class="small">{{ item }}</h3> -->
				<img :src="item" />
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [
					require("@/assets/home/ads1.jpg"),
					require("@/assets/home/ads2.jpg"),
					require("@/assets/home/ads3.jpg"),
					require("@/assets/home/ads4.jpg"),
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.el-carousel__item img {
		width: 100%;
		height: 400px;
		object-fit: cover;
	}

	.block {
		
	}

	.el-carousel {
		border-radius: 0 7px 7px 0;
	}


	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>
