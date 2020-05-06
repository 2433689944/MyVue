const Service = require('egg').Service;
class UserService extends Service {
  //获取社区动态
  async community() {
<<<<<<< HEAD
    const sql=`select * from user inner join community on community.email = user.email`
=======
    const sql = `SELECT  *  FROM  community LIMIT 20;`
>>>>>>> 3f7a1d73b72068abc6df262ccbdd164c6277b54a
    const data = await this.app.mysql.query(sql);
    for(let i=0;i<data.length;i++){
      let imgarr=data[i].img.split('-')
      data[i].imgarr=imgarr
    }
    return data;
  }
}
module.exports = UserService;