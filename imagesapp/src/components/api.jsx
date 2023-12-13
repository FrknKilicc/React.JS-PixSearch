import axios from 'axios';

const searchImages = async (term) => {
  try {
    
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID n3PJzolqUHjgzjGpWFou1uubxocGl8RAnk0OcakjB3w',
      },
      params: {
        query: term,
      },
    });
    if (res.data.results.length > 0) {
      console.log(res.data.results);
      return res.data.results;
    } else {
      alert('Sonuç bulunamadı.');
      return [];
    }
  } catch (error) {
    alert('Resimler alınırken hata oluştu:', error);
    return [];
  }
};

export default searchImages;
