<template>
	<div class="mymsg">
		<h3 class="boxtitle">我的消息</h3>
		<el-collapse accordion>
			<!-- 未读消息 -->
			<div @click="findunreadmsg" data-text="mybox">
				<el-collapse-item title="未读消息" name="1">
					<el-card class="box-card" shadow="hover" v-for="(item,index) in unreadmsg" :key="index">
						<div @click="lookit(index,item.ct2)">
							<el-badge :is-dot="flag" class="item">
								<p v-cloak>用户<span v-cloak>{{item.cemail}}</span>于{{item.time}} 评论了你的动态“{{item.content}}”：
									<span v-cloak>{{item.ct2}}</span>
								</p>
							</el-badge>
						</div>
					</el-card>
				</el-collapse-item>
			</div>
			<!-- 已读消息 -->
			<div @click="findreadmsg">
				<el-collapse-item title="已读消息" name="2">
					<el-card class="box-card" shadow="hover" v-for="(item,index) in readmsg" :key="index">
						<p v-cloak class="readmsg">用户<span v-cloak>{{item.cemail}}</span>于{{item.time}} 评论了你的动态“{{item.content}}”：
							<span v-cloak>{{item.ct2}}</span>
						</p>
					</el-card>
				</el-collapse-item>
			</div>
		</el-collapse>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				goodsArray: [],
				lookflag: true,
				unreadmsg: [],
				readmsg: [],
				flag: true
			}
		},
		methods: {
			findunreadmsg(e) {
				if (e.target.className == "el-collapse-item__header is-active") {
					this.$axios("http://localhost:81/getmymsg")
						.then((result) => {
							this.unreadmsg = result.data;
						})
				}
			},
			//查看该消息之后在未读消息里面进行删除
			lookit(index, ct2) {
				this.unreadmsg.splice(index, 1);
				this.$axios("http://localhost:81/updatamsg", {
					params: {
						cont: ct2
					}
				})
				this.$message({
					message: '阅读成功！',
					type: 'success',
					center: true,
					duration: 1500
				});
			},
			findreadmsg(e) {
				if (e.target.className == "el-collapse-item__header is-active") {
					this.$axios("http://localhost:81/getmymsg2")
						.then((result) => {
							this.readmsg = result.data;
						})
				}
			}
		},
	}
</script>

<style scoped="scoped">
	.mymsg {
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		padding: 30px 30px;
	}

	.boxtitle {
		font-size: 22px;
		font-weight: normal;
		padding: 10px;
		border-bottom: 1px solid #E0E0E0;
	}

	.el-card {
		cursor: default;
	}

	.el-collapse {
		height: 438px;
		border-bottom: 0;
		overflow-y: auto;
		padding: 0 11px;
	}

	.item p {
		width: 100%;
		height: 100%;
		text-indent: 2em;
		color: #908989;
	}

	.item p span {
		font-weight: bold;
		color: saddlebrown;
	}

	.readmsg span {
		font-weight: bold;
		color: silver;
	}

	.haslook {
		text-indent: 2em;
		color: #908989;
	}

	.box-card {
		margin: 5px 0;
	}
</style>
