import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkIUvEx_xHDdWxiRcwmLAj8SDAi4h07Rs",
  authDomain: "meu-primeiro-firebase-c2580.firebaseapp.com",
  projectId: "meu-primeiro-firebase-c2580",
  storageBucket: "meu-primeiro-firebase-c2580.firebasestorage.app",
  messagingSenderId: "1024770457548",
  appId: "1:1024770457548:web:30ae79b22bae8fa1b42769"
};


firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const nomesCollection = firebase.firestore().collection('Nomes');
        const snapshot = await nomesCollection.get();

        const data = [];
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });

        setNomes(data);
      };
      
      fetchData();
    }, []);

    return (
      <View style={styles.container}>
        <Text>Lista de Nomes: </Text>
        <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
            </View>
        )}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#e9d9fb'
  }
})