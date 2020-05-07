'use strict';
const Controller = require('egg').Controller;
class UserInfoController extends Controller {
    //加载登录页面时获取用户缓存的邮箱和密码
    async getUserEmailpwd() {
        const { ctx } = this;
        if (ctx.session.email && ctx.session.pwd) {
            ctx.body = { code: 2000, email: ctx.session.email, pwd: ctx.session.pwd };
        } else {
            ctx.body = { code: 4001, info: "未登录" }
        }
    }

    //获取用户名和头像
    async getUserInfo() {
        const { ctx } = this;
        let result = await this.ctx.service.userInfo.getUserInfo();
        ctx.body = { code: 2000, info: result }
    }

    //获取用户所有信息
    async getAllinfo() {
        const { ctx } = this;
        let result = await this.ctx.service.userInfo.getAllinfo();
        ctx.body = result
    }

    //修改用户信息
    async updateinfo() {
        const { ctx } = this;
        let upinfo = JSON.parse(ctx.request.query.form);
        await ctx.service.userInfo.updateinfo(upinfo);
        ctx.body = '';
    }

    //获取我的商品
    async getmygoods() {
        const { ctx } = this;
        let result = await this.ctx.service.userInfo.getmygoods();
        ctx.body = result
    }

}
module.exports = UserInfoController;