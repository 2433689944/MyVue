const Service = require('egg').Service;
class CarService extends Service {
    //请求购物车商品数量
    // async goodstotalnum() {
    //     const sql = `select * from car where email="${this.ctx.session.email}"`
    //     const data = await this.app.mysql.query(sql);
    //     return data;
    // }


    //添加商品到购物车
    async addcar(id) {
        const sql = `select * from car where email="${this.ctx.session.email}" and goodsid = "${id}"`;
        const data = await this.app.mysql.query(sql);
        if (data[0]) {
            //购物车已有该商品则不会再添加到数据库
            return { code: 4001, info: "请勿重复添加" };
        } else {
            //购物车没有该商品则添加到数据库
            const sql2 = `insert into car(email,goodsid) values("${this.ctx.session.email}","${id}")`;
            const data2 = await this.app.mysql.query(sql2);
            return { code: 2000, info: "添加成功" };
        }
    }

    //获取用户购物车商品
    async getfromcar() {
        const sql = `select * from car inner join goods on car.goodsid=goods.id and car.email = "${this.ctx.session.email}"`
        const data = await this.app.mysql.query(sql);
        return data;
    }

    //删除购物车中指定id的商品
    async removegood(id) {
        const sql = `delete from car where goodsid = "${id}" and email="${this.ctx.session.email}" `
        const data = await this.app.mysql.query(sql);
        return data;
    }
}
module.exports = CarService;
