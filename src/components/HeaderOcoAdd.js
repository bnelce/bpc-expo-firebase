import React, { useContext } from 'react';
import {StyleSheet, Text, Dimensions, Pressable, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';
import Box from './Box';

Icon.loadFont();

const width = Dimensions.get('window').width;

export default function HeaderOcoAdd({navigation}) {

  return (
  <Box style={styles.container}>
    <Pressable onPress={() => navigation.navigate('OcoList')}>
      <Ionicons name="md-arrow-back" color="#666666" size={30} />
    </Pressable>    
    <Text style={styles.title}>Nova Ocorrência</Text>
    <Text style={styles.title}> </Text>
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
});