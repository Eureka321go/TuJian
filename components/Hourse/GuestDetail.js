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
let commonJS=global.CommonJS;
let Calc=global.Calc;

class HeaderRight extends Component<{}>{
    render(){
        return(
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={{marginRight:Calc.getWidth(60)}} activeOpacity={1}>
                    <Image style={[styles.collectIcon]} source={require("../../assets/images/common/collect_noDet.png")}/>
                </TouchableOpacity>

                <TouchableOpacity style={{marginRight:Calc.getWidth(24)}} activeOpacity={1}>
                    <View >
                        <Image style={styles.collectIcon} source={require("../../assets/images/index/message.png")}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

class GuestDetail extends Component<{}> {
    constructor(props) {
        super(props)

    }
    static navigationOptions({navigation}){
        return{
            headerRight:<HeaderRight/>
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>客房详情</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    collectIcon:{
        width:Calc.getWidth(44),
        height:Calc.getHeight(42)
    }

});


export default connect()(GuestDetail);