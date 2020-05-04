const Service = require('egg').Service;
const fs = require("fs")
class UserService extends Service {
  async dynamic(params, files) {
    let imgarr = []
		for (let i = 0; i < files.length; i++) {
			//把上传的文件保存在public
			let oldpath = files[i].filepath;
			let newpath = __dirname + "/../public/dynamicimg/" + files[i].filename;
			fs.rename(oldpath, newpath, () => {});
			imgarr.push("http://localhost:81/public/dynamicimg/" + files[i].filename)
		}
		params.img = imgarr.join("-")
        params.email=this.ctx.session.email
        console.log(this.ctx.session.email)
		//把前端请求的信息存入数据并回应
		const sql =
			`insert into community(email,time,content,img) values("${params.email}","${params.time}","${params.desc}","${params.img}")`
		const data = await this.app.mysql.query(sql);
		return data;
	}
}
module.exports = UserService;