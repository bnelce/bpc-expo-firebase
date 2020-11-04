import React, { useContext } from 'react';
import {StyleSheet, Text, Dimensions, Pressable, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    <Pressable onPress={() => navigation.navigate('OcoAddForm')}>
      <Icon name="plus-square-o" color="#666666" size={30} />
    </Pressable>
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