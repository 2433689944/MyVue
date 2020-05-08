const Service = require('egg').Service;
class UserService extends Service {
  //把商品评论信息添加到数据库
  async pugoodcom(parames) {
    parames.cemail=this.ctx.session.email
    const sql=`insert into goodsdiscuss (goodsid,cemail,content,time) values("${parames.goodsid}","${parames.cemail}","${parames.comvalue}","${parames.time}")`
    const data = await this.app.mysql.query(sql);
    return data;
  }
  //根据商品id向数据库请求评论信息
  async getgoodscom(parames1) {
    const sql1=`select username,headpic,content,time from user inner join goodsdiscuss on user.email=goodsdiscuss.cemail where goodsid="${parames1.goodsid}";`
    const getdata = await this.app.mysql.query(sql1);
    return getdata;
  }
}
module.exports = UserService;