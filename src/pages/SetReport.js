import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import API from '../utils/API';





function SetReport({ navigation }) {


    const [denunciation, setDenunciation] = useState({
        //isValid: false,
        values: {
            title: '',
            description: '',
            urgencyLevelId: '553b0d79-20c1-49f3-8c2d-820128a293af',
            userId: 'f409f2a9-583c-4800-917e-6e5570541472',
            reportStatusId: '48cf5f0f-40c9-4a79-9627-6fd22018f72c',
            latitude: '-22.9064',
            longitude: '-47.0616',
            categoryId: '5874a25e-9ca4-4b27-9dea-d03e95fab3f6',
            accuracy: 1.9,
            cityId: '7ae590f1-c6a4-4bb3-91bf-1e82ea45bb4b'
        },
        /* "userId": "ec3b2a5d-ff91-49e3-b295-3b6c742d2b84",
        "categoryId": "c706e299-1e53-41ab-93dc-de8783bfea90",
        "urgencyLevelId": "553b0d79-20c1-49f3-8c2d-820128a293af",
        "reportStatusId": "48cf5f0f-40c9-4a79-9627-6fd22018f72c",
        "title": "TITULO 3",
        "description": "33333333333333.",
        "latitude": -22.89292,
        "longitude": -47.16625,
        "accuracy": 1.9,
        "cityId": "7ae590f1-c6a4-4bb3-91bf-1e82ea45bb4b"
        //touched: {},
        //errors: {} */
    });


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
                <Button
                    onPress={onSubmit}
                    title="Enviar"
                    color="#841584"
                />
            </View>
        </>
    );
}

export default SetReport;