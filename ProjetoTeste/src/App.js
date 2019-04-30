/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Simples from './components/simples'
import ParImpar from './components/ParImpar'
import Inverter, { MegaSena } from './components/Multi'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto="Flexivel" />
        <ParImpar numero={33} />
        <Inverter texto='React Nativo !' />
        <MegaSena numeros={8} />
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
