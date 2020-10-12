import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity ,Button, FlatList } from 'react-native';

import AuthContext from '../../contexts/auth';

import styles from './styles';

//export default function OcoList(props) {
    export default function OcoList({navigation}) {
    
    const { signed, user, signOut } = useContext(AuthContext);

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    //const entityRef = ''; //firebase.firestore().collection('entities');
    //const userID = props.extraData.id;

    useEffect(() => {
        /*entityRef
            .where("authorID", "==", userID)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )*/
    }, [])

    const onAddButtonPress = () => {
        /*if (entityText && entityText.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                text: entityText,
                authorID: userID,
                createdAt: timestamp,
            };
            entityRef
                .add(data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }*/
    }

    const renderEntity = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {index}. {item.text}
                </Text>
            </View>
        )
    }

    function handleSignout(){
        signOut();
    }

    const onButtonAddPress = () => {
        navigation.navigate('OcoAddForm')
    }


    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Lista de Ocorrências'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onButtonAddPress}>
                    <Text style={styles.buttonText}>OcoForm</Text>
                </TouchableOpacity>
            </View>
            { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
        </View>
    );
}
