import axios from "axios";
// import { httpStatusCode } from "./http-status";

const { VITE_BLOG_API_URL } = import.meta.env;

// local blog api axios instance

export const blog = axios.create({
  baseURL: VITE_BLOG_API_URL,
  // withCredentials: true,
});
//   Request 발생 시 적용할 내용.
//   instance.defaults.headers.common["Authorization"] = "";
blog.defaults.headers.post["Content-Type"] = "application/json";
blog.defaults.headers.put["Content-Type"] = "application/json";

// 요청 시  사용할 설정 내용 세팅
blog.interceptors.request.use((config) => {
  return config;
}),
  (error) => {
    return Promise.reject(error);
  };

// 응답 시  사용할 설정 내용 세팅
blog.interceptors.response.use((response) => {
  return response;
}),
  (error) => {
    return Promise.reject(error);
  };
