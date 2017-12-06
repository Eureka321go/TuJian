//action名字,用于action生成函数的type和reducer的type判断
export const actionTypes={
    token:"token",//登录token
    indexCalendar:"indexCalendar",//首页日历
    indexPeopleNum:"indexPeopleNum",//首页选择人数
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
    }
}
global.allActionsFun=allActionsFun;