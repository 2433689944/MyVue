<template>
	<div class="mymsg">
		<h3 class="boxtitle">动态消息</h3>
		<el-collapse accordion>
			<!-- 未读消息 -->
			<el-collapse-item title="未读消息" name="1">
				<el-card class="box-card" shadow="hover" v-for="(item,index) in this.$store.state.unreadmsg" :key="index">
					<div @click="lookit(index,item.id)">
						<el-badge :is-dot="flag" class="item">
							<p v-cloak>用户<span v-cloak>{{item.cemail}}</span>于{{item.time}} 评论了你的动态“{{item.content}}”：
								<span v-cloak>{{item.ct2}}</span>
							</p>
						</el-badge>
					</div>
				</el-card>
			</el-collapse-item>
			<!-- 已读消息 -->
			<el-collapse-item title="已读消息" name="2">
				<el-card class="box-card" shadow="hover" v-for="(item,index) in this.$store.state.readmsg" :key="index">
					<p v-cloak class="readmsg">用户<span v-cloak>{{item.cemail}}</span>于{{item.time}} 评论了你的动态“{{item.content}}”：
						<span v-cloak>{{item.ct2}}</span>
					</p>
				</el-card>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
	export default {
		//动态消息组件
		data() {
			return {
				flag: true
			}
		},
		methods: {
			//查看该消息之后在未读消息里面进行删除
			lookit(index, id) {
				//更新仓库数据
				this.$store.state.readmsg.unshift(this.$store.state.unreadmsg[index]);
				this.$store.state.unreadmsg.splice(index, 1);
				//更新数据库数据
				this.$axios("http://localhost:81/updatamsg", {
					params: {
						id: id
					}
				}).then((result) => {
					this.$message({
						message: '阅读成功！',
						type: 'success',
						center: true,
						duration: 1500
					});
				})
			},
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
		color: #666;
	}

	.readmsg {
		text-indent: 2em;
		color: #908989;
	}

	.box-card {
		margin: 5px 0;
	}
</style>
