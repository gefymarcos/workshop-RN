import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Painel = props => (
  <View style={styles.container}>
    <Text style={styles.title}>Painel</Text>
  </View>
);

export { Painel };

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 30,
  }
});
