import { BaseButton, InvertedButton } from "./button.style";

import { FC, ButtonHTMLAttributes } from "react";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  inverted = "inverted",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;
//Children is part of the button element properties so no need to define it manually

const Button: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
