'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //注册界面接口
  router.get('/getVerif', controller.verif.getVerif);//获取验证码
  router.post('/register', controller.register.register);//注册 
<<<<<<< HEAD
  
  router.post('/release', controller.release.release);//发布商品
=======

  //登录界面接口
  router.post('/getUserEmailpwd', controller.userInfo.getUserEmailpwd);//加载登录页面时获取用户缓存的账号和密码
  router.post('/login', controller.login.login);//登录

<<<<<<< HEAD
  //首页接口
  router.get('/getUserInfo', controller.userInfo.getUserInfo);//获取用户名和头像
  router.get('/loginout', controller.login.loginout);//退出登录
=======
   //首页接口
   router.get('/getUserInfo', controller.userInfo.getUserInfo);//加载首页时获取用户所有信息
>>>>>>> 5b4755da9847f05540764a55f739726d184cc139
>>>>>>> 2f4f45655c905dd3ba81090f6f23f70089b5df5b
};
