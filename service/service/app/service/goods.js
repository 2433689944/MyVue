const Service = require('egg').Service;
class GoodsService extends Service {
    //首页商品展示
    async getAllGoods() {
        const sql = `select * from goods order by id DESC`;
        const data = await this.app.mysql.query(sql);
        return data;
    }

    //按类别分类
    async classify(keystr) {
        const sql = `select * from goods where types = "${keystr}"`;
        const data = await this.app.mysql.query(sql);
        return data;
    }

    //搜索商品
    async searchgoods(setext) {
        const sql = `select * from goods where types like '%${setext}%'`;
        const data = await this.app.mysql.query(sql);
        return data;
    }

    //获取商品详情
    async getgood(id) {
        const sql = `select * from goods where id = "${id}";`
        const data = await this.app.mysql.query(sql);
        let email = data[0].email;
        const sql2 = `select username,headpic from user where email= "${email}";`
        const data2 = await this.app.mysql.query(sql2);
        return {info:data,info2:data2};
    }
}
module.exports = GoodsService;