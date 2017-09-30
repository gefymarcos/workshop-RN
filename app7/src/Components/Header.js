import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => (
  <View style={styles.container}>
    <Text style={styles.title}>Churrascumbras</Text>
  </View>
);

export { Header };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B22222',
  },
  title: {
    fontSize: 24,
    marginTop: 30,
    color: '#fafafa'
  }
});
