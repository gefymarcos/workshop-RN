import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const logo = require('../../img/jokenpoTopo.gif');

export default class Topo extends Component {
  render() {
    return (
      <View >
        <Image source={logo} style={styles.imageTopo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageTopo: {
    width: 300,
    height: 300,
    alignSelf: 'center'
  }
});
