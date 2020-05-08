'use strict';
const Controller = require('egg').Controller;
class CarController extends Controller {
    //添加商品到购物车
    async addcar() {
        const { ctx } = this;
        let result = await ctx.service.car.addcar(ctx.request.query.id);
        ctx.body = result;
    }

    //获取用户购物车商品
    async getfromcar() {
        const { ctx } = this;
        let mydata = await ctx.service.car.getfromcar()
        ctx.body = mydata;
    }

    //删除购物车中指定id的商品
    async removegood() {
        const { ctx } = this;
        await ctx.service.car.removegood(ctx.request.query.goodsid)
        ctx.body = '';
    }
}
module.exports = CarController;