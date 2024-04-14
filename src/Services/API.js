import axios from 'axios';

const API_KEY = 'O4fQ_gP_tqXUqYUshcB2vZNcRP-zW02dafTfTTzbmVE';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;

export const getPhotos = async (query, page = 1, per_page = 12) => {
  const { data } = await axios.get('search/photos', {
    params: {
      query,
      page,
      per_page,
    },
  });

  return data;
};