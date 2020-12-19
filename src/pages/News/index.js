import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import NewsPost from '../../components/NewsPost';

import styles from './styles';

export default function News(props) {

  const [selectedId, setSelectedId] = useState(null);
  const [news, setNews] = useState([]);

  
  async function asyncNews() {
    const day = moment(); 
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=bombeiro+civil&from=${day}&to=${day}&sortBy=popularity&apiKey=08351aec0e4c4300bd620889ffa6c915`);
      setNews(response.data.articles)
      console.log(news);
    } catch (error) {
      alert(error); // catches both errors
    }
  }  

  useEffect(() => {
    asyncNews();
  }, []);

  const renderItem = ({ item }) => (
    <NewsPost post={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={item => item.content}
      />
    </SafeAreaView>
  );
}
