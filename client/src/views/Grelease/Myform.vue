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
				<div id="pictext" v-if="flag">请上传图片</div>
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
				flag:false,
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
							max: 40,
							message: '长度在 2 到 40 个字符',
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
				//分类：把分类数组打包成一个字符串
				let types = arg.join('-')
				this.ruleForm.type = types
			},
			changetag1(arg) {
				//标签：把标签数组打包成一个字符串
				let tags = arg.join('-')
				this.ruleForm.tag1 = tags
			},
			changepic(arg) {
				//图片文件
				this.imgFile = arg
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					//验证title、WeChat、price...内容
					if (valid) {
						//验证是否上传商品图片
						if(!this.imgFile){
							this.flag=true
						}
						else{
						//创建FormData对象用于给后端传文件
						let formData = new FormData();
						for (let i = 0; i < this.imgFile.length; i++) {
							formData.append("myfile" + i, (this.imgFile)[i])
						}
						formData.append("title", this.ruleForm.title);
						formData.append("price", this.ruleForm.price);
						formData.append("oldprice", this.ruleForm.oldprice);
						formData.append("wechat", this.ruleForm.wechat);
						formData.append("type", this.ruleForm.type);
						formData.append("qq", this.ruleForm.qq);
						formData.append("phone", this.ruleForm.phone);
						formData.append("desc", this.ruleForm.desc);
						formData.append("tag1", this.ruleForm.tag1);
						var config = {
							headers: {
								"Content-Type": "multipart/form-data"
							}
						}
						this.$axios.post("http://localhost:81/release", formData, config)
							.then((result) => {
								console.log(result)
								// if(result.data.affectedRows){
								// 	this.$router.push({path:"/"})
								// }
							})
							}
					} else {
						//前端验证没通过
						console.log('error submit!!');
						return false;
					}
				});
			},
			//取消按钮事件
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
		margin-top: 101px;
		margin-bottom: 50px;
		background-color: white;
		padding-top: 44px;
		padding-bottom: 44px;
		border-radius: 6px;
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
	#pictext {
		color: red;
	}
</style>
