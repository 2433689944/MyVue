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
    // async getcar() {
    //     const sql = `select * from car where email="${this.ctx.session.email}"`
    //     const data = await this.app.mysql.query(sql);//查询购物车是否有商品
    //     if (data[0]) {
    //         //购物车有商品,进行多表连接查询,将商品数量拼上
    //         const sql2 = `select * from goods inner join car on goods.id = car.goodsid and email ="${this.ctx.session.email}"`;
    //         const data2 = await this.app.mysql.query(sql2);
    //         return { code: 2000, info: data2 };
    //     } else {
    //         //购物车为空
    //         return { code: 4001, info: "购物车为空" };
    //     }
    // }

    //删除购物车中指定id的商品
    // async deletegoods(goodsid) {
    //     const sql = `delete from car where goodsid=${goodsid} and email="${this.ctx.session.email}"`;
    //     this.app.mysql.query(sql);
    // }
}
module.exports = CarService;
