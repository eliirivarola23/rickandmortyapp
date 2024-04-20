import { CHARACTER_NAMES } from '../../../constants/generalText';
import { callApi } from '../../../services/utilServices';

export const episodeServices = (callService => {
  const getCharacterEpisodes = (characters: any) => {
    const body = {
      query: `
            query {
              character1: character(id: ${characters[CHARACTER_NAMES.character_one]}) {
                id
                name
                episode {
                  id
                  name
                  air_date
                  episode
                }
              }
              character2: character(id: ${characters[CHARACTER_NAMES.character_two]}) {
                id
                name
                episode {
                  id
                  name
                  air_date
                  episode
                }
              }
            }
          `,
    };
    return callService({ url: 'graphql', method: 'post', data: JSON.stringify(body) });
  };
  return { getCharacterEpisodes };
})(callApi);
