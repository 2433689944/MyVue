<template>
	<div>
		<div class="listtit">
			<div id="goods">订单信息</div>
		</div>
		<div class="orderinfo">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="170px" class="demo-ruleForm" size="small">
				<el-form-item label="收货人姓名:" prop="name">
					<el-input v-model="ruleForm.name" :disabled="disabled"></el-input>
				</el-form-item>
				<el-form-item label="收货人电话:" prop="phone">
					<el-input type="text" v-model="ruleForm.phone" :disabled="disabled"></el-input>
				</el-form-item>
				<el-form-item label="收货人地址:" prop="address">
					<el-input type="text" v-model="ruleForm.address" :disabled="disabled"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button :type="btntype" @click="submitForm('ruleForm')" v-html="btntext"></el-button>
					<el-button @click="resetForm('ruleForm')" :disabled="disabled">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				disabled: false,
				btntext: '保存',
				btntype: 'primary',
				ruleForm: {
					name: "",
					address: "",
					phone: "",
				},
				rules: {
					name: [{
						required: true,
						message: '姓名不能为空',
						trigger: 'blur'
					}, ],
					phone: [{
						required: true,
						message: '手机号不能为空',
						trigger: 'blur'
					}],
					address: [{
						required: true,
						message: '地址不能为空',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			//保存或修改收件人信息
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						if (this.disabled) {
							this.disabled = false;
							this.btntext = '保存';
							this.btntype = 'primary'
						} else {
							this.disabled = true;
							this.btntext = '修改';
							this.btntype = 'warning';
							this.$message({
								message: '保存成功',
								type: 'success',
								center: true,
								duration: 1500
							})
							this.$emit("adrinfo", this.ruleForm)
						}
					} else {
						return false;
					}
				});
			},
			//重置表单
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style scoped="scoped">
	.listtit {
		border-bottom: 1px solid #EBEEF5;
	}

	.listtit div {
		height: 40px;
		margin-left: 46px;
		line-height: 40px;
		font-weight: bold;
		font-size: 14px;
		color: #737373;
	}

	.itemlist .orderinfo {
		padding-bottom: 10px;
		padding-top: 30px;
	}

	.itemlist .orderinfo .el-form .el-form-item .el-input {
		width: 300px;
	}

	.itemlist .orderinfo .el-form .el-form-item:nth-of-type(3) .el-input {
		width: 600px;
	}

	.orderinfo .el-form .el-form-item:last-child {
		padding-top: 10px;
	}
</style>
