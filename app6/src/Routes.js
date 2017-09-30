import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './scene/Home';
import SobreJogos from './scene/SobreJogo';
import OutrosJogos from './scene/OutrosJogos';
import Result from './scene/Result';

const Routes = () => (
  <Router sceneStyle={{ paddingTop: 70 }}>
    <Scene 
      key='home' 
      component={Home} 
      initial
      hideNavBar
    />
    <Scene 
      key='sobreJogo' 
      component={SobreJogos} 
      title='Sobre o Jogo'
      hideNavBar={false}
    />
    <Scene 
      key='outrosJogos' 
      component={OutrosJogos} 
      title='Outros Jogos'
      hideNavBar={false}
    />
    <Scene 
      key='result' 
      component={Result} 
      title='Resultado'
      hideNavBar={false}
    />
  </Router>
);

export default Routes;