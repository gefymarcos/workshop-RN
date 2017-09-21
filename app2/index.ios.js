import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

export default class app2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Biscoito da Sorte</Text>
        <TouchableOpacity
          onPress={getMessage}
          style={styles.button}>
          <Image
            source={ require('./img/biscoito_sorte.png') }
            style={styles.image}
          />
          <Text style={styles.label}>Clique aqui para ver sua sorte</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const getMessage = () => {
  const numeroAleatorio = Math.floor(Math.random() * 15);

  const frases = [
    'A vida trará coisas boas se tiveres paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Gente todo dia arruma os cabelos, por que não o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.',
    'Siga os bons e aprenda com eles.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.',
    'O bom-senso vai mais longe do que muito conhecimento.',
    'Quem quer colher rosas deve suportar os espinhos.'    
  ];

  Alert.alert(frases[numeroAleatorio]);
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#e2e2e2',
    flex: 1
  },
  text: {
    fontSize: 20,
    backgroundColor: '#d22026',
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    color: '#fafafa',
    fontWeight: '600',
    textAlign: 'center'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200
  },
  label: {
    color: '#fafafa',
    fontWeight: '600',
    backgroundColor: '#d22026',
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5
  }
});

AppRegistry.registerComponent('app2', () => app2);
