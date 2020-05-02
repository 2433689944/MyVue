'use strict';
const Controller = require('egg').Controller;
class VerifController extends Controller {
    //获取验证码
    async getVerif() {
        const { ctx } = this;
        let verifimg = await ctx.service.verif.getVerif();
        //将验证码的text缓存在服务器,只将data发送给前端
        ctx.session.verifText = verifimg.text;
        // console.log(ctx.session.verifText)
        ctx.body = verifimg.data;
    }
}
module.exports = VerifController;