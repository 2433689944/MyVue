<template>
	<div id="Settlement">
		<div class="itemlist">
			<Orderinfo @adrinfo="Orderinfo"></Orderinfo>
			</div>
			
		<div class="itemlist">
		<Carlist :tableData="tableData"></Carlist>
		</div>
		
		<Pricebox :tableData="tableData" :orderInfo="orderInfo"></Pricebox>
	</div>
</template>
<script>
	export default {
		name: "Settlement",
		data() {
			return {
				tableData: [],
				orderInfo:""
				}
			},
			methods:{
				Orderinfo(arg) {
					console.log(arg)
					this.orderInfo=arg
				}
			},
		mounted() {
			this.$axios.get("http://localhost:81/getfromcar")
				.then((result) => {
					this.tableData = result.data;
				})
		},
		components: {
			Carlist: () => import("./Car/Carlist.vue"),
			Orderinfo:()=>import("./Settlement/Orderinfo.vue"),
			Pricebox:()=>import("./Settlement/Pricebox.vue")
		}
	}
</script>

<style scoped="scoped">
	#Settlement {
		margin-top: 101px;
	}

	.demo-ruleForm {
		margin-top: 20px;
		margin-left: -50px;
	}
	.itemlist {
		margin: 30px 0 30px;
		background-color: #fff;
		box-sizing: border-box;
		border-radius: 5px;
	}
	.listtit {
		height: 40px;
		border-bottom: 1px solid #EBEEF5;
		display: flex;
	}
</style>
