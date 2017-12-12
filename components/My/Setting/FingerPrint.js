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
let Calc=global.Calc;

class FingerPrint extends Component<{}> {
    constructor(props) {
        super(props)

    }
    //指纹解锁
    FingerPrint(){
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
                <View style={styles.fingerWrap}>
                    <Image style={styles.fingerPrint} source={require("../../../assets/images/my/fingerPrint.png")}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2b3b48',
    },
    fingerWrap:{

    },
    fingerPrint:{

    }

});


export default connect()(FingerPrint);