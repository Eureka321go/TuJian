import Toast from "react-native-root-toast"
let axios=require("axios");
import "./storage"
import qs from "qs"
let storage=global.storage;
let isToast=true; //避免吐司重叠

//吐司
function toastShow(text,obj) {
    if(!isToast){return}
    isToast=false
    obj?Toast.show(text,{
        ...obj,
        onHidden:()=>{
            isToast=true;
        }
    }):Toast.show(text,{
        backgroundColor:"rgba(0,0,0,0.3)",
        onHidden: () =>{
            isToast=true;
        }
    })
}

//验证手机号
function phoneTest(val) {
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if(!myreg.test(val)){
        return false
    }
    return true;
}



//axios的分装
//axios对ajax的封装
// axios＃request（config）
// axios＃get（url [，config]）
// axios＃delete（url [，config]）
// axios＃head（url [，config]）
// axios＃post（url [，data [，config]]）
// axios＃put（url [，data [，config]]）
// axios＃patch（url [，data [，config]]）
let axiosIns = axios.create({});
axiosIns.defaults.baseURL = 'http://www.yfytianxia.com:8080/api';
axiosIns.defaults.timeout = 10000;
axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.headers.delete['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.headers.put['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.responseType = 'json';
axiosIns.defaults.transformRequest = [function (data) {
    //数据序列化
    return qs.stringify(data);
}
];
axiosIns.defaults.validateStatus = function (status) {
    return true;
};
storage.load({
    key:"token"
}).then((ret)=>{
    if(ret){
        axiosIns.interceptors.request.use(function (config) {
            //配置config
            config.headers.Accept = 'application/json';
            config.headers.System = 'vue';
            config.headers.Token =ret;
            return config;
        });
    }
}).catch((err)=>{

})

axiosIns.interceptors.response.use(function (response) {
    let status = response.status;
    if (status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
});

let ajaxMethod = ['get', 'post','delete','put'];
let api = {};
ajaxMethod.forEach((method) => {
    //数组取值的两种方式
    //notFound是资源找不到时的回调函数
    //timeout是指超过指定时间的回调函数
    //{
    // uri, data,config,
    // loadingFun,
    // notFound,
    // timeOut
    // }
    api[method] = function (obj) {
        return new Promise(function (resolve, reject) {
            if(!obj.loadingFun){
                // toastShow("加载中",{
                //     position:0,
                //     visible:true,
                // })
            }else{ obj.loadingFun();}
            axiosIns[method](obj.url, obj.data, obj.config).then((response) => {
                //!obj.loadiing && Indicator.close();
                //token无效
                if (response.data.code === -11) {
                    // store.dispatch('setToken','');
                    // window.localStorage.setItem("token", '');
                    // Toast({
                    //     position: 'bottom',
                    //     Message: response.data.msg,
                    //     iconClass: 'icon-error',
                    //     duration:3000
                    // });
                    // return;
                }
                resolve(response);
            }).catch((e) => {
                console.log(e)
                //!obj.loadiing && Indicator.close();
                console.log(e)
                if(e.status){
                    if (e.status === 404) {
                        if(!obj.notFound){
                            toastShow("资源不存在，请求失败",{
                                position:-20,
                                visible:true,
                            })
                        }else{
                            obj.notFound()
                        }
                        return;
                    }
                }
                if(!obj.timeOut){
                    toastShow("请求超时，请重试",{
                        position:-20,
                        visible:true,
                    })
                }else{obj.timeOut()}
            })
        })
    }
});



let key="HEPBZ-MW2WG-US2QP-I7HZ6-HQNFF-5XFIS";//腾讯地图key


export const CommonJS={
    toastShow,
    phoneTest,
    $axios:api,
    key,
}
global.CommonJS=CommonJS