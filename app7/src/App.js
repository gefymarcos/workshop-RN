import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Header, Painel, Result } from './Components';

export default props => (
  <View style={styles.container}>
    <View style={styles.header} >
      <Header />
    </View>
    <View style={styles.painel}>
      <Painel style={styles.painel} />
    </View>
    <View style={styles.result}>
      <Result style={styles.result} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 10
  },
  header: {
    flex: 1
  },
  painel: {
    flex: 7,
  },
  result: {
    flex: 2,
  }
});

