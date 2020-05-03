const Service = require('egg').Service;
class GetUserInfoService extends Service {
    async getUserInfo() {
        const sql = `select username,headpic from user where email="${this.ctx.session.email}"`
        const data = await this.app.mysql.query(sql);
        return data;
    }
}
module.exports = GetUserInfoService;