export const actionTypes={
    token:"token"
};



//函数生成action

export const allActionsFun={
    tokenAction(newToken){
        return {
            type:actionTypes.token,
            newToken:newToken,
        }
    }
}