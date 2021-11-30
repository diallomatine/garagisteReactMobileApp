import axios from 'axios';
const baseUrl = 'http://localhost:1337'

const getUserGarages = (userId)=>{

  return axios.get(`${baseUrl}/garages?user=${userId}`);

}


export  {baseUrl, getUserGarages};
//module.exports.getGarageService= getGarageService