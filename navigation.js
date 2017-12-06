/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Easing,
    Animated
} from 'react-native';

import CardStackStyleInterpolator from "react-navigation/src/views/CardStack/CardStackStyleInterpolator"

import My from "./components/My"
import Home from "./components/Home"
import Message from "./components/Message"
import Order from "./components/Order"
import Login from "./components/My/Login"
import Calendar from "./components/Index/Calendar"
import PeopleNum from "./components/Index/PeopleNum"





import nav from 'react-navigation';
import {Calc} from "./components/common/Calc"

//TabBar参数
const TabObj=function () {
    if(Platform.OS=='android'){
        return {
            activeTintColor: '#51cdf1',
            inactiveTintColor:"#000",
            style:{
                height:55,
                backgroundColor:"#fff",
                borderTopWidth:0.5,
                borderColor:"#d9e1e9"
            },
            tabStyle:{
                flex:1,
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
            },

            labelStyle:{
                position:"relative",
                top:-5
            },
            indicatorStyle:{
                height:0
            },
            showIcon:true,
            pressOpacity:1
        }
    }
    return {
        activeTintColor: '#51cdf1',
    }
}

//TabBar
const TabBarOptions = nav.TabNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            tabBarLabel: '首页',
            tabBarIcon:({tintColor},focused)=>(
                focused?
                    <Image style={[styles.tabIcon,{tintColor:tintColor}]}  source={require("./assets/images/index/home_ok.png")}/>
                    :
                    <Image style={[styles.tabIcon,{tintColor:tintColor}]}  source={require("./assets/images/index/home.png")}/>
            )
        },

    },
    Message:{
        screen:Message,
        navigationOptions:{
            tabBarLabel: '消息',
            tabBarIcon:({tintColor},focused)=>(
                focused?
                    <Image style={[styles.tabIcon,{tintColor:tintColor}]}   source={require("./assets/images/index/message_ok.png")}/>
                    :
                    <Image style={[styles.tabIcon,{tintColor:tintColor}]}  source={require("./assets/images/index/message.png")}/>
            )}
    },
    Order:{
        screen:Order,
        navigationOptions:{
            tabBarLabel: '订单',
            tabBarIcon:({tintColor},focused)=>(
                focused?
                    <Image style={[styles.tabIcon,{tintColor:tintColor}]}   source={require("./assets/images/index/order_ok.png")}/>
                    :
                    <Image style={[styles.tabIcon,{tintColor:tintColor}]}  source={require("./assets/images/index/order.png")}/>
            )}
    },
    My:{
        screen:My,
        navigationOptions:{
            tabBarLabel: '我的',
            tabBarIcon:({tintColor},focused)=>(
                focused?
                    <Image style={[styles.tabIcon,{tintColor:tintColor}]}   source={require("./assets/images/index/my_ok.png")}/>
                    :
                    <Image style={[styles.tabIcon,{tintColor:tintColor}]}  source={require("./assets/images/index/my.png")}/>
            )}
    }
},{
    tabBarPosition:"bottom",
    swipeEnabled:true,
    tabBarOptions:TabObj()
});

//页面跳转
const SimpleApp =nav.StackNavigator({
    index:{
        screen:TabBarOptions,
        navigationOptions:{
            header:null
        }
    },
    Login:{
        screen:Login,
        navigationOptions:{
            header:null,
            gesturesEnabled:false
        }
    },
    Calendar:{
        screen:Calendar,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:"选择入住和离店时间",
                headerStyle:{
                    borderBottomWidth:0,
                    borderColor:"transparent",
                    backgroundColor:"#fff",
                    elevation:0,
                },
                headerTitleStyle:{
                    fontSize:Calc.getFont(18),
                    color:"#262626",
                    fontWeight:"normal",
                },
                headerLeft:()=>{
                    return (
                        <TouchableOpacity onPress={()=>{navigation.goBack()}} activeOpacity={1}>
                            <View>
                                <Image style={styles.chaImg} source={require("./assets/images/index/x.png")}/>
                            </View>
                        </TouchableOpacity>
                    )
                }
            }
        }
    },//首页日历
    PeopleNum:{
        screen:PeopleNum,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:"选择入住人数",
                headerStyle:{
                    borderBottomWidth:0,
                    borderColor:"transparent",
                    backgroundColor:"#fff",
                    elevation:0,
                },
                headerTitleStyle:{
                    fontSize:Calc.getFont(18),
                    color:"#262626",
                    fontWeight:"normal",
                },
                headerLeft:()=>{
                    return (
                        <TouchableOpacity onPress={()=>{navigation.goBack()}} activeOpacity={1}>
                            <View>
                                <Image style={styles.chaImg} source={require("./assets/images/index/x.png")}/>
                            </View>
                        </TouchableOpacity>
                    )
                }
            }
        }
    },//首页选择入住人数
},{
    headerMode:"screen",
    mode:"card",
    transitionConfig: () => ({
        transitionSpec: {
            duration: 250,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps
            const { index } = scene

            const height = layout.initHeight
            const translateY = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [height, 0, 0],
            })

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            })

            return { opacity, transform: [{ translateY }] }
        },
    }),
})



class Container extends Component<{}> {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <SimpleApp/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    tabIcon:{
        width:21,
        height:21
    },
    chaImg:{
        width:Calc.getWidth(40),
        height:Calc.getWidth(40),
        marginLeft:Calc.getWidth(45)
    },

});

export default SimpleApp

