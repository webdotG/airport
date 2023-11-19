import axios from "axios";

console.log(import.meta.env.VITE_APP_BASE_URL)

export default axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL
})

