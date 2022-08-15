// import HomeButton from "../../home-button/home-button.component";
// import ReturnButton from "../../components/return-button/return-button.component";

import { NavbarContainer, NavbarButtonContainer } from "./navbar.style";
import { IoHomeSharp, IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import HomeModal from "../home-modal/home-modal.component";

import { useState } from "react";

const Navbar = ({ hiddenReturn, handleReturn }) => {
  const [hideModal, setHideModal] = useState(true);
  const style = hiddenReturn
    ? { opacity: 0, pointerEvents: "none", visibility: "hidden" }
    : {};

  // const navigate = useNavigate();

  const handleHomeModal = () => {
    setHideModal(false);
  };

  const handleCloseModal = () => {
    setHideModal(true);
  };

  return (
    <>
      <NavbarContainer>
        {/* Return button */}
        <NavbarButtonContainer onClick={handleReturn} style={style}>
          <IoArrowBackSharp size={32} />
        </NavbarButtonContainer>

        {/* Home Button */}
        <NavbarButtonContainer onClick={handleHomeModal}>
          <IoHomeSharp size={28} />
        </NavbarButtonContainer>
        {/* <ReturnButton />
      <HomeButton /> */}
      </NavbarContainer>
      <HomeModal hidden={hideModal} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default Navbar;
