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


import API from '../utils/API';


function Report({ navigation }) {
  const [reports, setReports] = useState({});

  useEffect(() => {
    async function loadReports() {
      const response = await API.get("/report");

      setReports(response.data);
    }

    loadReports();
  }, []);
  let testeArray = [{name: 'testeMap', id:1}]

  function loadSetReport(event) {
    event.preventDefault();

    navigation.navigate('SetReport');
    console.log("Pressionado!");
  }

   {
    testeArray.map(cat => {
      console.log(cat.name, cat.id);
    })
  } 

  return (

    <>
      <View>
        <Text>
          Olá
        </Text>
        <Button
          onPress={loadSetReport}
          title="Criar nova Denúncia"
        />

        <View>
          {
            testeArray.map(cat => {
              <Text> {cat.name} </Text>                
            })
          }
        </View>
      </View>
    </>
  );
}




export default Report;
