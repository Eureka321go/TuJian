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
import Switch from 'react-native-switch-pro'
let Calc=global.Calc;

class CurrencySetting extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            fingerPrintSwitch:false,//指纹解锁
            gestureSwitch:false,//手势解锁
        }

    }
    //指纹解锁
    renderFingerPrint(){
        if(Platform.OS='ios'){
            return(
                <View style={styles.item}>
                    <Text style={styles.text}>指纹解锁</Text>
                    <Switch value={this.state.fingerPrintSwitch}
                            width={Calc.getWidth(100)}
                            height={Calc.getHeight(50)}
                            onAsyncPress={(callback) => {
                                callback(true,value=>{
                                    this.setState({fingerPrintSwitch:value});
                                })
                            }}
                    />
                </View>
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderFingerPrint()}
                <View style={styles.item}>
                    <Text style={styles.text}>手势解锁</Text>
                    <Switch value={this.state.gestureSwitch}
                            width={Calc.getWidth(100)}
                            height={Calc.getHeight(50)}
                            onAsyncPress={(callback) => {
                                callback(true,value=>{
                                    this.setState({gestureSwitch:value});
                                })
                            }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    item:{
        flexDirection:"row",
        backgroundColor:"#fff",
        justifyContent:"space-between",
        paddingLeft:Calc.getWidth(24),
        paddingRight:Calc.getWidth(24),
        marginTop:Calc.getHeight(20),
        height:Calc.getHeight(80),
        alignItems:"center",
    },
    text:{
        fontSize:Calc.getFont(15),
        color:"#3a3c3c"
    }

});


export default CurrencySetting