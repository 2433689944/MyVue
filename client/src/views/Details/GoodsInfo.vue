<template>
	<div class="goodsinfo">
		<div class="userbox">
			<el-avatar :size="40" :src="userinfo.headpic"></el-avatar>
			<p v-cloak>发布者：{{userinfo.username}}</p>
		</div>
		<ul class="goodsbox">
			<li class="title" v-html="goodsinfo.title"></li>
			<li class="intro" v-html="goodsinfo.intro"></li>
			<li class="price">
				<i class="iconfont icon-emijiage"></i>
				<span class="newprice" v-cloak>现价：<span>￥{{goodsinfo.price}}.00</span></span>
				<span class="oldprice" v-cloak>原价：<span>￥{{goodsinfo.oldprice}}.00</span></span>
			</li>
			<li class="label">
				<i class="iconfont icon-jiageprice1"></i>
				<span>
					<el-tag size="small" v-for="(item,index) in label" v-html="item"></el-tag>
				</span>
			</li>
			<li>
				<i class="iconfont icon-qq"></i>
				<span v-cloak class="contact">QQ：{{goodsinfo.qq}}</span>
			</li>
			<li>
				<i class="iconfont icon-weixin"></i>
				<span v-cloak class="contact">微信：{{goodsinfo.wechat}}</span>
			</li>
			<li>
				<i class="iconfont icon-dianhuahover"></i>
				<span v-cloak class="contact">电话：{{goodsinfo.phone}}</span>
			</li>
		</ul>
		<div class="goodsbtn" id="goodsbtn">
			<button type="button" id="addcar" @click="addcar" v-cloak>加入购物车</button>
			<button type="button" id="findcar" @click="findcar" v-cloak>查看购物车</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["goodsinfo", "label", "types", "userinfo"],
		methods: {
			addcar() {
				this.$axios("http://localhost:81/addcar", {
						params: {
							id: this.goodsinfo.id
						}
					})
					.then((result) => {
						console.log(result.data)
						if (result.data.code == 2000) {
							this.$message({
								message: '添加成功',
								type: 'success',
								center: true,
								duration: 1500
							});
						} else if (result.data.code == 4001) {
							this.$message({
								message: '请勿重复添加 ！',
								type: 'warning',
								center: true,
								duration: 1500
							});
						}
					})
			},
			findcar() {
				this.$router.push({
					path: "/car",
				});
			},
		},
	}
</script>

<style scoped="scoped">
	.goodsinfo {
		width: 600px;
		height: 429px;
		position: absolute;
		top: 40px;
		left: 450px;
	}

	.userbox {
		position: relative;
		height: 40px;
		padding-bottom: 15px;
		border-bottom: 1px solid #D9D9D9;
	}

	.userbox p {
		position: absolute;
		left: 52px;
		top: 10px;
		font-size: 15px;
	}

	.goodsbox {
		height: 280px;
	}

	.goodsbox li {
		margin-top: 13px;
		display: block;
	}

	.goodsbox .title {
		font-size: 16px;
		color: #17233d;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.goodsbox .intro {
		font-size: 14px;
		color: #616776;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.price .newprice {
		margin-left: 34px;
		font-size: 14px;
		color: #616776;
	}

	.newprice span {
		font-size: 15px;
		color: red;
		font-weight: bold;
	}

	.price .oldprice {
		margin-left: 20px;
		font-size: 14px;
		color: #616776;
	}

	.oldprice span {
		text-decoration: line-through;
		font-size: 13px;
	}

	.label {
		position: relative;
	}

	li {
		position: relative;
	}

	li i {
		font-size: 18px;
		position: absolute;
		top: 3px;
		color: #5C6270;
	}

	.label>span {
		margin-left: 34px;
	}

	.label>span>span {
		margin-right: 10px;
	}

	.contact {
		margin-left: 34px;
		font-size: 14px;
		color: #616776;
	}

	[v-cloak] {
		display: none
	}

	.goodsbtn {
		margin-top: 10px;
		margin-left: 60px;
	}

	.goodsbtn button {
		height: 42px;
		width: 190px;
		margin-right: 40px;
		border: 1px solid red;
		cursor: pointer;
	}

	#addcar {
		background-color: #F5F3EF;
		border: 1px solid #DF3033;
		color: #DF3033;
		outline: none;
		font-size: 18px;
	}

	#addcar:hover {
		background-color: #DF3033;
		color: #ffffff;
	}

	#findcar {
		background-color: #DF3033;
		border: 1px solid #DF3033;
		color: #ffffff;
		outline: none;
		font-size: 18px;
	}

	#findcar:hover {
		background-color: #CF0010;
		border: 1px solid #CF0010;
		color: #ffffff;
	}
</style>
