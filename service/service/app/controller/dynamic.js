'use strict';
const Controller = require('egg').Controller;
class dynamicController extends Controller {
  async dynamic() {
    const { ctx } = this;
    console.log(ctx.request.body,ctx.request.files)
    const mydata = await ctx.service.dynamic.dynamic(ctx.request.body,ctx.request.files)
    ctx.body = '';
  }
}
module.exports = dynamicController;