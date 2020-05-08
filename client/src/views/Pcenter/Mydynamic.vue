<template>
	<div class="mydynamic">
		<h3 class="boxtitle">我的动态</h3>
		<div class="itemlist">
			<div v-if="dynamicArray.length!=0">
				<el-collapse>
					<el-collapse-item v-for="(item,index) in dynamicArray" :key="index" :title="item.time" :name="index">
						<div>{{item.content}}</div>
					</el-collapse-item>
				</el-collapse>
			</div>
			<div v-else>
				<Empty></Empty>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		//我的动态组件
		data() {
			return {
				dynamicArray: []
			}
		},
		components: {
			Empty: () => import("./Empty.vue")
		},
		mounted() {
			this.$axios("http://localhost:81/getmydyn")
				.then((result) => {
					this.dynamicArray = result.data
				})
		},
	}
</script>

<style scoped="scoped">
	.mydynamic {
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		padding: 30px 30px;
	}

	.boxtitle {
		font-size: 22px;
		font-weight: normal;
		padding: 10px;
		border-bottom: 1px solid #E0E0E0;
	}

	.itemlist {
		margin-top: 20px;
		height: 480px;
		border: 1px solid #C8C6C6;
		box-sizing: border-box;
		padding: 20px;
	}

	.el-collapse {
		height: 438px;
		border-bottom: 0;
		overflow-y: auto;
	}

	.el-collapse-item__content div {
		text-indent: 2em;
	}
</style>
