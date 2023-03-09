import axios from "axios";

axios.interceptors.request.use((request) => {
  return request;
});
