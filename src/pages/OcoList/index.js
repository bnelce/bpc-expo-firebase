import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';
import moment from 'moment';

import styles from './styles';
import HeaderOcoList from '../../components/HeaderOcoList';

const repositories = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
      activity: 'Combate a Incêndio',
      subactivity: 'Incêndio em Cozinha',
      localization: 'Subway',
      initial_date: moment().format('LLL'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
      activity: 'Combate a Incêndio',
      subactivity: 'Incêndio em Cozinha',
      localization: 'Subway',
      initial_date: moment().format('LLL'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      activity: 'Combate a Incêndio',
      subactivity: 'Incêndio em Cozinha',
      localization: 'Subway',
      initial_date: moment().format('LLL'),
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
      activity: 'Combate a Incêndio',
      subactivity: 'Incêndio em Cozinha',
      localization: 'Subway',
      initial_date: moment().format('LLL'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6d',
      activity: 'Atendimento Pré-Hospitalar',
      subactivity: 'Incêndio em Cozinha',
      localization: 'Subway',
      initial_date: moment().format('LLL'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7h',
      activity: 'Outra Atividade',
      subactivity: 'Incêndio em Cozinha',
      localization: 'Subway',
      initial_date: moment().format('LLL'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7j',
      activity: 'Salvamento',
      subactivity: 'Incêndio em Cozinha',
      localization: 'Subway',
      initial_date: moment().format('LLL'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7k',
      activity: 'Prevenção',
      subactivity: 'Incêndio em Cozinha',
      localization: 'Subway',
      initial_date: moment().format('LLL'),
    },
  
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7v',
      activity: 'Outra Atividade',
      subactivity: 'Incêndio em Cozinha',
      localization: 'Subway',
      initial_date: moment().format('LLL'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7s',
      activity: 'Salvamento',
      subactivity: 'Incêndio em Cozinha',
      localization: 'Subway',
      initial_date: moment().format('LLL'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7q',
      activity: 'Prevenção',
      subactivity: 'Incêndio em Cozinha',
      localization: 'Subway',
      initial_date: moment().format('LLL'),
    },
  
  ];

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

  
function ItemIcon(props: { name: string; color: string }) {
    return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
  };

    export default function OcoList({navigation}) {
    const [ocurrences, setOcurrences] = useState([])

    
    useEffect(() => {
        setOcurrences(repositories);
    }, []);

    const onItemPress = () => {
      navigation.navigate('OcoEditForm');      
    }


    const renderOcurrence = ({item, index}) => {
        return (
          <View style={styles.itemContainer}>
            <Pressable onPress={onItemPress}>
              <View style={styles.contentContainer}>
                <View style={styles.avatarContainer}>
                  <UserAvatar size={50} name={getInitials(item.activity)} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.subactivity} >{item.subactivity}</Text>
                  <Text style={styles.localization} >{item.localization}</Text>
                  <Text style={styles.localization} >{item.initial_date}</Text>
                </View>
                <View style={styles.shareIconContainer}>
                  <ItemIcon name="md-share"color="#000000" />
                </View>
              </View>
            </Pressable>
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
