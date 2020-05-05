const Service = require('egg').Service;
class UserService extends Service {
  //获取社区动态
  async community() {
    const sql = `SELECT  *  FROM  community LIMIT 20;`
    const data = await this.app.mysql.query(sql);
    return data;
  }

  async getUserInfo(info) {
    // console.log(info)
    // const sql1=`SELECT  *  FROM  community LIMIT 20;`
    // const userInfo = await this.app.mysql.query(sql1);
    return "userInfo";
  }
}
module.exports = UserService;