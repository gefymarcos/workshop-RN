import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <View style={styles.peopleInput}>
        <Text>{this.props.label}</Text>
        <TextInput 
          placeholder="0"
          style={styles.input}
          maxLength={2}
          value={this.state.value}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  peopleInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
    margin: 10,
    padding: 10,
    height: 45,
    width: 45,
    textAlign: 'center'
  },
});
