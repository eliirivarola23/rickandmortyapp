import { AxiosRequestConfig } from 'axios';
import { callApi } from '../../../services/utilServices';

export const fetchCharacters = async (page: number) => {
  const response = await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
          query {
            characters {
              results {
                id
                name
                species
                image
              }
            }
          }
        `,
      variables: {
        page,
      },
    }),
  });
  const data = await response.json();
  return data.data.characters.results;
};
export const characterServices = (callService => {
  const getCharacterList = ({ url = 'graphql' }: AxiosRequestConfig) => {
    const data = JSON.stringify({
      query: `
          query {
            characters {
              results {
                name
                status
                image
                species
              }
            }
          }
        `,
    });
    return callService({ url, data });
  };

  return { getCharacterList };
})(callApi);
