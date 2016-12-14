/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import WelcomeFlash from './app/component/WelcomeFlash';
import WebViewExample from './app/component/WebViewPage';

export default class AwesomeProject extends Component {

  constructor() {
    super()
  }

  render() {

    return (
      <View style={styles.container}>
        <WebViewExample />
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingTop: 10
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
