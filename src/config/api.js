
// 配置API接口地址
let root = process.env.API_ROOT;
root = '//'+window.location.host;
// root = '//127.0.0.1:8080'
// root = '//192.168.10.101:8080'
export default {
  /*
   * @action 鉴权服务
   */
  OAUTH: {
    //登入
    LOGIN: root+'/login',
    //登出
    LOGOUT: root+'/logout',
    // 获取用户信息
    GET_USER_INFO: root+'/info',
    // 更新用户信息
    UPDATE_USER_INFO:root+'/my/update',
    // 修改用户密码信息
    FIX_USER_INFO:root+'/my/resetPwd',
    // 获取菜单鉴权信息
    GET_MENU_LIST: root+'/my/menuList',


  },
  /*
   * @登陆后，新窗口免登录设置
   */
  NOLANDING: {
    //登入
    UNLOGIN: root+'/loginTest',
  },
  /*
   * @数据统计
   */
  DATA_STATISTICS: {
    //设备列表
    DEVICE: root+'/device/list',
    //添加设备
    ADD_DEVICE_INFO: root+'/device/add',
    //更新设备
    EDIT_DEVICE_INFO: root+'/device/update',
    //删除设备
    DEL_DEVICE_INFO: root+'/device/delete',
    //批量删除设备信息
    DEL_LIST_DEVICE_INFO: root+'/device/deleteList',
    //根据id查询设备
    CHECK_DEVICE_INFO: root+'/device/info',
    //监管账号
    SURPERVISE: root+'/',
  },
  /*
   * @action 资产统计
   */
  ASSET_STATISTICS:{
    //设备列表
    DEVICE_LIST: root+'/device/list',
    //导出资产报告
    DEVICE_EXPORT_INFO:root+'/device/export',
    //设备详情
    DEVICE_CHECK_INFO:root+'/device/info',
    //全国接入互联网的工控系统城市top10
    DEVICE_SYSTEM_CITY:root+'/device/gkCity',
    //全国接入互联网的工控系统协议top10
    DEVICE_SYSTEM_PROTOCOL:root+'/device/gkProtocol',
    //全国接入互联网的工控系统省份top10
    DEVICE_SYSTEM_PROVINCE:root+'/device/gkProvince',
    //全国接入互联网的工控系统类型top10
    DEVICE_SYSTEM_TYPE:root+'/device/gkType',
    //全国接入互联网的工控系统厂商top10
    DEVICE_SYSTEM_VENDOR:root+'/device/gkVendor',
  },
  /*
   * @action 漏洞检索
   */
  LEAK_RETRIEVAL:{
    //漏洞列表
    LEAK_LIST: root+'/loophole/list',
    //漏洞详情
    LEAK_CHECK_INFO:root+'/loophole/info',
    //漏洞厂商风险分布
    LEAK_VENDOR_INFO: root+'/loophole/vendor',
    //漏洞风险分布
    LEAK_VENTURE_INFO: root+'/loophole/venture',
  },
  /*
   * @action 系统管理
   */
  SYSTEM_MANAGE:{
    //用户管理页面
    // 获取用户列表信息
    GET_USER_LIST: root+'/user/list',
    // 创建用户信息
    ADD_USER_INFO:root+'/user/add',
    // 编辑用户信息
    EDIT_USER_INFO: root+'/user/update',
    // 查看用户信息
    CHECK_USER_INFO:root+'/user/info',
    // 重置用户密码信息
    RESET_USER_PASSWORD_INFO:root+'/user/resetPwd',
    // 删除用户信息
    DEL_USER_INFO: root+'/user/delete',
    // 批量删除用户信息
    DEL_USER_LIST_INFO: root+'/user/delete',


    //系统管理管理页面
    // 获取网络信息列表信息
    SYSTEM_CONFIG_LIST: root+'/sys/list',
    // 修改网络信息
    EDIT_SYSTEM_CONFIG:root+'/sys/update',
    // 实时获取性能信息
    SYSTEM_PERFORMANCE: root+'/sys/realInfo',
    // 实时网络信息
    SYSTEM_NET:root+'/sys/realNet',
    // 重置网络
    RESET_SYSTEM_NET: root+'/sys/restartNet',
    // 重启电脑
    RESTART_COMPUTER: root+'/sys/restartPC',
    // 关机
    SHUTDOWN_COMPUTER:root+'/sys/powerOff',
    // 上传文件更新系统文件包
    UPLOAD_SYSTEM_FILE:'/sys/upload',
    //更新系统操作
    UPDATE_SYSTEM_SAFE:root+'/sys/updateVersion',
    //版本信息管理页面
    // 获取版本信息
    SYSTEM_COPYRIGHT: root+'/sys/version',
    // 获取漏洞库更新时间
    SYSTEM_LEAK_DATA: root+'/sys/dataUpdate',
  },


};



































