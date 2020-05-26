import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

//import API from '../utils/API';

function Main({ navigation }) {
    const [devs, setDevs] = useState([]);
    const [currentRegion, setCurrentRegion] = useState(null);
    const [techs, setTechs] = useState('');

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.03,
                });

            }
        }
        loadInitialPosition();
    }, [])



    function handleRegionChanged(region) {
        setCurrentRegion(region);

    }

    if (!currentRegion) {
        return null;
    }

    const loadReport = event => {
        event.preventDefault();

        navigation.navigate('Report');
    };


    const openProfile = event => {
        event.preventDefault();

        navigation.navigate('Profile');
    };

    return (
        <>
            <MapView
                onRegionChangeComplete={handleRegionChanged}
                initialRegion={currentRegion}
                style={styles.map}
            >

            </MapView>

            <View style={styles.searchForm}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar devs por techs..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    /* value={techs}
                    onChangeText={setTechs} */
                />

                <TouchableOpacity onPress={openProfile}>
                    <MaterialIcons style={styles.profileIcon} size={50} name="face" />
                </TouchableOpacity>
                <TouchableOpacity onPress={loadReport}>
                    <MaterialIcons style={styles.profileIcon} size={50} name="camera-alt" />
                </TouchableOpacity>
                <TouchableOpacity onPress={loadReport}>
                    <MaterialIcons style={styles.profileIcon} size={50} name="history" />
                </TouchableOpacity>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
    },

    callout: {
        width: 260,
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio: {
        color: '#666',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5,
    },

    searchForm: {
        position: 'absolute',
        top: 20,
        left: 295,
        right: 20,
        zIndex: 5,
        flexDirection: 'column',
    },
    profileIcon: {
        justifyContent: 'center',

    },

    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        elevation: 2,
    },

    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8E4DFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    buttonReport: {
        position: 'absolute'
    }

});

export default Main;