<template>
	<div class="mod-copyright">
		<ul class="line1">
			<li v-for="(item,index) in linedata1" :key="index">
				<span>{{item}}</span>
				<span>|</span>
			</li>
			<li>
				<span>edia & IR</span>
			</li>
		</ul>
		<p class="line2" v-for="(item,index) in linedata2" :key="index">
			<span v-for="(item2,index2) in item.list" :key="index2">{{item2}}</span>
		</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				linedata1: ["关于我们", "联系我们", "联系客服", "合作招商", "商家帮助", "营销中心", "手机校园",
					"友情链接", "销售联盟", "校园社区", "风险监测", "隐私政策", "京东公益", "English Site"
				],
				linedata2: [{
					list: ["京公网安备 11000002000088号", "|", "京ICP证070359号", "|", "互联网药品信息服务资格证编号(京)-经营性-2014-0008",
						"|", "新出发京零 字第大120007号"
					]
				}, {
					list: ["互联网出版许可证编号新出网证(京)字150号", "|", "出版物经营许可证", "|", "网络文化经营许可证京网文[2014]2148-348号",
						"|", "违法和不良信息举报电话：4006561155"
					]
				}, {
					list: ["Copyright © 2004 - 2019 京东JD.com 版权所有", "|", "消费者维权热线：4006067733", "|",
						"(京)网械平台备字(2018)第00003号", "|", "营业执照"
					]
				}]
			}
		}
	}
</script>

<style scoped="scoped">
	.mod-copyright {
		text-align: center;
		width: 1180px;
		margin: 0 auto;
	}

	.mod-copyright .line1 {
		margin: 10px 0 8px;
	}

	.mod-copyright li span:first-of-type {
		font-size: 12px;
		color: #E8EBEF;
		cursor: pointer;
		padding: 0 10px;
	}

	.mod-copyright li span:first-of-type:hover {
		color: #E0313F;
	}

	.mod-copyright li span:nth-of-type(2) {
		color: #E8EBEF;
		font-size: 10px;
	}

	.line2 span {
		font-size: 12px;
		color: #999999;
		margin: 0 4px;
	}

	.line2 span:hover {
		color: #E0313F;
	}
</style>
