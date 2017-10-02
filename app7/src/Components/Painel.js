import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Input, Button } from './';

const Painel = props => (
  <View style={styles.container}>
    <View style={styles.peopleBox}>
      <Input label='Homens' />
      <Input label='Mulheres' />
      <Input label='Crianças' />
    </View>
    <View style={styles.peopleBox}>
      <Input label='Quantos bebem alcool?' />
      <Input label='Tem vegetárianos?' />
    </View>
    <Button title='Calcular' />
  </View>
);

export { Painel };

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  peopleBox: {
    flexDirection: 'row',
    flex: 1
  }
});
