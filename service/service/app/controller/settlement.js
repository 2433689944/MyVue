'use strict';
const Controller = require('egg').Controller;
class addtoorderController extends Controller {
  async addtoorder() {
    const { ctx } = this;
    const order = await ctx.service.settlement.addtoorder(ctx.request.body)
    ctx.body = order;
  }
}
module.exports = addtoorderController;