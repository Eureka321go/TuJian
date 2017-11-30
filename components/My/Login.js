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
    Image
} from 'react-native';
import {connect} from "react-redux";
import {Calc} from "../common/Calc"


class Login extends Component<{}> {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>我是登录页</Text>

            </View>
        );
    }
    videoStart(){
        //alert("ok")
    }
    videoError(){
        alert("err")
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    video:{
        position:"absolute",
        top:0,
        left:0,
        zIndex:10,
        width:Calc.getWidth(750),
        height:Calc.getHeight(1334)
    }

});


export default Login;