import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Item = props => (  
  <View style={styles.itemBox}>
    <Text style={styles.itemTitle}>{props.title}: </Text>
    <Text style={styles.itemDescription}>{props.description} {props.unidade}</Text>
  </View>
);

export { Item };

const styles = StyleSheet.create({
  itemTitle: {
    fontSize: 20,
    fontWeight: '800'
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemDescription: {
    fontSize: 16,
    marginTop: 2  
  },
});
