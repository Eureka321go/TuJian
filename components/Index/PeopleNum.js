

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
let Calc=global.Calc;
let allActionsFun=global.allActionsFun;

class PeopleNum extends Component<{}> {
    constructor(props) {
        super(props)

    }
    renderList(){
        let arr=["1人","2人","3人","4人","5人","6人","7人","8人","9人","10人","不限人数"];
        let ElemArr=[];
        let num=this.props.peopleNum;//redux中的人数
        arr.map((v,k)=>{
            let isChoose;
            if(num==v){
                isChoose={color:"#51cdf1"}
            }else{
                isChoose={color:"#3a3c3c"}
            }

            ElemArr.push(
                <TouchableOpacity key={k} activeOpacity={1} onPress={()=>{
                    this.props.dispatch(allActionsFun.indexPeopleNum(v));
                    this.props.navigation.goBack();
                }}>
                    <View style={styles.item}>
                        <Text style={[{fontSize:Calc.getFont(16)},isChoose]}>{v}</Text>
                    </View>
                </TouchableOpacity>
            )
        })
        return ElemArr
    }
    render() {
        return (
           <View style={styles.container}>
               <ScrollView>
                   {this.renderList()}
               </ScrollView>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft:Calc.getWidth(24),
        paddingRight:Calc.getWidth(24),
    },
    item:{
        borderBottomWidth:Calc.getBorder(1),
        borderColor:"#d9e1e9",
        height:Calc.getHeight(88),
        justifyContent:"center",
        paddingLeft:Calc.getWidth(20)
    }

});

function select(state){
    return{
        peopleNum:state.getindexNum
    }
}
export default connect(select)(PeopleNum);