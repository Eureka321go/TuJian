/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {connect} from "react-redux";

import SimpleApp from "./navigation"

class Container extends Component<{}> {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <SimpleApp/>
    );
  }
}





export default connect()(Container);