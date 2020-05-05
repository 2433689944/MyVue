const Service = require('egg').Service;
class UserService extends Service {
  //获取社区动态
  async community() {
    const sql = `SELECT  *  FROM  community LIMIT 20;`
    const data = await this.app.mysql.query(sql);
    return data;
  }
}
module.exports = UserService;