import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

const Button = props => (
    <TouchableHighlight style={styles.button} onPress={props.action}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableHighlight> 
);

export { Button };

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B22222',
    flexDirection: 'column',
    width: 200,
    height: 45,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fafafa',
    fontWeight: '500',
    fontSize: 20
  }
});
