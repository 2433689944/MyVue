const Service = require('egg').Service;
const fs = require('fs');
class UserService extends Service {
	//发布商品
	async release(params, files) {
		// console.log(params,files)
		let imgarr = []
		for (let i = 0; i < files.length; i++) {
			//把上传的文件保存在public
			let oldpath = files[i].filepath;
			let newpath = __dirname + "/../public/goodsimg/" + files[i].filename;
			fs.rename(oldpath, newpath, () => { });
			imgarr.push("http://localhost:81/public/goodsimg/" + files[i].filename)
		}
		params.img = imgarr.join("-")
		// params.email=this.ctx.session.email
		params.email = "821331350@qq.com"
		//把前端请求的信息存入数据并回应
		const sql =
			`insert into goods(email,title,intro,price,oldprice,label,types,qq,wechat,phone,img) values("${params.email}","${params.title}","${params.desc}","${params.price}","${params.oldprice}","${params.tag1}","${params.type}","${params.qq}","${params.wechat}","${params.phone}","${params.img}")`
		const data = await this.app.mysql.query(sql);
		return data;
	}
}
module.exports = UserService;
