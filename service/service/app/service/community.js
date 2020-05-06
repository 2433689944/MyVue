const Service = require('egg').Service;
class UserService extends Service {
  //获取社区动态
  async community() {
<<<<<<< HEAD
    const sql=`select username,headpic,comid,time,content,img,likenum from user inner join community on community.email = user.email order by id DESC`

=======
    // const sql=`select * from user inner join community on community.email = user.email`
    const sql = `SELECT  *  FROM  community LIMIT 20;`
>>>>>>> 7c6f48c4caa61f2d6d88610a64e4bf798cce5621
    const data = await this.app.mysql.query(sql);
    for(let i=0;i<data.length;i++){
      let imgarr=data[i].img.split('-')
      data[i].imgarr=imgarr
    }
    return data;
  }
}
module.exports = UserService;