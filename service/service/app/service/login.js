const Service = require('egg').Service;
class LoginService extends Service {
    //验证用户邮箱和密码是否正确
    async verifLogin(params) {
        // console.log(params);
        //先去验证数据库中是否有该用户
        const sql = `select * from user where email="${params.email}"`;
        const data = await this.app.mysql.query(sql);
        if (!data[0]) {
            //数据库中未找到该用户的邮箱
            return { code: 4001, info: '该邮箱尚未注册' };
        } else {
            //数据库中有该用户才去验证密码是否正确
            const sql2 = `select * from user where email="${params.email}" and pwd="${params.pwd}"`;
            const data2 = await this.app.mysql.query(sql2);
            if (!data2[0]) {
                //密码错误
                return { code: 4002, info: '密码输入错误' };
            } else {
                //密码正确,缓存用户邮箱和密码,将用户名和头像发给前端
                this.ctx.session.email = params.email;
                this.ctx.session.pwd = params.pwd;
                const sql3 = `select username,headpic from user where email="${params.email}"`
                const data3 = await this.app.mysql.query(sql3);
                return { code: 2000, info: data3 };
            }
        }
    }
}
module.exports = LoginService;