<template>
	<div class="comitem" v-cloak>
		<div class="combox">
			<div class="touxiang">
				<div class="face">
					<img :src="mycommInfo.headpic" />
				</div>
			</div>
			<div class="grid-content">
				<div class="WB_info" v-cloak v-html="mycommInfo.username">
				</div>
				<div class="WB_from S_txt2" v-cloak v-html="mycommInfo.time">
				</div>
				<div class="WB_text W_f14" v-cloak node-type="feed_list_content" v-html="mycommInfo.content">
				</div>
				<div>
					<div v-if="mycommInfo.imgarr.length==1">
						<img class="imgcard" :src="mycommInfo.img" />
					</div>
					<div v-else>
						<ul class="listPic">
							<li v-for="(item1,index1) in mycommInfo.imgarr" :key="index1">
								<img :src="item1" />
							</li>
						</ul>
					</div>
				</div>
			</div>

		</div>
		<div class="myicon">
			<ul>
				<li @click="changeCom(mycommInfo.comid)">
					<span class="pos">
						<span class="line">
							<i class="el-icon-edit">
							</i><span>评论</span></span>
					</span>
				</li>
				<li :class="like?'like':''" @click="changeColor(mycommInfo.comid)"><i class="iconfont icon-zanpress"></i><span
					 v-cloak v-html="mycommInfo.likenum"></span></li>
			</ul>
		</div>
		<Comment v-cloak v-if="showNum==mycommInfo.comid" :comid="mycommInfo.comid"></Comment>
	</div>
</template>

<script>
	import Comment from "@/views/Community/Comment.vue"
	export default {
		data() {
			return {
				like: "",
				comments: "",
				showNum: "",
				showLike: "",
			}
		},
		props: ["mycommInfo"],
		methods: {
			changeColor(comid) {
				if (!this.like) {
					this.$axios.post("http://localhost:81/dynLike", {
							comid: comid
						})
						.then((res) => {
							if (res.data.likedata.affectedRows == 1 & res.data.changedata.affectedRows == 1) {
								this.mycommInfo.likenum += 1;
							}
						})
				} else {
					this.$axios.get("http://localhost:81/dynDisLike", {
							params: {
								comid: comid
							}
						})
						.then((res) => {
							if (res.data.Dislikedata.affectedRows == 1 & res.data.changedata1.affectedRows == 1) {
								this.mycommInfo.likenum -= 1;
							}
						})
				}
				this.like = !this.like
			},
			changeCom(comid) {
				if (this.showNum != comid) {
					this.showNum = comid
				} else {
					this.showNum = ""
				}
			}
		},
		components: {
			Comment
		},
		created() {
<<<<<<< HEAD
			// var comidArr = []
			// for (let m of this.mycomidInfo) {
			// 	comidArr.push(Number(m.comid))
			// }
			// if (comidArr.includes(this.mycommInfo.comid)) {
			// 	this.like = true
			// } else {
			// 	this.like = false
			// }
			this.$axios("http://localhost:81/getislike",{
				parames:{
					comid:this.mycommInfo.comid
				}
			}).then((res)=>{
				console.log(res)
			})
=======
			var comidArr = []
			for (let m of this.mycomidInfo) {
				comidArr.push(Number(m.comid))
			}
			if (comidArr.includes(this.mycommInfo.comid)) {
				this.like = true
			} else {
				this.like = false
			}
>>>>>>> 91c1fd88597a3880493d186996c2facce2ad04ee
		}
	}
</script>

<style scoped="scoped">
	[v-cloak] {
		display: none;
	}

	.comitem {
		background-color: #fff;
		margin: 0 0 10px 0;
		box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
		border-radius: 4px;
	}

	.combox {
		width: 100%;
		padding: 20px 20px 4px;
	}

	.combox:last-child {
		margin-bottom: 0;
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
		box-sizing: border-box;
		width: 148px;
		height: 148px;
		margin: 0 8px 8px 0;
		display: inline-block;
	}

	.listPic li img {
		width: 148px;
		height: 148px;
		object-fit: cover;
	}

	.myicon {
		width: 100%;
		background-color: F4F4F4;
		color: #808080;
		font-size: 12px;
		height: 38px;
		border-top: 1px solid #F4F4F4;
		border-bottom: 1px solid #F4F4F4;
		-moz-user-select: none;
		/*火狐*/

		-webkit-user-select: none;
		/*webkit浏览器*/
		-ms-user-select: none;
		/*IE10*/
		-khtml-user-select: none;
		/*早期浏览器*/
		user-select: none;

	}

	.myicon li {
		width: 320px;
		text-align: center;
		line-height: 38px;
		cursor: pointer;
	}

	.pos {
		display: block;
		height: 22px;
		margin: 7px 0;
		border-right: 1px solid #D9D9D9;

		line-height: 22px;
	}

	.myicon li:first-child:hover .pos .line {
		color: red;
	}

	.myicon li:last-child:hover span {
		color: red;
	}

	.myicon li i {
		margin-right: 8px;
	}

	.like {
		color: red;
	}
</style>
