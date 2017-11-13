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
  Image
} from 'react-native';
import {connect} from "react-redux";
import {allActionsFun} from "./redux/action"; //导入函数生成action

import TabNavigator from 'react-native-tab-navigator';



class Container extends Component<{}> {
  constructor(props){
    super(props)
    this.state={
      selected:"home"
    }
  }
  render() {
    return (
        <TabNavigator>
            <TabNavigator.Item
             selected={this.state.selected=="home"}
             title={"首页"}
             titleStyle={styles.titleStyle}
             onPress={()=>{this.setState({selected:"home"})}}
             renderIcon={()=> <Image style={styles.tabIcon} source={require("./assets/images/index/home.png")}/>}
             renderSelectedIcon={()=> <Image  style={styles.tabIcon} source={require("./assets/images/index/home_ok.png")}/>}
            >
            <View style={styles.container}><Text>dwadaw</Text></View>
            </TabNavigator.Item>

            <TabNavigator.Item
                selected={this.state.selected=="message"}
                title={"消息"}
                titleStyle={styles.titleStyle}
                onPress={()=>{this.setState({selected:"message"})}}
                renderIcon={()=> <Image   style={styles.tabIcon} source={require("./assets/images/index/message.png")}/>}
                renderSelectedIcon={()=> <Image style={styles.tabIcon} source={require("./assets/images/index/message_ok.png")}/>}
            >
              <View style={styles.container}><Text>1132d</Text></View>
            </TabNavigator.Item>

          <TabNavigator.Item
              selected={this.state.selected=="order"}
              title={"订单"}
              titleStyle={styles.titleStyle}
              onPress={()=>{this.setState({selected:"order"})}}
              renderIcon={()=> <Image   style={styles.tabIcon} source={require("./assets/images/index/order.png")}/>}
              renderSelectedIcon={()=> <Image style={styles.tabIcon} source={require("./assets/images/index/order_ok.png")}/>}
          >
            <View style={styles.container}><Text>1132d</Text></View>
          </TabNavigator.Item>


          <TabNavigator.Item
              selected={this.state.selected=="my"}
              title={"我的"}
              titleStyle={styles.titleStyle}
              onPress={()=>{this.setState({selected:"my"})}}
              renderIcon={()=> <Image   style={styles.tabIcon} source={require("./assets/images/index/my.png")}/>}
              renderSelectedIcon={()=> <Image style={styles.tabIcon} source={require("./assets/images/index/my_ok.png")}/>}
          >
            <View style={styles.container}><Text>1132d</Text></View>
          </TabNavigator.Item>
        </TabNavigator>
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