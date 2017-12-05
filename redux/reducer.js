import { combineReducers } from 'redux'  //导入combineReducers

import {actionTypes} from "./action" //导入所有action名字

//token的子reducer
function setToken(state="",action){
    switch(action.type){
        case actionTypes.token:
             return action.newToken;
        default:
            return state;
    }
}


//日历的子reducer
/*
* action参数
* {
*   date: type String
* }
*
*/
//默认的日历日期为:x月x日-x月x日，今天的日期
let currentTime=new Date();
let nextTime=new Date(currentTime.getTime()+86400000);
let date=(currentTime.getMonth()+1)+"月"+currentTime.getDate()+"日"+"-"+(nextTime.getMonth()+1)+"月"+nextTime.getDate()+"日";
let dateObj={
    date,
    time:"一"
}
function setIndexCalendar(state=dateObj,action){
    switch (action.type){
        case actionTypes.indexCalendar:
            return action.dateObj
        default:
            return state;
    }
}








//将多个子reducer合并成一个主reducer
const mainReducer=combineReducers({
    setToken,
    setIndexCalendar,
})

export default mainReducer;
