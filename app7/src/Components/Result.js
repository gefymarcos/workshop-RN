import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Item } from './';

class Result extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Lista de compras</Text>
        </View>
        <View style={styles.listBox}>
          {this.props.items.map((item, i) => 
            <Item 
              key={i}
              title={item.title}
              description={item.description}
              amount={item.amount}
              unit={item.unit}
            />
          )}
        </View>
      </View>
    );
  }
}
  
export { Result };
  
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

