'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //注册界面接口
  router.get('/getVerif', controller.verif.getVerif);//获取验证码
  router.post('/register', controller.register.register);//注册 

  //登录界面接口
  router.post('/getUserEmailpwd', controller.userInfo.getUserEmailpwd);//加载登录页面时获取用户缓存的账号和密码
  router.post('/login', controller.login.login);//登录

   //首页接口
   router.get('/getUserInfo', controller.userInfo.getUserInfo);//加载首页时获取用户所有信息
};
