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

class Home extends Component<{}> {
    constructor(props) {
        super(props)

    }

    render() {
        //const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text
                 onPress={()=>{
                     //navigate('My',{user:"纯纯"})
                 }}
                >111</Text>
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


export default Home