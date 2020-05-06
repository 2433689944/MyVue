'use strict';
const Controller = require('egg').Controller;
class communityController extends Controller {
  async community() {
    const { ctx } = this;
    const mydata = await ctx.service.community.community()
    ctx.body = mydata;
  }
}
module.exports = communityController;