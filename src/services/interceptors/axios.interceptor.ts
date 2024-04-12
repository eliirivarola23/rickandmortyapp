import axios, { AxiosRequestConfig } from 'axios';
import { getValidationError } from '../helpers/get-validation-error';
import { SnackbarUtilities } from '../../components/Snackbar/snackbar-manager';

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
      const errorCode = error.response?.data?.error || error.code;
      if (errorCode) {
        const newErrors = getValidationError(errorCode);
        if (newErrors) SnackbarUtilities.error(newErrors);
      }

      throw error.response?.data || error;
    }
  );
};
