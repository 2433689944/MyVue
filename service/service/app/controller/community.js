'use strict';
const Controller = require('egg').Controller;
class communityController extends Controller {
  //获取社区动态
  async community() {
    const { ctx } = this;
    let mydata = await ctx.service.community.community()
    ctx.body = mydata;
  }
  
  async getislike() {
    const { ctx } = this;
    let islike = await ctx.service.community.getislike(ctx.request.query)
    ctx.body = islike;
  }
}
module.exports = communityController;