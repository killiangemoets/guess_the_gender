import styled, { css } from "styled-components";

const subColor = "#999";
const mainColor = "#333";

const shrinkLabelStyles = css`
  top: -1.4rem;
  font-size: 1.4rem;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 2.4rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: 2.4rem;
  transition: 0.3s ease all;

  ${({ shrink }) =>
    shrink &&
    shrinkLabelStyles}// If shrink is true, we apply the shrinkLabelStyle
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${mainColor};
  font-size: 2rem;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 2.5rem 0;

  &:focus {
    outline: none;
  }

  // This mean that when we focus on an input (with the class "form-input"), the next sibling (inside "group") with the class "form-input-label" will include shrinkLabel (i.e., will include the style from shrinkLabel).. So the next sibling need to be the label, so the input need to be before the label
  &:focus ~ ${FormInputLabel} {
    /* @include shrinkLabel(); */
    ${shrinkLabelStyles}
  }
`;

export const FormInputContainer = styled.div`
  position: relative;
  margin: 4.5rem 0;
  input[type="password"] {
    letter-spacing: 0.3rem;
  }
`;
