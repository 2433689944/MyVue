/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // 更改端口号
  config.cluster = {
    listen: {
      path: '',
      port: 81,
      hostname: ''
    }
  };

  //post发送数据需要关闭csrf(即打开该代码)
  config.security = {
    csrf: {
      enable: false
    }
  };

  //开启file模式，可以上传文件
  config.multipart = {
    mode: 'file',
  };

  // 配置数据库
  config.mysql = {
    client: {
      //host
      host: "localhost",
      //端口
      port: "3306",
      //用户名
      user: "root",
      //密码
      password: "root",
      //数据库名
      database: "vue"
    }
  };

  //session缓存的配置
  config.session = {
    key: 'EGG_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  };

  //跨域的配置
  config.cors = {
    origin: 'http://localhost:8080',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588139498290_7154';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
