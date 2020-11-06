import React from 'react';
import { StyleSheet, View} from 'react-native';
import {horizontalPaddingBase} from '../constants/layout';

export default ({children, style}) => (
    <View style={{...styles.box, ...style}}>
        { children }
    </View>
);

const styles = StyleSheet.create({
    box: {

        paddingHorizontal: horizontalPaddingBase,
    },
});