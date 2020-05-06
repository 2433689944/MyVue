'use strict';
const Controller = require('egg').Controller;
class PcenterController extends Controller {
    //修改用户信息
    async updateinfo() {
        const { ctx } = this;
        let upinfo = JSON.parse(ctx.request.query.form);
        await ctx.service.pcenter.updateinfo(upinfo);
        ctx.body = '123123';
    }
}
module.exports = PcenterController;