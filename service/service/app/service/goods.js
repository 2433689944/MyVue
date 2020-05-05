const Service = require('egg').Service;
class GoodsService extends Service {
    //首页商品展示
    async getAllGoods() {
        const sql = `select * from goods`;
        const data = await this.app.mysql.query(sql);
        return data;
    }
}
module.exports = GoodsService;