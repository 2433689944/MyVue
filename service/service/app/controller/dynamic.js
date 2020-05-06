'use strict';
const Controller = require('egg').Controller;
class dynamicController extends Controller {
  //发布动态
  async dynamic() {
    const { ctx } = this;
    // console.log(ctx.request.body,ctx.request.files)
    const mydata = await ctx.service.dynamic.dynamic(ctx.request.body, ctx.request.files)
    ctx.body = '';
  }

  async comment() {
    const { ctx } = this;
    const mydata = await ctx.service.dynamic.comment(ctx.request.body)
    ctx.body = '';
  }
  
  
  async getComment() {
    const { ctx } = this;
    // console.log(ctx.request.query)
    const getCom = await ctx.service.dynamic.getComment(ctx.request.query)
    ctx.body = getCom;
  }

  //动态点赞
  async dynLike() {
    const { ctx } = this;
    // console.log(ctx.request.body)
    const dynLikeNum = await ctx.service.dynamic.dynLike(ctx.request.body)
    ctx.body = dynLikeNum;
  }
  
  async dynDisLike() {
    const { ctx } = this;
    // console.log(ctx.request.query)
    const dynDisLikeNum = await ctx.service.dynamic.dynDisLike(ctx.request.query)
    ctx.body = dynDisLikeNum;
  }
}
module.exports = dynamicController;