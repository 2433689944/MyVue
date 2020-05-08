const Service = require('egg').Service;
class UserService extends Service {
  //获取社区动态
  async community() {
    const { ctx } = this;
    const sql = `select username,headpic,comid,time,content,img,likenum from user inner join community on community.email = user.email order by comid DESC`
    const data = await this.app.mysql.query(sql);
    for (let i = 0; i < data.length; i++) {
      let imgarr = data[i].img.split('-')
      data[i].imgarr = imgarr
    }
    return data
  }
  //获取动态点赞情况
  async getislike(parames) {
    const {ctx} = this
    parames.cemail=ctx.session.email
    const sql1 = `select * from dynlike where comid="${parames.comid}" and cemail="${parames.cemail}"`
    const islike = await this.app.mysql.query(sql1);
    return islike
  }
}
module.exports = UserService;