<template>
	<div>
		<el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
			{{tag}}
		</el-tag>
	</div>
</template>
<style scoped="scoped">
	.el-tag+.el-tag {
		margin-left: 10px;
	}

	.button-new-tag {
		margin-left: 10px;
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		vertical-align: bottom;
	}
</style>

<script>
	export default {
		data() {
			return {
				dynamicTags: ['原装正品', '无拆无修', '如假包换', '价格可谈', '一口价', '欢迎来撩', '非诚勿扰'],
				inputVisible: false
			};
		},
		methods: {
			//移除标签
			handleClose(tag) {
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
				//触发父组件自定义事件，并传值
				this.$emit("mytag1", this.dynamicTags)
			}
		},
		//mounted生命钩子
		mounted() {
			//触发父组件自定义事件，并传值
			this.$emit("mytag1", this.dynamicTags)
		}
	}
</script>
