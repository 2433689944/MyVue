<template>
	<div class="headbox">
		<input type="file" name="headpic" @input="change" ref="myinput">
		<img v-if="imageUrl" :src="imageUrl" id="showpic">
		<i v-else class="el-icon-plus avatar-uploader-icon"></i>
	</div>
</template>

<script>
	//头像上传
	export default {
		data() {
			return {
				imageUrl: ''
			}
		},
		methods: {
			change() {
				this.imageUrl = URL.createObjectURL(this.$refs.myinput.files[0]);
				this.$emit("myclick", this.$refs.myinput.files[0])
			}
		}
	}
</script>

<style scoped="scoped">
	.headbox {
		margin-bottom: 20px;
		height: 82px;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 84px;
		height: 84px;
		line-height: 84px;
		text-align: center;
	}

	input {
		position: absolute;
		opacity: 0;
		width: 84px;
		height: 84px;
		margin-left: 115px;
		padding: 0;
	}

	#showpic,
	.avatar-uploader-icon {
		width: 80px;
		height: 80px;
		border: 1px dashed #8C98CC;
		border-radius: 50%;
		margin-left: 115px;
	}
</style>
