import { episodeServices } from '../services/episodesService';

interface IEpisode {
  id: string;
}

const getCharacterEpisodes = async (params: any) => {
  try {
    const { character1, character2 }: any = await episodeServices.getCharacterEpisodes(params);
    let sharedEpisodes = [];
    if (character1 && character2) {
      const idsEpisodeCharacter2 = character2.episode?.map((episode: IEpisode) => episode.id);
      sharedEpisodes = character1.episode?.filter((episode: IEpisode) => idsEpisodeCharacter2.includes(episode.id));
    }
    return { sharedEpisodes, character2, character1 };
  } catch (error) {
    throw error;
  }
};

export default getCharacterEpisodes;
