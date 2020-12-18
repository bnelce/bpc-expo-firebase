import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { getListNews, getNews } from '../../services/newsapi';
import Header from '../../components/Header';
import NewsPost from '../../components/NewsPost';

import styles from './styles';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function News(props) {

  const [selectedId, setSelectedId] = useState(null);
  const [news, setNews] = useState([]);

  
  async function asyncNews() {
    try {
      const response = await axios.get("https://newsapi.org/v2/everything?q=bombeiro+civil&from=2020-12-17&to=2020-12-17&sortBy=popularity&apiKey=08351aec0e4c4300bd620889ffa6c915");
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
