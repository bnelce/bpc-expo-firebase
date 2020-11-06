import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

import Avatar from '../Avatar';
import Box from '../Box';

export default ({post}) => (
    <Box style={styles.container}>
        <Avatar uri={post.profile.imageUrl} size={4}/>
        <Box style={{alignSelf: 'flex-start', flexGrow: 1}}>
            <Text style={styles.profileName}>{post.profile.profileName}</Text>
            <Text style={styles.location}>{post.location}</Text>
        </Box>
        <FontAwesomeIcon icon={faEllipsisH}/>
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
        fontSize: 10,
    },
    profileName: {
        fontWeight: '500',
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
    },
});