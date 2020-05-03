'use strict';
const Controller = require('egg').Controller;
class LoginController extends Controller {
    //用户登录
    async login() {
        const { ctx } = this;
        let result = await ctx.service.login.verifLogin(ctx.request.body);
        ctx.body = result;
    }
}
module.exports = LoginController;