import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

const geraNumeroAleatorio = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 10);
  alert(numeroAleatorio);
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Meu Primeiro App</Text>
        <Button
          title="Gerar número randômico"
          onPress={geraNumeroAleatorio}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('app1', () => App);
