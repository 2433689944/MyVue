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

    //获取消息
    async getmymsg() {
        const { ctx } = this;
        let result = await this.ctx.service.userInfo.getmymsg();
        ctx.body = result;
    }
    
    //获取评论
    async getmycom() {
        const { ctx } = this;
        let result = await this.ctx.service.userInfo.getmycom();
        ctx.body = result;
    }
    
    //用户已读消息
    async updatamsg() {
        const { ctx } = this;
        await this.ctx.service.userInfo.updatamsg(ctx.request.query.id);
        ctx.body = { code: 2000, info: "消息已读" };
    }

    //用户已读评论
    async updatacom() {
        const { ctx } = this;
        await this.ctx.service.userInfo.updatacom(ctx.request.query.id);
        ctx.body = { code: 2000, info: "评论已读" };
    }

    //获取我的商品
    async getmygoods() {
        const { ctx } = this;
        let result = await this.ctx.service.userInfo.getmygoods();
        ctx.body = result;
    }

    //获取我的订单
    async getmyorders() {
        const { ctx } = this;
        let result = await this.ctx.service.userInfo.getmyorders();
        ctx.body = result;
    }

    //获取我的动态
    async getmydyn() {
        const { ctx } = this;
        let result = await this.ctx.service.userInfo.getmydyn();
        ctx.body = result;
    }
}
module.exports = UserInfoController;