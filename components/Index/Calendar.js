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
    StatusBar
} from 'react-native';
import {connect} from "react-redux";

class Calendar extends Component<{}> {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                />
                <Text>111</Text>
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
    }

});


export default Calendar;