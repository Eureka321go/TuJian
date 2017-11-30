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

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position:"relative",
    },

});


export default Login;