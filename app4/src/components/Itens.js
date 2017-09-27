import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export default class Itens extends Component {
  
  render() {
    return (
      <View>
        <Image 
          style={{width: 250, height: 250}}
          source={{uri: this.props.item.foto}} 
        />
        <Text>{this.props.item.titulo}</Text>
        <Text>{this.props.item.gravadora}</Text>
        <Text>{this.props.item.artista}</Text>
        <Text>{this.props.item.publicacao}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
