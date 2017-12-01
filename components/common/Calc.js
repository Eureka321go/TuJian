
import {PixelRatio} from "react-native";
const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px=>PixelRatio.roundToNearestPixel(px)

function getWidth(w) {
    return px2pt(w)/2;
}

function getHeight(h) {
    return px2pt(h)/2;
}

export const Calc={
    getWidth,
    getHeight
}