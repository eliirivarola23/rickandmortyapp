import { memo, useMemo } from 'react';
import Card from '../../../components/Card/Card';
import { PropsCharacterCard } from '../interfaces/ICharacterCard';
import { Box, HStack, Heading, Image, Tag, TagLabel } from '@chakra-ui/react';
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

  return (
    <Card
      cursor="pointer"
      textAlign="end"
      color="white"
      bg={`var(--color-${isSelected ? 'green' : 'black-tertiary'})`}
      borderRadius="20px"
      m={1}
      {...(onClick && { onClick: () => onClick(id) })}
    >
      <Tag size="sm" title={TEXTS_CARD.title_status} mb={3}>
        {status}
        <Box p="1" bg={status === 'Alive' ? 'green.400' : 'grey'} m="5px" borderRadius="md" />
      </Tag>
      {image && <Image w="100%" margin="auto" src={image} alt={name || TEXTS_CARD.alt_image} filter="grayscale(100%)" borderRadius="lg" />}
      <Heading size="xs" m="10px 0" fontWeight="500" textAlign="start">
        {name}
      </Heading>
      <HStack spacing={4} mt={3} justifyContent="space-between">
        <Tag size="sm" gap={1} title={TEXTS_CARD.title_specie}>
          <BsPersonVideo />
          {species}
        </Tag>
        <Tag size="sm" gap={1} title={TEXTS_CARD.title_specie}>
          <RiMovie2Line />
          <TagLabel>{episodes}</TagLabel>
        </Tag>
      </HStack>
    </Card>
  );
};

export default memo(CharacterCard);
