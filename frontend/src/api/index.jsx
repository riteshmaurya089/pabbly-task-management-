import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000/api/",
  baseURL: "https://task-backend-eo54.onrender.com/api"
});
export default api; 
