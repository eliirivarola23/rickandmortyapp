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
      // const errorCode = error.response?.data?.error || error.code;
      // if (errorCode) {
      //   const newErrors = getValidationError(errorCode);

      // }
      throw error;

      throw error.response?.data || error;
    }
  );
};
