import {
    PixelRatio,
    Platform
} from 'react-native';


var Dimensions = require('Dimensions');
const maxW=Dimensions.get("window").width;
const maxH=Dimensions.get("window").height;
const pixelRation=PixelRatio.get();



function getWidth(w) {
    return w/750*maxW;
}

function getHeight(h) {
    return h/1334*maxH;
}

function getBorder(w){
    return w;
}
function getFont(size){
  if(Platform.OS=='android'){
    let newFont=pixelRation/PixelRatio.getFontScale();
    return newFont;
  }
  return size;
}

export const Calc={
    getWidth,
    getHeight,
    getBorder,
    getFont
}