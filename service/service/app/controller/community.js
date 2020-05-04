'use strict';
const Controller = require('egg').Controller;
class communityController extends Controller {
  async community() {
    const { ctx } = this;
    const mydata = await ctx.service.community.community()
    ctx.body = mydata;
  }

  async getUserInfo() {
    const { ctx } = this;
    const userIfo = await ctx.service.community.getUserInfo(ctx.request.body)
    ctx.body = userIfo;
  }
}
module.exports = communityController;