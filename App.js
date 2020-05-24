import React, { useState, useEffect } from 'react';
import {StatusBar, View, Text, Button} from 'react-native';

//import firebase from 'firebase/app';
//import 'firebase/auth';
//import { login, logout } from './src/utils/auth';

import Routes from './src/Routes';
//import enviroment from './src/enviroments/enviroment-dev';

export default function App() {

  //firebase.initializeApp(enviroment.firebase);

  //firebase.auth().languageCode = 'pt-br';

  /*firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      user.getIdToken()
        .then((token) => {
          login(token);
        });    
      // ...
    } else {
      logout();
    }
  });*/

  const loadReport = event => {
    event.preventDefault();

    navigation.navigate('Report');
  };

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
    <Routes />
    </>
  );
}

 