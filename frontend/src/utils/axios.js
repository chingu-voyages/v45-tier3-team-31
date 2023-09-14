import axios from "axios";

const customFetch = axios.create({
  baseURL: `https://v45-tier3-team-31-production.up.railway.app/api/v1/`,
  //   baseURL: `http://localhost:3000/api/v1/`,
});

customFetch.interceptors.request.use((config) => {
  try {
    const user = null;
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

export default customFetch;
