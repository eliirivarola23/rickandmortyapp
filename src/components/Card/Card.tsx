import { Card as CardChakra, CardHeader, CardBody, BoxProps } from '@chakra-ui/react';

interface PropsCard extends BoxProps {
  header: React.ReactNode | string;
  children: React.ReactNode;
  rest?: object;
}

const Card = ({ children, sx, header, ...rest }: Partial<PropsCard>) => {
  return (
    <CardChakra maxW="sm" {...(sx && { sx })} {...(rest && { ...rest })} minHeight="200px">
      {header && <CardHeader>{header}</CardHeader>}
      <CardBody p={3} textAlign="start">
        {children}
      </CardBody>
    </CardChakra>
  );
};

export default Card;
