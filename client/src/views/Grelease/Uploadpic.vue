<template>
	<div>
		<el-upload action="http://localhost:81/uploadgoods" list-type="picture-card" :on-preview="handlePictureCardPreview" 
		:on-remove="handleRemove" :on-success="changeFile">
			<i class="el-icon-plus"></i>
		</el-upload>
		<el-dialog :visible.sync="dialogVisible">
			<img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				dialogImageUrl: '',
				dialogVisible: false
			};
		},
		methods: {
			//删除图片时触发
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			//点击已上传文件时触发
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			//图片上传成功时触发
			changeFile: function(response, file, fileList) {
				//fileList上传的文件列表
				let arr = [];
				for (let i of fileList) {
					arr.push(i.raw)
				}
				this.$emit("mypic", arr)
			}
		}
	}
</script>

<style scoped="scoped">

</style>
