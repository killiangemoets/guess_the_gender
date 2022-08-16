import HomeButton from "../home-button/home-button.component";
import ReturnButton from "../../components/return-button/return-button.component";

import { NavbarContainer } from "./navbar.style";

import HomeModal from "../home-modal/home-modal.component";

import { useState } from "react";

const Navbar = ({ hiddenReturn, handleReturn }) => {
  const [hideModal, setHideModal] = useState(true);
  const style = hiddenReturn
    ? { opacity: 0, pointerEvents: "none", visibility: "hidden" }
    : {};

  const handleHomeModal = () => {
    setHideModal(false);
  };

  const handleCloseModal = () => {
    setHideModal(true);
  };

  return (
    <>
      <NavbarContainer>
        <ReturnButton onClick={handleReturn} style={style} />
        <HomeButton onClick={handleHomeModal} />
      </NavbarContainer>
      <HomeModal hidden={hideModal} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default Navbar;
