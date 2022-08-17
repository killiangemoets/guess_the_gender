import { IoHomeSharp } from "react-icons/io5";

import { HomeButtonContainer } from "./home-button.style";

import { FC, ButtonHTMLAttributes } from "react";

type HomeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const HomeButton: FC<HomeButtonProps> = ({ ...props }) => {
  return (
    <HomeButtonContainer {...props}>
      <IoHomeSharp size={28} />
    </HomeButtonContainer>
  );
};

export default HomeButton;
