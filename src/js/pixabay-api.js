import axios from 'axios';

const API_KEY = '40358053-aa77a52d7b78d629a29aff12d';
const BASE_URL = 'https://pixabay.com/api';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

export const getImages = async query => {
  const params = {
    q: query,
  };

  const { data } = await axios.get('/', { params });
  console.log('🚀 ~ data:', data);
  return data;
};
