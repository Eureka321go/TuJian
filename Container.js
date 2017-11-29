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
    ScrollView
} from 'react-native';
import {connect} from "react-redux";
import {StackNavigator}from 'react-navigation';
import {allActionsFun} from "./redux/action"; //导入函数生成action

import My from "./components/My"
import Home from "./components/Home"
import Message from "./components/Message"
import Order from "./components/Order"

import {TabNavigator} from 'react-navigation';

const SimpleApp = TabNavigator({
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
    //swipeEnabled:true,
    lazy:true,
    tabBarOptions: {
        activeTintColor: '#51cdf1',
    }
});


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
    backgroundColor: '#F5FCFF',
  },
  tabIcon:{
      width:21,
      height:21
  }

});



export default connect()(Container);