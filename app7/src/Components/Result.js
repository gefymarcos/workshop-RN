import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Item } from './';

export default class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultado: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Lista de compras</Text>
        </View>
        <View style={styles.listBox}>
          <Item 
            title={this.state.resultado}
            description={3.5}
            unidade='quilo'
          />
          <Item 
            title='Linguiça'
            description={1}
            unidade='quilo'
          />
          <Item 
            title='Cerveja'
            description={60}
            unidade='latas'
          />
          <Item 
            title='Refrigerante'
            description={3}
            unidade='litros'
          />
          <Item 
            title='Água'
            description={1}
            unidade='litros'
          />
          <Item 
            title='Sal Grosso'
            description={0.450}
            unidade='quilos'
          />
          <Item 
            title='Carvão'
            description={3.5}
            unidade='quilos'
          />
          <Item 
            title='Pão'
            description={16}
            unidade='unidades'
          />
        </View>
      </View>
    );
  }
}

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
  },
  listBox: {
    marginTop: 25,
    marginLeft: 25
  }
  
});

