const Service = require('egg').Service;
class UserService extends Service {
  //获取社区动态
  async community() {
<<<<<<< HEAD
    const { ctx } = this;
    const sql=`select username,headpic,comid,time,content,img,likenum from user inner join community on community.email = user.email order by comid DESC`
=======
    const sql = `select username,headpic,comid,time,content,img,likenum from user inner join community on community.email = user.email order by comid DESC`
>>>>>>> d7b59b0c49ee04b4bd935e233d8fe0bc430b9737
    const data = await this.app.mysql.query(sql);
    for (let i = 0; i < data.length; i++) {
      let imgarr = data[i].img.split('-')
      data[i].imgarr = imgarr
    }
    const sql1 = `select comid from dynlike where cemail="${ctx.session.email}"`
    const data1 = await this.app.mysql.query(sql1)
    return {data:data,data1:data1};
  }
}
module.exports = UserService;