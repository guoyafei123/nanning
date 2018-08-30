import axios from 'axios';
import router from '../../router'
//
axios.defaults.timeout = 50000;
//http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
//     config.data = JSON.stringify(config.data);
//     config.headers = {
//       'Content-Type':'application/x-www-form-urlencoded'
//     }
//     // if(token){
//     //   config.params = {'token':token}
//     // }
//     return config;
//   },
//   error => {
//     return Promise.reject(errnpm );
//   }
// );



/**
 * 封装get请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params = {}){
  return new Promise((resolve,reject) => {
    axios.get(url,{params:params})
      .then(response => {
        resolve(response.data);
        //console.log(response.data.errorCode);
        // 全局拦截tooltip提示
        $("[data-toggle='tooltip']").tooltip();
        // 全局拦截未登录调整login
        if(response.data.errorCode=='20013'){
          // alert('未登录')
          this.$router.push("/login");
          
          return;
        }
      },err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

