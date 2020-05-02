const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');
class VerifService extends Service {
    //获取验证码
    async getVerif() {
        let verifImg = svgCaptcha.create({
            ize: 4,
            fontSize: 45,
            width: 100,
            height: 32,
            background: '#E7EAED',
            color: true,
        })
        return verifImg;
    }
}
module.exports = VerifService;