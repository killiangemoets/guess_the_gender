// import HomeButton from "../../home-button/home-button.component";
// import ReturnButton from "../../components/return-button/return-button.component";

import { NavbarContainer, NavbarButtonContainer } from "./navbar.style";
import { IoHomeSharp, IoArrowBackSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <NavbarContainer>
      {/* Return button */}
      <NavbarButtonContainer>
        <IoArrowBackSharp size={32} />
      </NavbarButtonContainer>

      {/* Home Button */}
      <NavbarButtonContainer>
        <IoHomeSharp size={28} />
      </NavbarButtonContainer>
      {/* <ReturnButton />
      <HomeButton /> */}
    </NavbarContainer>
  );
};

export default Navbar;
