'use strict';
const Controller = require('egg').Controller;
class RegisterController extends Controller {
    //用户注册
    async register() {
        const { ctx } = this;
        // console.log(ctx.request.body,ctx.request.files,ctx.session.verifText);
        //首先判断用户输入的验证码是否正确
        if (ctx.session.verifText.toUpperCase() != ctx.request.body.verif.toUpperCase()) {
            ctx.body = { code: 4001, info: "验证码错误" };
        } else {
            //验证码正确,去数据库查询邮箱是否已经被注册
            let result = await ctx.service.register.verifEmail(ctx.request.body.email);
            if (result[0]) {
                //邮箱已被注册返回数据
                ctx.body = { code: 4002, info: "邮箱已被注册" };
            } else {
                //邮箱未被注册则存储用户信息到数据库
                await ctx.service.register.register(ctx.request.body, ctx.request.files);
                //将用户的邮箱和密码用session缓存在服务器
                ctx.session.email = ctx.request.body.email;
                ctx.session.pwd = ctx.request.body.pwd;
                ctx.body = { code: 2000, info: "注册成功" }
            }
        }
    }
}
module.exports = RegisterController;