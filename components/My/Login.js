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
    ScrollView,
    TextInput
} from 'react-native';
import {connect} from "react-redux";
import {Calc} from "../common/Calc"


class Login extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            active:"general",  //tab选中，general|dynamic
            userName:"", //用户名
            password:"",
            phone:""
        }
    }

    changeTab(name){
        if(name=='general'){
            this.refs.scrollview.scrollTo({x:0});
        }else{
            this.refs.scrollview.scrollToEnd();
        }
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
                    <TouchableOpacity style={styles.tabWrap} onPress={()=>{this.changeTab("general")}} activeOpacity={1}>
                        <Text style={[styles.tab,this.renderFontColor('general')]}>普通登录</Text>
                        {/*圆*/}
                        {this.renderYuan('general')}
                    </TouchableOpacity>
                </View>
                <View style={styles.tabWrap}>
                    <TouchableOpacity style={styles.tabWrap} onPress={()=>{this.changeTab("dynamic")}} activeOpacity={1}>
                        <Text style={[styles.tab,this.renderFontColor('dynamic')]}>动态码登录</Text>
                        {/*圆*/}
                        {this.renderYuan('dynamic')}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //账号输入
    renderUserName(){
        return(
            <View style={styles.inputWrap}>
                <Image source={require("../../assets/images/login/userIn.png")} style={styles.inputIcon}/>
                <TextInput maxLength={20}  underlineColorAndroid={"transparent"} clearButtonMode={"while-editing"} placeholder={"请输入账号"} placeholderTextColor={"#fff"} style={styles.inputInput} onChangeText={(text)=>{this.setState({userName:text})}}/>
            </View>
        )
    }
    //密码输入
    renderPassword(){
        return(
            <View style={styles.inputWrap}>
                <Image source={require("../../assets/images/login/userPassword.png")} style={styles.inputIcon}/>
                <TextInput maxLength={20} underlineColorAndroid={"transparent"} clearButtonMode={"while-editing"} placeholder={"请输入密码"} placeholderTextColor={"#fff"} secureTextEntry={true} style={styles.inputInput} onChangeText={(text)=>{this.setState({password:text})}}/>
            </View>
        )
    }
    //手机号输入
    renderPhone(){
        return(
            <View style={styles.inputWrap}>
                <Image source={require("../../assets/images/login/userIn.png")} style={styles.inputIcon}/>
                <TextInput keybordType={"numeric"} maxLength={11}  underlineColorAndroid={"transparent"} clearButtonMode={"while-editing"} placeholder={"手机号"} placeholderTextColor={"#fff"} style={styles.inputInput} onChangeText={(text)=>{this.setState({phone:text})}}/>
            </View>
        )
    }


    renderTabContainer(){
        return(
            <View style={styles.tabContainer}>
                <ScrollView
                    ref={"scrollview"}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    scrollEventThrottle={10}
                    keybordDismissMode={"on-drag"}
                    onScroll={(e)=>{
                        if(e.nativeEvent.contentOffset.x>Calc.getWidth(310)){
                            this.setState({
                                active:"dynamic"
                            })
                        }else{
                            this.setState({
                                active:"general"
                            })
                        }
                    }}
                >
                    {/*普通登录*/}
                    <View style={styles.generalLogin}>
                        {this.renderUserName()}
                        {this.renderPassword()}
                        <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                            <TouchableOpacity activeOpacity={1} onPress={()=>{alert(11)}} style={{flexDirection:"row",justifyContent:"flex-end"}}>
                                <Text style={{width:"auto",color:"#fff",fontSize:15,textAlign:"right",marginTop:Calc.getHeight(20),fontWeight:"bold"}}>忘记密码？</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/*动态登录*/}
                    <View style={styles.dynamic}>
                        {this.renderPhone()}
                    </View>
                </ScrollView>
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
                    {this.renderTabContainer()}
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
        height:Calc.getHeight(55),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:Calc.getHeight(80),
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
    tabContainer:{
        width:Calc.getWidth(620),
        marginLeft:"auto",
        marginRight:"auto",
    },
    generalLogin:{
        width:Calc.getWidth(620),
        height:Calc.getHeight(300),
        paddingLeft:Calc.getWidth(20),
        paddingRight:Calc.getWidth(20),
    },
    dynamic:{
        width:Calc.getWidth(620),
        height:300,
        //backgroundColor:"yellow",
        paddingLeft:Calc.getWidth(20),
        paddingRight:Calc.getWidth(20),
    },
    //输入框
    inputWrap:{
        flexDirection:"row",
        marginTop:Calc.getHeight(42),
        paddingBottom:Calc.getHeight(20),
        alignItems:"center",
        borderBottomWidth:0.5,
        borderColor:"rgba(255,255,255,1)",
        padding:0,
    },
    inputIcon:{
        width:Calc.getWidth(42),
        height:Calc.getWidth(42),
        marginRight:Calc.getWidth(30)
    },
    inputInput:{
        flex:1,
        fontSize:16,
        color:"#fff",
        height:"auto",
    }

});


export default Login;