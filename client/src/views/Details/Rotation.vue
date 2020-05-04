<template>
	<div id="banner">
		<div class="main">
			<img class="origin" @mouseover="getin" src="goodsImage" />
			<div v-show="isin" class="move"></div>
		</div>
		<div class="bigimg" v-show="isin"></div>
	
	</div>
</template>
	
<script>
	export default {
				 name: "Banner",
				
				  data() {
				
				    return {
						isin:false
				    };
				
				  },
				
				  methods: {
				getin:function(){
					this.isin=!this.isin;
					
					}
				
				  },
				
				  mounted() {
			
				    },

		props:{
			goodsImage:{
				type:String
			}
		}
		}
	
	
	
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	
	.main {
		background-color: #7F89C6;
		width: 40vh;
		height: 30vh;
		position: fixed;
		top: 5vh;
		left: 3vh;
		
		}
	.move {
		background-color: #DEDEDE;
		width:200px;
		height: 300px;
		
		}
		.bigimg{
			background-color: #A6C1EE;
			width: 200px;
			height:200px;
			}
</style>
