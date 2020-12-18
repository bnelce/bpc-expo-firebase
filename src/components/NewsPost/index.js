import React from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import moment from 'moment';
import 'moment/locale/pt-br';
import PostSubtitle from './PostSubtitle';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import Box from '../Box';

export default ({post}) => {

    function handleSendSite() {
        Linking.openURL(
          `${post.url}`
        );
      }
    return (
        <View>
            <PostHeader post={post}/>
            <PostImage post={post}/>
            <PostSubtitle post={post}/>
            <Box style={styles.infoContainer}>
                <Text style={styles.info}>{ moment().startOf(post.publishedAt).fromNow() }</Text>
                <RectButton style={styles.button} onPress={handleSendSite}>
                    <Text style={styles.buttonText}>Ler notícia</Text>
                </RectButton>
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
