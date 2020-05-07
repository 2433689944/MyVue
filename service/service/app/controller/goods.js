'use strict';
const Controller = require('egg').Controller;
class GoodsController extends Controller {
    //首页商品展示
    async getAllGoods() {
        const { ctx } = this;
        let result = await ctx.service.goods.getAllGoods();
        ctx.body = result;
    }

    //按类别分类
    async classify() {
        const { ctx } = this;
        let result = await ctx.service.goods.classify(ctx.request.query.keystr);
        ctx.body = result;
    }

    //搜索商品
    async searchgoods() {
        const { ctx } = this;
        let result = await ctx.service.goods.searchgoods(ctx.request.query.setext);
        if (result[0]) {
            ctx.body = { code: 2000, info: result }
        } else {
            ctx.body = { code: 4001, info: [] }
        }
    }

    //获取商品详情
    async getgood() {
        const { ctx } = this;
        const mydata = await ctx.service.goods.getgood(ctx.query.goodsid)
        // console.log(mydata)
        ctx.body = mydata;
    }
}
module.exports = GoodsController;