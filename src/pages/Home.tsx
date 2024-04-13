import ContainerLayout from '../components/ContainerLayout';
import { CharactersProvider } from '../contexts/CharactersContext';

import CharacterList from '../modules/characters/components/CharackterList';
import CharacterContainer from '../modules/characters/components/CharacterContainer';
import EpisodeContainer from '../modules/episodes/components/EpisodeContainer';

const Home = () => {
  return (
    <ContainerLayout>
      Home
      <CharactersProvider>
        <CharacterContainer />
        <EpisodeContainer />
      </CharactersProvider>
    </ContainerLayout>
  );
};

export default Home;
