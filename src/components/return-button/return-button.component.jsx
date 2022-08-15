import { IoArrowBackSharp } from "react-icons/io5";

import { ReturnButtonContainer } from "./return-button.style";

const ReturnButton = ({ ...props }) => {
  return (
    <ReturnButtonContainer {...props}>
      <IoArrowBackSharp size={32} />
    </ReturnButtonContainer>
  );
};

export default ReturnButton;
