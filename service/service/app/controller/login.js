'use strict';
const Controller = require('egg').Controller;
class LoginController extends Controller {
    //用户登录
    async login() {
        const { ctx } = this;
        let result = await ctx.service.login.verifLogin(ctx.request.body);
        ctx.body = result;
    }
    
    //退出登录
    async loginout() {
        const { ctx } = this;
        //清空缓存
        ctx.session.email = null;
        ctx.session.pwd = null
        ctx.body = '';
    }
}
module.exports = LoginController;