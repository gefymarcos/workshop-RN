import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export default class Itens extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Image 
            style={{ width: 250, height: 250 }}
            source={{ uri: this.props.item.foto }} 
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.album}>Album: {this.props.item.titulo}</Text>
          <Text style={styles.artista}>Artista: {this.props.item.artista}</Text>
          <Text>Gravadora: {this.props.item.gravadora}</Text>
          <Text>Ano de Lançamento: {this.props.item.publicacao}</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20
  },
  item: {    
    alignItems: 'center',
    justifyContent: 'center'
  },
  album: {
    fontSize: 20,
    fontWeight: '600'
  },
  artista: {
    fontSize: 16
  },
  description: {
    marginTop: 20,
    marginLeft: 20
  }
});
