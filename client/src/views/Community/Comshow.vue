<template>
	<div class="contain">
		<div class="touxiang">
			<img src="https://tvax2.sinaimg.cn/crop.0.0.1080.1080.180/86a17422ly8gdi6x7xyifj20u00u0abl.jpg?KID=imgbed,tva&Expires=1588570356&ssig=xHmzqX0iaH" />
		</div>
		<div class="grid-content">
			<div class="WB_info">
				央视财经
			</div>
			<div class="WB_from S_txt2">
				51分钟前
			</div>
			<div class="WB_text W_f14" node-type="feed_list_content">
				【满屏的朝气！最美变装，致青春！】你的青春是什么模样？是活力无限的绽放，是只争朝夕的奔跑，是精益求精的坚守？青年的你，不止一面美丽！青年的你，最是拼搏动人心！今天，五四青年节。谨以此片，献给青年的你，愿你不负韶华，在奋斗中绽放青春光芒！</div>
			<div>
				<div v-if="">
					<img src="//wx3.sinaimg.cn/orj360/006D5nCUly1gefq2m25gpj30zk0k0151.jpg" />
				</div>
				
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data() {
					return {
						
					}
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.contain {
		/* height: 500px; */
		width: 600px;
		overflow: hidden;
		padding: 20px 20px 4px;
	}

	.touxiang {
		min-height: 70px;
		float: left;
	}

	.touxiang img {
		height: 50px;
		width: 50px;
		border-radius: 50%;
	}

	.grid-content {
		width: 500px;
		margin-left: 60px;
	}

	.WB_info {
		margin: 0 0 3px;
		padding: 5px 0 0;
		margin-bottom: 7px;
	}

	.WB_from {
		margin-bottom: 2px;
		color: #808080;
		font-size: 12px;
		font-family: Arial;
	}

	.WB_text {
		padding: 1px 0 3px;
		overflow: hidden;
		line-height: 23px;
		word-wrap: break-word;
		font-size: 14px;
		font-family: Arial;
	}
</style>
