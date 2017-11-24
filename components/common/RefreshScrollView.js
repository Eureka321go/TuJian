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

class RefreshScrollView extends Component<{}> {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <ScrollView

            >
                {this.props.children}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({



});


export default RefreshScrollView