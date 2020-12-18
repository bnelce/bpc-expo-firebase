import axios from 'axios';

const apiKey = '08351aec0e4c4300bd620889ffa6c915';

axios
  .interceptors
  .request
  .use(request => {
    //console.log('Starting Request', request)
    return request
  })

axios
  .interceptors
  .response
  .use(response => {
    //console.log('Response:', response)
    return response
  })

export function getNews() {
  return axios
    .get('https://newsapi.org/v2/everything?q=cbmce&from=2020-12-17&to=2020-12-17&sortBy=popularity&apiKey=08351aec0e4c4300bd620889ffa6c915')
    .then((result) => result.data);
}

export function getListNews(source) {
  return axios
    .get('https://newsapi.org/v2/top-headlines?country=br&apiKey=08351aec0e4c4300bd620889ffa6c915')
    .then((result) => result.data.articles);
}