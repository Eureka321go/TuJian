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
    Animated,
    TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
import TouchID from 'react-native-touch-id'
let Calc=global.Calc;

class FingerPrint extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            ani:new Animated.Value(0),
            int:1,//动画执行判断,
        }
        this.isAni=true;//是否执行动画
    }
    //指纹解锁
    FingerPrint(){
        let self=this;
        TouchID.authenticate('to demo this react-native component').then(success => {
            // Success code
            //alert("解锁成功")
            self.props.navigation.goBack()

        }).catch(error => {
                // Failure code
                alert("解锁失败")
            });
    }
    startAni(){
        let self=this;
        if(this.isAni){
            if(this.state.int==1){
                this.setState({int:2})
                Animated.timing(
                    this.state.ani,
                    {
                        toValue:Calc.getHeight(190),
                        duration:1500
                    }
                ).start(()=>{
                    this.startAni()
                });
            }else{
                this.setState({int:1})
                Animated.timing(
                    self.state.ani,
                    {
                        toValue:Calc.getHeight(50),
                        duration:1500
                    }
                ).start(()=>{
                    if(this.isAni){self.startAni()}
                });
            }
        }
    }
    componentDidMount(){
        this.startAni();//动画执行
        setTimeout(()=>{
            this.FingerPrint();//指纹
        },500)
    }
    componentWillUnmount(){
        this.isAni=false;//停止动画
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.fingerWrap}>
                    <TouchableOpacity activeOpacity={1} onPress={()=>{this.FingerPrint()}}>
                        <Image style={styles.fingerPrint} source={require("../../../assets/images/my/fingerPrint.png")}/>
                    </TouchableOpacity>
                    <Animated.Image style={[styles.ani,
                        {transform:[{translateY:this.state.ani}]}
                    ]} source={require("../../../assets/images/my/fingAni.png")}></Animated.Image>
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
        position:"relative"
    },
    fingerPrint:{
        width:Calc.getWidth(240),
        height:Calc.getWidth(240)
    },
    ani:{
        width:Calc.getWidth(240),
        height:Calc.getHeight(3),
        position:"absolute",
        top:0,
        left:0,
        zIndex:4,
          //36=>204
    }

});


export default connect()(FingerPrint);