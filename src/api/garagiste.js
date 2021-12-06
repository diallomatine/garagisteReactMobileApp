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


const getGarageService = (garageId)=> {
  return axios.get(`${baseUrl}/garages/${garageId}`)
}

const updateGarageServices = (garageId, services) => {
  return axios.put(`${baseUrl}/garages/${garageId}`, {services : services})
}

const deleteBooking = (bookingId)=>{
  return axios.delete(`${baseUrl}/bookings/${bookingId}`)
}

const upDateBookingDate = (bookingId, booking)=>{
  return axios.put(`${baseUrl}/bookings/${bookingId}`, booking)
}

const addBooking = (booking)=> {
  return axios.post(`${baseUrl}/bookings`, booking)
}

const getGarageBookingsByDate = (garageId, date)=>{
  return axios.get(`${baseUrl}/bookings?garage=${garageId}&${date}`)
}

export  {baseUrl, getUserGarages, addGarageToServer,updateGarageServices,
   getGarageBookings, getServices, getGarageService, deleteBooking, upDateBookingDate,
   addBooking, getGarageBookingsByDate};
