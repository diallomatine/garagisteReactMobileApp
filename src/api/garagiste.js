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

const AddService = (serviceId)=>{
  return axios.put(`${baseUrl}/`)
}

const getGarageService = (garageId)=> {
  return axios.get(`${baseUrl}/garages/${garageId}`)
}

export  {baseUrl, getUserGarages, addGarageToServer,AddService,
   getGarageBookings, getServices, getGarageService};
