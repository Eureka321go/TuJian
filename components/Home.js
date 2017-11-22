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
    ScrollView,
} from 'react-native';

import {connect} from "react-redux";
import  {Calc} from "./common/Calc"
var ParallaxView = require('react-native-parallax-view');
class Home extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={

        }
    }

    render() {
        //const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ParallaxView
                    backgroundSource={require("../assets/images/index/indexBg.jpg")}
                    windowHeight={Calc.getHeight(547)}
                >
                  <View>
                      <Text >awdw</Text>
                      <Text >awdw</Text>
                      <Text >awdw</Text>
                  </View>
                </ParallaxView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    indexBg:{
        width:Calc.getWidth(750),
        height:Calc.getHeight(547),
        position:"absolute",
        top:0,
        left:0,
    }


});


export default Home