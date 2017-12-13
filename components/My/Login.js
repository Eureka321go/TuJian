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
    KeyboardAvoidingView,
    ScrollView,
    TextInput
} from 'react-native';
import {connect} from "react-redux";
import { NavigationActions } from 'react-navigation'
import {Calc} from "../common/Calc"
import "../common/Common"
let storage=global.storage;
let CommonJS=global.CommonJS;
let allActionsFun=global.allActionsFun;//action生成函数


class Login extends Component<{}> {
    constructor(props) {
        super(props)

        this.state={
            active:"general",  //tab选中，general|dynamic
            userName:"", //用户名
            password:"",
            phone:"",
            code:"",//验证码
            getCode:true,   //是否点击
            codeText:"获取验证码", //倒计时内容
            codeTime:10,  //总的倒计时时间
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
                <TextInput keyboardType={"numeric"} maxLength={11}  underlineColorAndroid={"transparent"} clearButtonMode={"while-editing"} placeholder={"手机号"} placeholderTextColor={"#fff"} style={styles.inputInput} onChangeText={(text)=>{this.setState({phone:text})}}/>
            </View>
        )
    }
    //手机验证码
    renderCode(){
        let codeBg;
        let fontColor;
        if(this.state.getCode){
            codeBg={
                backgroundColor:"#f2cb2f"
            }
            fontColor={
                color:"#fff",
            }
        }else{
            codeBg={
                backgroundColor:"#f5f5f5"
            }
            fontColor={
                color:"#000",
            }
        }
        return(
            <View style={styles.inputWrap}>
                <Image source={require("../../assets/images/login/QrCode.png")} style={styles.inputIcon}/>
                <TextInput keyboardType={"numeric"} maxLength={6}  underlineColorAndroid={"transparent"}  placeholder={"验证码"} placeholderTextColor={"#fff"} style={styles.inputInput} onChangeText={(text)=>{this.setState({code:text})}}/>
                <TouchableOpacity style={[styles.getCode,codeBg]} activeOpacity={1} onPress={()=>{this.getCode()}}>
                    <Text allowFontScaling={false} style={[styles.getcodeText,fontColor]}>{this.state.codeText}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    //获取手机验证码
    getCode(){
        if(!this.state.phone){
            CommonJS.toastShow("手机号不能为空");return;
        }
        if(this.state.getCode){
            if(!CommonJS.phoneTest(this.state.getCode)){
                CommonJS.toastShow("请输入有效的手机号")
                return ;
            }
            this.setState({
                getCode:false,
                codeText:this.state.codeTime
            });
            let allTime=this.state.codeTime;
            this.timer=setInterval(()=>{
                let time=this.state.codeTime-1;
                this.setState({
                    codeText:time,
                    codeTime:time
                });
                if(time-1<-1){
                    clearInterval(this.timer);
                    this.setState({
                        codeText:"获取验证码",
                        codeTime:allTime,
                        getCode:true
                    });
                }
            },1000)
        }
    }
    //tab内容
    renderTabContainer(){
        return(
            <View style={styles.tabContainer}>
                <ScrollView
                    ref={"scrollview"}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    scrollEventThrottle={10}
                    keyboardDismissMode={"on-drag"}  //拖拽隐藏键盘
                    onScroll={(e)=>{
                        if(e.nativeEvent.contentOffset.x>=Calc.getWidth(310)){
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
                                <Text allowFontScaling={false}  style={{width:"auto",color:"#fff",fontSize:Calc.getFont(15),textAlign:"right",marginTop:Calc.getHeight(20),fontWeight:"bold"}}>忘记密码？</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/*动态登录*/}
                    <View style={styles.dynamic}>
                        {this.renderPhone()}
                        {this.renderCode()}
                    </View>
                </ScrollView>
            </View>
        )
    }
    //成功登陆
    loginOk(ret){
        //保存到storage
        storage.save({
            key:"token",
            data:ret
        });
        //手势指纹解锁,
        storage.save({
            key:"unLock",
            data:{
                FingePrint:false,
                Gesture:false
            }
        });
        //手势指纹保存到redux
        this.props.dispatch(allActionsFun.getUnLock({
            FingePrint:false,
            Gesture:false
        }))
        //将token信息保存到redux
        this.props.dispatch(allActionsFun.tokenAction(ret));
        //reset路由到首页
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'index'}),
            ]
        })
        this.props.navigation.dispatch(resetAction)
    }
    //登录点击
    loginPress(){
        let self=this;
       //当前登录类型
        if(this.state.active=='general'){
            //普通登录
            if(!this.state.userName&&!this.state.password){CommonJS.toastShow("账号和密码不能为空");return;}
            if(!this.state.userName){CommonJS.toastShow("账号不能为空");return;}
            if(!this.state.password){CommonJS.toastShow("密码不能为空");return;}
            //登录
            CommonJS.$axios.post({
                url:"/user/login",
                data:{
                    account:self.state.userName,
                    password:self.state.password
                }
            }).then((ret)=>{
                if(ret.data && ret.data.success){
                    self.loginOk(ret.data.data)
                    return;
                }
                //密码错误
                CommonJS.toastShow("账号或密码错误",{
                    position:0,
                    visible:true,
                })
            })

        }
        else{
            //验证码登录
            if(!this.state.phone && !this.state.code){CommonJS.toastShow("手机号和验证码不能为空");return;}
            if(!this.state.phone){CommonJS.toastShow("手机号不能为空");return;}
            if(!this.state.code){CommonJS.toastShow("验证码不能为空");return;}
            if(!CommonJS.phoneTest(this.state.phone)){
                CommonJS.toastShow("请输入有效的手机号")
                return ;
            }
            //登录成功
           // this.loginOk()

        }


    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.bg} source={require("../../assets/images/login/login_bg.jpg")}>
                    {/*注册按钮*/}
                    <TouchableOpacity style={styles.zuceWrap} activeOpacity={0.9} onPress={()=>{alert(1)}}>
                        <Text allowFontScaling={false} style={styles.registerBtn}>注册</Text>
                    </TouchableOpacity>
                    {/*logo图标*/}
                    <Image style={styles.logoIcon} source={require("../../assets/images/login/login_logo.png")}/>
                    {/*btns*/}
                    {this.renderTab()}
                    {/*form表单*/}
                    {this.renderTabContainer()}
                    {/*登录按钮*/}
                    <TouchableOpacity style={styles.loginBtn} activeOpacity={0.8} onPress={()=>{this.loginPress()}}>
                        <Text style={styles.loginText} allowFontScaling={false}>登录</Text>
                    </TouchableOpacity>
                    {/*微信登录*/}
                    <View style={styles.wxWrap}>
                        <TouchableOpacity  activeOpacity={0.8} onPress={()=>{alert("登录")}}>
                            <Text style={styles.wxloginText} allowFontScaling={false}>微信登录</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
    componentsWillUnmount(){
        clearInterval(this.timer);
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
        fontSize:Calc.getFont(18),
        color:"#fff",
    },
    zuceWrap:{
        position:"absolute",
        top:Calc.getHeight(60),
        right:Calc.getWidth(25),
        zIndex:10
    },
//    logot图标
    logoIcon:{
        width:Platform.OS=='android'?Calc.getWidth(300):Calc.getWidth(280),
        height:Platform.OS=='android'?Calc.getHeight(205):Calc.getHeight(174),
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
        fontSize:Calc.getFont(15),
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
        paddingLeft:Calc.getWidth(20),
        paddingRight:Calc.getWidth(20),
    },
    dynamic:{
        width:Calc.getWidth(620),
        paddingLeft:Calc.getWidth(20),
        paddingRight:Calc.getWidth(20),
    },
    //输入框
    inputWrap:{
        flexDirection:"row",
        marginTop:Calc.getHeight(42),
        paddingBottom:Calc.getHeight(20),
        alignItems:"center",
        borderBottomWidth:Calc.getBorder(1),
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
        fontSize:Calc.getFont(16),
        color:"#fff",
        height:"auto",
    },
    getCode:{
        paddingLeft:Calc.getWidth(20),
        paddingRight:Calc.getWidth(20),
        height:Calc.getHeight(68),
        minWidth:Calc.getWidth(200),
        borderRadius:6,
        justifyContent:"center",
        alignItems:"center"
    },
    getcodeText:{
        fontSize:Calc.getFont(15),
    },
//    登录
    loginBtn:{
        width:Calc.getWidth(620),
        height:Calc.getHeight(98),
        backgroundColor:"#51cdf1",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:6,
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:Calc.getHeight(20)
    },
    loginText:{
        fontSize:Calc.getFont(18),
        color:"#fff"
    },
    wxWrap:{
        width:Calc.getWidth(620),
        height:Calc.getHeight(98),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:6,
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:Calc.getHeight(20)
    },
    wxloginText:{
        fontSize:Calc.getFont(18),
        color:"#51cdf1",
        fontWeight:"bold"
    }

});


export default connect()(Login);