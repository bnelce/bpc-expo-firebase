import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

export default ({post}) => (
    <View>
        <Image source={{uri: post.urlToImage}} style={styles.image}/>
    </View>
);

let {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    image: {
        height: height / 3,
    },
});