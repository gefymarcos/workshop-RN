import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Header, Painel, Result } from './Components';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      man: '',
      woman: '',
      child: '',
      drinker: '',
      vegetarian: '',
      carne: 0, 
      guarnicao: 0, 
      cerveja: 0, 
      bebidas: 0,
      carvao: 0,
      resultado: [
        { 
          title: 'Carne',
          description: 'Carnes sem osso, linguiça, coração, frango...',
          amount: '',
          unit: '' 
        },
        { 
          title: 'Guarnicao',
          description: 'Farofa, queijo, pães, arroz, salada de maionese...',
          amount: '',
          unit: ''
        },
        {
          title: 'Cerveja',
          description: 'Ou bebida alcoolica de sua preferencia',
          amount: '',
          unit: ''
        },
        {
          title: 'Refrigerante',
          description: 'Refrigerantes, água, sucos...',
          amount: '',
          unit: ''
        },
        {
          title: 'Carvão',
          description: '',
          amount: '',
          unit: ''
        }
      ]
    };

    this.calcular = this.calcular.bind(this);
    this.refreshValue = this.refreshValue.bind(this);
  }

  calcular() {
    const { man, woman, child, drinker, vegetarian, resultado } = this.state;
    let { carne, guarnicao, cerveja, bebidas, carvao } = this.state;

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
      guarnicao += (parseFloat(vegetarian + 10));
    }
    if (carne > 0) {
      carvao = Math.round((carne / 5) * 6);
    }
    
    for (let i = 0; i < resultado.length; i++) {
      if (resultado[i].title === 'Carne') {
        if (carne < 1000) {
          resultado[i].amount = `${carne}`;
          resultado[i].unit = 'gramas';
        } else {
          resultado[i].amount = `${carne / 1000}`;
          resultado[i].unit = 'quilos';
        }
      } else if (resultado[i].title === 'Guarnicao') {
        if (guarnicao < 1000) {
          resultado[i].amount = `${guarnicao}`;
          resultado[i].unit = 'gramas';
        } else {
          resultado[i].amount = `${guarnicao / 1000}`;
          resultado[i].unit = 'quilos';
        }
      } else if (resultado[i].title === 'Cerveja') {
        if (cerveja < 1000) {
          resultado[i].amount = `${cerveja}`;
          resultado[i].unit = 'ml';
        } else {
          resultado[i].amount = `${cerveja / 1000}`;
          resultado[i].unit = 'litros';
        }
      } else if (resultado[i].title === 'Refrigerante') {
        if (bebidas < 1000) {
          resultado[i].amount = `${bebidas}`;
          resultado[i].unit = 'ml';
        } else {
          resultado[i].amount = `${bebidas / 1000}`;
          resultado[i].unit = 'litros';
        }
      } else if (resultado[i].title === 'Carvão') {
        if (carvao < 1000) {
          resultado[i].amount = `${carvao}`;
          resultado[i].unit = 'gramas';
        } else {
          resultado[i].amount = `${carvao / 1000}`;
          resultado[i].unit = 'quilos';
        }
      }
    }

    this.setState({
      resultado
    });

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
        <View style={styles.header} >
          <Header />
        </View>
        <View style={styles.painel}>
          <Painel 
            style={styles.painel} 
            man={this.state.man}
            woman={this.state.woman}
            child={this.state.child}
            drinker={this.state.drinker}
            vegetarian={this.state.vegetarian}
            calcular={this.calcular}
            refreshValue={this.refreshValue}
          />
        </View>
        <View style={styles.result}>
          <Result 
            style={styles.result} 
            items={this.state.resultado}
          />
        </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 8
  },
  header: {
    flex: 1
  },
  painel: {
    flex: 3,
  },
  result: {
    flex: 4,
  }
});

