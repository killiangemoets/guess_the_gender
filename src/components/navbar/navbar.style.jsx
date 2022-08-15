import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 3.6rem 6.4rem; */
`;

export const NavbarButtonContainer = styled.button`
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  color: #333;
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;

  transition: all 0.3s;

  &:hover,
  &:active {
    color: #999;
  }
`;
