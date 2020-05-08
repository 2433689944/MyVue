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
		//把前端请求的信息存入数据并回应
		const sql =
			`insert into community(email,time,content,img,likenum) values("${params.email}","${params.time}","${params.desc}","${params.img}",0)`
		const data = await this.app.mysql.query(sql);
		return data;
	}
	//把评论信息存入数据库
	async comment(com){
		const { ctx } = this;
		let cemail = ctx.session.email
		const comsql =`insert into comdiscuss (comid,cemail,content,time,lookflag) values("${com.comid}","${cemail}","${com.content}","${com.time}",0)`;
		const comdata = await this.app.mysql.query(comsql);
		return comdata;
	}
	//从数据库查询评论信息
	async getComment(cid){
		const { ctx } = this;
		const sql1=`select username,headpic,comid,content,time from user inner join comdiscuss on comdiscuss.cemail=user. email where comid="${cid.comid}"`
		const getComdata=await this.app.mysql.query(sql1)
		return getComdata;
	}
	//把点赞信息存入数据库
	async dynLike(likeNum){
		const { ctx } = this;
		likeNum.cemail=ctx.session.email
		//向数据库添加点赞信息
		const likesql=`insert into dynlike (comid,cemail) values("${likeNum.comid}","${likeNum.cemail}")`
		const likedata=await this.app.mysql.query(likesql)
		//动态的点赞数+1
		const changesql = `update community set likenum=likenum+1  where comid=${likeNum.comid}`
		const changedata=await this.app.mysql.query(changesql)
		return {likedata:likedata,changedata:changedata};
	}
	//取消点赞
	async dynDisLike(DislikeNum){
		const { ctx } = this;
		DislikeNum.cemail=ctx.session.email
		//取消点赞：删除数据库的点赞记录
		const Dislikesql=`delete from dynlike where comid="${DislikeNum.comid}" and cemail="${DislikeNum.cemail}"`
		const Dislikedata=await this.app.mysql.query(Dislikesql)
		////取消点赞：动态的点赞数-1
		const changesql1 = `update community set likenum=likenum-1  where comid=${DislikeNum.comid}`
		const changedata1=await this.app.mysql.query(changesql1)
		return {Dislikedata:Dislikedata,changedata1:changedata1};
	}
}
module.exports = UserService;