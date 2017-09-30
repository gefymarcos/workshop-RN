import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Result = props => (
  <View style={styles.container}>
    <Text style={styles.text}>Valor Total: </Text>
  </View>
);

export { Result };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
    margin: 10
  },
  text: {
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 15
  }
  
});

