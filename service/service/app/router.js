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
  router.get('/getAllGoods', controller.goods.getAllGoods);//首页商品展示
  router.get('/classify', controller.goods.classify);//按类别分类
  router.get('/searchgoods', controller.goods.searchgoods);//搜索商品

  //发布商品页面接口
  router.post('/release', controller.release.release);//发布商品 
  router.post('/uploadgoods', controller.release.uploadgoods);//图片上传地址 

  //发布动态页面接口
  router.post('/dynamic',controller.dynamic.dynamic);//发布动态

  //社区页面界面
  router.get('/community',controller.community.community);//获取社区动态

};
