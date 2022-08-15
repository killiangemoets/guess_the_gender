import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";

import { HomeContainer, HomeTitle } from "./home.style";

const Home = () => {
  const navigate = useNavigate();
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
