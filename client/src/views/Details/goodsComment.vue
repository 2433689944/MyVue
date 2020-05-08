<template>
	<div class="comment">
		<div class="com-nav clearfix">
			商品评价
			<div class="com-fr">
				<el-button type="primary" size="mini" @click="dialogFormVisible = true" icon="el-icon-s-comment">发表评论</el-button>

				<el-dialog title="发表评论" :visible.sync="dialogFormVisible">
					<el-form :model="form">
						<el-input autocomplete="off" v-model="form.input" type="textarea" placeholder="输入评论内容"></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="dialogFormVisible = false">取 消</el-button>
						<el-button type="primary" @click="Upgoodscom">确 定</el-button>
					</div>
				</el-dialog>
			</div>
		</div>
		<div class="comment-item" v-for="(item,index) in goodsComArr" :key="index">
			<div class="left">
				<div class="avatar">
					<img :src="item.headpic" alt="">
				</div>
				<div class="user">
					<div class="name" v-html="item.username">
					
					</div>
					<div class="time" v-html="item.time">
						
					</div>
				</div>
			</div>
			<div class="right">
				<div class="user-text" v-text="item.content">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogTableVisible: false,
				dialogFormVisible: false,
				form: {
					input: '',
					delivery: false,

				},
				goodsComArr:[]
			}
		},
		methods: {
			Upgoodscom() {
				let d = new Date()
				let time =
					`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
				this.$axios("http://localhost:81/pugoodcom", {
					params: {
						goodsid: this.$route.query.goodsid,
						comvalue: this.form.input,
						time: time
					}
				}).then((res) => {
					if (res.data.affectedRows == 1) {
						let params1 = {
							content: this.form.input,
							time: time,
							username: this.$store.state.username,
							headpic: this.$store.state.headpic
						}
						this.goodsComArr.push(params1)
						this.$message({
							message: '发表评论成功',
							type: 'success',
							center: true,
							duration: 1500
						})
					}
				})
				this.dialogFormVisible = false
			}
		},
		mounted() {
			this.$axios("http://localhost:81/getgoodscom", {
				params: {
					goodsid: this.$route.query.goodsid,
				}
			}).then((result)=>{
				console.log(result)
				this.goodsComArr=result.data
			})
		}
	}
</script>

<style scoped="scoped">
	.comment {
		width: 1100px;
		margin: 30px 40px;
		background-color: #fff;
		padding: 20px 40px;
		border-radius: 5px;
	}

	.com-nav {
		background-color: #fff;
		border-bottom: 1px solid #eee;
		font-size: 14px;
		font-weight: 700;
		padding: 10px 0 20px;
	}

	.clearfix:after,
	.clearfix:before {
		content: "";
		display: table;
	}

	*,
	:after,
	:before {
		/* -webkit-box-sizing: border-box; */
		box-sizing: border-box;
	}

	.com-fr {
		float: right;
		position: relative;
		display: inline-block;
		vertical-align: middle;
		position: relative;
		top: -4px;
	}

	.comment-item {
		background-color: #fff;
		font-size: 14px;
		font-weight: 700;
		padding: 10px 0;
		display: flex;
		align-items: stretch;
		border-bottom: 1px solid #eee;
	}

	.comment-item .left {
		display: flex;
	}

	.comment-item .left .avatar {
		width: 50px;
		flex: 0 0 50px;
		height: 50px;
		border-radius: 100px;
		overflow: hidden;
	}

	.comment-item .left .avatar img {
		width: 100%;
		border-style: none;
	}

	.comment-item .left .user {
		display: flex;
		flex-wrap: nowrap;
		margin-left: 8px;
		flex-direction: column;
	}

	.comment-item .left .user .name {
		font-weight: 700;
		font-size: 14px;
		color: #07111B;
		margin-top: 6px;
		font-family: helvetica;
	}

	.comment-item .left .user .time {
		color: #808695;
		font-size: 12px;
		font-family: "microsoft yahei";
		margin-top: 8px;
	}

	.comment-item .right {
		flex: 1;
		margin-left: 20px;
		color: #808695;
		font-size: 14px;
		width: 850px;
	}

	.comment-item .right .user-text {
		width: 100%;
		/* height: 50px; */
		overflow: hidden;
		text-align: left;
		line-height: 25px;
		word-wrap: break-word;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
</style>
