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

  //详情页面接口
  router.get('/getgood', controller.goods.getgood);  //获取商品详情
  router.get('/addcar', controller.car.addcar);//添加商品到购物车
  router.get('/pugoodcom', controller.goodscom.pugoodcom);//将商品评论存入数据库
  router.get('/getgoodscom', controller.goodscom.getgoodscom);//根据商品id取评论信息
  

  //个人中心页面接口
  router.get('/getAllinfo', controller.userInfo.getAllinfo);//获取用户所有信息
  router.get('/updateinfo', controller.userInfo.updateinfo);//修改用户信息
  router.get('/getmymsg', controller.userInfo.getmymsg);//获取消息
  router.get('/updatamsg', controller.userInfo.updatamsg);//用户已读消息
  router.get('/getmygoods', controller.userInfo.getmygoods);//获取我的商品
  router.get('/getmyorders', controller.userInfo.getmyorders);//获取我的订单
  router.get('/getmydyn', controller.userInfo.getmydyn);//获取我的动态

  //发布商品页面接口
  router.post('/release', controller.release.release);//发布商品 
  router.post('/uploadgoods', controller.release.uploadgoods);//图片上传地址 

  //发布动态页面接口
  router.post('/dynamic', controller.dynamic.dynamic);//发布动态

  //社区页面界面
  router.get('/community', controller.community.community);//获取社区动态
  router.post('/comment', controller.dynamic.comment);//动态评论
  router.get('/getComment', controller.dynamic.getComment);//动态评论页面初始化
  router.get('/getislike', controller.community.getislike);//获取当前用户对当前动态点赞情况
  router.post('/dynLike', controller.dynamic.dynLike); //动态点赞
  router.get('/dynDisLike', controller.dynamic.dynDisLike);//取消动态点赞
};
