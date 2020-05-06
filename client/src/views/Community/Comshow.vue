<template>
	<div class="contain">
		<div class="combox" v-for="(item,index) in mycommInfo" :key="index">
			<div class="touxiang">
				<img :src="item.headpic" />
			</div>
			<div class="grid-content">
				<div class="WB_info">
					{{item.username}}
				</div>
				<div class="WB_from S_txt2">
					{{item.time}}
				</div>
				<div class="WB_text W_f14" node-type="feed_list_content">
					{{item.content}}</div>
				<div>
					<div v-if="item.imgarr.length==1">
						<img class="imgcard" :src="item.img" />
					</div>
					<div v-else>
						<ul class="listPic">
							<li v-for="(item1,index) in item.imgarr" :key="index">
								<img :src="item1" />
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="myicon">
				<ul>
					<li @click="changeCom(item.comid)"><i class="el-icon-edit"></i><span>评论</span></li>
					<li :class="flag==item.comid?'like':''" @click="changeColor(item.comid,index)"><i class="iconfont icon-zanpress"></i><span>{{item.likenum}}</span></li>
				</ul>
			</div>
			<Comment v-if="showNum==item.comid" :comid="item.comid"></Comment>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: "",
				comments: "",
				showNum: "",
				showLike: ""
			}
		},
		props: ["mycommInfo"],
		methods: {
			changeColor(comid, index) {
				if (this.flag != comid) {
					this.$axios.post("http://localhost:81/dynLike", {
							comid: comid
						})
						.then((res) => {
							console.log(res)
							if (res.data.likedata.affectedRows == 1 & res.data.changedata.affectedRows == 1) {
								this.mycommInfo[index].likenum += 1;
								this.flag = comid
							}
						})
				} else {
					this.$axios.get("http://localhost:81/dynDisLike", {
							params: {
								comid: comid
							}
						})
						.then((res) => {
							console.log(res)
							if (res.data.Dislikedata.affectedRows == 1 & res.data.changedata1.affectedRows == 1) {
								this.mycommInfo[index].likenum -= 1;
								this.flag = ""
							}
						})
				}
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
			Comment: () => import("@/views/Community/Comment.vue")
		}
	}
</script>

<style scoped="scoped">
	.contain {
		/* height: 500px; */
		width: 600px;
		overflow: hidden;
		padding: 20px 20px 4px;
		margin: 50px auto 50px;
		background-color: #F4F4F4;
	}

	.combox {
		background-color: white;
		margin-bottom: 20px;
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
		/* border-radius: 6px; */
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
		/* width: 500px; */
		color: #808080;
		font-size: 12px;
		height: 38px;
		border-top: 1px solid #F4F4F4;
		border-bottom: 1px solid #F4F4F4;
	}

	.myicon li {
		width: 298px;
		text-align: center;
		line-height: 38px;
		cursor: pointer;
	}

	.myicon li:first-child:hover {
		color: red;
	}

	.myicon li:last-child:hover span {
		color: red;
	}

	.myicon li:first-child {
		border-right: 1px solid #F4F4F4;
	}

	.myicon li i {
		margin-right: 8px;
	}

	.like {
		color: red;
	}
</style>
