import { IoArrowBackSharp } from "react-icons/io5";

import { ReturnButtonContainer } from "./return-button.style";

import { FC, ButtonHTMLAttributes } from "react";

type ReturnButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ReturnButton: FC<ReturnButtonProps> = ({ ...props }) => {
  return (
    <ReturnButtonContainer {...props}>
      <IoArrowBackSharp size={32} />
    </ReturnButtonContainer>
  );
};

export default ReturnButton;
