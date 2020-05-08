'use strict';
const Controller = require('egg').Controller;
class pugoodcomController extends Controller {
  //上传商品评论
  async pugoodcom() {
    const { ctx } = this;
    const pudata = await ctx.service.goodscom.pugoodcom(ctx.request.query)
    ctx.body = pudata;
  }

  //获取商品评论信息
  async getgoodscom() {
    const { ctx } = this;
    const getdata = await ctx.service.goodscom.getgoodscom(ctx.request.query)
    ctx.body = getdata;
  }
}
module.exports = pugoodcomController;