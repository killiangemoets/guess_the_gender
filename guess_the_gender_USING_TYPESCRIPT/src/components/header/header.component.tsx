import Navbar from "../navbar/navbar.component";
import { NavbarProps } from "../navbar/navbar.component";

import { HeaderContainer, HeaderTitle } from "./header.style";

import { FC } from "react";

type HeaderProps = NavbarProps & {
  children: string;
};

const Header: FC<HeaderProps> = ({ hiddenReturn, handleReturn, children }) => {
  return (
    <HeaderContainer>
      <Navbar hiddenReturn={hiddenReturn} handleReturn={handleReturn} />
      <HeaderTitle>{children}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
