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
let CommonJS=global.CommonJS;
class Gesture extends Component<{}> {
    constructor(props) {
        super(props)

    }
    static navigationOptions=({navigation})=>{
        return{
            headerLeft:()=>{
                return (
                    <TouchableOpacity onPress={()=>{navigation.goBack()}} activeOpacity={1}>
                        <View>
                            <Image  style={CommonJS.backStyle()} source={require("../../assets/images/common/arrowBack.png")}/>
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


export default connect()(Gesture);