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


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);



function Report({ navigation }) {
  const [reports, setReports] = useState({});

  useEffect(() => {
    async function loadReports() {
      const response = await API.get("/report");

      setReports(response.data[0]);
    }

    loadReports();
  }, [])

  function loadSetReport(event) {
    event.preventDefault();

    navigation.navigate('SetReport');
  }

  return (
    <View>
      <Text>
        {reports.title}
      </Text>
      <Button 
        onPress={ loadSetReport }
        title= "Criar nova Denúncia"
      />
    </View>
  );
}



export default Report;
