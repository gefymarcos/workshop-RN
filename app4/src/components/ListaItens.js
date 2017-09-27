import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      listaItens: []
    };
  }
  
  componentWillMount() {
    axios.get('https://lernante.github.io/itens.json')
      .then(res => this.setState({
        listaItens: res.data
      }))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <View>
        { 
          this.state.listaItens.map(item => (
            <Itens key={item.titulo} item={item} />
          ))
        }
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
