import React from 'react';
import CharacterList from './CharackterList';
import { useQuery } from '@tanstack/react-query';
import { characterServices, fetchCharacters } from '../services/characterService';
const CharacterContainer = () => {
  const { isLoading, isError, data, error, refetch } = useQuery({ queryKey: ['characters'], queryFn: fetchCharacters });
  console.log(isLoading);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      <CharacterList data={data} key="Character#1" refetch={refetch} />
      <CharacterList data={data} key="Character#2" refetch={refetch} />
    </>
  );
};

export default CharacterContainer;
