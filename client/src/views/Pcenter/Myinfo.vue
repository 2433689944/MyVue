<template>
	<div class="myinfo">
		<el-form ref="form" :model="form" label-width="80px" size="small">
			<el-form-item label="头像">
				<el-avatar :size="100" :src="form.headpic"></el-avatar>
			</el-form-item>
			<el-form-item label="昵称">
				<el-input v-model="form.username" :disabled="disabled"></el-input>
			</el-form-item>
			<el-form-item label="真实姓名">
				<el-input v-model="form.relname" :disabled="disabled" placeholder="请输入真实姓名"></el-input>
			</el-form-item>
			<el-form-item label="邮箱">
				<el-input :placeholder="form.email" :disabled="true"></el-input>
			</el-form-item>
			<el-form-item label="学校">
				<el-input v-model="form.school" :disabled="disabled" placeholder="请输入您的学校"></el-input>
			</el-form-item>
			<el-form-item label="性别">
				<el-radio-group v-model="form.sex" :disabled="disabled">
					<el-radio label="男"></el-radio>
					<el-radio label="女"></el-radio>
					<el-radio label="保密"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="毕业时间">
				<el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.gradata" :disabled="disabled"></el-date-picker>
			</el-form-item>
			<el-form-item label="个性签名">
				<el-input type="textarea" v-model="form.signature" :disabled="disabled" placeholder="懒得连签名都没有"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button :type="btntype" @click="onSubmit" v-model="btntext">{{btntext}}</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		//我的资料组件
		data() {
			return {
				disabled: true,
				btntext: '修改',
				btntype: 'primary',
				form: {}
			};
		},
		methods: {
			onSubmit() {
				//点击修改
				if (this.disabled) {
					this.disabled = false;
					this.btntext = '保存';
					this.btntype = 'warning'
				} else {
					//点击保存
					this.disabled = true;
					this.btntext = '修改';
					this.btntype = 'primary';
					this.$axios("http://localhost:81/updateinfo", {
							params: {
								form: this.form
							}
						})
						.then((result) => {
							console.log("修改成功")
						})
				}
			}
		},
		mounted() {
			this.$axios("http://localhost:81/getAllinfo")
				.then((result) => {
					this.form = result.data[0];
					//默认性别为保密
					if (result.data[0].sex == "") {
						this.form.sex = "保密";
					}
				})
		}
	}
</script>

<style scoped="scoped">
	.myinfo {
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		padding: 30px 60px;
	}

	.el-input {
		width: 220px;
	}

	.el-button {
		width: 80px;
	}

	.el-textarea__inner {
		width: 400px;
	}
</style>
