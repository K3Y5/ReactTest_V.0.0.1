import axios from "axios";

const apiTokenVar = "AuthToken";
const UrlCallback = "/login"

const AxiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`,
  headers: {
    withCredentials: true,
  },
});

AxiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${secureLocalStorage.getItem(
    apiTokenVar
  )}`;
  return config;
});

AxiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      RouteProvider.navigate(UrlCallback);
      return error;
    }
    throw error;
  }
);

export default AxiosClient;
