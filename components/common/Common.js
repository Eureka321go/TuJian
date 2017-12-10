import Toast from "react-native-root-toast"

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
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if(!myreg.test(val)){
        return false
    }
    return true;
}

//返回图标的样式
function backStyle(){
    return{
        width:Calc.getWidth(42),
        height:Calc.getWidth(42),
        marginLeft:Calc.getWidth(45)
    }
}


export const CommonJS={
    toastShow,
    phoneTest,
    backStyle,

}
global.CommonJS=CommonJS