import axios from "axios";

export const api = axios.create({
  baseURL: "https://course-project-backend-liox.onrender.com/google-auth", 
  withCredentials: true,
});

