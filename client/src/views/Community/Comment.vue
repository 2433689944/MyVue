<template>
	<div class="com">
		<div class="intValue">
			<input class="comInput" placeholder="请输入内容" v-model="input" @input="comInput" />
			<el-button @click="clickCom" size="medium" type="success" :disabled="isdisabled">评论</el-button>
		</div>
		<div class="contain">
			<div class="commentList" v-for="(item,index) in comlist" :key="index">
				<div class="touxiang">
					<img :src="item.headpic" />
				</div>
				<div class="grid-content">
					<div class="WB_info">
						<span style="color:#eb7350;">{{item.username}}</span>:{{item.content}}
					</div>

					<div class="WB_from S_txt2">
						{{item.time}}

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				input: '',
				isdisabled: true,
				comlist: []
			}
		},
		props: ["comid"],
		methods: {
			comInput() {
				if (this.input) {
					this.isdisabled = false
				} else {
					this.isdisabled = true
				}

			},
			clickCom() {
				let d = new Date()
				// console.log(this.comid)
				let time =
					`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
				let params = {
					comid: this.comid,
					content: this.input,
					time: time
				}
				console.log(params)
				let params1 = {
					comid: this.comid,
					content: this.input,
					time:time,
					username:this.$store.state.username,
					headpic:this.$store.state.headpic
				}
				this.comlist.push(params1)
				this.$axios.post("http://localhost:81/comment", params)
					.then((result) => {})
			}
		},
		mounted() {
			this.$axios("http://localhost:81/getComment", {
					params: {
						comid: this.comid
					}
				})
				.then((result) => {
					console.log(result)
					this.comlist = result.data
				})
		}
	}
</script>

<style scoped="scoped">
	.com {
		background-color: #F4F4F4;
		padding-top: 20px;
	}

	.contain {
		/* height: 500px; */
		width: 600px;
		overflow: hidden;
		padding: 20px 20px 4px;
		margin-left: -20px;
	}

	.commentList {
		margin: 0 0 -1px;
		padding: 5px 0 7px;
		/* border-bottom-width: 1px;
		border-bottom-style: solid;
		border-color: #d9d9d9; */
		border-bottom:1px solid #d9d9d9;
	}
	.commentList:last-child {
		border: none;
	}

	.touxiang {
		margin-left: 0;
		padding: 6px 0 0;
		position: relative;
		width: 30px;
		height: 30px;
		float: left;
	}

	.touxiang img {
		height: 30px;
		width: 30px;
		border-radius: 4px;
	}

	.grid-content {
		margin: 0 0 0 40px;
	}

	.WB_info {
		margin-bottom: 0;
		padding: 0 0 2px;
		overflow: hidden;
		line-height: 23px;
		word-wrap: break-word;
		font-size: 12px;
		font-family: arial;
	}

	.WB_from {
		line-height: 16px;
		color: #808080;
		text-decoration: none;
		font-size: 12px;
		font-family: arial;
	}

	.comInput {
		height: 32px;
		width: 480px;
		margin-right: 10px;
	}
</style>
