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
    TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
let storage=global.storage;
let allActionsFun=global.allActionsFun;
var PasswordGesture = require('../../common/react-native-gesture-password');


class Gesture extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            message: 'Please input your password.',
            status: 'normal',

        }
    }
    onEnd(password){
        let self=this;
        storage.load({
            key:"GesturePassword"
        }).then((ret)=>{
            if(ret){
                if(password==ret){
                    self.setState({
                        status: 'right',
                        message: 'Password is right, success.'
                    });
                    //读取数据
                    storage.load({
                        key:"token",
                    }).then((ret)=>{
                        self.props.dispatch(allActionsFun.tokenAction(ret))
                    }).catch((err)=>{
                        self.props.navigation.navigate("Login")
                    })
                    self.props.navigation.goBack();
                }else{
                    self.setState({
                        status: 'wrong',
                        message: 'Password is wrong, try again.'
                    });
                }
            }else{
                self.props.navigation.navigate("Login")
            }
        }).catch((err)=>{
            self.props.navigation.navigate("Login")
        })
    }

    onStart(){
        this.setState({
            status: 'normal',
            message: 'Please input your password.'
        });
    }
    onReset(){
        this.setState({
            status: 'normal',
            message: 'Please input your password (again).'
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <PasswordGesture
                    ref='pg'
                    status={this.state.status}
                    message={this.state.message}
                    onStart={() => this.onStart()}
                    onEnd={(password) => this.onEnd(password)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }

});

function select(state){
    return{
        unLock:state.getUnLock
    }
}
export default connect(select)(Gesture);