import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Item = props => (
  <View style={styles.container}>
    <View style={styles.itemBox}>
      <Text style={styles.itemTitle}>{props.title}: </Text>
      <Text style={styles.itemUnits}>{props.amount} {props.unit}</Text>
    </View>
    <View>
      <Text style={styles.itemDescription}>{props.description}</Text>
    </View>
  </View>
);

export { Item };

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: '800'
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemUnits: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 20
  },
  itemDescription: {
    fontSize: 12,
    marginTop: 2  
  },
});
