var Dimensions = require('Dimensions');
const maxW=Dimensions.get("window").width;
const maxH=Dimensions.get("window").height;

function getWidth(w) {
    return w/750*maxW;
}

function getHeight(h) {
    return h/1334*maxH;
}

export const Calc={
    getWidth,
    getHeight
}