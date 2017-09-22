import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

const iconTesoura = require('../../img/tesoura.png');
const iconPedra = require('../../img/pedra.png');
const iconPapel = require('../../img/papel.png');

export default class Icone extends Component {
  render() {
    if (this.props.escolha === 'Tesoura') {
      return (
        <View>
          <View>
            <Image source={iconTesoura} style={styles.hands} />
          </View>
          <Text style={styles.escolha}>{this.props.escolhaUsuario}</Text>
        </View>
      );
    } else if (this.props.escolha === 'Papel') {
      return (
        <View>
          <View>
            <Image source={iconPapel} style={styles.hands} />
          </View>
          <Text style={styles.escolha}>{this.props.escolhaUsuario}</Text>
        </View>
      );
    } return (
        <View>
          <View>
            <Image source={iconPedra} style={styles.hands} />
          </View>
          <Text style={styles.escolha}>{this.props.escolhaUsuario}</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  hands: {
    width: 120,
    height: 90,
    alignSelf: 'center',
    marginTop: 40
  },
  escolha: {
    alignSelf: 'center'
  }
});
