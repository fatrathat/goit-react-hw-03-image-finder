const axios = require('axios');

export const axiosPhotos = async (value, page) => {
  const KEY = '27639278-974e1c7751522d3c9b2b4743f';
  return await axios(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.data);
};
