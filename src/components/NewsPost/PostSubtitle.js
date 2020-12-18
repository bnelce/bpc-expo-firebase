import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Box from '../Box';

export default ({post}) => (
    <Box style={styles.comment}>
        {post.title &&
            <Text style={styles.subtitle}>
                <Text style={styles.profileName}>{post.title}: </Text>
                {post.descrition}
            </Text>
        }
    </Box>
);

const styles = StyleSheet.create({
    comment: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'row',
    },
    subtitle: {
      fontSize: 12
    },
    profileName: {
        fontWeight: 'bold',
    },
});
