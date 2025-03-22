import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFxpFhuTUeAjJPHaiVnL_f5LmKPBqvAp0",
  authDomain: "meu-primeiro-firebase-cb2d8.firebaseapp.com",
  projectId: "meu-primeiro-firebase-cb2d8",
  storageBucket: "meu-primeiro-firebase-cb2d8.firebasestorage.app",
  messagingSenderId: "518833351975",
  appId: "1:518833351975:web:08fb12f8ad4d9260ce0d02"
};

firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() { 

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
    <View style={{ flex: 1, justifyContent: 'center',
      alignItems: 'center' }}>
        <Text> Lista de Nomes: </Text>
        <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.Nome} {item.sobrenome}</Text>
        )}
      </View>
  )
}