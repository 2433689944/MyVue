<template>
	<div id="Details">
	<Rotation :imgList="img"></Rotation>
<!-- 	<p>名称</p>
	<p>价格</p>
	<p>商品描述</p>
	<button>加入购物车</button>  发送网络请求 将商品添加到数据库  通过localssion 得到用户邮箱,将用户邮箱与goodsid一起存起
	<p>商品大图</p>
	<p>商品评论</p> -->
	  </div>
	
	
</template>

<script>
	//详情页面
	import Rotation from "@/views/Details/Rotation.vue"
	export default {
		name:"Details",
		data(){
			return {
				img:["http://img0.imgtn.bdimg.com/it/u=3945791464,702872274&fm=15&gp=0.jpg","http://img0.imgtn.bdimg.com/it/u=2619788293,2896052895&fm=15&gp=0.jpg"]
}
		},
		mounted(){
			//从首页传过来的数据,格式为{goodsid: 2},2就是商品id,你自己去数据库根据这个id取商品详细信息
			/* console.log(this.$route.query.goodsid);
			let myurl = "http://localhost:82/getgood?goodsid="+this.$router.query.goodsid;
			axios.get(myurl)  //得到商品完整信息 */
		},
		components:{
			Rotation
		}
	}
</script>

<style scoped="scoped">
	#Details {
		margin-top:51px;
	}
</style>
