'use strict';
const Controller = require('egg').Controller;
class releaseController extends Controller {
  async release() {
    const { ctx } = this;
    const mydata = await ctx.service.release.release(ctx.request.body,ctx.request.files)
    ctx.body = mydata;
  }
}
module.exports = releaseController;