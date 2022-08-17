import styled from "styled-components";

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 4.8rem 6.4rem;

  @media screen and (max-width: 720px) {
    padding: 3.2rem 3.6rem;
  }
`;

export const FormStep1 = styled.form`
  display: flex;
  gap: 16rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const StepButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3.2rem;
`;
