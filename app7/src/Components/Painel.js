import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Input, Button } from './';

class Painel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      man: '',
      woman: '',
      child: '',
      drinker: '',
      vegetarian: ''
    };

    this.calcular = this.calcular.bind(this);
    this.refreshValue = this.refreshValue.bind(this);
  }

  calcular() {
    let carne = 0, 
      guarnicao = 0, 
      cerveja = 0, 
      bebidas = 0,
      carvao = 0;

    const { man, woman, child, drinker, vegetarian } = this.state;

    if (man) {
      carne += parseFloat(man) * 400;
      guarnicao += parseFloat(man) * 200;
      bebidas += parseFloat(man) * 1000;
    }
    if (woman) {
      carne += parseFloat(woman) * 300;
      guarnicao += parseFloat(woman) * 200;
      bebidas += parseFloat(woman) * 1000;
    }
    if (child) {
      carne += parseFloat(child) * 200;
      guarnicao += parseFloat(child) * 100;
      bebidas += parseFloat(child) * 1000;
    }
    if (drinker) {
      cerveja = parseFloat(drinker) * 1500;
    }
    if (vegetarian && vegetarian < (man + woman)) {
      carne -= (parseFloat(vegetarian) * 300);
      guarnicao += (parseFloat(vegetarian) + 100);
    }
    if (carne > 0) {
      carvao = Math.round((carne / 5) * 6);
    }

    // const result = parseFloat(man) + parseFloat(woman);
    console.log('carne: ', `${carne / 1000}kg`);
    console.log('guarnicao: ', `${guarnicao / 1000}kg`);
    console.log('bebidas: ', `${bebidas / 1000}l`);
    console.log('cerveja: ', `${cerveja / 1000}l`);
    console.log('carvao', `${carvao / 1000}kg`);
  }

  refreshValue(name, value) {
    const object = {};
    object[name] = value;
    this.setState(object);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.peopleBox}>
          <Input 
            label='Homens' 
            people={this.state.man} 
            onChange={this.refreshValue}
            id='man'
          />
          <Input 
            label='Mulheres' 
            people={this.state.woman} 
            onChange={this.refreshValue}
            id='woman'
          />
          <Input 
            label='Crianças' 
            people={this.state.child} 
            onChange={this.refreshValue}
            id='child'
          />
        </View>
        <View style={styles.peopleBox}>
          <Input 
            label='Quantos bebem alcool?' 
            people={this.state.drinker} 
            onChange={this.refreshValue}
            id='drinker'
          />
          <Input 
            label='Tem vegetárianos?' 
            people={this.state.vegetarian} 
            onChange={this.refreshValue}
            id='vegetarian'
          />
        </View>
        <Button title='Calcular' action={this.calcular} />
      </View>
    );
  }
}

export { Painel };

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  peopleBox: {
    flexDirection: 'row',
    flex: 1
  }
});
