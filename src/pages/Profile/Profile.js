import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList
} from "react-native";
import Constants from "expo-constants";
import { TextInput, Button } from 'react-native';


import API from '../../utils/API';


function Profile({ navigation }) {


  useEffect(() => {

  }, []);
  let testeArray = [{ name: 'testeMap', id: 1 }]

  const openProfileSettings = event => {
    event.preventDefault();

    navigation.navigate('ProfileSettings');
  };

  return (

    <>
      <View>
        <Text>
          Perfil
        </Text>
        <Button
          onPress={openProfileSettings}
          title="Editar perfil"
        />
        <Button
          onPress={openProfileSettings}
          title="Histórico"
        />

      </View>
    </>
  );
}




export default Profile;
