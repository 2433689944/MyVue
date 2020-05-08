'use strict';
const Controller = require('egg').Controller;
class SettlementController extends Controller {
  //提交订单
  async addtoorder() {
    const { ctx } = this;
    await ctx.service.settlement.addtoorder(ctx.request.body);
    ctx.body = '';
  }
}
module.exports = SettlementController;