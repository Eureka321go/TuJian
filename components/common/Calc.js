import {
    PixelRatio
} from 'react-native';


var Dimensions = require('Dimensions');
const maxW=Dimensions.get("window").width;
const maxH=Dimensions.get("window").height;

function getWidth(w) {
    return w/750*maxW;
}

function getHeight(h) {
    return h/1334*maxH;
}
function getFont(size){
    return PixelRatio.getFontScale(size)
}
export const Calc={
    getWidth,
    getHeight,
    getFont
}