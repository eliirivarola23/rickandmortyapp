import { memo } from 'react';
import Card from '../../../components/Card/Card';
import { PropsCharacterCard } from '../interfaces/ICharacterCard';
import { Box, HStack, Heading, Image, Tag, TagLabel } from '@chakra-ui/react';
import { RiMovie2Line } from 'react-icons/ri';
import { BsPersonVideo } from 'react-icons/bs';

const CharacterCard = ({
  image = 'https://rickandmortyapi.com/api/character/avatar/78.jpeg',
  status = 'unknown',
  name = '',
  species = '',
  episodes = 15,
  id,
}: Partial<PropsCharacterCard>) => {
  return (
    <Card textAlign="end" color="white" bg="var(--color-black-tertiary)" borderRadius="20px" m={1} onClick={() => console.log(id)}>
      <Tag size="sm" title="Estado" mb={3}>
        {status}
        <Box p="1" bg={status === 'Alive' ? 'green.400' : 'grey'} m="5px" borderRadius="md" />
      </Tag>
      {image && (
        <Image w="100%" margin="auto" src={image} alt={name || 'imágen del personaje'} filter="grayscale(100%)" borderRadius="lg" />
      )}
      <Heading size="xs" m="10px 0" fontWeight="500" textAlign="start">
        {name}
      </Heading>
      <HStack spacing={4} mt={3} justifyContent="space-between">
        <Tag size="sm" gap={1} title="Especie">
          <BsPersonVideo />
          {species}
        </Tag>
        <Tag size="sm" gap={1} title="Episodios">
          <RiMovie2Line />
          <TagLabel>{episodes}</TagLabel>
        </Tag>
      </HStack>
    </Card>
  );
};

export default memo(CharacterCard);
