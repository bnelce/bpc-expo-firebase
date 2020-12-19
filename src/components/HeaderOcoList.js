import React, { useContext } from 'react';
import {StyleSheet, Text, Dimensions, Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Feather as Icons } from '@expo/vector-icons';
import Box from './Box';

Icon.loadFont();

const width = Dimensions.get('window').width;

export default function HeaderOcoList({navigation}) {

  const onButtonAddPress = () => {
    //navigation.navigate('OcoAddForm');
  }

  return (
  <Box style={styles.container}>
    <Icon name="google-wallet" size={30} color="#666666" />
    <Text style={styles.title}>Suas Ocorrências</Text>
    {/*<Pressable onPress={() => navigation.navigate('OcoAddForm')}>
      <Icon name="plus-square-o" color="#666666" size={30} />
  </Pressable>*/}
    <TouchableOpacity 
      style={styles.deleteButton}
      onPress={() => navigation.navigate('OcoAddForm')}> 
      <Icons name="plus" color="white" size={20} />
    </TouchableOpacity> 
  </Box>
  );
};

const styles = StyleSheet.create({
  container: {
      alignContent: 'center',
      borderBottomColor: '#ccc',
      borderBottomWidth: 0.5,
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width,
      height: 50,
      alignItems: "center"
  },
  title: {
      fontSize: 22,
      color: '#666666',
  },
  deleteButton: {
    marginLeft: 0,
    height: 40,
    width: 40,
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: '#ccc',
    alignItems: 'center'
},
});