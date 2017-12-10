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

class GestureResolve extends Component<{}> {
    constructor(props) {
        super(props)

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
    render() {
        return (
            <View style={styles.container}>
                <Text>我是手势解锁</Text>
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

function select(state){
    return{
        unLock:state.getUnLock
    }
}
export default connect(select)(GestureResolve);