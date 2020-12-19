import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert  } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import { Feather as Icon } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';
import Database from '../../services/Database';


import styles from './styles';
import HeaderOcoList from '../../components/HeaderOcoList';

  function getInitials(name = '') {
    switch(name) {
      
      case 'Combate a Incêndio':
      return 'CI';
      break;
      
      case 'Atendimento Pré-Hospitalar':
      return 'APH';
      break;
  
      case 'Salvamento':
      return 'SA';
      break;
  
      case 'Prevenção':
      return 'PR';
      break;
  
      default:
      return name
      .replace(/\s+/, ' ')
      .split(' ')
      .slice(0, 2)
      .map(v => v && v[0].toUpperCase())
      .join('');  
    }
  };
  
    export default function OcoList({route, navigation}) {
    const [ocurrences, setOcurrences] = useState([])

    
    useEffect(() => {
      Database.getItems().then(items => setOcurrences(items));
  }, [route]); 

    const renderOcurrence = ({item, index}) => {
      function handleDeletePress(){ 
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja excluir este item?",
            [
                {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Sim", onPress: () => {
                    Database.deleteItem(item.id)
                    .then(response => navigation.navigate("OcoList", {id: item.id}));
                    }
                }
            ],
            { cancelable: false }
            );
    } 

    async function handleEditPress(){ 
        const itemEdit = await Database.getItem(item.id);
        navigation.navigate("OcoAddForm", itemEdit);
    }

        return (
            <View style={styles.itemContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.avatarContainer}>
              <UserAvatar size={50} name={getInitials(item.activity)} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.subactivity} >{item.subactivity}</Text>
              <Text style={styles.localization} >{item.localization}</Text>
              <Text style={styles.localization} >{item.initial_date}</Text>
            </View>
            
              <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={styles.deleteButton}
                    onPress={handleDeletePress}> 
                    <Icon name="trash" color="white" size={18} />
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.editButton} 
                    onPress={handleEditPress}> 
                    <Icon name="edit" color="white" size={18} />
                </TouchableOpacity> 
              </View>
            
            
          </View>
        </View>
        )
    }   

    return (       
      <View style={styles.container}>                      
            <HeaderOcoList navigation={navigation}/> 
            { ocurrences && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={ocurrences}
                        renderItem={renderOcurrence}                        
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            )}
        </View>
    );
}
