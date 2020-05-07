<template>
	<div class="comment">
		<div class="com-nav">
			"商品评价""
			<div class="com-fr">
				<el-button  type="primary" size="mini" @click="dialogFormVisible = true" icon="el-icon-s-comment">发表评论</el-button>
				
				<el-dialog title="发表评论" :visible.sync="dialogFormVisible">
				  <el-form :model="form">
				      <el-input v-model="textarea" type="textarea" placeholder="输入评论内容"></el-input>
				    </el-form-item>
					 </el-form>
					 <div slot="footer" class="dialog-footer">
					     <el-button @click="dialogFormVisible = false">取 消</el-button>
					     <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
					   </div>
					 </el-dialog>
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
				          textarea: '',
				          delivery: false,
				          
				        },
				        formLabelWidth: '120px'
				      }
			}
		}
	
</script>

<style scoped="scoped">
	
</style>
