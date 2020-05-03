<template>
	<div class="otherbox">
		<el-button type="text" @click="centerDialogVisible = true" id="forgetpwd">忘记密码</el-button>
		<el-button type="text" @click="register" id="register">立即注册</el-button>
		<el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
			<span>抱歉，暂无开通此功能</span>
			<span slot="footer" class="dialog-footer">
				<el-button round @click="centerDialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				centerDialogVisible: false
			}
		},
		methods: {
			register() {
				this.$router.push({
					path: "/register"
				})
			},
		}
	}
</script>

<style scoped="scoped">
	.otherbox {
		width: 234px;
		margin: 5px auto 0;
		font-size: 13px;
		color: #8C98CC;
	}

	.otherbox #forgetpwd {
		float: left;
		margin-left: 2px;
		color: #8C98CC;
		font-size: 13px;
		padding: 0;
	}

	.otherbox #register {
		float: right;
		margin-right: 2px;
		color: #8C98CC;
		font-size: 13px;
		padding: 0;
	}

	.el-dialog__footer .el-button {
		background-color: #8C98CC;
		color: white;
	}
</style>
