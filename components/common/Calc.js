import {
    PixelRatio
} from 'react-native';


var Dimensions = require('Dimensions');
const maxW=Dimensions.get("window").width;
const maxH=Dimensions.get("window").height;
const fontScale=PixelRatio.getFontScale(); //字体大小所缩放比例
let pixeRatio=PixelRatio.get(); //获取当前设备的像素密度
const defaultPixel=2;  //iphone6的像素密度，设计图按iphone6设计
//px转成dp
const w2=750/defaultPixel
const h2=1334/defaultPixel
const scale=Math.min(maxH/h2,maxW/w2)  //获取缩放比例


function getWidth(w) {
    let newSize=Math.round(w*scale+0.5);
    return newSize/defaultPixel;

}

function getHeight(h) {
    let newSize=Math.round(h*scale+0.5);
    return newSize/defaultPixel;
}
function getFont(size){
    let newSize=Math.round((size*scale+0.5)*pixeRatio/fontScale);
    return newSize/defaultPixel
}
export const Calc={
    getWidth,
    getHeight,
    getFont
}