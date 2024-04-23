import { memo, useMemo, useState } from 'react';
import Card from '../../../components/Card/Card';
import { PropsCharacterCard } from '../interfaces/ICharacterCard';
import { Box, HStack, Spinner, Heading, Image, Tag, TagLabel } from '@chakra-ui/react';
import { RiMovie2Line } from 'react-icons/ri';
import { BsPersonVideo } from 'react-icons/bs';
import { TEXTS_CARD } from '../constants/characterText';

const CharacterCard = ({
  image = '',
  status = 'unknown',
  name = '',
  species = '',
  episodes = 0,
  id,
  onClick,
  selectedIdCard,
}: Partial<PropsCharacterCard>) => {
  const isSelected = useMemo(() => selectedIdCard === id, [selectedIdCard, id]);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => setIsLoading(false);
  return (
    <Card
      cursor="pointer"
      color="white"
      bg={`var(--color-${isSelected ? 'purpure' : 'tertiary'})`}
      borderRadius="20px"
      m={1}
      _hover={{
        bg: `var(--color-${isSelected ? 'purpure-light' : 'black-primary'})`,
        boxShadow: '1px 0px 9px 2px var(--color-black-transparent)',
      }}
      {...(onClick && { onClick: () => onClick(id) })}
      outline="1px solid var(--color-black-primary)"
    >
      {isLoading && <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="var(--color-black-primary)" size="xl" />}
      {image && (
        <Image
          w="70px"
          top="0"
          src={image}
          alt={name || TEXTS_CARD.alt_image}
          borderRadius="50px"
          style={{ display: isLoading ? 'none' : 'block' }}
          onLoad={handleImageLoaded}
        />
      )}
      <Heading size="xs" m="10px 0" fontWeight="500" textAlign="start">
        {name}
      </Heading>
      <HStack spacing={2} mt={3} flexWrap="wrap">
        <Tag size="sm" title={TEXTS_CARD.title_status} borderRadius="20px" p="3px 8px">
          {status}
          <Box p="1" bg={status === 'Alive' ? 'green.400' : 'grey'} m="5px" borderRadius="md" />
        </Tag>
        <Tag size="sm" gap={1} title={TEXTS_CARD.title_specie} borderRadius="20px" p="3px 8px">
          <BsPersonVideo />
          {species}
        </Tag>
        <Tag size="sm" gap={1} title={TEXTS_CARD.title_specie} borderRadius="20px" p="3px 8px">
          <RiMovie2Line />
          <TagLabel>{episodes}</TagLabel>
        </Tag>
      </HStack>
    </Card>
  );
};

export default memo(CharacterCard);
