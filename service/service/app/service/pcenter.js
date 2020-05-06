const Service = require('egg').Service;
class PcenterService extends Service {
    async updateinfo(upinfo) {
        console.log(upinfo)
        const sql = `update user set username="${upinfo.username}",sex="${upinfo.sex}",school="${upinfo.school}",
        gradata="${upinfo.gradata}",signature="${upinfo.signature}",relname="${upinfo.relname}" where email="${upinfo.email}"`
        this.app.mysql.query(sql);
    }
}
module.exports = PcenterService;