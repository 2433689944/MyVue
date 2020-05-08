'use strict';
const Controller = require('egg').Controller;
class pugoodcomController extends Controller {
  async pugoodcom() {
    const { ctx } = this;
    const pudata = await ctx.service.goodscom.pugoodcom(ctx.request.query)
    ctx.body = pudata;
  }
  
  async getgoodscom() {
    const { ctx } = this;
    const getdata = await ctx.service.goodscom.getgoodscom(ctx.request.query)
    ctx.body = getdata;
  }
}
module.exports = pugoodcomController;