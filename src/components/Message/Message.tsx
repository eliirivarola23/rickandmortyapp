import ContainerLayout from '../ContainerLayout';

interface PropsMessage {
  text?: string;
  idTest?: string;
}

const Message = ({ text = 'Loading...', idTest = 'test-loading' }: PropsMessage) => {
  return <ContainerLayout data-testid={idTest}>{text}</ContainerLayout>;
};

export default Message;
