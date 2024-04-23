import { Wrapper } from './ContainerStyles';

export interface PropsLayout {
  children: React.ReactNode;
  variant?: 'layout' | 'paper';
  idTest?: string;
}

const ContainerLayout = ({ children, variant = 'layout', idTest = 'test-section' }: PropsLayout) => {
  return (
    <Wrapper className={variant} data-testid={idTest}>
      {children}
    </Wrapper>
  );
};

export default ContainerLayout;
