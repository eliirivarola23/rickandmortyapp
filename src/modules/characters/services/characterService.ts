import { AxiosRequestConfig } from 'axios';
import { callApi } from '../../../services/utilServices';

interface IQuery extends AxiosRequestConfig {
  queryKey: object[];
}
export const characterServices = (callService => {
  const getCharacterList = ({ queryKey }: IQuery) => {
    const newParams = { ...queryKey[1] };

    return callService({ url: 'api/character', params: { ...newParams } });
  };

  return { getCharacterList };
})(callApi);
