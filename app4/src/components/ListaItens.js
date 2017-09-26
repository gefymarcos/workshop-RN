import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {
  
  componentWillMount() {
    axios.get('https://gefymarcos.github.io/itens.html')
      .then(res => console.log(res))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <View>
        <Itens />
        <Itens />
        <Itens />
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
