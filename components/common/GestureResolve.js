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
var PasswordGesture = require('./react-native-gesture-password');

var Password= '';
class GestureResolve extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            message: 'Please input your password.',
            status: 'normal'
        }
    }
    componentWillMount(){
        this.props.navigation.setParams({
            closeGesture:()=>{this.closeGesture()}
        })
    }
    //关闭手势指纹
    closeGesture(){
        let self=this;
        storage.load({
            key:"unLock"
        }).then((ret)=>{
            storage.save({
                key:"unLock",
                data:{
                    Gesture:false,
                    FingePrint:ret.FingePrint
                }
            });
            self.props.dispatch(allActionsFun.getUnLock({
                Gesture:false,
                FingePrint:this.props.unLock.FingePrint
            }));
        }).catch((err)=>{
            self.props.dispatch(allActionsFun.getUnLock({
                Gesture:false,
                FingePrint:false
            }));
        })
    }
    static navigationOptions({navigation}){
        return{
            headerLeft:()=>{
                return (
                    <TouchableOpacity onPress={()=>{
                        navigation.state.params.closeGesture()
                        navigation.goBack()
                    }} activeOpacity={1}>
                        <View>
                            <Image style={{
                                width:Calc.getWidth(42),
                                height:Calc.getWidth(42),
                                marginLeft:Calc.getWidth(45)
                            }} source={require("../../assets/images/common/arrowBack.png")}/>
                        </View>
                    </TouchableOpacity>
                )
            },
        }
    }
    onEnd(password){
        if (password == '123') {
            this.setState({
                status: 'right',
                message: 'Password is right, success.'
            });

            // your codes to close this view
        } else {
            this.setState({
                status: 'wrong',
                message: 'Password is wrong, try again.'
            });
        }
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
export default connect(select)(GestureResolve);