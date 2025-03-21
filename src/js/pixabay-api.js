const API_KEY = '40358053-aa77a52d7b78d629a29aff12d';
const BASE_URL = 'https://pixabay.com/api';

export const getImages = query => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(`Error getting fotos: ${res.status}`);
    }

    return res.json();
  });
};
