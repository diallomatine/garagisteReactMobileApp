import axios from 'axios';
const baseUrl = 'http://localhost:1337'

const getUserGarages = (userId)=>{

  return axios.get(`${baseUrl}/garages?user=${userId}`);

}

const addGarageToServer = (garage) => {
  return axios.post(`${baseUrl}/garages`, garage)
}

const getGarageBookings = (garageId) => {
  return axios.get(`${baseUrl}/bookings?garage=${garageId}`);
}

const getServices = ()=> {
  return axios.get(`${baseUrl}/services`)
}


export  {baseUrl, getUserGarages, addGarageToServer, getGarageBookings, getServices};
