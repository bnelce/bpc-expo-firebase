import React from 'react';
import { StyleSheet, View} from 'react-native';

export default ({children, style}) => (
    <View style={{...styles.box, ...style}}>
        { children }
    </View>
);

const styles = StyleSheet.create({
    box: {
        paddingHorizontal: 20,
    },
});