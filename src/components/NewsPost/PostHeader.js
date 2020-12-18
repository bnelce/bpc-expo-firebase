import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

import Avatar from '../Avatar';
import Box from '../Box';

export default ({post}) => (
    <Box style={styles.container}>
        <Box style={{alignSelf: 'flex-start', flexGrow: 1}}>
            <Text style={styles.profileName}>{post.source.name}</Text>
            <Text style={styles.location}>{post.author}</Text>
        </Box>
        {/*<FontAwesomeIcon icon={faEllipsisH}/>*/}
    </Box>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    location: {
        fontSize: 14,
        fontWeight: '500',
    },
    profileName: {
        fontWeight: 'bold',
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
    },
});