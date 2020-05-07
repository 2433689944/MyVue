<template>
	<div class="com">
		<div class="com1">
			<div class="intValue">
				<input class="comInput" placeholder="请输入内容" v-model="input" @input="comInput" />
				<el-button @click="clickCom" size="medium" type="success" :disabled="isdisabled">评论</el-button>
			</div>

			<div class="contain2">
				<div class="commentList" v-for="(item,index) in comlist" :key="index">
					<div class="touxiang">
						<img :src="item.headpic" />
					</div>

					<div class="grid-content">
						<div class="WB_info" v-cloak>
							<span v-cloak style="color:#eb7350;">{{item.username}}</span>:{{item.content}}
						</div>

						<div class="WB_from S_txt2" v-cloak>
							{{item.time}}
						</div>
					</div>
				</div>
				<!-- <router-link to=""></router-link> -->
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
				let time =
					`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
				let params = {
					comid: this.comid,
					content: this.input,
					time: time
				}
				let params1 = {
					comid: this.comid,
					content: this.input,
					time: time,
					username: this.$store.state.username,
					headpic: this.$store.state.headpic
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
					this.comlist = result.data
				})
		}
	}
</script>

<style scoped="scoped">
	[v-cloak] {
		display: none !important;
	}

	.com {
		width: 660px;
		background-color: #F4F4F4;
	}

	.com1 {
		width: 620px;
		margin: 0 auto;
		padding-top: 20px;
	}

	.comInput {
		height: 32px;
		width: 530px;
		margin-right: 10px;
	}

	.contain2 {
		width: 100%;
		/* overflow: hidden; */
		padding: 20px 20px;
		margin-left: -20px;
	}

	.commentList {
		width: 100%;
		margin: 0 0 -1px;
		padding: 5px 0 7px;
		border-bottom: 1px solid #d9d9d9;
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
</style>
