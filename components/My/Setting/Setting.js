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
let Calc=global.Calc;

class Setting extends Component<{}> {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>11</Text>
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
    }

});


export default Setting;