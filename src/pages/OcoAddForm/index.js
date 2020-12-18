import React, { useState, useEffect } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import subactivities from './subactivities';
import { Feather as Icon } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import HeaderOcoAdd from '../../components/HeaderOcoAdd';
//import { firebase } from '../../firebase/config'

export default function OcoAddForm({navigation}) {
    const [requester, setRequester] = useState('');
    const [requesterPhone, setRequesterPhone] = useState('');
    const [localization, setLocalization] = useState('');
    const [serviceStation, setServiceStation] = useState('');
    const [activity, setActivity] = useState('');
    const [subactivity, setSubactivity] = useState('');
    const [subactivitiesArray, setSubactivitiesArray] = useState('');
    const [initialDate, setInitialDate] = useState('');
    const [finalDate, setFinalDate] = useState('');
    const [historic, setHistoric] = useState('');
    const [complements, setComplements] = useState('');
    
    useEffect(() => {
        setSubactivitiesArray(subactivities);
        console.log(subactivities);
      });

    const onAddButtonPress = () => {
    }

    return (
        <View style={styles.container}>
            <HeaderOcoAdd navigation={navigation}/>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">               
                <TextInput
                    style={styles.input}
                    placeholder='Solicitante'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setRequester(text)}
                    value={requester}
                    underlineColorAndroid="transparent"                    
                />
                <TextInput
                    style={styles.input}
                    placeholder='Telefone do Solicitante'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setRequesterPhone(text)}
                    value={requesterPhone}
                    underlineColorAndroid="transparent"                    
                />
                <TextInput
                    style={styles.input}
                    placeholder='Localização'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setLocalization(text)}
                    value={localization}
                    underlineColorAndroid="transparent"                    
                />                
                <Picker
                    selectedValue={activity}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) =>
                    setActivity(itemValue)  
                                      
                }>
                    <Picker.Item label="Atividade" value="" />
                    <Picker.Item label="Combate a Incêndio" value="CI" />
                    <Picker.Item label="Salvamento" value="S"  />
                    <Picker.Item label="Prevenção e Auxílio" value="PA" />
                    <Picker.Item label="Atendimento Pré-Hospitalar" value="APH"  />
                </Picker> 
                <Picker
                    selectedValue={subactivity}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) =>
                    setSubactivity(itemValue)  
                                      
                }>
                    <Picker.Item label="Atividade" value="" />
                    <Picker.Item label="Combate a Incêndio" value="CI" />
                    <Picker.Item label="Salvamento" value="S"  />
                    <Picker.Item label="Prevenção e Auxílio" value="PA" />
                    <Picker.Item label="Atendimento Pré-Hospitalar" value="APH"  />
                </Picker> 

                <TextInput
                    style={styles.inputTextArea}
                    placeholder='Descrição da Ocorrência'
                    placeholderTextColor="#aaaaaa"                    
                    onChangeText={(text) => setHistoric(text)}
                    value={historic}
                    multiline
                    numberOfLines={7}
                    underlineColorAndroid="transparent"                    
                />
                <TextInput
                    style={styles.inputTextArea}
                    placeholder='Dados Complementares'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setComplements(text)}
                    value={complements}
                    multiline
                    numberOfLines={7}
                    //underlineColorAndroid="transparent"
                />
                <TouchableOpacity style={styles.button} onPress={() => onAddButtonPress()}> 
                    <View style={styles.buttonContainer}>
                        <Icon name="save" size={22} color="white" />
                        <Text style={styles.buttonText}>Salvar</Text> 
                    </View>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}> </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}
