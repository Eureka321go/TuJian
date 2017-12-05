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
function setIndexCalendar(state='',action){
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
