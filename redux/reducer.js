import { combineReducers } from 'redux'  //导入combineReducers

import {actionTypes} from "./action" //导入所有action名字

//token的子reducer
/*
*  格式:
*  userName:"大家好,我是一只猫",
   userImg:"",
   userType:"注册送300元新人优惠券",

* */
function getToken(state="",action){
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
*   date: type String,
*   time: type  String
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
function getIndexCalendar(state=dateObj,action){
    switch (action.type){
        case actionTypes.indexCalendar:
            return action.dateObj
        default:
            return state;
    }
}

//首页的选择人数
function getindexNum(state='1人',action) {
    switch (action.type){
        case actionTypes.indexPeopleNum:
            return action.num;
        default:
            return state;

    }
}







//将多个子reducer合并成一个主reducer
const mainReducer=combineReducers({
    getToken,
    getIndexCalendar,//首页日历
    getindexNum,//首页选择人数
})

export default mainReducer;
