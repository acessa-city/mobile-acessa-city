import React from 'react';
import { View, Button } from 'react-native';
import { SocialIcon } from 'react-native-elements';


import firebase from 'firebase';

function Autentication({ navigation }){

    const loginGmail = event => {
        event.preventDefault();

        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
                .signInWithPopup(provider)
                .then(result => {
                    navigation.navigate('Main');
                })
                .catch(err => {
                    window.alert(err.message);
                });

    };

    return (
        <View style = { { flex: 1, backgroundColor: '#9696' } }>
            <View style = { { width: '250px', height: '450px', backgroundColor: '#6666', alignSelf: 'center', marginTop: '50px' } }>
               <SocialIcon
                   Button
                   onPress = { loginGmail}
                   type = "google"
                   style = { { alignSelf: 'center' } }
                />
                <SocialIcon
                   Button
                   onPress = { loginGmail}
                   type = "facebook"
                   style = { { alignSelf: 'center' } }
                />
                <SocialIcon
                   Button
                   onPress = { loginGmail}
                   type = "instagram"
                   style = { { alignSelf: 'center' } }
                />
            </View>
        </View> 
    );
}


export default Autentication;