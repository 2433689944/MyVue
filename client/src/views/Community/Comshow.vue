<template>
	<div class="contain">
		<template v-for="(item) in mycommInfo">
		<div class="touxiang">
			<img src="https://tvax2.sinaimg.cn/crop.0.0.1080.1080.180/86a17422ly8gdi6x7xyifj20u00u0abl.jpg?KID=imgbed,tva&Expires=1588570356&ssig=xHmzqX0iaH" />
		</div>
		<div class="grid-content">
			<div class="WB_info">
				央视财经
			</div>
			<div class="WB_from S_txt2">
				{{item.time}}
			</div>
			<div class="WB_text W_f14" node-type="feed_list_content">
				{{item.content}}</div>
			<div>
				<div v-if="myimg.length==1">
					<img :src="myimg[0]" />
				</div>
				<div v-else>
					<ul class="listPic">
						<li>
							<img src="//wx3.sinaimg.cn/orj360/006D5nCUly1gefq2m25gpj30zk0k0151.jpg" />
						</li>
						<li>
							<img src="//wx3.sinaimg.cn/orj360/006D5nCUly1gefq2m25gpj30zk0k0151.jpg" />
						</li>
						<li>
							<img src="//wx3.sinaimg.cn/orj360/006D5nCUly1gefq2m25gpj30zk0k0151.jpg" />
						</li>
						<li>
							<img src="//wx3.sinaimg.cn/orj360/006D5nCUly1gefq2m25gpj30zk0k0151.jpg" />
						</li>
					</ul>
				</div>
			</div>
			
			<div class="myicon">
				<ul>
					<li><i class="el-icon-edit"></i><span>评论</span></li>
					<li :class="flag?'like':''" @click="changeColor"><i class="iconfont icon-zanpress"></i><span>{{likeNum}}</span></li>
				</ul>
			</div>
		</div>
		</template>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				likeNum:0,
				flag:false,
				myimg: ["//wx3.sinaimg.cn/orj360/006D5nCUly1gefq2m25gpj30zk0k0151.jpg", "oqwjwnciqie"],
				comments:"",
			}
		},
		props:["mycommInfo"],
		methods:{
			changeColor(){
				if(!this.flag){
					this.flag=!this.flag
					this.likeNum+=1
				}else if(this.flag){
					this.flag=!this.flag
					this.likeNum-=1
				}
				
			}
		},
		async mounted() {
			console.log(this.mycommInfo)
			var commInfoList=this.mycommInfo
			var that = this
				for(let i =0;i<commInfoList.length;i++){
				 var eamil = (commInfoList)[i].email
				await that.$axios.post("http://localhost:81/getUserInfo",{email:eamil})
				.then((reault)=>{
					console.log(reault)
				})
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

	.imgcard {
		width: 500px;
		height: 282px;
	}

	.listPic {
		width: 500px;
		margin: 0;
		display: inline;
		vertical-align: top;
		list-style: none;
	}

	.listPic li {
		overflow: hidden;
		background-color: #fff;
		border: 1px solid #c0ccda;
		/* border-radius: 6px; */
		box-sizing: border-box;
		width: 148px;
		height: 148px;
		margin: 0 8px 8px 0;
		display: inline-block;
	}
	.myicon {
		width: 500px;
		color: #808080;
		font-size: 12px;
	}
	.myicon li{
		width: 50%;
		text-align: center;
	}
	.myicon li i {
		margin-right: 8px;
	}
	.like {
		color: red;
	}
</style>
