import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Header, Painel } from './Components';
import Result from './Components/Result';

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
    flex: 8
  },
  header: {
    flex: 1
  },
  painel: {
    flex: 3,
  },
  result: {
    flex: 4,
  }
});

