<template>
	<div class="contain">
		<div class="title">
			<h3>发表动态</h3>
		</div>
		<el-form ref="form" :model="form" label-width="80px">
		  <el-form-item label="内容">
		    <el-input type="textarea" :rows="10" v-model="form.desc" placeholder="这一刻的想法......"></el-input>
		  </el-form-item>
		  
		  <el-form-item label="图片">
		    <Uploadpic></Uploadpic>
		  </el-form-item>
		  
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit">立即发表</el-button>
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
		           desc: '',
				   dtImg:''
		         }
		       }
		     },
		     methods: {
				 
		       onSubmit() {
		         console.log('submit!');
		       },
			   resetForm(formName) {
				 console.log(formName)
			   	this.$refs[formName].resetFields();
			   }
		     },
		  components:{
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
	.contain .el-form div:first-child {
		margin-right: 40px;
	}
	.contain div:nth-of-type(3) {
		margin-top: 44px;
	}
</style>
