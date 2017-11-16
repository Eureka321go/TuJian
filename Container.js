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

import {TabNavigator} from 'react-navigation';

const SimpleApp = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            tabBarLabel: '识兔',
            tabBarIcon:({tintColor},focused)=>(
                focused?
                 <Image style={[styles.tabIcon,{tintColor:tintColor}]}  source={require("./assets/images/index/home.png")}/>
                 :
                 <Image style={[styles.tabIcon,{tintColor:tintColor}]}  source={require("./assets/images/index/home_ok.png")}/>
            )
        },

    },
    My:{
        screen:My,
        navigationOptions:{
            tabBarLabel: '识兔22',
            tabBarIcon:({tintColor},focused)=>(
                focused?
                 <Image style={[styles.tabIcon,{tintColor:tintColor}]}   source={require("./assets/images/index/home.png")}/>
                :
                <Image style={[styles.tabIcon,{tintColor:tintColor}]}  source={require("./assets/images/index/home_ok.png")}/>
            )}
        }
},{
    tabBarPosition:"bottom",
    swipeEnabled:true,
    tabBarOptions: {
        activeBackgroundColor: 'white',
        activeTintColor: '#4ECBFC',
        inactiveBackgroundColor: 'white',
        inactiveTintColor: '#aaa',
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
      width:25,
      height:25
  },
  titleStyle:{
    fontSize:12
  }

});



export default connect()(Container);