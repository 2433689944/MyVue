<template>
	<div class="magnify">
		<div class="left_contaner">
			<div class="middle_img" @mouseover="boxMouseOver" @mouseleave="boxMouseLeave">
				<img :src="middleImg" />
				<div class="shade" @mouseover="shadeMouseOver" @mousemove="shadeMouseMove" ref="shade" v-show="isshow"></div>
			</div>
			<!-- 缩略图容器 -->
			<div class="carousel">
				<!-- 缩略图展示盒子 -->
				<div class="show_box">
					<ul class="picture_container" ref="middlePicture">
						<li class="picture_item" @mouseover="tabPicture(item)" v-for="(item, index) in pictureList" :key="index">
							<img :src="item" class="small_img" alt="">
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 右边放大区域 -->
		<div class="right_contanier" v-show="isshow">
			<img :src="middleImg" class="big_img" />
		</div>


		<!-- 		<div class="goodsinfo">
			<ul>
				<li class="title" v-html="goodsinfo.title"></li>
				<li v-html="goodsinfo.intro"></li>
				<li>
					<span v-for="(item,index) in label" class="labels" v-html="item"></span>
				</li>
				<li>
					<span class="oldprice" v-cloak>原价:{{goodsinfo.oldprice}}</span>
					<span class="price" v-cloak>现价:{{goodsinfo.price}}</span>
				</li>
				<li>
					<button v-for="(item,index) in types" class="type" v-html="item"></button>
				</li>
				<li v-cloak>qq:{{goodsinfo.qq}}</li>
				<li v-cloak>微信:{{goodsinfo.wechat}}</li>
				<li v-cloak>电话:{{goodsinfo.phone}}</li>
			</ul>
			<button class="car" @click="intocar">查看购物车</button>
			<button class="car" @click="putintocar">加入购物车</button>
		</div> -->
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		props: {
			good: Object,
			middleImgWidth: {
				default: 300,
				type: Number
			}, // 产品图片宽
			middleImgHeight: {
				default: 300,
				type: Number
			}, // 产品图片高
			thumbnailHeight: {
				default: 100,
				type: Number
			}, // 缩略图容器高度
			zoom: {
				default: 2, // 缩略比例,放大比例
				type: Number
			}
		},
		data() {
			return {
				goodsinfo: {},
				label: [],
				types: [],
				pictureList: [],
				middleImg: '', // 选中图片
				isshow: false, // 控制选取图片显示
				itemWidth: 80, // 缩略图每张的宽度
			}
		},
		mounted() {
			this.$axios("http://localhost:81/getgood", {
					params: {
						goodsid: this.$route.query.goodsid
					}
				})
				.then((result) => {
					this.goodsinfo = result.data[0];
					console.log(this.goodsinfo)
					this.pictureList = result.data[0].img.split("-");
					this.label = result.data[0].label.split("-");
					this.types = result.data[0].types.split("-");
					this.middleImg = this.pictureList[0];


					// 计算缩略图的宽度,默认是显示4张图片,两边箭头的宽度和为50
					this.itemWidth = (this.middleImgWidth - 50) / 4
					this.$nextTick(() => {
						// 容器的高
						const imgWidth = this.middleImgHeight + this.thumbnailHeight + 20
						console.log(imgWidth)
						// 设置缩略图容器高
						$('.carousel').css({
							height: this.thumbnailHeight
						})
						// 设置每个缩略图宽
						$('.picture_item').css({
							width: this.itemWidth
						})

						// 设置放大图片的宽高(图片的放大倍数)
						$('.right_contanier .big_img').css({
							width: imgWidth * this.zoom,
							height: imgWidth * this.zoom
						})
					})
				})
		},
		methods: {
			getPageScroll() {
				return {
					scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
					scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
				}
			},
			// 获取事件对象点击的点，相对于文档左上角的坐标
			getEventPage(e) {
				return {
					pageX: e.clientX + this.getPageScroll().scrollLeft,
					pageY: e.clientY + this.getPageScroll().scrollTop
				}
			},
			// 鼠标移入,显示放大镜和大图
			boxMouseOver(e) {
				this.isshow = true;
				let x = e.offsetX - $('.shade').width() / 2;
				let y = e.offsetY - $('.shade').height() / 2;
				let maxLeft = $('.middle_img').width() - $('.shade').width();
				let maxTop = $('.middle_img').height() - $('.shade').height()
				x = x <= 0 ? 0 : x
				x = x >= maxLeft ? maxLeft : x
				y = y <= 0 ? 0 : y
				y = y >= maxTop ? maxTop : y
				$('.shade').css({
					left: x,
					top: y
				})
			},
			// 鼠标移除,隐藏放大镜和大图
			boxMouseLeave() {
				this.isshow = false
			},
			// 鼠标移动
			shadeMouseMove(e) {
				//用页面x - 父盒子的offsetLeft - 父盒子的左边框宽度 标红的两个方法补在下面
				let x = this.getEventPage(e).pageX - $('.middle_img')[0].offsetParent.offsetLeft - $('.middle_img')[0].offsetParent
					.clientLeft;
				//用页面y - 父盒子的offsetTop - 父盒子的上边框宽度
				let y = this.getEventPage(e).pageY - $('.middle_img')[0].offsetParent.offsetTop - $('.middle_img')[0].offsetParent.clientTop;
				//让阴影的坐标居中
				x -= $('.shade').width() / 2;
				y -= $('.shade').height() / 2;
				// 移动边界限制
				let maxLeft = $('.middle_img').width() - $('.shade').width()
				let maxTop = $('.middle_img').height() - $('.shade').height()
				x = x <= 0 ? 0 : x
				x = x >= maxLeft ? maxLeft : x
				y = y <= 0 ? 0 : y
				y = y >= maxTop ? maxTop : y
				// 重新赋值当前的定位值
				$('.shade').css({
					left: x,
					top: y
				})
				// 计算出实时的大图的定位,首先计算出比例
				// 比例为x:大图宽度/小图宽度 y: 大图高度/小图高度,将小图的定位乘以比例就是大图的定位
				const xRate = $('.big_img').width() / $('.middle_img').width()
				const yRate = $('.big_img').height() / $('.middle_img').height()
				$('.big_img').css({
					left: -x * xRate,
					top: -y * yRate
				})
			},
			// 鼠标移入阴影,去除自定义事件
			shadeMouseOver(e) {
				e.preventDefault();
				e.stopPropagation();
			},
			
			
			
			
			// 切换图片
			tabPicture(item) {
				this.middleImg = item
			},





			intocar() {
				this.$router.push({
					path: "/car",
				});
			},

			putintocar() {
				//得到session中的邮箱 id 再加上goodsid 一并放入数据库
			},
		}
	}
</script>

<style scoped="scoped">
	.magnify {
		position: relative;
		width: 1180px;
		padding: 30px;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 7px;
	}

	.left_contaner {
		width: 350px;
	}

	.right_contanier {
		overflow: hidden;
		position: absolute;
		top: 30px;
		left: 335px;
		width: 420px;
		height: 420px;
	}

	.right_contanier .big_img {
		position: absolute;
		top: 0px;
		left: 0px;
	}

	.big_img {
		z-index: 100;
	}





	.left_contaner .middle_img {
		width: 300px;
		height: 300px;
		box-sizing: border-box;
		position: relative;
	}

	.left_contaner .shade {
		background-color: rgba(135, 206, 235, .5);
		position: absolute;
		top: 0;
		left: 0;
		cursor: move;
		width: 150px;
		height: 150px;
	}

	.left_contaner .middle_img img {
		width: 100%;
		height: 100%;
	}

	.left_contaner .carousel {
		width: 100%;
		margin-top: 20px;
		display: -webkit-flex;
	}

	.left_contaner .carousel .show_box {
		flex: 1;
		overflow: hidden;
		position: relative;
	}

	.left_contaner .carousel .arrow {
		flex-basis: 25px;
		cursor: pointer;
	}

	.left_contaner .carousel .picture_container {
		width: 200%;
		height: 100%;
		position: absolute;
		overflow: hidden;
		top: 0;
		left: 0;
	}

	.left_contaner .picture_container .picture_item {
		height: 100%;
		float: left;
		padding: 5px;
		box-sizing: border-box;
	}

	.left_contaner .picture_container .picture_item:hover {
		border: 2px solid #f2019f;
	}

	.left_contaner .picture_container .picture_item img {
		width: 100%;
		height: 100%;
	}


	.goodsinfo {
		background-color: #F0F0F0;
		width: 400px;
		height: 400px;
		display: inline-block;
		position: absolute;
		top: 20px;
		left: 319px;


	}


	.goodsinfo li {
		background-color: #F4F4F4;
		display: block;
		height: 30px;
		margin-top: 20px;
	}

	.goodsinfo li img {
		height: 20px;
		width: 20px;
		margin-top: 5px;
	}

	.goodsinfo li span {
		line-height: 30px;
	}

	.title {
		font-size: 15px;
		text-align: center;
		font-weight: bold;
	}

	.labels {
		margin-right: 5px;
	}

	.type {
		background-color: #00D6B2;
		border-radius: 1px;
		margin-right: 20px;
	}

	.oldprice {
		margin-right: 10px;
		text-decoration: line-through;
	}

	.price {
		color: red;
	}

	.car {
		width: 200px;
		height: 50px;
		background-color: orangered;
	}

	[v-cloak] {
		display: none
	}
</style>
