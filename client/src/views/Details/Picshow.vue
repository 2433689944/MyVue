<template>
	<div class="picshow">
		<div class="left_contaner">
			<!-- 展示图 -->
			<div class="middle_img" @mouseover="boxMouseOver" @mouseleave="boxMouseLeave">
				<img :src="middleImg" />
				<div class="shade" @mouseover="shadeMouseOver" @mousemove="shadeMouseMove" ref="shade" v-show="isshow"></div>
			</div>
			<!-- 缩略图 -->
			<ul class="carousel">
				<li class="picture_item" v-for="(item, index) in pictureList" :key="index" @mouseover="tabPicture(item)">
					<img :src="item" />
				</li>
			</ul>
		</div>
		<!-- 放大图 -->
		<div class="right_contanier" v-show="isshow">
			<img :src="middleImg" class="big_img" />
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				pictureList: [],
				middleImg: '', // 选中图片
				isshow: false, // 控制选取图片显示
			}
		},
		props: [
			"pictureL",
			"middleI"
		],
		mounted() {
			this.pictureList = this.pictureL;
			this.middleImg = this.middleI;
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
				this.middleImg = item;
			},
		}
	}
</script>

<style scoped="scoped">
	.picshow{
		width: 350px;
	}
	
	.left_contaner {
		width: 350px;
	}

	.right_contanier {
		overflow: hidden;
		position: absolute;
		border: 1px solid #eee;
		top: 40px;
		left: 400px;
		width: 450px;
		height: 450px;
	}

	.right_contanier .big_img {
		position: absolute;
		top: 0px;
		left: 0px;
	}

	.big_img {
		width: 1050px;
		height: 1050px;
		z-index: 100;
	}

	.left_contaner .middle_img {
		width: 350px;
		height: 350px;
		border: 1px solid #eee;
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
		height: 59px;
		width: 350px;
		margin-top: 20px;
		display: flex;
		justify-content: flex-start;
	}

	.carousel .picture_item {
		height: 55px;
		width: 55px;
		margin-right: 10px;
		border: 2px solid transparent;
	}

	.carousel .picture_item:hover {
		border: 2px solid #e53e41;
	}

	.carousel .picture_item img {
		height: 55px;
		width: 55px;
		object-fit: hover;
	}
</style>
