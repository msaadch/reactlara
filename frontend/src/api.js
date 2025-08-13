import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:8000", // Laravel ka URL
  withCredentials: true, // cookies/session ke liye zaroori
});