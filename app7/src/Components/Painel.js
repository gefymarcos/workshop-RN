import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Input, Button } from './';

class Painel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      man: '10',
      woman: '20',
      child: '',
      drinker: '',
      vegetarian: ''
    };

    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    const result = parseFloat(this.state.man) + parseFloat(this.state.woman);
    console.log(result);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.peopleBox}>
          <Input label='Homens' people={this.state.man} />
          <Input label='Mulheres' people={this.state.woman} />
          <Input label='Crianças' people={this.state.child} />
        </View>
        <View style={styles.peopleBox}>
          <Input label='Quantos bebem alcool?' people={this.state.drinker} />
          <Input label='Tem vegetárianos?' people={this.state.vegetarian} />
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
