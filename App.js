
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Image
} from 'react-native';
import Container from "./Container"
import  {createStore} from "redux";
import {Provider} from "react-redux"
import mainReducer from "./redux/reducer"
let store=createStore(mainReducer);


export default class App extends Component<{}> {
  render() {
    return (
        <Provider store={store}>
          <Container/>
        </Provider>
    );
  }
}

