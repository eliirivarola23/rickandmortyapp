import styled from "@emotion/styled";

export const Wrapper = styled("section")`
  min-height: max-content;
  text-align: center;
  &.layout {
    padding: 10px;
    margin: 15px;
  }
  &.paper {
    margin: 15px 0;
    background-color: var(--white-primary);
    border-radius: 10px;
  }
  @media (min-width: 564px) {
    margin: 25px;
    &.paper {
      margin: 10px 0;
      width: max-content;
    }
  }
`;
