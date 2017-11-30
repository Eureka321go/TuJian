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
} from 'react-native';


import My from "./components/My"
import Home from "./components/Home"
import Message from "./components/Message"
import Order from "./components/Order"
import Login from "./components/My/Login"







import nav from 'react-navigation';
import {Calc} from "./components/common/Calc"

const TabObj=function () {
    if(Platform.OS=='android'){
        return {
            activeTintColor: '#51cdf1',
            inactiveTintColor:"#000",
            style:{
                height:Calc.getHeight(110),
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
            header:null
        }
    }
})



class Container extends Component<{}> {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <SimpleApp2/>
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
    }

});

export default SimpleApp
