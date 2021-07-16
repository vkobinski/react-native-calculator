import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Botao from './src/components/button/botao';
import Display from './src/components/display';

export default function App() {

  const [operation, setOperation] = React.useState();
  const [result, setResult] = React.useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={Display.result}>{result}</Text>
      <Text style={Display.operation}>{operation}</Text>

      <View style={styles.botoes}>
        <Botao label="7" aoClicar={() => {}}></Botao>
        <Botao label="8" aoClicar={() => {}}></Botao>
        <Botao label="9" aoClicar={() => {}}></Botao>
        <Botao label="*" operation="operation" aoClicar={() => {}}></Botao>
        <Botao label="4" aoClicar={() => {}}></Botao>
        <Botao label="5" aoClicar={() => {}}></Botao>
        <Botao label="6" aoClicar={() => {}}></Botao>
        <Botao label="+" operation="operation" aoClicar={() => {}}></Botao>
        <Botao label="7" aoClicar={() => {}}></Botao>
        <Botao label="8" aoClicar={() => {}}></Botao>
        <Botao label="9" aoClicar={() => {}}></Botao>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    padding: 20,
    margin: 10,
    backgroundColor: "#4a4a48",
    color: "#fff"
  },
  botoes:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
