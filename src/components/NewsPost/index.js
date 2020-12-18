import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import PostSubtitle from './PostSubtitle';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import Box from '../Box';

export default ({post}) => {
    return (
        <View>
            <PostHeader post={post}/>
            <PostImage post={post}/>
            <PostSubtitle post={post}/>
            <Box style={styles.infoContainer}>
                <Text style={styles.info}>{ moment().startOf(post.publishedAt).fromNow() }</Text>
                <Text style={styles.info}>Ler notícia</Text>
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
