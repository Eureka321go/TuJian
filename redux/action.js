//action名字,用于action生成函数的type和reducer的type判断
export const actionTypes={
    token:"token",//登录token
    indexCalendar:"indexCalendar",//首页日历
    indexPeopleNum:"indexPeopleNum",//首页选择人数
    isFirst:"isFirst",//用于判断是否是第一次登入APP
    unlock:"unlock",//手势指纹解锁
    userInfo:"userInfo",//用户的信息
};



//函数生成action

export const allActionsFun={
    tokenAction(newToken){
        return {
            type:actionTypes.token,
            newToken:newToken,
        }
    },
   //首页日历
    indexCalendarAction(dateObj){
        return{
            type:actionTypes.indexCalendar,
            dateObj:dateObj
        }
    },
    //首页选择人数
    indexPeopleNum(num){
        return{
            type:actionTypes.indexPeopleNum,
            num,
        }
    },
    //是否是第一次登录App
    getFirst(bool){
        return{
            type:actionTypes.isFirst,
            bool,
        }
    },
    //手势指纹解锁
    getUnLock(obj){
        return{
            type:actionTypes.unlock,
            state:obj
         }
    },
    //用户信息
    userInfoAction(obj){
        return{
            type:actionTypes.userInfo,
            data:obj
        }
    }
}
global.allActionsFun=allActionsFun;