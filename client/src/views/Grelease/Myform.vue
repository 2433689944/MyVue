<template>
    <div class="contain">
	<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="标题">
    <el-input v-model="form.title" placeholder="请输入标题"></el-input>
  </el-form-item>
   <el-form-item label="描述">
    <el-input type="textarea" v-model="form.desc" placeholder="请简单描述商品"></el-input>
  </el-form-item>
  <el-form-item label="标价">
    <el-input v-model="form.price" placeholder="请输入标价"></el-input>
  </el-form-item>
   <el-form-item label="原价">
    <el-input v-model="form.oldprice" placeholder="请输入原价"></el-input>
  </el-form-item>
   <el-form-item label="分类">
    <Type></Type>
  </el-form-item>
  <el-form-item label="标签">
   <Tag1 @mytype="changetype"></Tag1>
  </el-form-item>
 
   <el-form-item label="微信">
    <el-input v-model="form.wechat" placeholder="请输入微信"></el-input>
  </el-form-item>
  
   <el-form-item label="手机">
    <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
  </el-form-item>

   <el-form-item label="qq">
    <el-input v-model="form.qq" placeholder="请输入qq"></el-input>
  </el-form-item>
   <el-form-item label="上传图片">
    <Uploadpic></Uploadpic>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即发布</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
	export default {
		 data() {
      return {
        form: {
          title: '',
          price: '',
          oldprice: '',
          wechat: '',
          delivery: false,
          type: [],
          qq: '',
          phone: '',
          desc: '',
          img:[],
          tag1:[]
        },
       
           }
    },

    methods: {
      changetype() {
        console.log(2222)
      },
      onSubmit() {
        console.log(this.form)
      }
    },
    components:{
        Type:()=>import("@/views/Grelease/Type.vue"),
        Tag1:()=>import("@/views/Grelease/Tag1.vue"),
         Uploadpic:()=>import("@/views/Grelease/Uploadpic.vue")
    }
	}
</script>

<style scoped="scoped">
	.contain {
        width:800px;
        margin:0 auto
    }
    .el-form-item .el-form-item__content .el-input{
        width:360px;
    }
 .el-form-item .el-form-item__content .el-textarea {
	 width: 800px;
	 }
	 .contain div:nth-of-type(3) {
		 margin-top: 22px;
	 }
</style>