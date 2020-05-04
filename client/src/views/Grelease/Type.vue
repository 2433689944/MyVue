<template>
	<div class="block">
		<el-cascader placeholder="试试搜索：手机配件" v-model="value" :options="options" filterable clearable @change="handleChange"></el-cascader>
	</div>
</template>

<script>
	export default {
		name: "Type",
		methods: {
			//当选中节点变化时触发/value：选中节点的值
			handleChange(value) {
				this.$emit("mytype", value)
			}
		},
		data() {
			return {
				value: [],
				options: [{
						value: '数码产品',
						label: '数码产品',
						children: [{
							value: '手机',
							label: '手机',
						}, {
							value: '平板',
							label: '平板',
						}, {
							value: '笔记本',
							label: '笔记本',
						}, {
							value: '台式机',
							label: '台式机',
						}, {
							value: '手表手环',
							label: '手表手环',
						}, {
							value: '单反相机',
							label: '单反相机',
						}, {
							value: '充电宝',
							label: '充电宝',
						}, {
							value: '耳机',
							label: '耳机',
						}, {
							value: '手机配件',
							label: '手机配件',
						}, {
							value: '电脑配件',
							label: '电脑配件',
						}, {
							value: '路由器',
							label: '路由器',
						}, {
							value: '其他',
							label: '其他',
						}]
					},
					{
						value: '书籍教材',
						label: '书籍教材',
						children: [{
							value: '教科书',
							label: '教科书',
						}, {
							value: '文学',
							label: '文学',
						}, {
							value: '小说',
							label: '小说',
						}, {
							value: '电子书',
							label: '电子书',
						}, {
							value: '教育考试',
							label: '教育考试',
						}, {
							value: '动漫',
							label: '动漫',
						}, {
							value: '其他',
							label: '其他',
						}]
					},
					{
						value: '衣鞋帽伞',
						label: '衣鞋帽伞',
						children: [{
							value: '裙子',
							label: '裙子',
						}, {
							value: '裤子',
							label: '裤子',
						}, {
							value: '衣服',
							label: '衣服',
						}, {
							value: '帽子',
							label: '帽子',
						}, {
							value: '鞋子',
							label: '鞋子',
						}, {
							value: '箱子',
							label: '箱子',
						}, {
							value: '包包',
							label: '包包',
						}, {
							value: '雨伞',
							label: '雨伞',
						}, {
							value: '其他',
							label: '其他',
						}]
					},
					{
						value: '代步工具',
						label: '代步工具',
						children: [{
							value: '自行车',
							label: '自行车',
						}, {
							value: '旱冰鞋',
							label: '旱冰鞋',
						}, {
							value: '平衡车',
							label: '平衡车',
						}, {
							value: '滑板',
							label: '滑板',
						}, {
							value: '油车',
							label: '油车',
						}, {
							value: '电动车',
							label: '电动车',
						}, {
							value: '其他',
							label: '其他',
						}]
					},
					{
						value: '体育健身',
						label: '体育健身',
						children: [{
							value: '球类',
							label: '球类',
						}, {
							value: '球拍',
							label: '球拍',
						}, {
							value: '运动鞋',
							label: '运动鞋',
						}, {
							value: '运动装备',
							label: '运动装备',
						}, {
							value: '健身器材',
							label: '健身器材',
						}, {
							value: '其他',
							label: '其他',
						}]
					},
					{
						value: '家用电器',
						label: '家用电器',
						children: [{
							value: '电磁炉',
							label: '电磁炉',
						}, {
							value: '洗衣机',
							label: '洗衣机',
						}, {
							value: '冰箱',
							label: '冰箱',
						}, {
							value: '风扇',
							label: '风扇',
						}, {
							value: '电饭煲',
							label: '电饭煲',
						}, {
							value: '豆浆机',
							label: '豆浆机',
						}, {
							value: '电吹风',
							label: '电吹风',
						}, {
							value: '音箱',
							label: '音箱',
						}, {
							value: '其他',
							label: '其他',
						}]
					},
					{
						value: '日常用品',
						label: '日常用品',
						children: [{
							value: '化妆护肤',
							label: '化妆护肤',
						}, {
							value: '学习用品',
							label: '学习用品',
						}, {
							value: '其他',
							label: '其他',
						}]
					},
					{
						value: '虚拟产品',
						label: '虚拟产品',
						children: [{
							value: '游戏周边',
							label: '游戏周边',
						}, {
							value: '充值卡',
							label: '充值卡',
						}, {
							value: '各类账号',
							label: '各类账号',
						}, {
							value: '其他',
							label: '其他',
						}]
					}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.block .el-cascader {
		width: 360px;
	}
</style>
