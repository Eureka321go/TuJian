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
    ScrollView
} from 'react-native';
import {connect} from "react-redux";

class Home extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={
            isRefreshing:false
        }
    }

    render() {
        //const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView>
                   <View style={{height:1000,backgroundColor:"red"}}>
                       <Text
                           onPress={()=>{
                               // navigate('My',{user:"纯纯"})
                           }}
                       >111</Text>
                   </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }

});


export default Home