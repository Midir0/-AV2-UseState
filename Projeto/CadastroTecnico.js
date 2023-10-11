import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CadastroTecnico = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [tecnico, setTecnico] = useState(null);

  const handleCadastro = () => {
    const novoTecnico = {
      nome,
      idade,
      nacionalidade,
      experiencia,
    };
    setTecnico(novoTecnico);
  };

  return (
    <View style={styles.container}>
      <Text>Cadastro de Técnico de Futebol</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Técnico"
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade do Técnico"
        onChangeText={(text) => setIdade(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nacionalidade do Técnico"
        onChangeText={(text) => setNacionalidade(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Experiência do Técnico (em anos)"
        onChangeText={(text) => setExperiencia(text)}
      />
      <Button title="Cadastrar Técnico" onPress={handleCadastro} />
      {tecnico && (
        <View style={styles.resumo}>
          <Text>Resumo do Técnico:</Text>
          <Text>Nome: {tecnico.nome}</Text>
          <Text>Idade: {tecnico.idade}</Text>
          <Text>Nacionalidade: {tecnico.nacionalidade}</Text>
          <Text>Experiência: {tecnico.experiencia} anos</Text>
        </View>
      )}
      <Button
        title="Ver Lista de Jogadores"
        onPress={() => navigation.navigate('ListaJogadores', { tecnico })}
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
  input: {
    width: 300,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  resumo: {
    marginTop: 20,
  },
});

export default CadastroTecnico;
