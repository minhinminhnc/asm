import axios from "axios";

const instance = axios.create({
  baseURL: "https://61644a86b55edc00175c1e8e.mockapi.io",
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;