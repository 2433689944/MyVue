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
  router.get('/getUserInfo', controller.userInfo.getUserInfo);//获取用户名和头像
  router.get('/loginout', controller.login.loginout);//退出登录

  //发布商品
  router.post('/release', controller.release.release);//发布商品 

  //发布动态
  router.post('/dynamic',controller.dynamic.dynamic);//发布动态

  //社区页面初始化请求
  router.get('/community',controller.community.community);

  //动态评论
  router.post('/comment',controller.dynamic.comment);

  //动态评论页面初始化
  router.get('/getComment',controller.dynamic.getComment);

};
