import { Card as CardChakra, CardHeader, CardBody, BoxProps } from '@chakra-ui/react';

interface PropsCard extends BoxProps {
  header: React.ReactNode | string;
  children: React.ReactNode;
  rest?: object;
}

const Card = ({ children, sx, header, ...rest }: Partial<PropsCard>) => {
  return (
    <CardChakra maxW="sm" {...(sx && { sx })} boxShadow="1px 0px 9px 2px var(--color-black-transparent)" {...(rest && { ...rest })}>
      {header && <CardHeader>{header}</CardHeader>}
      <CardBody>{children}</CardBody>
    </CardChakra>
  );
};

export default Card;
