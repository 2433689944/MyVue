<template>
	<div class="contain">
		<div class="title">
			<h3>发表动态</h3>
		</div>
		<el-form ref="form" :rules="rules" :model="form" label-width="80px">
			<el-form-item label="内容" prop="desc">
				<el-input type="textarea" :rows="10" v-model="form.desc" placeholder="这一刻的想法......"></el-input>
			</el-form-item>

			<el-form-item label="图片">
				<Uploadpic @mypic="changepic"></Uploadpic>
				<div id="pictext" v-if="flag">请上传图片</div>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="onSubmit('form')">立即发表</el-button>
				<el-button @click="resetForm('form')">取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					desc: ''
				},
				rules: {
					desc: [{
						required: true,
						message: '请填写动态内容',
						trigger: 'blur'
					}]
				},
				flag:false
			}
		},
		methods: {
			changepic(arg) {
				console.log(arg)
				this.imgFile = arg
			},
			 onSubmit(formName) {
			        this.$refs[formName].validate((valid) => {
			          if (valid) {
						if(!this.imgFile){
							this.flag=true
						}
						else{
						//创建FormData对象用于给后端传文件
						let d = new Date()
						console.log(d.getFullYear())
						let time =`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
						console.log(time)
						let formData = new FormData();
						for (let i = 0; i < this.imgFile.length; i++) {
							formData.append("myfile" + i, (this.imgFile)[i])
						}
						formData.append("desc", this.form.desc);
						formData.append("time", time);
						var config = {
							headers: {
								"Content-Type": "multipart/form-data"
							}
						}
						this.$axios.post("http://localhost:81/dynamic", formData, config)
							.then((result) => {
								console.log(result)
								// if(result.data.affectedRows){
								// 	this.$router.push({path:"/"})
								// }
							})
						}
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

	.contain .el-form div:first-child {
		margin-right: 40px;
	}

	.contain div:nth-of-type(3) {
		margin-top: 44px;
	}
	#pictext {
		color: red;
	}
</style>
