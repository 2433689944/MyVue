const Service = require('egg').Service;
class UserService extends Service {
  //提交订单
  async addtoorder(params) {
    const sql = `select * from car where email="${this.ctx.session.email}"`;
    const data = await this.app.mysql.query(sql);
    for (let i = 0; i < data.length; i++) {
      //将用户提交的信息和用户的商品信息存入订单数据库
      const sql2 = `insert into orders(email,addressname,addphone,goodsid,relname) values ("${this.ctx.session.email}",
        "${params.address}","${params.phone}","${data[i].goodsid}","${params.name}");`;
      await this.app.mysql.query(sql2);
      //清空用户购物车所有数据
      const sql3 = `delete from car where email="${this.ctx.session.email}"`;
      this.app.mysql.query(sql3);
    }
  }
}
module.exports = UserService;