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
import Switch from 'react-native-switch-pro'
let Calc=global.Calc;
let storage=global.storage;
let CommonJS=global.CommonJS;
let allActionsFun=global.allActionsFun;


class CurrencySetting extends Component<{}> {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        let self=this;
        //获取指纹和解锁状态
        storage.load({
            key:"unLock"
        }).then((ret)=>{
            self.props.dispatch(allActionsFun.getUnLock(ret))
        }).catch((err)=>{

        })
    }
    //指纹解锁
    renderFingerPrint(){
        if(Platform.OS='ios'){
            return(
                <View style={styles.item}>
                    <Text style={styles.text}>指纹解锁</Text>
                    <Switch value={this.props.unLock.FingePrint}
                            width={Calc.getWidth(100)}
                            height={Calc.getHeight(50)}
                            onAsyncPress={(callback) => {
                                let self=this;
                                callback(true,value=>{
                                    //开启指纹解锁，修改storage，且手势解锁必须关闭
                                    if(value){
                                       storage.save({
                                           key:"unLock",
                                           data:{
                                               Gesture:false,//是否开启手势解锁
                                               FingePrint:true //是否开启指纹解锁
                                           }
                                       });
                                        self.props.dispatch(allActionsFun.getUnLock(
                                            {
                                                FingePrint:value,
                                                Gesture:false
                                            }
                                        ))
                                    }else{
                                        //指纹关闭
                                        storage.load({
                                            key:"unLock"
                                        }).then((ret)=>{
                                            storage.save({
                                                key:"unLock",
                                                data:{
                                                    Gesture:ret.Gesture,//是否开启手势解锁
                                                    FingePrint:false //是否开启指纹解锁
                                                }
                                            });
                                            self.props.dispatch(allActionsFun.getUnLock(
                                                {
                                                    FingePrint:false,
                                                    Gesture:self.props.unLock.Gesture
                                                }
                                            ))
                                        }).catch((err)=>{
                                            CommonJS.toastShow("操作失败",{
                                                position:0
                                            })
                                        })
                                    }
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
                    <Switch value={this.props.unLock.Gesture}
                            width={Calc.getWidth(100)}
                            height={Calc.getHeight(50)}
                            onAsyncPress={(callback) => {
                                callback(true,value=>{
                                    let self=this;
                                    //开启手指解锁，修改storage，且指纹解锁必须关闭
                                    if(value){
                                        storage.save({
                                            key:"unLock",
                                            data:{
                                                Gesture:value,//是否开启手势解锁
                                                FingePrint:false //是否开启指纹解锁
                                            }
                                        });
                                        self.props.dispatch(allActionsFun.getUnLock(
                                            {
                                                FingePrint:false,
                                                Gesture:value
                                            }
                                        ))
                                        self.props.navigation.navigate("GestureResolve")
                                    }else{
                                        //手势关闭
                                        storage.load({
                                            key:"unLock"
                                        }).then((ret)=>{
                                            storage.save({
                                                key:"unLock",
                                                data:{
                                                    Gesture:false,//是否开启手势解锁
                                                    FingePrint:ret.FingePrint //是否开启指纹解锁
                                                }
                                            });
                                            //删除手势密码
                                            storage.remove({
                                                key:"GesturePassword"
                                            })
                                            self.props.dispatch(allActionsFun.getUnLock(
                                                {
                                                    FingePrint:self.props.unLock.FingePrint,
                                                    Gesture:false,
                                                }
                                            ));
                                        }).catch((err)=>{
                                            CommonJS.toastShow("操作失败",{
                                                position:0
                                            })
                                        })
                                    }
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

function selecr(state){
    return{
        unLock:state.getUnLock
    }
}
export default connect(selecr)(CurrencySetting)