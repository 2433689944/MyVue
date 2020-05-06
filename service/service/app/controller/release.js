'use strict';
const Controller = require('egg').Controller;
class releaseController extends Controller {
  //发布商品
  async release() {
    const { ctx } = this;
    const mydata = await ctx.service.release.release(ctx.request.body, ctx.request.files)
    ctx.body = mydata;
  }

  //上传商品图片
  async uploadgoods() {
    const { ctx } = this;
    ctx.body = "";
  }
}
module.exports = releaseController;