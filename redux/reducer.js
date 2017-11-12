import { combineReducers } from 'redux'  //导入combineReducers

import {actionTypes} from "./action" //导入所有action名字

//token的子reducer
function setToken(state="",action){
    switch(action.type){
        case actionTypes.token:
             console.log(1);
             return action.newToken;
        default:
            return state;
    }
}


//将多个子reducer合并成一个主reducer
const mainReducer=combineReducers({
    setToken
})

export default mainReducer;
