<template>
	<div class="comment-item">
		<div class="left">
			<div class="avatar">
				<img src="https://api.youzixy.com/public/uploads/avatar/default9.png" alt="">
			</div>
			<div class="user">
				<div class="name">
					18707989447
				</div>
				<div class="time">
					2020-05-02
				</div>
			</div>
		</div>
		<div class="right">
			<div class="user-text">
				33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		// mounted() {
		// 	console.log(this.$route.query.goodsid)
		// 	this.$axios("http://localhost:81/getgoodcom", {
		// 		parames: {
		// 			goodsid: this.$route.query.goodsid
		// 		}
		// 	}).then((res) => {
		// 		console.log(res)
		// 	})
		// }
	}
</script>

<style scoped="scoped">
	.comment-item {
		background-color: #fff;
		font-size: 14px;
		font-weight: 700;
		padding: 10px 0;
		display: flex;
		align-items: stretch;
		border-bottom: 1px solid #eee;
	}

	.comment-item .left {
		display: flex;
	}

	.comment-item .left .avatar {
		width: 50px;
		flex: 0 0 50px;
		height: 50px;
		border-radius: 100px;
		overflow: hidden;
	}

	.comment-item .left .avatar img {
		width: 100%;
		border-style: none;
	}

	.comment-item .left .user {
		display: flex;
		flex-wrap: nowrap;
		margin-left: 8px;
		flex-direction: column;
	}

	.comment-item .left .user .name {
		font-weight: 700;
		font-size: 14px;
		color: #07111B;
		margin-top: 6px;
		font-family: helvetica;
	}

	.comment-item .left .user .time {
		color: #808695;
		font-size: 12px;
		font-family: "microsoft yahei";
		margin-top: 8px;
	}

	.comment-item .right {
		flex: 1;
		margin-left: 20px;
		color: #808695;
		font-size: 14px;
		width: 850px;
	}

	.comment-item .right .user-text {
		width: 100%;
		/* height: 50px; */
		overflow: hidden;
		line-height: 25px;
		word-wrap: break-word;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
</style>
