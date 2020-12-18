import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faCookieBite, faComment, faThumbsDown,
} from '@fortawesome/free-solid-svg-icons';
import Box from '../Box';
import {View, StyleSheet} from 'react-native';
import {appIconColor} from '../../constants/colors';

const iconSize = 24;

export default () => {
    return (
        <View style={style.container}>
            <Box><FontAwesomeIcon style={style.icon} icon={faCookieBite} size={iconSize}/></Box>
            <Box><FontAwesomeIcon style={style.icon} icon={faThumbsDown} size={iconSize}/></Box>
            <Box><FontAwesomeIcon style={style.icon} icon={faComment} size={iconSize}/></Box>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8,
    },
    icon: {
        color: appIconColor,
    },
});
