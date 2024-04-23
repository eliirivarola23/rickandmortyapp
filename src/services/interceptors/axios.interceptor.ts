import axios, { AxiosRequestConfig } from 'axios';

export const AxiosInterceptor = () => {
  const updateHeader = (request: any) => {
    const newHeaders = {
      'Content-Type': 'application/json',
    };

    request.headers = newHeaders;
    return request;
  };

  axios.interceptors.request.use((request: AxiosRequestConfig) => updateHeader(request));

  axios.interceptors.response.use(
    response => {
      return response.data || response;
    },
    error => {
      throw error.response?.data || error;
    }
  );
};
