import axios from "axios";

const signinInstance = axios.create({
  baseURL: "https://616da102a83a850017caa64e.mockapi.io",
  headers: {
    "Content-Type": "application/json"
  }
});

export default signinInstance;
