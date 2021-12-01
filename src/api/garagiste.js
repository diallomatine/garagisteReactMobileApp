import axios from 'axios';
const baseUrl = 'http://localhost:1337'

const getUserGarages = (userId)=>{

  return axios.get(`${baseUrl}/garages?user=${userId}`);

}

const addGarageToServer = (garage) => {
  return axios.post(`${baseUrl}/garages`, garage)
}


export  {baseUrl, getUserGarages, addGarageToServer};
