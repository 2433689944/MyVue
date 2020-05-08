const Service = require('egg').Service;
class GetUserInfoService extends Service {
    //获取用户名和头像
    async getUserInfo() {
        const sql = `select username,headpic from user where email="${this.ctx.session.email}"`
        const data = await this.app.mysql.query(sql);
        return data;
    }

    //获取用户所有信息
    async getAllinfo() {
        const sql = `select username,email,headpic,sex,school,gradata,signature,relname from user where email="${this.ctx.session.email}"`
        const data = await this.app.mysql.query(sql);
        return data;
    }

    //修改用户信息
    async updateinfo(upinfo) {
        const sql = `update user set username="${upinfo.username}",sex="${upinfo.sex}",school="${upinfo.school}",
        gradata="${upinfo.gradata}",signature="${upinfo.signature}",relname="${upinfo.relname}" where email="${upinfo.email}"`
        this.app.mysql.query(sql);
    }

    //获取消息
    async getmymsg() {
        //获取未读消息
        const sql = `select id,cemail,comdiscuss.content as ct2,comdiscuss.time,community.content from comdiscuss inner join community 
        on comdiscuss.comid = community.comid and email = "${this.ctx.session.email}" and lookflag="0" order by id DESC`;
        const data = await this.app.mysql.query(sql);
        //获取已读消息
        const sql2 = `select id,cemail,comdiscuss.content as ct2,comdiscuss.time,community.content from comdiscuss inner join community 
        on comdiscuss.comid = community.comid and email = "${this.ctx.session.email}" and lookflag="1" order by id DESC`;
        const data2 = await this.app.mysql.query(sql2);
        return { info: data, info2: data2 };
    }

    //用户已读消息
    async updatamsg(cont) {
        const sql = ` update comdiscuss set lookflag="1" where content ="${cont}"`;
        const data = await this.app.mysql.query(sql);
        return data;
    }

    //获取我的商品
    async getmygoods() {
        const sql = `select * from goods where email="${this.ctx.session.email}" order by id DESC`
        const data = await this.app.mysql.query(sql);
        return data;
    }

    //获取我的订单
    async getmyorders() {
        const sql = `select addressname,addphone,title,price,img from orders inner join goods on orders.goodsid = goods.id and orders.email ="${this.ctx.session.email}"`
        const data = await this.app.mysql.query(sql);
        return data;
    }

    //获取我的动态
    async getmydyn() {
        const sql = `select * from community where email="${this.ctx.session.email}" order by comid DESC`
        const data = await this.app.mysql.query(sql);
        return data;
    }
}
module.exports = GetUserInfoService;