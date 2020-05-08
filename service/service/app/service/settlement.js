const Service = require('egg').Service;
class UserService extends Service {
  async addtoorder(order) {
    order.email=this.ctx.session.email
    const sql=`insert into orders (email,addressname,addphone,goodsid,relname) values ("${order.email}","${order.address}","${order.phone}","${order.id}","${order.name}")`
    const data = await this.app.mysql.query(sql);
    return data;
  }
}
module.exports = UserService;