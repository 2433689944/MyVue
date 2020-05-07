'use strict';
const Controller = require('egg').Controller;
class CarController extends Controller {
    //请求购物车商品数量
    // async goodstotalnum() {
    //     const { ctx } = this;
    //     if (ctx.session.email) {
    //         //用户登录状态
    //         let result = await ctx.service.car.goodstotalnum();
    //         ctx.body = { code: 2000, info: result };
    //     } else {
    //         //用户未登录
    //         ctx.body = { code: 4001, info: "请先登录" };
    //     }
    // }

    //添加商品到购物车
    async addcar() {
        const { ctx } = this;
        let result = await ctx.service.car.addcar(ctx.request.query.id);
        ctx.body = result;
    }

    // //获取用户购物车商品
    // async getcar() {
    //     const { ctx } = this;
    //     let result = await ctx.service.car.getcar();
    //     ctx.body = result;
    // }

    // //删除购物车中指定id的商品
    // async deletegoods() {
    //     const { ctx } = this;
    //     await ctx.service.car.deletegoods(ctx.request.query.goodsid);
    //     ctx.body = { code: 2000, info: "删除成功" };
    // }
}
module.exports = CarController;