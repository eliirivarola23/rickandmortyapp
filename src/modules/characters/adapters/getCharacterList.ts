import { characterServices } from '../services/characterService';

const getCharacterList = async (params: any) => {
  try {
    const { info, results }: any = await characterServices.getCharacterList({ ...params });
    const data = results?.map(({ id, name, species, status, episode, image }: any) => ({
      id,
      name,
      species,
      status,
      episodes: episode?.length || 0,
      image,
    }));

    return { results: data, info: { pages: info.pages } };
  } catch (error) {
    throw error;
  }
};

export default getCharacterList;
