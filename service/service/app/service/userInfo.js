const Service = require('egg').Service;
class GetUserInfoService extends Service {
    //获取用户名和头像
    async getUserInfo() {
        const sql = `select username,headpic from user where email="${this.ctx.session.email}"`
        const data = await this.app.mysql.query(sql);
        return data;
    }

    //获取用户所有信息
    async getAllinfo() {
        const sql = `select username,email,headpic,sex,school,gradata,signature,relname from user where email="${this.ctx.session.email}"`
        const data = await this.app.mysql.query(sql);
        return data;
    }
}
module.exports = GetUserInfoService;