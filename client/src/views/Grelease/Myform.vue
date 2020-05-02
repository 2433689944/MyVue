<template>
	<div class="contain">
		<div class="title">
			<h3>发布商品</h3>
		</div>
		<el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="80px" class="demo-ruleForm">
			<el-form-item label="标题" prop="title">
				<el-input v-model="ruleForm.title" placeholder="请输入标题"></el-input>
			</el-form-item>
			<el-form-item label="描述" prop="desc">
				<el-input type="textarea" v-model="ruleForm.desc" placeholder="请简单描述商品"></el-input>
			</el-form-item>
			<el-form-item label="标价" prop="price">
				<el-input v-model.number="ruleForm.price" placeholder="请输入标价"></el-input>
			</el-form-item>
			<el-form-item label="原价" prop="oldprice">
				<el-input v-model.number="ruleForm.oldprice" placeholder="请输入原价"></el-input>
			</el-form-item>
			<el-form-item label="分类">
				<Type @mytype="changetype"></Type>
			</el-form-item>
			<el-form-item label="标签">
				<Tag1 @mytag1="changetag1"></Tag1>
			</el-form-item>

			<el-form-item label="微信" prop="wechat">
				<el-input v-model="ruleForm.wechat" placeholder="请输入微信"></el-input>
			</el-form-item>

			<el-form-item label="手机" prop="phone">
				<el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
			</el-form-item>

			<el-form-item label="qq" prop="qq">
				<el-input v-model="ruleForm.qq" placeholder="请输入qq"></el-input>
			</el-form-item>
			<el-form-item label="图片">
				<Uploadpic @mypic="changepic"></Uploadpic>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">立即发布</el-button>
				<el-button @click="resetForm('ruleForm')">取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					title: '',
					price: '',
					oldprice: '',
					wechat: '',
					delivery: false,
					type: '',
					qq: '',
					phone: '',
					desc: '',
					tag1: ''
				},
				rules: {
					title: [{
							required: true,
							message: '请输入标题',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 8,
							message: '长度在 2 到 8 个字符',
							trigger: 'blur'
						}
					],
					price: [{
							required: true,
							message: '请输入标价',
							trigger: 'blur'
						},
						{
							type: 'number',
							message: '标价必须为数字值',
							trigger: 'blur'
						}
					],
					oldprice: [{
							required: true,
							message: '请输入原价',
							trigger: 'blur'
						},
						{
							type: 'number',
							message: '原价必须为数字值',
							trigger: 'blur'
						}
					],
					wechat: [{
						required: true,
						message: '请输入微信',
						trigger: 'blur'
					}],
					qq: [{
							required: true,
							message: '请输入qq',
							trigger: 'blur'
						},
						{
							pattern: /^[1-9][0-9]{4,9}$/,
							message: 'qq格式错误',
							trigger: 'blur'
						}

					],
					phone: [{
							required: true,
							message: '请输入手机号',
							trigger: 'blur'
						},
						{
							pattern: /^((0\d{2,3}­\d{7,8})|(1[3584]\d{9}))$/,
							message: '手机号格式错误',
							trigger: 'blur'
						}
					],
					desc: [{
						required: true,
						message: '请简单描述商品',
						trigger: 'blur'
					}]
				}
			}
		},

		methods: {
			changetype(arg) {
				// console.log(arg)
				let types = arg.join('-')
				this.ruleForm.type = types
			},
			changetag1(arg) {
				// console.log(arg)
				let tags = arg.join('-')
				this.ruleForm.tag1 = tags
			},
			changepic(arg) {
				console.log(arg)
				// let imgs=arg.join('-')
				this.img = arg

			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						let formData = new FormData();
						let file = this.img.raw
						formData.append("file",file);
						console.log(formData.get("file"))
						var config = {
								headers: {
									"Content-Type": "multipart/form-data"
								}
							}
							this.axios.post("http://localhost:81/release",formData, config)
							.then((result) => {
								console.log(result)
							})

					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		},
		components: {
			Type: () => import("@/views/Grelease/Type.vue"),
			Tag1: () => import("@/views/Grelease/Tag1.vue"),
			Uploadpic: () => import("@/views/Grelease/Uploadpic.vue")
		}
	}
</script>

<style scoped="scoped">
	.contain {
		width: 800px;
		margin: 0 auto;
		margin-top: 50px;
		margin-bottom: 50px;
		background-color: white;
		padding-top: 44px;
		padding-bottom: 44px;
	}

	.title {
		width: 100px;
		margin: 0 auto;
		margin-bottom: 36px;
	}

	.el-form-item .el-form-item__content .el-input {
		width: 360px;
	}

	.el-form-item .el-form-item__content .el-textarea {
		width: 674px;
	}

	/* .contain .el-form div:first-of-type {
	 		 margin-top: 44px;
	 } */
	.contain .el-form div:nth-of-type(3) {
		margin-top: 22px;
	}
</style>
