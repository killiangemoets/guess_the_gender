import { HeaderContainer, HeaderTitle } from "./header.style";

import Navbar from "../navbar/navbar.component";

const Header = ({ hiddenReturn, handleReturn, children }) => {
  return (
    <HeaderContainer>
      <Navbar hiddenReturn={hiddenReturn} handleReturn={handleReturn} />
      <HeaderTitle>{children}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
