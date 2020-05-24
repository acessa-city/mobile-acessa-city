import React from 'react';
import { View, Text, Button } from 'react-native';
import * as firebase from 'firebase';
import { createStackNavigator } from 'react-navigation-stack';
//import axios from 'axios';

//import { api } from '../enviroments/enviroment-dev';

function Main({ navigation }) {

    /*var response = axios.create({
        baseUrl: `${api.apiUrl}/report`,
        responseType: 'json'
    });*/

   const gmailAuth = event => {
        event.preventDefault();

        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
                .signInWithPopup(googleAuthProvider)
                .then(result => {
                    navigation.navigate('Report');
                }).catch(error => {
                    console.log(error.message);
                });
   };

    return ( 
    <>
        <Button 
            onPress = { gmailAuth }
            title = "Login with Gmail"
        />
    </>
 );
}

export default Main;