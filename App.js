import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import database from './src/firebaseConnection'
import {ref, onValue} from 'firebase/database'

export default function App() {
  const [nome, setNome] = useState('Carregando...')

  useEffect(()=>{
    async function dados() {
      const nomeRef = ref(database, 'usuarios/1/nome')

      onValue(nomeRef, (snapshot)=>{
        const data = snapshot.val()
        if(data){
          setNome(data)
        }
      }, {onlyOnce:true})
    }

    dados()
  }, [])
  return (
    <View style={{marginTop:25}}>
      <Text>Olá {nome}</Text>
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
});
