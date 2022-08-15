// import { Outlet } from "react-router-dom";
// import HomeTitle from "../../components/home-title/home-title.component";
import Button from "../../components/button/button.component";

import { HomeContainer, HomeTitle } from "./home.style";

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Let's start completing the form</HomeTitle>
      <Button>Start</Button>
    </HomeContainer>
  );
};

export default Home;
