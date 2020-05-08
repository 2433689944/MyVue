<template>
	 <div class="successbox w">
	        <img src="img/paysuccess.png" alt="">
	        <p id="success">支付成功</p>
	        <p id="tips">你可能需要进行下列操作</p>
	        <button @click="toorder" id="order">查看订单</button>
	        <button @click="toindex" id="index">返回首页</button>
	    </div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			toorder(){
				this.$router.push("/pcenter")
			},
			toindex(){
				this.$router.push("/")
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.w {
		width: 1180px;
		margin: 0 auto;
	}
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	ul {
		list-style: none;
	}
	
	li {
		display: inline-block;
	}
	
	a {
		text-decoration: none;
	}
	
	body{
	    background-color: #F6F6F6;
	}
	
	.successbox{
	    height: 500px;
	    margin-top: 20px;
	    background-color: white;
	    text-align: center;
	}
	
	.successbox img{
	    width: 100px;
	    height: 100px;
	    margin-top: 100px;
	}
	
	.successbox #success{
	    color: #292929;
	    font-size: 22px;
	    margin-top: 20px;
	    font-weight: bold;
	}
	
	.successbox #tips{
	    color: #A9A9A9;
	    font-size: 16px;
	    margin-top: 10px;
	}
	
	.successbox button{
	    display: inline-block;
	    width: 120px;
	    height: 40px;
	    background-color:#FCFCFC;
	    margin: 20px 20px;
	    border: 1px solid #D8D8D8;
	    line-height: 40px;
	    color: #474747;
	    font-size: 14px;
	    border-radius: 4px;
	}
</style>
