import axios, { AxiosRequestConfig } from 'axios';
import { AxiosInterceptor } from './interceptors/axios.interceptor';
import { getUrlApi } from '../config/setting';

export const callApi = async ({ url, method = 'get', params, data }: AxiosRequestConfig) => {
  AxiosInterceptor();

  const source = axios.CancelToken.source();

  try {
    const response = await axios({
      url,
      baseURL: getUrlApi(),
      method,
      data,
      params,
      cancelToken: source.token,
      timeout: 10000,
    });

    return { ...response };
  } catch (error) {
    if (axios.isCancel(error)) {
      throw new Error('Request canceled');
    }
    throw error;
  } finally {
    source.cancel('Cleanup');
  }
};
