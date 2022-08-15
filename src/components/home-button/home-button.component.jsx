import { IoHomeSharp } from "react-icons/io5";

import { HomeButtonContainer } from "./home-button.style";

const HomeButton = ({ ...props }) => {
  return (
    <HomeButtonContainer {...props}>
      <IoHomeSharp size={28} />
    </HomeButtonContainer>
  );
};

export default HomeButton;
