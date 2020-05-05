'use strict';
const Controller = require('egg').Controller;
class GoodsController extends Controller {
    //首页商品展示
    async getAllGoods() {
        const { ctx } = this;
        // let result = await ctx.service.goods.getAllGoods();
        ctx.body = result;
    }
}
module.exports = GoodsController;