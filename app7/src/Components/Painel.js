import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Input, Button } from './';

const Painel = props => (
  <View style={styles.container}>
    <View style={styles.peopleBox}>
      <Input 
        label='Homens' 
        people={props.man} 
        onChange={props.refreshValue}
        id='man'
      />
      <Input 
        label='Mulheres' 
        people={props.woman} 
        onChange={props.refreshValue}
        id='woman'
      />
      <Input 
        label='Crianças' 
        people={props.child} 
        onChange={props.refreshValue}
        id='child'
      />
    </View>
    <View style={styles.peopleBox}>
      <Input 
        label='Quantos bebem alcool?' 
        people={props.drinker} 
        onChange={props.refreshValue}
        id='drinker'
      />
      <Input 
        label='Tem vegetárianos?' 
        people={props.vegetarian} 
        onChange={props.refreshValue}
        id='vegetarian'
      />
    </View>
    <Button title='Calcular' action={props.calcular} />
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
