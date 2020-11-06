import React from 'react';
import {Image, StyleSheet} from 'react-native';

export default ({uri, size = 8}) => (
    <Image source={{uri: uri}}
           style={{...styles.image,
               height: size * 8,
               width: size * 8 }}
    />
);

const styles = StyleSheet.create({
    image: {
        borderColor: 'purple',
        borderRadius: 50,
        borderWidth: 2.5,
    },
});