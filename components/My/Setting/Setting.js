/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
let Calc=global.Calc;

class Setting extends Component<{}> {
    constructor(props) {
        super(props)

    }
    //跳转
    jump(){
        alert(1)
    }
    //注销登录
    logout(){
        alert(2)
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={1} onPress={()=>{this.jump()}}>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>通用</Text>
                        <Image style={styles.itemImg} source={require("../../../assets/images/common/listArrow.png")}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={()=>{this.jump()}}>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>关于途见</Text>
                        <Image style={styles.itemImg} source={require("../../../assets/images/common/listArrow.png")}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={()=>{this.jump()}}>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>意见反馈</Text>
                        <Image style={styles.itemImg} source={require("../../../assets/images/common/listArrow.png")}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={()=>{this.jump()}}>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>查看协议</Text>
                        <Image style={styles.itemImg} source={require("../../../assets/images/common/listArrow.png")}/>
                    </View>
                </TouchableOpacity>
                {/*注销登录*/}
                <TouchableOpacity activeOpacity={1} style={{marginTop:Calc.getHeight(60),}} onPress={()=>{this.logout()}}>
                    <View style={styles.btnWrap}>
                        <Text style={{fontSize:Calc.getFont(16),color:"#51cdf1"}}>注销登录</Text>
                    </View>
                </TouchableOpacity>
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
      height:Calc.getHeight(112),
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      borderBottomWidth:Calc.getBorder(1),
      borderColor:"#d9e1e9",
        paddingLeft:Calc.getWidth(10),
        paddingRight:Calc.getWidth(10),
    },
    itemText:{
        fontSize:Calc.getFont(16),
        color:"#3a3c3c"
    },
    itemImg:{
        width:Calc.getWidth(15),
        height:Calc.getHeight(26)
    },
    btnWrap:{
        borderWidth:Calc.getBorder(1),
        borderColor:"#d9e1e9",
        alignItems:"center",
        justifyContent:"center",
        height:Calc.getHeight(88),
        borderRadius:6,
    }

});


export default Setting;