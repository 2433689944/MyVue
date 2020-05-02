<template>
<div>
<el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove"
  :on-success="changeFile">
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
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
	  changeFile:function(response, file, fileList) {
		  // console.log(response, file, fileList)
		  let arr = [];
		  for(let i of fileList){
			  arr.push(i.url)
		  }
		 this.$emit("mypic",arr)
	  }
    }
  }
</script>

<style scoped="scoped">
	
</style>
