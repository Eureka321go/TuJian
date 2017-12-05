export const actionTypes={
    token:"token",
    indexCalendar:"indexCalendar"
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
    }
}