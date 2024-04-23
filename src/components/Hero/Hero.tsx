import { Flex, Heading, Text, Image, Box } from '@chakra-ui/react';
import imageHer from '../../assets/hero.gif';
import { heroTexts } from '../../constants/generalText';

export const Hero = () => {
  return (
    <Flex minH="50vh" align="center" justifyContent="space-around" color="white" m="25px 0" textAlign="center" flexWrap="wrap" bg="black">
      <Box maxW="500px">
        <Heading as="h1" size="xl" mb={4}>
          {heroTexts.title}
        </Heading>
        <Text fontSize="lg" mb={8}>
          {heroTexts.subTitle}
        </Text>
        <Text fontSize="sm" fontStyle="italic">
          {heroTexts.moreInfo}
        </Text>
      </Box>

      <Image src={imageHer} alt="rick and morty gif" objectFit="none" w="546px" />
    </Flex>
  );
};
