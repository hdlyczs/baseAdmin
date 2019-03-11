/**
 * Created by
 */

import axios from 'axios'
import router from '../router/index'
import { Loading, Message } from 'element-ui'
/*
import {loginService} from './user/login.service'
import {logoutService} from './user/logout.service'
import {userService} from './user/user.service'

import {leakManagementService} from './leak-management/leak-management-service.js'
import {systemManagementService} from './system-management/system-management-service.js'
import {dataAssetsManagementService} from './data-assets-management/data-assets-management-service.js'
import {visualizationManagementService} from './visualization-management/visualization-management-service.js'
*/

axios.defaults.withCredentials = true;
// axios.defaults.headers.common['processMap'] = JSON.stringify({"processDefinitionKey":"topstechfin-process"});
// axios.defaults.headers.common['processInstanceId'] = '';
// axios.defaults.headers.common['operation'] = '';

axios.interceptors.request.use(
  config => {
    return config;
  }
);

axios.interceptors.response.use(
  response => {
    // console.log(666,response)
    if (response.data.status == 200) {
      // 如果是正常情况，提取接口的数据并返回
      return Promise.resolve(response.data.data);
    } else if(response.data.status == 4002){
      // 如果是未登录，那么把响应reject掉，并重定向到登录模块
      if (window.location.protocol == "https:") {
        window.location.href = "https://"+window.location.host +"/#/login";
      } else {
        window.location.href = "http://"+window.location.host +"/#/login";
      }
    } else if(response.data.status == 201){
      /*Message.error({
        message: "登录过期，请重新登录"
      })*/
      // 如果是未登录，那么把响应reject掉，并重定向到登录模块
      if (window.location.protocol == "https:") {
        window.location.href = "https://"+window.location.host +"/#/login";
      } else {
        window.location.href = "http://"+window.location.host +"/#/login";
      }
    } else {
      // 如果是其他错误，那么把响应reject掉，并返回错误对象
      return Promise.reject(response.data);
    }
    // return Promise.resolve(response.data);
  },
  error => {
    // console.log(777,error)
    if(!error.response){
      // 如果是未登录，那么把响应reject掉，并重定向到登录模块
      if (window.location.protocol == "https:") {
        window.location.href = "https://"+window.location.host +"/#/login";
      } else {
        window.location.href = "http://"+window.location.host +"/#/login";
      }
      return
    }
    // 如果是响应失败，那么返回失败时的数据对象
    return Promise.reject(error.response.data);
  }
);

export {

}
