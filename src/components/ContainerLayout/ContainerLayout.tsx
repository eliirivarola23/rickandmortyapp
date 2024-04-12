import { Wrapper } from './ContainerStyles';

export interface PropsLayout {
  children: React.ReactNode;
  component?: 'layout' | 'paper';
  idTest?: string;
}

const ContainerLayout = ({ children, component = 'layout', idTest = 'test-section' }: PropsLayout) => {
  return (
    <Wrapper className={component} data-testid={idTest}>
      {children}
    </Wrapper>
  );
};

export default ContainerLayout;
