import styled, { css } from "styled-components";

const subColor = "#999";
const mainColor = "#333";
const errorColor = "#f03e3e";

const shrinkLabelStyles = css`
  top: -1rem;
  font-size: 1.6rem;
  color: ${mainColor};
`;

type FormInputLabelProps = {
  shrink?: boolean;
  error?: boolean;
};

type InputProps = {
  error?: boolean;
};

const errorLabelStyles = css`
  color: ${errorColor} !important;
`;

const errorInputStyles = css`
  border-bottom: 1px solid ${errorColor};
  color: ${errorColor};
`;

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${subColor};
  font-size: 2.4rem;
  font-weight: 400;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: 2.4rem;
  transition: 0.3s ease all;

  ${({ error }) => {
    return error && errorLabelStyles;
  }};

  ${({ shrink }) => {
    return shrink && shrinkLabelStyles;
  }};

  // If error is true, we apply the errorLabelStyles
  // If shrink is true, we apply the shrinkLabelStyles
`;

export const Input = styled.input<InputProps>`
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
  min-width: 12rem;

  &:focus {
    outline: none;
  }

  // To apply the shrinkLabelStyles (and errorLabelStyles) on the label when we focus on the input
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
    ${({ error }) => error && errorLabelStyles};
  }

  ${({ error }) => error && errorInputStyles};
`;

export const FormInputContainer = styled.div`
  position: relative;
`;
