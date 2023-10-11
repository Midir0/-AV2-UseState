import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CadastroTecnico from './CadastroTecnico';
import ListaJogadores from './ListaJogadores';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CadastroTecnico">
        <Stack.Screen name="CadastroTecnico" component={CadastroTecnico} options={{ title: 'Cadastro de Técnico' }} />
        <Stack.Screen name="ListaJogadores" component={ListaJogadores} options={{ title: 'Lista de Jogadores' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}