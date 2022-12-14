import styled from "styled-components";

export const HomeModalBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: rgba(187, 187, 187, 0.8);
  height: 100vh !important;
  width: 100vw !important;
`;

export const HomeModalContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 9.6rem;
  align-items: center;
  justify-content: center;
  padding: 12rem 12.8rem 6.4rem 12.8rem;
  border-radius: 6px;
  box-shadow: 0 1.8rem 3.6rem rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 780px) {
    padding: 8rem 6.4rem 3.6rem 6.4rem;
    width: 80%;
    gap: 8rem;

    button {
      font-size: 1.4rem;
      min-width: 11.2rem;
      height: 4.4rem;
    }
  }
`;

export const HomeModalQuestion = styled.h2`
  font-size: 3.6rem;
  letter-spacing: 0.2rem;
  margin-top: -4.8rem;
  text-align: center;
  @media screen and (max-width: 780px) {
    font-size: 2.8rem;
  }
`;

export const HomeModalAnswers = styled.div`
  display: flex;
  gap: 4.8rem;

  @media screen and (max-width: 780px) {
    gap: 2.4rem;
  }
`;
