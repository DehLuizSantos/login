import Axios from "axios";
import store from "store2";

export const useAxiosContext = () => {
  const axios = Axios.create({
    /* .env arquivo. não sobe git, checar André. */
    baseURL: import.meta.env.VITE_URL_API,
    headers: {
      "Content-Type": "application/json"
    }
  });

  axios.interceptors.request.use(config => {
    const token = store.session.get("token");

    let newConfig = config;

    /* Se já tiver token, substitui pelo novo */
    if (token) {
      (config.headers as Record<string, string>).Authorization = token;
    }

    return newConfig;
  });

  return axios;
};
