<template>
	<div class="mod-help">
		<div>
			<div class="modhelp-nav" v-for="(item,index) in arr" :key="index">
				<h5>{{item.title}}</h5>
				<ul>
					<li v-for="(item,index) in item.list" :key="index">{{item}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [{
					title: "购物指南",
					list: ["购物流程", "会员介绍", "生活旅行", "常见问题", "大家电", "联系客服"]
				}, {
					title: "配送方式",
					list: ["上门自提", "211限时达", "配送服务查询", "配送费收取标准", "海外配送"]
				}, {
					title: "支付方式",
					list: ["货到付款", "在线支付", "分期付款", "公司转账"]
				}, {
					title: "售后服务",
					list: ["售后政策", "价格保护", "退款说明", "返修/退换货", "取消订单"]
				}, {
					title: "特色服务",
					list: ["夺宝岛", "DIY装机", "延保服务", "校园E卡", "校园通信", "智能校园"]
				}]
			}
		}
	}
</script>

<style scoped="scoped">
	.mod-help {
		width: 1180px;
		margin: 0 auto;
	}

	.mod-help>div {
		height: 160px;
		padding: 20px 0;
		display: flex;
		border-bottom: 1px solid #DEDEDE;
	}

	.modhelp-nav {
		width: 100%;
	}

	.modhelp-nav h5 {
		margin-bottom: 5px;
		color: #fff;
		font-size: 14px;
		padding-left: 50px;
	}

	.modhelp-nav li {
		display: block;
		font-size: 12px;
		color: #E8EBEF;
		padding: 3px 0 3px 50px;
		cursor: pointer;
	}

	.modhelp-nav li:hover {
		color: #E0313F;
	}
</style>
