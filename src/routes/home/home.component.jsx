import Button from "../../components/button/button.component";

import { HomeContainer, HomeTitle } from "./home.style";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { clearPersonInfos } from "../../store/person/person.action";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // We clear the infos every time we reach the home page
    dispatch(clearPersonInfos());
  }, []);

  const goToStep1Handler = () => {
    navigate("/step1");
  };

  return (
    <HomeContainer>
      <HomeTitle>Let's start completing the form</HomeTitle>
      <Button onClick={goToStep1Handler}>Start</Button>
    </HomeContainer>
  );
};

export default Home;
