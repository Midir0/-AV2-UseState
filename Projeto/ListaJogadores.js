import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListaJogadores = ({ route }) => {
  const { tecnico } = route.params;

  const jogadores = [
    { nome: 'Cristiano Ronaldo', idade: 36, posicao: 'Forward' },
    { nome: 'Lionel Messi', idade: 34, posicao: 'Attacking Midfielder' },
    { nome: 'Neymar Jr', idade: 29, posicao: 'Forward' },
    { nome: 'Kylian Mbappé', idade: 23, posicao: 'Forward' },
    { nome: 'Sergio Ramos', idade: 35, posicao: 'Defender' },
    { nome: 'Kevin De Bruyne', idade: 30, posicao: 'Midfielder' },
    { nome: 'Robert Lewandowski', idade: 32, posicao: 'Forward' },
    { nome: 'Virgil van Dijk', idade: 30, posicao: 'Defender' },
    { nome: 'Luka Modric', idade: 35, posicao: 'Midfielder' },
    { nome: 'Erling Haaland', idade: 21, posicao: 'Forward' },
  ];

  return (
    <View style={styles.container}>
      <Text>Lista de Jogadores do Técnico {tecnico.nome}:</Text>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View style={styles.jogadorItem}>
            <Text>Nome: {item.nome}</Text>
            <Text>Idade: {item.idade} anos</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jogadorItem: {
    marginBottom: 10,
  },
});

export default ListaJogadores;
