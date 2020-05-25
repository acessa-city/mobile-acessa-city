import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button, FlatList, StyleSheet, StatusBar, SafeAreaView, ListView} from 'react-native';
import Constants from 'expo-constants';
import API from '../utils/API';




function SetReport({ navigation }) {

    function Item({ title }) {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }

    const [category, setCategory] = useState({
        values: [{
            id: '',
            name: '',
            category: {}
        }]
    })

    const [denunciation, setDenunciation] = useState({
        //isValid: false,
        values: {
            title: '',
            description: '',
            urgencyLevelId: '',
            userId: '',
            reportStatusId: '',
            latitude: '',
            longitude: '',
            categoryId: '',
            accuracy: '',
            cityId: ''
        },
    });

    function loadCategories() {
        API.get("/category")
            .then(result => {
                console.log('/n' + "Tamanho do Array category" + result.data.length);
            });
    }

    useEffect(() => {

        /*  API.get("/user/e0ae5c2b-c2d3-4567-8002-24a29a38c001")
             .then(result => {
                 console.log("USER " + JSON.stringify(result.data));
             }); */

        API.get("/category")
            .then(result => {
                /*  setDenunciation({
                     values: {
                         categoryId: result.data[0].id
                     }
                 }) */

                setCategory({

                    values: {
                        id: result.data.id,
                        name: result.data.name
                    }

                });
                console.log('\n' + JSON.stringify(result.data[0].id));
            });

    }, []);

    /* useEffect(() => {
        api.get('/report/'+reportId).then((result) => {
            setReport(result.data)
            api.get('/report-commentary/report/' + reportId).then((comments) => {
                setCommentaries(comments.data)
            })
        })

    }, []) */
    /* useEffect(() => {
        
        setUserId( userId = "f409f2a9-583c-4800-917e-6e5570541472");
        setUrgencyLevelId(urgencyLevelId = "553b0d79-20c1-49f3-8c2d-820128a293af");
        setCategoryId("5874a25e-9ca4-4b27-9dea-d03e95fab3f6");
        
        setDenunciation(
            denunciation.values = {
                title,
                description
            }
        );
    }, []); */

    /* useEffect(() => {
         const errors = validate(denunciation.values, schema);
     
         setDenunciation(denunciation => ({
           ...denunciation,
           isValid: errors ? false : true,
           errors: errors || {}
         }));
       }, [denunciation.values]);
     
     function handleChange(event) {
     
         event.persist();
     
     setDenunciation(denunciation => ({
       ...denunciation,
       values: {
         ...denunciation.values,
         [event.target.name]:
           event.target.type === 'checkbox'
             ? event.target.checked
             : event.target.value
       },
       touched: {
         ...denunciation.touched,
         [event.target.name]: true
       }
     }));
     }*/

    const onSubmit = (event) => {
        event.preventDefault();

        console.log(JSON.stringify(denunciation.values));

        const newReport = denunciation.values;
        API.post('/report', newReport).then(
            (result) => {
                console.log('Entrou!' + result);
            }).catch((error) => {
                console.log('Erro!' + error);
            });
    }
    const onChecked = event => {
        event.preventDefault();

    };

    const handleChange = event => {

        event.persist();

        setDenunciation({
            ...denunciation,
            values: {
                ...denunciation.values,
                [event.target.name]: event.target.value

            }
        });
    };

    return (
        <>


            <View>
                <Text>Titulo</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChange={handleChange}
                    name="title"
                    type="text"
                    value={denunciation.values.title || ''}
                    variant="outlined"
                />
                <Text>Descrição</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChange={handleChange}
                    name="description"
                    type="text"
                    value={denunciation.values.description || ''}
                    variant="outlined"
                />
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={category.values}
                        renderItem={({ item }) => <Item title={item.name} />}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>

                {/*  <Button
                    onPress={onSubmit}
                    title="Enviar"
                    color="#841584"
                /> */}

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default SetReport;