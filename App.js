import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import database from './src/firebaseConnection'
import {ref, onValue, set, update, push, child} from 'firebase/database'

export default function App() {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')

  useEffect(()=>{
    async function readDados() {
      const nomeRef = ref(database, 'usuarios/1/nome')

      onValue(nomeRef, (snapshot)=>{
        const data = snapshot.val()
        if(data){
          setNome(data)
        }
      }, {onlyOnce:true})
    }

    

    async function updateDados() {
      const nomeRef = ref(database, 'usuarios/3')
      await update(nomeRef,{
        nome:'bbb'
      })
    }

  }, [])

  async function cadastrar() {
    if(nome !== '' & cargo !==''){
        const usuariosRef = ref(database, 'usuarios')  

        const newUsuarioRef = push(usuariosRef);
        

        await set(newUsuarioRef, {
          nome: nome,
          cargo: cargo
        });
        setNome('')
        setCargo('')
    } else{
      alert('vazio')
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Digite seu nome</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(texto) => setNome(texto)}
      value={nome}
      />

      <Text style={styles.texto}>Digite seu cargo</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(texto) => setCargo(texto)}
      value={cargo}
      />

      <Button title='CADASTRAR FUNCIONÁRIO' onPress={cadastrar}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10
   
    
  },

  texto:{
    fontSize:28,
    marginLeft:8,
  },
  input:{
    marginTop:8,
    marginLeft:8,
    borderWidth:1,
    width:'80%',
    height:50,
    marginBottom:10
  },
  botao:{
    marginTop:16,
    width:0
  }
});
