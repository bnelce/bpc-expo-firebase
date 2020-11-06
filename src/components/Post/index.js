import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PostActions from './PostActions';
import PostSubtitle from './PostSubtitle';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import Box from '../Box';

export default ({post}) => {
    return (
        <View>
            <PostHeader post={post}/>
            <PostImage post={post}/>
            <PostActions/>
            <PostSubtitle post={post}/>

            <Box style={styles.infoContainer}>
                <Text style={styles.info}>Ver todos comentários</Text>
                <Text style={styles.info}>{ post.date }</Text>
            </Box>
        </View>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
      paddingVertical: 8,
    },
    info: {
        fontSize: 12,
        color: '#999',
    },
});
