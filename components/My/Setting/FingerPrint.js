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
import TouchID from 'react-native-touch-id'


class FingerPrint extends Component<{}> {
    constructor(props) {
        super(props)

    }
    componentDidMount(){
        TouchID.authenticate('to demo this react-native component').then(success => {
                // Success code
                alert("解锁成功")
            })
            .catch(error => {
                // Failure code
                alert("解锁失败")
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>我是指纹验证</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }

});


export default connect()(FingerPrint);