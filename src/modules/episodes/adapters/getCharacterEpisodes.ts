import { episodeServices } from '../services/episodesService';

const getCharacterEpisodes = async (params: any) => {
  try {
    const { character1, character2 }: any = await episodeServices.getCharacterEpisodes(params);
    let sharedEpisodes = [];
    if (character1 && character2) {
      const idsEpisodeCharacter2 = character2.episode?.map(episode => episode.id);
      sharedEpisodes = character1.episode?.filter(episode => idsEpisodeCharacter2.includes(episode.id));
    }
    return { sharedEpisodes, character2, character1 };
  } catch (error) {
    throw error;
  }
};

export default getCharacterEpisodes;
