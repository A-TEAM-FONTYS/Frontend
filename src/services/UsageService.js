import axios from "axios"
let user = JSON.parse(localStorage.getItem('user'))

const apiClient = axios.create({
  baseURL: "http://localhost:8085/api/",
  userCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + user.accessToken
  },
  timeout: 10000
});

export default {

}