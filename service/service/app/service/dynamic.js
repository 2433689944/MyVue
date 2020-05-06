const Service = require('egg').Service;
const fs = require("fs")
class UserService extends Service {
	//发布动态
	async dynamic(params, files) {
		let imgarr = []
		for (let i = 0; i < files.length; i++) {
			//把上传的文件保存在public
			let oldpath = files[i].filepath;
			let newpath = __dirname + "/../public/dynamicimg/" + files[i].filename;
			fs.rename(oldpath, newpath, () => { });
			imgarr.push("http://localhost:81/public/dynamicimg/" + files[i].filename)
		}
		params.img = imgarr.join("-")
		params.email = this.ctx.session.email
		console.log(this.ctx.session.email)
		//把前端请求的信息存入数据并回应
		const sql =
			`insert into community(email,time,content,img) values("${params.email}","${params.time}","${params.desc}","${params.img}")`
		const data = await this.app.mysql.query(sql);
		return data;
	}

	async comment(com){
		const { ctx } = this;
		let cemail = ctx.session.email
		const comsql =`insert into comdiscuss (comid,cemail,content,time) values("${com.comid}","${cemail}","${com.content}","${com.time}")`;
		const comdata = await this.app.mysql.query(comsql);
		return comdata;
	}
	
	async getComment(cid){
		const { ctx } = this;
		const sql1=`select * from comdiscuss where comid="${cid.comid}"`
		const comdata1=await this.app.mysql.query(sql1)
		console.log(comdata1)
		// const getComsql =`select * from user inner join comdiscuss on comdiscuss.cemail = user.email`;
		// const getComdata = await this.app.mysql.query(getComsql);
		return "getComdata";
	}
}
module.exports = UserService;