const Service = require('egg').Service;
const fs = require('fs');
class RegisterService extends Service {
    //验证邮箱是否被注册
    async verifEmail(email) {
        const sql = `select * from user where email="${email}"`;
        const data = await this.app.mysql.query(sql);
        return data;
    }

    //存储用户信息到数据库
    async register(params, files) {
        // console.log(params, files)
        let oldpath = files[0].filepath;
        let newpath = __dirname + "/../public/headpic/" + files[0].filename;
        fs.rename(oldpath, newpath, () => { });
        params.headpic = "http://localhost:81/public/upload/" + files[0].filename;
        const sql = `insert into user(username,email,pwd,headpic) values("${params.name}","${params.email}","${params.pwd}","${params.headpic}")`;
        this.app.mysql.query(sql);
    }
}
module.exports = RegisterService;