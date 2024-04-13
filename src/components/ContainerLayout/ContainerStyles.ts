import styled from '@emotion/styled';

export const Wrapper = styled('section')`
  min-height: 100vh;
  text-align: center;
  &.layout {
    padding: 20px;
    background: var(--color-black-primary);
    color: var(--color-grey-secondary);
  }
  &.paper {
    margin: 15px 0;
    background-color: var(--white-primary);
    border-radius: 10px;
  }
`;
