import axios from 'axios';
axios.defaults.baseURL = 'http://api.duyiedu.com';
axios.interceptors.request.use(function(config) {
    //在发送请求前做些什么
    // console.log(config);
    config.params = {
        ...config.params, //解构赋值
        appkey: "18903865737_1564204059032"
    }
    return config;
}, function(error) {
    //对请求错误做些什么
    return Promise.reject(error);
});

export default axios;