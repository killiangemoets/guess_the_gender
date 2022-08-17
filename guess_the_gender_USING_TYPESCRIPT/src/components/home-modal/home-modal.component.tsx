import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  HomeModalBackground,
  HomeModalContainer,
  HomeModalQuestion,
  HomeModalAnswers,
} from "./home-modal.style";

import { useNavigate } from "react-router-dom";
import { FC, MouseEvent } from "react";

type HomeModalProps = {
  hidden: boolean;
  handleCloseModal: () => void;
};

const HomeModal: FC<HomeModalProps> = ({ hidden, handleCloseModal }) => {
  const style = hidden ? { display: "none" } : {};

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleClickBackground = (e: MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) return;
    handleCloseModal();
  };

  return (
    <HomeModalBackground style={style} onClick={handleClickBackground}>
      <HomeModalContainer>
        <HomeModalQuestion>Are you sure you want to go home?</HomeModalQuestion>

        <HomeModalAnswers>
          <Button onClick={handleGoHome}>Yes</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={handleCloseModal}
          >
            No
          </Button>
        </HomeModalAnswers>
      </HomeModalContainer>
    </HomeModalBackground>
  );
};

export default HomeModal;
