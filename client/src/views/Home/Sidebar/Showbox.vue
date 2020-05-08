<template>
	<div class="showbox">
		<h3 v-html="this.typesdata.title"></h3>
		<div class="typelist" @click="retrieval">
			<div class="typebox" v-for="(item,index) in this.typesdata.arr" :key="index" :data-types="item.types">
				<img :src="item.img" :data-types="item.types" />
				<p :data-types="item.types">{{item.types}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["typesdata"],
		methods: {
			retrieval(e) {
				if (e.target.dataset.types) {
					let keystr = this.typesdata.title + "-" + e.target.dataset.types;
					this.$axios("http://localhost:81/classify", {
							params: {
								keystr: keystr
							}
						})
						.then((result) => {
							this.$store.commit("getAllGoods", result.data)
						})
				}
			}
		}
	}
</script>

<style scoped="">
	.showbox {
		padding: 20px;
		height: 360px;
	}

	.showbox h3 {
		text-align: center;
		margin: 5px 0 20px;
	}

	.showbox h3::before {
		content: "";
		width: 245px;
		height: 1px;
		background-color: #e1e3e5;
		position: absolute;
		top: 40px;
		left: 20px;
	}

	.showbox h3::after {
		content: "";
		width: 245px;
		height: 1px;
		background-color: #e1e3e5;
		position: absolute;
		top: 40px;
		right: 20px;
	}

	.typelist {
		display: flex;
		flex-wrap: wrap;
	}

	.typebox {
		height: 100px;
		width: 100px;
		margin-bottom: 20px;
		position: relative;
		cursor: pointer;
	}

	.typebox:hover p {
		color: red;
	}

	.typebox:hover img {
		opacity: 0.7;
	}

	.typebox img {
		height: 65px;
		width: 65px;
		position: absolute;
		left: 50%;
		margin-left: -32px;
	}

	.typebox p {
		width: 100%;
		position: absolute;
		bottom: 6px;
		text-align: center;
		font-size: 13px;
	}
</style>
