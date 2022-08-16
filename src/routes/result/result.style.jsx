import styled from "styled-components";

export const ResultsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Results = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 6.4rem;
  justify-content: center;

  @media screen and (max-width: 520px) {
    grid-template-columns: auto;
    gap: 3.6rem;
  }
`;
