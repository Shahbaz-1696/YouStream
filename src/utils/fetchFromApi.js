import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '25d64e48a4msh66f80f4098d716fp193c77jsn1a0390779475',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromApi = async(url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`, options);
   return data;
  }