import axios from "axios";
import Storage from "@/utils/storage";
import { AUTH } from "@/constants";

const appApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

appApi.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const access_token = Storage.get(AUTH.ACCESS_TOKEN)
      if (access_token) {
        config.headers["Authorization"] = `Bearer ${access_token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
appApi.interceptors.response.use(
  function (response) {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },

  function (err) {
    // Handle error
    const errResponse = err?.message;
    console.log({ errResponse });

    // if (errResponse && errResponse === 'Access token is invalid') {
    //   Storage.clear();
    // }

    throw err;
  }
);

export default appApi;
