'use strict';
const Controller = require('egg').Controller;
class dynamicController extends Controller {
  //发布动态
  async dynamic() {
    const { ctx } = this;
    const mydata = await ctx.service.dynamic.dynamic(ctx.request.body, ctx.request.files)
    ctx.body = mydata;
  }

  //上传动态评论
  async comment() {
    const { ctx } = this;
    const mydata = await ctx.service.dynamic.comment(ctx.request.body)
    ctx.body = mydata;
  }

  //获取动态评论
  async getComment() {
    const { ctx } = this;
    const getCom = await ctx.service.dynamic.getComment(ctx.request.query)
    ctx.body = getCom;
  }

  //动态点赞
  async dynLike() {
    const { ctx } = this;
    const dynLikeNum = await ctx.service.dynamic.dynLike(ctx.request.body)
    ctx.body = dynLikeNum;
  }
  
  //取消点赞
  async dynDisLike() {
    const { ctx } = this;
    const dynDisLikeNum = await ctx.service.dynamic.dynDisLike(ctx.request.query)
    ctx.body = dynDisLikeNum;
  }
}
module.exports = dynamicController;