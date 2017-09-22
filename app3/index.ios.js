import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button, 
  StyleSheet
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';


export class app3 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }

  jokenpo(valorEscolhido) {
    let escolha = Math.floor(Math.random() * 3);
    
    switch (escolha) {
      case 0: escolha = 'Pedra'; break;
      case 1: escolha = 'Papel'; break;
      case 2: escolha = 'Tesoura'; break;
      default: escolha = 'Pedra'; 
    }

    let quemGanhou = '';
    
    if (escolha === valorEscolhido) {
      quemGanhou = 'Empatou';
    } else if (escolha === 'Pedra') {
      if (valorEscolhido === 'Papel') {
        quemGanhou = 'Você Ganhou!!';    
      } else if (valorEscolhido === 'Tesoura') {
        quemGanhou = 'Você Perdeu =(';
      }
    } else if (escolha === 'Papel') {
      if (valorEscolhido === 'Tesoura') {
        quemGanhou = 'Você Ganhou!!';    
      } else if (valorEscolhido === 'Pedra') {
        quemGanhou = 'Você Perdeu =(';
      }
    } else if (escolha === 'Tesoura') {
      if (valorEscolhido === 'Pedra') {
        quemGanhou = 'Você Ganhou!!';    
      } else if (valorEscolhido === 'Papel') {
        quemGanhou = 'Você Perdeu =(';
      }
    }

    this.setState({
      escolhaUsuario: valorEscolhido,
      escolhaComputador: escolha,
      resultado: quemGanhou      
    });
  }

  render() {
    return (
      <View>
        <Topo />
        
        <View style={styles.btnContainer}>  
          <Button 
            style={styles.btnEscolha} 
            title="Pedra" onPress={() => { this.jokenpo('Pedra'); }} 
          />
          <Button 
            style={styles.btnEscolha} 
            title="Papel" onPress={() => { this.jokenpo('Papel'); }} 
          />
          <Button 
            style={styles.btnEscolha} 
            title="Tesoura" onPress={() => { this.jokenpo('Tesoura'); }} 
          />
        </View>

        <View style={styles.player}>
          <View style={styles.boxPlayers}>
            <Text>Sua Escolha</Text>
            <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
          </View>
          <View style={styles.boxPlayers}>
            <Text>Escolha do Computador</Text> 
            <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          </View>
        </View>

        <View style={styles.resultBox}>
          <Text style={styles.resultText}>{this.state.resultado}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  player: {
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  resultBox: {
    marginTop: 50,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  resultText: {
    fontSize: 24
  },
});

AppRegistry.registerComponent('app3', () => app3);
