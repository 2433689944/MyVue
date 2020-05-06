const Service = require('egg').Service;
class UserService extends Service {
  async community() {
    const sql=`select * from user inner join community on community.email = user.email`
    const data = await this.app.mysql.query(sql);
    for(let i=0;i<data.length;i++){
      let imgarr=data[i].img.split('-')
      data[i].imgarr=imgarr
    }
    return data;
  }
}
module.exports = UserService;