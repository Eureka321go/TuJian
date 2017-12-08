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
    TouchableOpacity,
} from 'react-native';
import {connect} from "react-redux";
let Calc=global.Calc;

//头部保存按钮
class BtnRight extends  Component<{}>{
    render(){
        return(
            <TouchableOpacity activeOpacity={1} style={{marginRight:Calc.getWidth(24)}} onPress={()=>{
                alert(111)
            }}>
                <Text style={{fontSize:Calc.getFont(16),color:"#51cdf1"}}>保存</Text>
            </TouchableOpacity>
        )
    }
}

class Profile extends Component<{}> {
    constructor(props) {
        super(props)

    }
    //配置navigation
    static navigationOptions=({navigation})=>{
        return{
            headerRight:<BtnRight/> ,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>我是个人资料</Text>
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


export default connect()(Profile);