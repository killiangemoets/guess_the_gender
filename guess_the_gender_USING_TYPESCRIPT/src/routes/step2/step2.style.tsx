import styled from "styled-components";

export const GenderAndAgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16rem;

  @media screen and (max-width: 520px) {
    flex-direction: column;
    gap: 4rem;
  }
`;
