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
    ImageBackground,
    TouchableOpacity,
    Animated,
    TextInput
} from 'react-native';
import {connect} from "react-redux";
import {Calc} from "../common/Calc"


class Login extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            active:"general",  //tab选中，general|dynamic
            tabLeft:new Animated.Value(0),  //tab的距离
        }
    }

    changeTab(name){
        this.setState({
            active:name,
        });
        let f;
        if(name=='general'){
           left=0;
        }else{
           left=-Calc.getWidth(620);
        }
        Animated.timing(
            this.state.tabLeft,
            {
                toValue:left,
                duration:200
            }
        ).start()
    }
    //tab选中的颜色
    renderFontColor(name){
        if(name==this.state.active){
            return{
                color:"#fff"
            }
        }
        return {
            color:"rgba(255,255,255,0.5)"
        }
    }

    //tab下面圆点
    renderYuan(name){
        let yBg;
        name==this.state.active?yBg={
            backgroundColor:"#51cdf1"
        }:yBg={
            backgroundColor:"transparent"
        }
        return(
            <View style={[styles.yuan,yBg]}></View>
        )
    }

    //渲染TabItem
    renderTab(){
        return(
            <View style={styles.btns}>
                <View style={styles.tabWrap}>
                    <TouchableOpacity style={styles.tabWrap} onPress={()=>{this.changeTab("general")}} activeOpacity={0.8}>
                        <Text style={[styles.tab,this.renderFontColor('general')]}>普通登录</Text>
                        {/*圆*/}
                        {this.renderYuan('general')}
                    </TouchableOpacity>
                </View>
                <View style={styles.tabWrap}>
                    <TouchableOpacity style={styles.tabWrap} onPress={()=>{this.changeTab("dynamic")}} activeOpacity={0.8}>
                        <Text style={[styles.tab,this.renderFontColor('dynamic')]}>动态码登录</Text>
                        {/*圆*/}
                        {this.renderYuan('dynamic')}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //输入框
    renderInput(){
        return(
            <View style={{
                flex:1,
                flexDirection:"row",
                height:Calc.getHeight(112),
            }}>
                <Image source={require("../../assets/images/login/userIn.png")} style={{
                    width:Calc.getWidth(42),
                    height:Calc.getWidth(42)
                }}/>
            </View>
        )
    }
    //普通登录
    renderGeneralLogin(){
        return(
            <View style={[styles.loginWrap,{ backgroundColor:"red",}]}>
                {this.renderInput()}
            </View>
        )
    }
    //动态码登录
    renderDynamicLogin(){
        return(
            <View style={[styles.loginWrap,{ backgroundColor:"yellow",}]}>
                <Text>22</Text>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.bg} source={require("../../assets/images/login/login_bg.jpg")}>
                    {/*注册按钮*/}
                    <TouchableOpacity activeOpacity={0.9} onPress={()=>{alert(1)}}>
                        <Text style={styles.registerBtn}>注册</Text>
                    </TouchableOpacity>
                    {/*logo图标*/}
                    <Image style={styles.logoIcon} source={require("../../assets/images/login/login_logo.png")}/>
                    {/*btns*/}
                    {this.renderTab()}
                    {/*form表单*/}
                    <View style={[styles.formWrap]}>
                        <Animated.View style={[styles.longWrap,
                            {
                                transform:[
                                    {translateX:this.state.tabLeft}
                                ]
                            }
                        ]}>
                            {/*普通登录*/}
                            {this.renderGeneralLogin()}
                            {/*动态码登录*/}
                            {this.renderDynamicLogin()}
                        </Animated.View>
                    </View>
                </ImageBackground>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position:"relative",
        backgroundColor:"transparent"
    },
    bg:{
        position:"absolute",
        top:0,
        left:0,
        width:Calc.getWidth(750),
        height:Calc.getHeight(1334),
    },
//    注册
    registerBtn:{
        fontSize:15,
        color:"#fff",
        position:"absolute",
        top:Calc.getHeight(60),
        right:Calc.getWidth(25),
    },
//    logot图标
    logoIcon:{
        width:Calc.getWidth(280),
        height:Calc.getHeight(174),
        marginLeft:Calc.getWidth(235),
        marginTop:Calc.getHeight(128)
    },
    btns:{
        width:Calc.getWidth(750),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:Calc.getHeight(80)
    },
    tabWrap:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    tab:{
        fontSize:15,
        marginBottom:Calc.getHeight(10)
    },
    yuan:{
        width:Calc.getWidth(10),
        height:Calc.getWidth(10),
        borderRadius:99,
    },
//    tbaItem
    formWrap:{
        width:Calc.getWidth(620),
        overflow:"hidden",
        marginLeft:"auto",
        marginRight:"auto",
    },
    longWrap:{
        width:Calc.getWidth(1240),
        flexDirection:"row",
        height:400
    },
    loginWrap:{
        flex:1,
        marginTop:Calc.getHeight(42)
    },
});


export default Login;