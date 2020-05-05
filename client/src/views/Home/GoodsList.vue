<template>
	<div class="goodsbox">
		<h2>好货广场</h2>
		<div class="goodslist">
			<div class="goods" @click="fn(item.id)" v-for="(item) in goods" :key="item.id">
				<div class="imgbox">
					<img :src="item.img" class="goodsimg" />
				</div>
				<p class="title" v-html="item.title"></p>
				<p class="intro" v-html="item.intro"></p>
				<div class="pricebox">
					<span class="price" v-cloak>￥{{item.price}}.00</span>
					<span class="oldprice" v-cloak>￥{{item.oldprice}}.00</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				goods: [{
						id: 0,
						img: 'http://localhost:81/public/goodsimg/erji2.png',
						title: "黑鲨游戏手机2 Pro 全网通",
						intro: "低价出售，学生党福利！有需者赶快联系！请勿乱拍，请私信联系，8+128G的！九成新！",
						price: 1690,
						oldprice: 5690
					},
					{
						id: 1,
						img: 'http://localhost:81/public/goodsimg/hanbingxie1.jpg',
						title: "酷比魔方iwork8超级版双系统，安卓+windows8共2 G+32g",
						intro: "入耳式 ，配件齐全，带麦，盒装行货，配件：收纳盒+硅胶套+线夹+说明书+外包装纸盒。线控完美兼容iphone/ipad等苹果设备，如用在安卓或黑莓系统的手机线控功能只能部分兼容！（不影响听歌）购买前可找根iphone线控耳机测试，它们的线",
						price: 65,
						oldprice: 160
					},
					{
						id: 2,
						img: 'http://localhost:81/public/goodsimg/huaban1.jpg',
						title: "ipad 2017 32g 苹果平板电脑",
						intro: "99新，诚意出，仅限同校交易。",
						price: 7,
						oldprice: 60
					},
					{
						id: 3,
						img: 'http://localhost:81/public/goodsimg/hzhf1.jpg',
						title: "OPPOR17",
						intro: "开本:16开 译者:管延圻 出版社:中信出版社 编者:柳川艳 85新",
						price: 325,
						oldprice: 690
					},
					{
						id: 4,
						img: 'http://localhost:81/public/goodsimg/ipad1.png',
						title: "95新beat tour面条入耳式耳",
						intro: "已消毒，闪发货直接拍就行除新疆西藏内蒙青海海南甘肃宁夏外包邮二手书，有使用痕迹，八成新左右库存大，书还有很多，择优发货很多书未上架，有需要可以私聊。",
						price: 62,
						oldprice: 125
					},
					{
						id: 5,
						img: 'http://localhost:81/public/goodsimg/ipad1.png',
						title: "包邮雪中悍刀行全集全新全套小说4册无删节 玄幻烽火戏诸侯著",
						intro: "全新带吊牌质量超好！仅剩一件，感兴趣的话点“我想要”和我私聊吧～",
						price: 1,
						oldprice: 9
					},
				]
			}
		},
		methods: {
			fn(goodsid) {
				this.$router.push({
					path: "/details",
					query: {
						goodsid: goodsid
					}
				}).catch(err => {})
			}
		},
		created() {
			// this.$axios("http://localhost")
		}
	}
</script>

<style scoped="scoped">
	.goodsbox {
		margin: 10px 0 40px;
	}

	.goodsbox h2 {
		text-align: center;
		margin: 25px 0 15px;
		font-size: 28px;
	}

	.goodslist {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.goods {
		width: 218px;
		height: 380px;
		border-radius: 5px;
		margin-bottom: 20px;
		margin-right: 20px;
		border: 1px solid #EEEEEE;
		transition: all 0.5s;
		background-color: #fff;
		position: relative;
	}

	.goods:nth-of-type(5n) {
		margin-right: 0;
	}

	.goods:hover {
		box-shadow: 0 0 10px 2px rgba(205, 205, 205, 0.9);
	}

	.goods .imgbox {
		overflow: hidden;
		width: 218px;
		height: 220px;
		border-radius: 5px 5px 0 0;
	}

	.goods .imgbox img {
		width: 218px;
		height: 220px;
		border-radius: 5px 5px 0 0;
		transition: all 0.5s;
	}

	.goods .imgbox:hover img {
		transform: scale(1.1);
	}

	.goods .title {
		font-weight: bold;
		margin: 20px 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.goods .intro {
		position: absolute;
		top: 290px;
		margin: 0 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		font-size: 12px;
		color: #93999f;
		transition: all 0.5s;
	}

	.goods .intro:hover {
		color: #F8A40E;
	}

	.goods .pricebox {
		position: absolute;
		bottom: 10px;
		left: 10px;
		width: 200px;

	}

	.pricebox .price {
		color: red;
		font-weight: bold;
		font-size: 14px;
	}

	.pricebox .oldprice {
		font-size: 11px;
		text-decoration: line-through;
		margin-left: 15px;
		color: #9F9D9C;
	}

	[v-cloak] {
		display: none;
	}
</style>
