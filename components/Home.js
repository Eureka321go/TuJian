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
    ScrollView,
} from 'react-native';

import {connect} from "react-redux";
import RefreshScrollView from "./common/RefreshScrollView"
import  {Calc} from "./common/Calc"
class Home extends Component<{}> {
    constructor(props) {
        super(props)
        this.state={

        }
    }

    render() {
        //const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <RefreshScrollView>
                    <Image style={styles.indexBg} source={require("../assets/images/index/indexBg.jpg")}/>
                </RefreshScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    indexBg:{
        width:Calc.getWidth(750),
        height:Calc.getHeight(547),
        position:"absolute",
        top:0,
        left:0,
    }


});


export default Home