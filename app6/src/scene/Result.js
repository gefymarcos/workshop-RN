import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const cara = require('./../imgs/cara.png');
const coroa = require('./../imgs/coroa.png');

export default class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultado: ''
    }
  }

  componentWillMount() {
    this.setState({
      resultado: Math.floor(Math.random() * 2)
    }); 
  }

  render() {
    if (this.state.resultado === 0) {
      return(
        <View style={styles.container}>  
          <Image 
            source={cara} 
          />
        </View>
      );
    }
    return(
      <View style={styles.container}>  
        <Image 
          source={coroa} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignSelf: 'center',
  }
});