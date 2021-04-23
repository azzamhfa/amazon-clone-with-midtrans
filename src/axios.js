import axios from "axios";

//This is the midtrans API for GET the SNAP TOKEN
const instance = axios.create({
  baseURL: "https://backend-api-midtrans.herokuapp.com/",
});

export default instance;