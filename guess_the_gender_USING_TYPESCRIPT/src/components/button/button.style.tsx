import styled from "styled-components";

export const BaseButton = styled.button`
  border: none;
  cursor: pointer;

  background-color: #333;
  color: white;
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;

  border: 1px solid #333;
  transition: all 0.3s;

  min-width: 16rem;
  height: 5.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:active {
    background-color: white;
    color: #333;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #333;

  &:hover,
  &:active {
    background-color: #333;
    color: white;
  }
`;
