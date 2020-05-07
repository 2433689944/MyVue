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
        return data;
    }
}
module.exports = GoodsService;