/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class app6 extends Component {
  clicou() {
    console.log('clicou');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Cara</Text>
          <Text style={styles.subtitle}>ou</Text>
          <Text style={styles.title}>Coroa</Text>
          <View style={styles.button}>
            <Button 
              title="Jogar"
              onPress={this.clicou}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Button 
            style={styles.button2}
            title="Sobre o Jogo"
            onPress={this.clicou}
          />
          <Button 
            style={styles.button}
            title="Outros Jogos"
            onPress={this.clicou}
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fafafa'
  },
  main: {
    flex: .9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: '600'
  },
  subtitle: {
    fontSize: 24
  },
  button: {
    marginTop: 50
  },
  footer: {
    flex: .1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

AppRegistry.registerComponent('app6', () => app6);
