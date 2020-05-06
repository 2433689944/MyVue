'use strict';
const Controller = require('egg').Controller;
class dynamicController extends Controller {
  async dynamic() {
    const { ctx } = this;
    console.log(ctx.request.body,ctx.request.files)
    const mydata = await ctx.service.dynamic.dynamic(ctx.request.body,ctx.request.files)
    ctx.body = '';
  }

  async comment() {
    const { ctx } = this;
    console.log(ctx.request.body)
    const mydata = await ctx.service.dynamic.comment(ctx.request.body)
    ctx.body = '';
  }
  
  
  async getComment() {
    const { ctx } = this;
    console.log(ctx.request.query)
    const getCom = await ctx.service.dynamic.getComment(ctx.request.query)
    ctx.body = getCom;
  }
}
module.exports = dynamicController;