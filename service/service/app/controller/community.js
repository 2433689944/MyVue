'use strict';
const Controller = require('egg').Controller;
class communityController extends Controller {
  //获取社区动态
  async community() {
    const { ctx } = this;
    const mydata = await ctx.service.community.community()
    console.log(mydata)
    ctx.body = mydata;
  }
}
module.exports = communityController;