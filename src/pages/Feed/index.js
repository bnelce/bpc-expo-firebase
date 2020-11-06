import React, { useContext, useEffect } from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from '../../components/Header';
import StoryThumb from '../../components/StoryThumb';
import fakeData from '../../mocks/fakeData';
import Post from '../../components/Post';



import AuthContext from '../../contexts/auth';

import styles from './styles';

export default function Feed(props) {
    
    const { signed, user, signOut } = useContext(AuthContext);
    
    useEffect(() => {
      //
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <ScrollView style={styles.stories} horizontal showsHorizontalScrollIndicator={false}>
                {
                    fakeData.stories.map(story => (
                        <StoryThumb key={story.profile.imageUrl} imageUrl={story.profile.imageUrl} profile={story.profile}/>
                    ))
                }
            </ScrollView>
            <ScrollView style={styles.stories} showsVerticalScrollIndicator={false}>
                {
                    fakeData.posts.map(post => (
                        <Post key={post} post={post}/>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
}