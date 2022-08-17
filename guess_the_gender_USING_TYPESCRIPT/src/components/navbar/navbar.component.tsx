import HomeButton from "../home-button/home-button.component";
import ReturnButton from "../return-button/return-button.component";
import HomeModal from "../home-modal/home-modal.component";

import { NavbarContainer } from "./navbar.style";

import { FC, useState } from "react";
import CSS from "csstype";

export type NavbarProps = {
  hiddenReturn?: boolean;
  handleReturn?: () => void;
};

const Navbar: FC<NavbarProps> = ({ hiddenReturn, handleReturn }) => {
  const [hideModal, setHideModal] = useState(true);
  const style: CSS.Properties = hiddenReturn
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
