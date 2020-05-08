'use strict';
const Controller = require('egg').Controller;
class communityController extends Controller {
  //获取社区动态
  async community() {
    const { ctx } = this;
    let mydata = await ctx.service.community.community()
    ctx.body = mydata;
  }

  //获取动态点赞情况
  async getislike() {
    const { ctx } = this;
    console.log(ctx.request.body)
    let islike = await ctx.service.community.getislike(ctx.request.body)
    ctx.body = islike;
  }
}
module.exports = communityController;