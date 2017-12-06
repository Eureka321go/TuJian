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
let Calc=global.Calc;

class Destination extends Component<{}> {
    constructor(props) {
        super(props)

    }
    //头部
    renderHeader(){
        return(
            <View style={styles.header}>
                <View></View>
                <TouchableOpacity>
                    <Text>取消</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {/*头部*/}
                {this.renderHeader()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft:Calc.getWidth(24),
        paddingRight:Calc.getWidth(24),
    },
    header:{
        flexDirection:"row",
        height:Calc.getHeight(88),
        paddingTop:Calc.getHeight()
    }

});


export default connect()(Destination);